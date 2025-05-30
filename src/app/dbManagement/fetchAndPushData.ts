import { MongoClient } from "mongodb";
// import { PrismaClient } from '../../../src/app/generated/prisma';
const jaxDynoRankings = require("./rankings/jaxDynoRankings");

// const prisma = new PrismaClient();
const mongoClient = new MongoClient(
  "mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test"
);

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
  thierValue?: number;
}

async function fetchDataFromMongoDB() {
  await mongoClient.connect();
  const database = mongoClient.db("dailydynasties");
  const collection = database.collection<YourDataType>("tradeAnalyzerData");

  let tempData = await collection.find({}).toArray();
  let data: YourDataType[] = [];

  let tradeDataArray = [];

  tempData.forEach((item) => {
    // console.log(item.tradeAnalyzerDataObjectsArray);

    // Create a new YourDataType object for each item
    tradeDataArray = item.tradeAnalyzerDataObjectsArray.map((tradeData) => ({
      id: tradeData.id,
      name: tradeData.name,
      position: tradeData.position,
      team: tradeData.team,
      marketValue: tradeData.marketValue,
      myValue: tradeData.myValue,
      valueDiffBetweenMyValueAndMarketValue:
        tradeData.valueDiffBetweenMyValueAndMarketValue,
      PRPScore: tradeData.PRPScore,
      projectedNextOffseasonDynastyValue:
        tradeData.projectedNextOffseasonDynastyValue,
      valueDifferenceBetweenCurrentMarketValueAndPNODV:
        tradeData.valueDifferenceBetweenCurrentMarketValueAndPNODV,
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
      valueDiffBetweenMyValueAndMarketValue:
        item?.valueDiffBetweenMyValueAndMarketValue, // Assuming item has this property
      PRPScore: item?.PRPScore, // Assuming item has a PRPScore
      projectedNextOffseasonDynastyValue:
        item?.projectedNextOffseasonDynastyValue, // Assuming item has this property
      valueDifferenceBetweenCurrentMarketValueAndPNODV:
        item?.valueDifferenceBetweenCurrentMarketValueAndPNODV, // Assuming item has this property
      PNODVScore: item?.PNODVScore, // Assuming item has this property
      RVSScore: item?.RVSScore, // Assuming item has this property
      tradeAnalyzerDataObjectsArray: tradeDataArray,
    });
  });

  return data;
}

function assignValues(
  rankingsSet: PlayerRanking[],
  tier1LastPlayerRank: number,
  tier2LastPlayerRank: number,
  tier3LastPlayerRank: number,
  tier4LastPlayerRank: number,
  tier5LastPlayerRank: number,
  tier6LastPlayerRank: number,
  tier7LastPlayerRank: number,
  tier8LastPlayerRank: number,
  tier9LastPlayerRank: number
) {
  function assignThierValuesBasedOffTiersAndRankings(
    player: PlayerRanking,
    tiermax: number,
    tiermin: number,
    rankOfFirstPlayerInTier: number,
    rankOfLastPlayerInTier: number
  ) {
    // console.log(player, tier1LastPlayerRank);
    // console.log(Math.round(tier1LastPlayerRank / 2));

    let maxMinDiff = tiermax - tiermin;
    let middleValue = tiermin + maxMinDiff / 2;
    let tempMiddleOfTier = Math.round(
      (rankOfLastPlayerInTier - rankOfFirstPlayerInTier) / 2
    );
    let middleOfTier = tempMiddleOfTier + rankOfFirstPlayerInTier;

    if (player.overallSFRank === middleOfTier) {
      player.thierValue = middleValue;
      // console.log(player, tier1min, maxMinDiff, tier1min + maxMinDiff / 2);
    }
    if (player.overallSFRank && player.overallSFRank !== middleOfTier) {
      let diffBetweenMiddleAndPlayer = Math.abs(
        middleOfTier - player.overallSFRank
      );
      let diffAsPercentageOfTotal = diffBetweenMiddleAndPlayer / middleOfTier;
      let valueIncrease = (maxMinDiff / 2) * diffAsPercentageOfTotal;

      if (player.overallSFRank < middleOfTier) {
        player.thierValue = middleValue + valueIncrease;
        if (player.thierValue > tiermax) {
          player.thierValue = tiermax;
        }
      } else {
        player.thierValue = middleValue - valueIncrease;
        // console.log(
        //   player,
        //   diffBetweenMiddleAndPlayer,
        //   diffAsPercentageOfTotal,
        //   valueIncrease
        // );
        if (player.thierValue < tiermin) {
          player.thierValue = tiermin;
        }
      }
      player.thierValue = Math.round(player.thierValue);
      console.log(
        player,
        diffAsPercentageOfTotal,
        diffBetweenMiddleAndPlayer,
        maxMinDiff,
        valueIncrease,
        middleValue
      );
    }
  }

  rankingsSet.forEach((player) => {
    // console.log(player);
    let tier10LastPlayerRank = rankingsSet.length;
    if (player.Tiers === "1") {
      // console.log(player, tier1LastPlayerRank);
      // console.log(Math.round(tier1LastPlayerRank / 2));
      let tiermax = 10000;
      let tiermin = 8500;
      let maxMinDiff = tiermax - tiermin;
      let middleValue = tiermin + maxMinDiff / 2;
      let middleOfTier = Math.round(tier1LastPlayerRank / 2);

      if (player.overallSFRank === 1) {
        player.thierValue = tiermax;
      }
      if (player.overallSFRank === middleOfTier) {
        player.thierValue = middleValue;
        // console.log(player, tier1min, maxMinDiff, tier1min + maxMinDiff / 2);
      }
      if (
        player.overallSFRank !== 1 &&
        player.overallSFRank &&
        player.overallSFRank !== middleOfTier
      ) {
        let diffBetweenMiddleAndPlayer = Math.abs(
          middleOfTier - player.overallSFRank
        );
        let diffAsPercentageOfTotal = diffBetweenMiddleAndPlayer / middleOfTier;
        let valueIncrease = (maxMinDiff / 2) * diffAsPercentageOfTotal;

        if (player.overallSFRank < middleOfTier) {
          player.thierValue = middleValue + valueIncrease;
          if (player.thierValue > tiermax) {
            player.thierValue = tiermax;
          }
        } else {
          player.thierValue = middleValue - valueIncrease;
          // console.log(
          //   player,
          //   diffBetweenMiddleAndPlayer,
          //   diffAsPercentageOfTotal,
          //   valueIncrease
          // );
          if (player.thierValue < tiermin) {
            player.thierValue = tiermin;
          }
        }
        // console.log(
        //   player,
        //   diffAsPercentageOfTotal,
        //   diffBetweenMiddleAndPlayer,
        //   maxMinDiff,
        //   valueIncrease,
        //   middleValue
        // );
      }
    }
    if (player.Tiers === "2") {
      // console.log(player, tier2LastPlayerRank);
      let tiermax = 6500;
      let tiermin = 5600;
      let rankOfFirstPlayerInTier = tier1LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier2LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
    if (player.Tiers === "3") {
      // console.log(player, tier3LastPlayerRank);
      let tiermax = 4500;
      let tiermin = 3650;
      let rankOfFirstPlayerInTier = tier2LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier3LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
    if (player.Tiers === "4") {
      // console.log(player, tier4LastPlayerRank);
      let tiermax = 3200;
      let tiermin = 2800;
      let rankOfFirstPlayerInTier = tier3LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier4LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
    if (player.Tiers === "5") {
      // console.log(player, tier5LastPlayerRank);
      let tiermax = 2400;
      let tiermin = 1900;
      let rankOfFirstPlayerInTier = tier4LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier5LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
    if (player.Tiers === "6") {
      // console.log(player, tier6LastPlayerRank);
      let tiermax = 1700;
      let tiermin = 1400;
      let rankOfFirstPlayerInTier = tier5LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier6LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
    if (player.Tiers === "7") {
      // console.log(player, tier7LastPlayerRank);
      let tiermax = 1200;
      let tiermin = 900;
      let rankOfFirstPlayerInTier = tier6LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier7LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
    if (player.Tiers === "8") {
      // console.log(player, tier8LastPlayerRank);
      let tiermax = 800;
      let tiermin = 600;
      let rankOfFirstPlayerInTier = tier7LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier8LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
    if (player.Tiers === "9") {
      // console.log(player, tier9LastPlayerRank);
      let tiermax = 600;
      let tiermin = 500;
      let rankOfFirstPlayerInTier = tier8LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier9LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
    if (player.Tiers === "10") {
      // console.log(
      //   player,
      //   tier9LastPlayerRank,
      //   tier10LastPlayerRank
      // );
      let tiermax = 500;
      let tiermin = 200;
      let rankOfFirstPlayerInTier = tier9LastPlayerRank + 1;
      let rankOfLastPlayerInTier = tier10LastPlayerRank;
      assignThierValuesBasedOffTiersAndRankings(
        player,
        tiermax,
        tiermin,
        rankOfFirstPlayerInTier,
        rankOfLastPlayerInTier
      );
    }
  });
  return rankingsSet;
}

async function pushDataToPostgreSQL(data: YourDataType[], prisma: any) {
  try {
    console.log(
      "Attempting to delete existing records from tradeAnalyzerData..."
    );

    // Delete all existing records in the tradeAnalyzerData table
    const deleteResult = await prisma.tradeAnalyzerData.deleteMany({});

    // Log the result of the deletion
    console.log("Delete operation completed:", deleteResult);

    // Map jaxDynoRankings to PlayerRanking interface
    const jaxMappedPlayerRankings: PlayerRanking[] = jaxDynoRankings.map(
      (player: PlayerRanking) => ({
        Name: player.Name.replace(/"/g, ""), // Remove quotes if necessary
        Team: player.Team,
        Position: player.Position.replace(/"/g, ""), // Remove quotes if necessary
        Tiers: player.Tiers,
        overallSFRank: undefined, // Initialize with undefined or set it later
      })
    );

    let counter = 1;
    let JaxTier1LastPlayerRank = 0;
    let JaxTier2LastPlayerRank = 0;
    let JaxTier3LastPlayerRank = 0;
    let JaxTier4LastPlayerRank = 0;
    let JaxTier5LastPlayerRank = 0;
    let JaxTier6LastPlayerRank = 0;
    let JaxTier7LastPlayerRank = 0;
    let JaxTier8LastPlayerRank = 0;
    let JaxTier9LastPlayerRank = 0;

    jaxMappedPlayerRankings.forEach((player) => {
      player.overallSFRank = counter;
      // console.log(player, counter);
      if (JaxTier1LastPlayerRank === 0 && player.Tiers === "2") {
        JaxTier1LastPlayerRank = counter - 1;
      }
      if (JaxTier2LastPlayerRank === 0 && player.Tiers === "3") {
        JaxTier2LastPlayerRank = counter - 1;
      }
      if (JaxTier3LastPlayerRank === 0 && player.Tiers === "4") {
        JaxTier3LastPlayerRank = counter - 1;
      }
      if (JaxTier4LastPlayerRank === 0 && player.Tiers === "5") {
        JaxTier4LastPlayerRank = counter - 1;
      }
      if (JaxTier5LastPlayerRank === 0 && player.Tiers === "6") {
        JaxTier5LastPlayerRank = counter - 1;
      }
      if (JaxTier6LastPlayerRank === 0 && player.Tiers === "7") {
        JaxTier6LastPlayerRank = counter - 1;
      }
      if (JaxTier7LastPlayerRank === 0 && player.Tiers === "8") {
        JaxTier7LastPlayerRank = counter - 1;
      }
      if (JaxTier8LastPlayerRank === 0 && player.Tiers === "9") {
        JaxTier8LastPlayerRank = counter - 1;
      }
      if (JaxTier9LastPlayerRank === 0 && player.Tiers === "10") {
        JaxTier9LastPlayerRank = counter - 1;
      }

      counter++;
    });

    assignValues(
      jaxMappedPlayerRankings,
      JaxTier1LastPlayerRank,
      JaxTier2LastPlayerRank,
      JaxTier3LastPlayerRank,
      JaxTier4LastPlayerRank,
      JaxTier5LastPlayerRank,
      JaxTier6LastPlayerRank,
      JaxTier7LastPlayerRank,
      JaxTier8LastPlayerRank,
      JaxTier9LastPlayerRank
    );

    for (const item of data) {
      // Access the tradeAnalyzerDataObjectsArray from the item
      let tradeDataArray = item.tradeAnalyzerDataObjectsArray;

      // Sort tradeDataArray by myValue in descending order
      tradeDataArray.sort((a, b) => b.myValue - a.myValue);

      // Loop through each object in the tradeAnalyzerDataObjectsArray

      for (const tradeData of tradeDataArray) {
        // Ensure that the required fields are populated
        if (!tradeData.name) {
          console.error("Missing name for trade data:", tradeData);
          continue; // Skip this item if name is missing
        }

        // Update overallSFRank based on the jaxMappedPlayerRankings
        jaxMappedPlayerRankings.forEach((player) => {
          if (player.Name === tradeData.name) {
            // console.log(player);
          }
        });

        // await prisma.tradeAnalyzerData.create({
        //   data: {
        //     id: tradeData.id, // Ensure this is populated
        //     name: tradeData.name, // Ensure this is populated
        //     position: tradeData.position,
        //     team: tradeData.team,
        //     marketValue: tradeData.marketValue,
        //     myValue: tradeData.myValue,
        //     valueDiffBetweenMyValueAndMarketValue:
        //       tradeData.valueDiffBetweenMyValueAndMarketValue,
        //     PRPScore: tradeData.PRPScore,
        //     projectedNextOffseasonDynastyValue:
        //       tradeData.projectedNextOffseasonDynastyValue,
        //     valueDifferenceBetweenCurrentMarketValueAndPNODV:
        //       tradeData.valueDifferenceBetweenCurrentMarketValueAndPNODV,
        //     PNODVScore: tradeData.PNODVScore,
        //     RVSScore: tradeData.RVSScore,
        //   },
        // });
      }
    }
  } catch (error) {
    console.error("Error while pushing data to PostgreSQL:", error);
  }
}

async function main() {
  console.log("Main function started");
  try {
    // Dynamically import PrismaClient
    const pkg = await import("../../../src/app/generated/prisma/index.js");
    const { PrismaClient } = pkg;
    const prisma = new PrismaClient();
    console.log("Prisma Client created");

    console.log(
      "Attempting to delete existing records from tradeAnalyzerData..."
    );

    // Delete all existing records in the tradeAnalyzerData table
    const deleteResult = await prisma.tradeAnalyzerData.deleteMany({});

    // Log the result of the deletion
    console.log("Delete operation completed:", deleteResult);

    // console.log('Fetching data from MongoDB...');
    const data = await fetchDataFromMongoDB();
    // console.log('Data fetched from MongoDB:', data);

    console.log("Pushing data to PostgreSQL...");
    await pushDataToPostgreSQL(data, prisma);
    console.log("Data pushed to PostgreSQL successfully!");

    return prisma; // Return the client so we can disconnect it
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

let prisma: any = null;

main()
  .then((client) => {
    prisma = client;
  })
  .catch((e) => console.error("Error in main promise chain:", e))
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
