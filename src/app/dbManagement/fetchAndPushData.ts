import { MongoClient } from 'mongodb';
import { PrismaClient } from '@prisma/client';

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

 
}

async function fetchDataFromMongoDB() {
  await mongoClient.connect();
  const database = mongoClient.db('dailydynasties');
  const collection = database.collection<YourDataType>('tradeAnalyzerData');

  const data = await collection.find({}).toArray();
  return data;
}

async function pushDataToPostgreSQL(data: YourDataType[]) {
  for (const item of data) {
    await prisma.tradeAnalyzerData.create({
      data: {
        id: item.id,
        name: item.name,
        position: item.position,
        team: item.team,
        marketValue: item.marketValue,
        myValue: item.myValue,
        valueDiffBetweenMyValueAndMarketValue: item.valueDiffBetweenMyValueAndMarketValue,
        PRPScore: item.PRPScore,
        projectedNextOffseasonDynastyValue: item.projectedNextOffseasonDynastyValue,
        valueDifferenceBetweenCurrentMarketValueAndPNODV: item.valueDifferenceBetweenCurrentMarketValueAndPNODV,
        PNODVScore: item.PNODVScore,
        RVSScore: item.RVSScore,
      },
    });
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
