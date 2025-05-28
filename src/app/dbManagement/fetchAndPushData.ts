import { MongoClient } from 'mongodb';
// import { PrismaClient } from '../../../src/app/generated/prisma';
import jaxDynoRankings from './rankings/jaxDynoRankings';


// const prisma = new PrismaClient();
const mongoClient = new MongoClient('mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test');

interface YourDataType {
  id: string; // Adjust according to your MongoDB data structure
  name: string;
  position: string;
  team: string;
  marketValue: number;
  myValue: number;
  valueDiffBetweenMyValueAndMarketValue: number;
  PRPScore: number;
  projectedNextOffseasonDynastyValue: number;
  valueDifferenceBetweenCurrentMarketValueAndPNODV: number;
  PNODVScore: number;
  RVSScore?: number;
  overallSFRank?: number;
  tradeAnalyzerDataObjectsArray: {
    id: string;
    name: string;
    position: string;
    team: string;
    marketValue: number;
    myValue: number;
    valueDiffBetweenMyValueAndMarketValue: number;
    PRPScore: number;
    projectedNextOffseasonDynastyValue: number;
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number;
    PNODVScore: number;
    RVSScore?: number;
  }[];
}

interface PlayerRanking {
  Name: string; // The name of the player, e.g., "Ty Chandler"
  Team: string; // The team abbreviation, e.g., "MIN"
  Position: string; // The position of the player, e.g., "RB"
  Tiers: string; // The tier of the player, e.g., "10"
  overallSFRank?: number; // Optional property for overall rank
}

async function fetchDataFromMongoDB() {
  await mongoClient.connect();
  const database = mongoClient.db('dailydynasties');
  const collection = database.collection<YourDataType>('tradeAnalyzerData');

  let tempData = await collection.find({}).toArray();
  let data: YourDataType[] = [];

  let tradeDataArray = []

  tempData.forEach(item => {
    // console.log(item.tradeAnalyzerDataObjectsArray);
    
    // Create a new YourDataType object for each item
     tradeDataArray = item.tradeAnalyzerDataObjectsArray.map(tradeData => ({
      id: tradeData.id,
      name: tradeData.name,
      position: tradeData.position,
      team: tradeData.team,
      marketValue: tradeData.marketValue,
      myValue: tradeData.myValue,
      valueDiffBetweenMyValueAndMarketValue: tradeData.valueDiffBetweenMyValueAndMarketValue,
      PRPScore: tradeData.PRPScore,
      projectedNextOffseasonDynastyValue: tradeData.projectedNextOffseasonDynastyValue,
      valueDifferenceBetweenCurrentMarketValueAndPNODV: tradeData.valueDifferenceBetweenCurrentMarketValueAndPNODV,
      PNODVScore: tradeData.PNODVScore,
      RVSScore: tradeData.RVSScore,
    }));

    // Push the entire object including tradeAnalyzerDataObjectsArray
    data.push({
      id: item?.id, // Assuming item has an id
      name: item?.name, // Assuming item has a name
      position: item?.position, // Assuming item has a position
      team: item?.team, // Assuming item has a team
      marketValue: item?.marketValue, // Assuming item has a marketValue
      myValue: item?.myValue, // Assuming item has a myValue
      valueDiffBetweenMyValueAndMarketValue: item?.valueDiffBetweenMyValueAndMarketValue, // Assuming item has this property
      PRPScore: item?.PRPScore, // Assuming item has a PRPScore
      projectedNextOffseasonDynastyValue: item?.projectedNextOffseasonDynastyValue, // Assuming item has this property
      valueDifferenceBetweenCurrentMarketValueAndPNODV: item?.valueDifferenceBetweenCurrentMarketValueAndPNODV, // Assuming item has this property
      PNODVScore: item?.PNODVScore, // Assuming item has this property
      RVSScore: item?.RVSScore, // Assuming item has this property
      tradeAnalyzerDataObjectsArray: tradeDataArray, 
    });
  });
  
  return data;
}

async function pushDataToPostgreSQL(data: YourDataType[], prisma: any) {
  try {
    console.log('Attempting to delete existing records from tradeAnalyzerData...');
    
    // Delete all existing records in the tradeAnalyzerData table
    const deleteResult = await prisma.tradeAnalyzerData.deleteMany({});
    
    // Log the result of the deletion
    console.log('Delete operation completed:', deleteResult);

    // Map jaxDynoRankings to PlayerRanking interface
    const mappedPlayerRankings: PlayerRanking[] = jaxDynoRankings.map(player => ({
      Name: player.Name.replace(/"/g, ''), // Remove quotes if necessary
      Team: player.Team,
      Position: player.Position.replace(/"/g, ''), // Remove quotes if necessary
      Tiers: player.Tiers,
      overallSFRank: undefined // Initialize with undefined or set it later
    }));

    let counter = 1;
    mappedPlayerRankings.forEach(player => {
      
        
        player.overallSFRank = counter;
        // console.log(player, counter);
        counter++;
      
    });

    for (const item of data) {
      // Access the tradeAnalyzerDataObjectsArray from the item
      let tradeDataArray = item.tradeAnalyzerDataObjectsArray;

      // Sort tradeDataArray by myValue in descending order
      tradeDataArray.sort((a, b) => b.myValue - a.myValue);

      // Loop through each object in the tradeAnalyzerDataObjectsArray
      
      for (const tradeData of tradeDataArray) {
        // Ensure that the required fields are populated
        if (!tradeData.name) {
          console.error('Missing name for trade data:', tradeData);
          continue; // Skip this item if name is missing
        }

        // Update overallSFRank based on the mappedPlayerRankings
        mappedPlayerRankings.forEach(player => {
          if (player.Name === tradeData.name) {
            // console.log(player);
            
          }
        });

        await prisma.tradeAnalyzerData.create({
          data: {
            id: tradeData.id, // Ensure this is populated
            name: tradeData.name, // Ensure this is populated
            position: tradeData.position,
            team: tradeData.team,
            marketValue: tradeData.marketValue,
            myValue: tradeData.myValue,
            valueDiffBetweenMyValueAndMarketValue: tradeData.valueDiffBetweenMyValueAndMarketValue,
            PRPScore: tradeData.PRPScore,
            projectedNextOffseasonDynastyValue: tradeData.projectedNextOffseasonDynastyValue,
            valueDifferenceBetweenCurrentMarketValueAndPNODV: tradeData.valueDifferenceBetweenCurrentMarketValueAndPNODV,
            PNODVScore: tradeData.PNODVScore,
            RVSScore: tradeData.RVSScore,
          },
        });
      }
    }
  } catch (error) {
    console.error('Error while pushing data to PostgreSQL:', error);
  }
}

async function main() {
  console.log('Main function started');
  try {
    // Dynamically import PrismaClient
    const pkg = await import('../../../src/app/generated/prisma/index.js');
    const { PrismaClient } = pkg;
    const prisma = new PrismaClient();
    console.log('Prisma Client created');

    console.log('Attempting to delete existing records from tradeAnalyzerData...');
    
    // Delete all existing records in the tradeAnalyzerData table
    const deleteResult = await prisma.tradeAnalyzerData.deleteMany({});
    
    // Log the result of the deletion
    console.log('Delete operation completed:', deleteResult);
    
    // console.log('Fetching data from MongoDB...');
    const data = await fetchDataFromMongoDB();
    // console.log('Data fetched from MongoDB:', data);

    console.log('Pushing data to PostgreSQL...');
    await pushDataToPostgreSQL(data, prisma);
    console.log('Data pushed to PostgreSQL successfully!');

    return prisma; // Return the client so we can disconnect it
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

let prisma: any = null;

main()
  .then((client) => { prisma = client; })
  .catch(e => console.error('Error in main promise chain:', e))
  .finally(async () => {
    await mongoClient.close();
    if (prisma) {
      await prisma.$disconnect();
    }
  });


  // commands to run in terminal to run the script:

  // *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
  // *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
  // *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
  // *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
  // *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************

  // npx tsc fetchAndPushData.ts
  // node fetchAndPushData.js


