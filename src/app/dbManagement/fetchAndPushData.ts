import { MongoClient } from 'mongodb';
import { PrismaClient } from '../../../src/app/generated/prisma';


const prisma = new PrismaClient();
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

async function fetchDataFromMongoDB() {
  await mongoClient.connect();
  const database = mongoClient.db('dailydynasties');
  const collection = database.collection<YourDataType>('tradeAnalyzerData');

  let tempData = await collection.find({}).toArray();
  let data: YourDataType[] = [];

  tempData.forEach(item => {
    // console.log(item.tradeAnalyzerDataObjectsArray);
    
    // Create a new YourDataType object for each item
    const tradeDataArray = item.tradeAnalyzerDataObjectsArray.map(tradeData => ({
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

async function pushDataToPostgreSQL(data: YourDataType[]) {
  for (const item of data) {
    // Access the tradeAnalyzerDataObjectsArray from the item
    const tradeDataArray = item.tradeAnalyzerDataObjectsArray;

    // Loop through each object in the tradeAnalyzerDataObjectsArray
    for (const tradeData of tradeDataArray) {
      // Ensure that the required fields are populated
      if (!tradeData.name) {
        console.error('Missing name for trade data:', tradeData);
        continue; // Skip this item if name is missing
      }

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
}

async function main() {
  const data = await fetchDataFromMongoDB();
  await pushDataToPostgreSQL(data);
  console.log('Data pushed to PostgreSQL successfully!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await mongoClient.close();
    await prisma.$disconnect();
  });


  // commands to run in terminal to run the script:

  // npx tsc fetchAndPushData.ts
  // node fetchAndPushData.js


