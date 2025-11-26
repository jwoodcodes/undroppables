import { MongoClient } from "mongodb";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";
import { randomUUID } from "crypto";

// Load environment variables from project root
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const jaxDynoRankings = require("./rankings/jaxDynoRankings");
const travDynoRankings = require("./rankings/travDynoRankings");
const joeDynoRankings = require("./rankings/joeDynoRankings");

const mongoClient = new MongoClient(
  "mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test"
);

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  jaxValue?: number;
  travValue?: number;
  joeValue?: number;
  consensusValue?: number;
  consensusVsMarketValueDiff?: number;
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
    jaxValue?: number;
    travValue?: number;
    joeValue?: number;
    consensusValue?: number;
    consensusVsMarketValueDiff?: number;
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

function sanitizeName(name: string): string {
  return name
    .toLowerCase() // Convert to lowercase
    .replace(/ jr\.?/g, "") // Remove "jr." or "Jr."
    .replace(/ ii\.?/g, "") // Remove "ii" or "II"
    .replace(/ iii\.?/g, "") // Remove "iii" or "III"
    .replace(/\./g, "") // Remove periods
    .replace(/\./g, "") // Remove periods again
    .replace(/-/g, "") // Remove hyphens
    .replace(/'/g, "") // Remove single quotes
    .replace(/'/g, "") // Remove single quotes again (if needed)
    .replace("Cameron", "Cam") // Specific name replacement
    .trim(); // Trim any leading or trailing spaces
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

async function pushDataToPostgreSQL(data: YourDataType[]) {
  try {
    console.log(
      "Attempting to delete existing records from tradeAnalyzerData..."
    );

    // Delete all existing records in the tradeAnalyzerData table
    const { error: deleteError } = await supabase
      .from('tradeAnalyzerData')
      .delete()
      .neq('id', '');

    if (deleteError) {
      throw new Error(`Delete failed: ${deleteError.message}`);
    }

    // Log the result of the deletion
    console.log("Delete operation completed successfully");

    // Map jaxDynoRankings to PlayerRanking interface
    const jaxMappedPlayerRankings: PlayerRanking[] = jaxDynoRankings.map(
      (player: PlayerRanking) => ({
        Name: sanitizeName(player.Name),
        Team: player.Team,
        Position: sanitizeName(player.Position),
        Tiers: player.Tiers,
        overallSFRank: undefined, // Initialize with undefined or set it later
      })
    );

    let jaxCounter = 1;
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
      player.overallSFRank = jaxCounter;
      // console.log(player, counter);
      if (JaxTier1LastPlayerRank === 0 && player.Tiers === "2") {
        JaxTier1LastPlayerRank = jaxCounter - 1;
      }
      if (JaxTier2LastPlayerRank === 0 && player.Tiers === "3") {
        JaxTier2LastPlayerRank = jaxCounter - 1;
      }
      if (JaxTier3LastPlayerRank === 0 && player.Tiers === "4") {
        JaxTier3LastPlayerRank = jaxCounter - 1;
      }
      if (JaxTier4LastPlayerRank === 0 && player.Tiers === "5") {
        JaxTier4LastPlayerRank = jaxCounter - 1;
      }
      if (JaxTier5LastPlayerRank === 0 && player.Tiers === "6") {
        JaxTier5LastPlayerRank = jaxCounter - 1;
      }
      if (JaxTier6LastPlayerRank === 0 && player.Tiers === "7") {
        JaxTier6LastPlayerRank = jaxCounter - 1;
      }
      if (JaxTier7LastPlayerRank === 0 && player.Tiers === "8") {
        JaxTier7LastPlayerRank = jaxCounter - 1;
      }
      if (JaxTier8LastPlayerRank === 0 && player.Tiers === "9") {
        JaxTier8LastPlayerRank = jaxCounter - 1;
      }
      if (JaxTier9LastPlayerRank === 0 && player.Tiers === "10") {
        JaxTier9LastPlayerRank = jaxCounter - 1;
      }

      jaxCounter++;
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

    // console.log(jaxMappedPlayerRankings);

    //
    // map travDynoRankings to PlayerRanking interface
    const travMappedPlayerRankings: PlayerRanking[] = travDynoRankings.map(
      (player: PlayerRanking) => ({
        Name: sanitizeName(player.Name),
        Team: player.Team,
        Position: sanitizeName(player.Position),
        Tiers: player.Tiers,
        overallSFRank: undefined, // Initialize with undefined or set it later
      })
    );

    let travCounter = 1;
    let travTier1LastPlayerRank = 0;
    let travTier2LastPlayerRank = 0;
    let travTier3LastPlayerRank = 0;
    let travTier4LastPlayerRank = 0;
    let travTier5LastPlayerRank = 0;
    let travTier6LastPlayerRank = 0;
    let travTier7LastPlayerRank = 0;
    let travTier8LastPlayerRank = 0;
    let travTier9LastPlayerRank = 0;

    travMappedPlayerRankings.forEach((player) => {
      player.overallSFRank = travCounter;
      // console.log(player, counter);
      if (travTier1LastPlayerRank === 0 && player.Tiers === "2") {
        travTier1LastPlayerRank = travCounter - 1;
      }
      if (travTier2LastPlayerRank === 0 && player.Tiers === "3") {
        travTier2LastPlayerRank = travCounter - 1;
      }
      if (travTier3LastPlayerRank === 0 && player.Tiers === "4") {
        travTier3LastPlayerRank = travCounter - 1;
      }
      if (travTier4LastPlayerRank === 0 && player.Tiers === "5") {
        travTier4LastPlayerRank = travCounter - 1;
      }
      if (travTier5LastPlayerRank === 0 && player.Tiers === "6") {
        travTier5LastPlayerRank = travCounter - 1;
      }
      if (travTier6LastPlayerRank === 0 && player.Tiers === "7") {
        travTier6LastPlayerRank = travCounter - 1;
      }
      if (travTier7LastPlayerRank === 0 && player.Tiers === "8") {
        travTier7LastPlayerRank = travCounter - 1;
      }
      if (travTier8LastPlayerRank === 0 && player.Tiers === "9") {
        travTier8LastPlayerRank = travCounter - 1;
      }
      if (travTier9LastPlayerRank === 0 && player.Tiers === "10") {
        travTier9LastPlayerRank = travCounter - 1;
      }

      travCounter++;
    });

    assignValues(
      travMappedPlayerRankings,
      travTier1LastPlayerRank,
      travTier2LastPlayerRank,
      travTier3LastPlayerRank,
      travTier4LastPlayerRank,
      travTier5LastPlayerRank,
      travTier6LastPlayerRank,
      travTier7LastPlayerRank,
      travTier8LastPlayerRank,
      travTier9LastPlayerRank
    );

    // map joeDynoRankings to PlayerRanking interface

    const joeDynoRankingsMappedPlayerRankings: PlayerRanking[] =
      joeDynoRankings.map((player: PlayerRanking) => ({
        Name: sanitizeName(player.Name),
        Team: player.Team,
        Position: sanitizeName(player.Position),
        Tiers: player.Tiers,
        overallSFRank: undefined, // Initialize with undefined or set it later
      }));

    let joeCounter = 1;
    let joeTier1LastPlayerRank = 0;
    let joeTier2LastPlayerRank = 0;
    let joeTier3LastPlayerRank = 0;
    let joeTier4LastPlayerRank = 0;
    let joeTier5LastPlayerRank = 0;
    let joeTier6LastPlayerRank = 0;
    let joeTier7LastPlayerRank = 0;
    let joeTier8LastPlayerRank = 0;
    let joeTier9LastPlayerRank = 0;

    joeDynoRankingsMappedPlayerRankings.forEach((player) => {
      player.overallSFRank = joeCounter;
      // console.log(player, counter);
      if (joeTier1LastPlayerRank === 0 && player.Tiers === "2") {
        joeTier1LastPlayerRank = joeCounter - 1;
      }
      if (joeTier2LastPlayerRank === 0 && player.Tiers === "3") {
        joeTier2LastPlayerRank = joeCounter - 1;
      }
      if (joeTier3LastPlayerRank === 0 && player.Tiers === "4") {
        joeTier3LastPlayerRank = joeCounter - 1;
      }
      if (joeTier4LastPlayerRank === 0 && player.Tiers === "5") {
        joeTier4LastPlayerRank = joeCounter - 1;
      }
      if (joeTier5LastPlayerRank === 0 && player.Tiers === "6") {
        joeTier5LastPlayerRank = joeCounter - 1;
      }
      if (joeTier6LastPlayerRank === 0 && player.Tiers === "7") {
        joeTier6LastPlayerRank = joeCounter - 1;
      }
      if (joeTier7LastPlayerRank === 0 && player.Tiers === "8") {
        joeTier7LastPlayerRank = joeCounter - 1;
      }
      if (joeTier8LastPlayerRank === 0 && player.Tiers === "9") {
        joeTier8LastPlayerRank = joeCounter - 1;
      }
      if (joeTier9LastPlayerRank === 0 && player.Tiers === "10") {
        joeTier9LastPlayerRank = joeCounter - 1;
      }

      joeCounter++;
    });

    assignValues(
      joeDynoRankingsMappedPlayerRankings,
      joeTier1LastPlayerRank,
      joeTier2LastPlayerRank,
      joeTier3LastPlayerRank,
      joeTier4LastPlayerRank,
      joeTier5LastPlayerRank,
      joeTier6LastPlayerRank,
      joeTier7LastPlayerRank,
      joeTier8LastPlayerRank,
      joeTier9LastPlayerRank
    );

    //
    //

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

        // Sanitize tradeData.name
        const sanitizedTradeDataName = sanitizeName(tradeData.name);

        // Update overallSFRank based on the jaxMappedPlayerRankings
        jaxMappedPlayerRankings.forEach((player) => {
          // console.log(sanitizeName(player.Name).slice(1, -1), sanitizedTradeDataName);
          // if(tradeData.name === 'Patrick Mahomes') {
          //   console.log(sanitizeName(player.Name).slice(1, -1), sanitizedTradeDataName)
          // }
          if (
            sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName
          ) {
            // console.log(player);
            // console.log(tradeData);
            if (player.thierValue) {
              tradeData.jaxValue = Math.round(player.thierValue);
            }
          }
        });

        travMappedPlayerRankings.forEach((player) => {
          if (
            sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName
          ) {
            // console.log(player);
            // console.log(tradeData);
            if (player.thierValue) {
              tradeData.travValue = Math.round(player.thierValue);
            }
          }
        });

        joeDynoRankingsMappedPlayerRankings.forEach((player) => {
          if (
            sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName
          ) {
            // console.log(player);
            // console.log(tradeData);
            if (player.thierValue) {
              tradeData.joeValue = Math.round(player.thierValue);
            }
          }
        });

        // console.log(tradeData);
        if (tradeData.jaxValue && tradeData.travValue && tradeData.joeValue) {
          tradeData.consensusValue = Math.round(
            (tradeData.myValue +
              tradeData.jaxValue +
              tradeData.travValue +
              tradeData.joeValue) /
            4
          );
          tradeData.consensusVsMarketValueDiff = tradeData.consensusValue - tradeData.marketValue;
        } else {
          tradeData.consensusValue = tradeData.myValue;
          tradeData.consensusVsMarketValueDiff = tradeData.consensusValue - tradeData.marketValue;
        }

        if (tradeData.consensusValue !== tradeData.myValue) {
          tradeData.valueDiffBetweenMyValueAndMarketValue =
            tradeData.consensusValue - tradeData.marketValue;
        }

        // console.log(tradeData);

        const { error: insertError } = await supabase
          .from('tradeAnalyzerData')
          .insert({
            id: randomUUID(),
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
            jaxValue: tradeData.jaxValue,
            travValue: tradeData.travValue,
            joeValue: tradeData.joeValue,
            consensusValue: tradeData.consensusValue,
            consensusVsMarketValueDiff: tradeData.consensusVsMarketValueDiff,
          });

        if (insertError) {
          throw new Error(`Insert failed for ${tradeData.name}: ${insertError.message}`);
        }
      }
    }
  } catch (error) {
    console.error("Error while pushing data to PostgreSQL:", error);
  }
}

async function main() {
  console.log("Main function started");
  try {
    console.log('Fetching data from MongoDB...');
    const data = await fetchDataFromMongoDB();
    console.log('Data fetched from MongoDB');

    console.log("Pushing data to Supabase...");
    await pushDataToPostgreSQL(data);
    console.log("Data pushed to Supabase successfully!");
  } catch (error) {
    console.error("Error in main function:", error);
  } finally {
    await mongoClient.close();
  }
}

main()
  .catch((e) => console.error("Error in main promise chain:", e));

// commands to run in terminal to run the script:

// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************

// npx tsc fetchAndPushData.ts
// node fetchAndPushData.js

