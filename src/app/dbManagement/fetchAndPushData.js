"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// import { PrismaClient } from '../../../src/app/generated/prisma';
const jaxDynoRankings = require("./rankings/jaxDynoRankings");
const travDynoRankings = require("./rankings/travDynoRankings");
const joeDynoRankings = require("./rankings/joeDynoRankings");
// const prisma = new PrismaClient();
const mongoClient = new mongodb_1.MongoClient("mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test");
function sanitizeName(name) {
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
function fetchDataFromMongoDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoClient.connect();
        const database = mongoClient.db("dailydynasties");
        const collection = database.collection("tradeAnalyzerData");
        let tempData = yield collection.find({}).toArray();
        let data = [];
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
                valueDiffBetweenMyValueAndMarketValue: tradeData.valueDiffBetweenMyValueAndMarketValue,
                PRPScore: tradeData.PRPScore,
                projectedNextOffseasonDynastyValue: tradeData.projectedNextOffseasonDynastyValue,
                valueDifferenceBetweenCurrentMarketValueAndPNODV: tradeData.valueDifferenceBetweenCurrentMarketValueAndPNODV,
                PNODVScore: tradeData.PNODVScore,
                RVSScore: tradeData.RVSScore,
            }));
            // Push the entire object including tradeAnalyzerDataObjectsArray
            data.push({
                id: item === null || item === void 0 ? void 0 : item.id, // Assuming item has an id
                name: item === null || item === void 0 ? void 0 : item.name, // Assuming item has a name
                position: item === null || item === void 0 ? void 0 : item.position, // Assuming item has a position
                team: item === null || item === void 0 ? void 0 : item.team, // Assuming item has a team
                marketValue: item === null || item === void 0 ? void 0 : item.marketValue, // Assuming item has a marketValue
                myValue: item === null || item === void 0 ? void 0 : item.myValue, // Assuming item has a myValue
                valueDiffBetweenMyValueAndMarketValue: item === null || item === void 0 ? void 0 : item.valueDiffBetweenMyValueAndMarketValue, // Assuming item has this property
                PRPScore: item === null || item === void 0 ? void 0 : item.PRPScore, // Assuming item has a PRPScore
                projectedNextOffseasonDynastyValue: item === null || item === void 0 ? void 0 : item.projectedNextOffseasonDynastyValue, // Assuming item has this property
                valueDifferenceBetweenCurrentMarketValueAndPNODV: item === null || item === void 0 ? void 0 : item.valueDifferenceBetweenCurrentMarketValueAndPNODV, // Assuming item has this property
                PNODVScore: item === null || item === void 0 ? void 0 : item.PNODVScore, // Assuming item has this property
                RVSScore: item === null || item === void 0 ? void 0 : item.RVSScore, // Assuming item has this property
                tradeAnalyzerDataObjectsArray: tradeDataArray,
            });
        });
        return data;
    });
}
function assignValues(rankingsSet, tier1LastPlayerRank, tier2LastPlayerRank, tier3LastPlayerRank, tier4LastPlayerRank, tier5LastPlayerRank, tier6LastPlayerRank, tier7LastPlayerRank, tier8LastPlayerRank, tier9LastPlayerRank) {
    function assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier) {
        // console.log(player, tier1LastPlayerRank);
        // console.log(Math.round(tier1LastPlayerRank / 2));
        let maxMinDiff = tiermax - tiermin;
        let middleValue = tiermin + maxMinDiff / 2;
        let tempMiddleOfTier = Math.round((rankOfLastPlayerInTier - rankOfFirstPlayerInTier) / 2);
        let middleOfTier = tempMiddleOfTier + rankOfFirstPlayerInTier;
        if (player.overallSFRank === middleOfTier) {
            player.thierValue = middleValue;
            // console.log(player, tier1min, maxMinDiff, tier1min + maxMinDiff / 2);
        }
        if (player.overallSFRank && player.overallSFRank !== middleOfTier) {
            let diffBetweenMiddleAndPlayer = Math.abs(middleOfTier - player.overallSFRank);
            let diffAsPercentageOfTotal = diffBetweenMiddleAndPlayer / middleOfTier;
            let valueIncrease = (maxMinDiff / 2) * diffAsPercentageOfTotal;
            if (player.overallSFRank < middleOfTier) {
                player.thierValue = middleValue + valueIncrease;
                if (player.thierValue > tiermax) {
                    player.thierValue = tiermax;
                }
            }
            else {
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
            if (player.overallSFRank !== 1 &&
                player.overallSFRank &&
                player.overallSFRank !== middleOfTier) {
                let diffBetweenMiddleAndPlayer = Math.abs(middleOfTier - player.overallSFRank);
                let diffAsPercentageOfTotal = diffBetweenMiddleAndPlayer / middleOfTier;
                let valueIncrease = (maxMinDiff / 2) * diffAsPercentageOfTotal;
                if (player.overallSFRank < middleOfTier) {
                    player.thierValue = middleValue + valueIncrease;
                    if (player.thierValue > tiermax) {
                        player.thierValue = tiermax;
                    }
                }
                else {
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
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "3") {
            // console.log(player, tier3LastPlayerRank);
            let tiermax = 4500;
            let tiermin = 3650;
            let rankOfFirstPlayerInTier = tier2LastPlayerRank + 1;
            let rankOfLastPlayerInTier = tier3LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "4") {
            // console.log(player, tier4LastPlayerRank);
            let tiermax = 3200;
            let tiermin = 2800;
            let rankOfFirstPlayerInTier = tier3LastPlayerRank + 1;
            let rankOfLastPlayerInTier = tier4LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "5") {
            // console.log(player, tier5LastPlayerRank);
            let tiermax = 2400;
            let tiermin = 1900;
            let rankOfFirstPlayerInTier = tier4LastPlayerRank + 1;
            let rankOfLastPlayerInTier = tier5LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "6") {
            // console.log(player, tier6LastPlayerRank);
            let tiermax = 1700;
            let tiermin = 1400;
            let rankOfFirstPlayerInTier = tier5LastPlayerRank + 1;
            let rankOfLastPlayerInTier = tier6LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "7") {
            // console.log(player, tier7LastPlayerRank);
            let tiermax = 1200;
            let tiermin = 900;
            let rankOfFirstPlayerInTier = tier6LastPlayerRank + 1;
            let rankOfLastPlayerInTier = tier7LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "8") {
            // console.log(player, tier8LastPlayerRank);
            let tiermax = 800;
            let tiermin = 600;
            let rankOfFirstPlayerInTier = tier7LastPlayerRank + 1;
            let rankOfLastPlayerInTier = tier8LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "9") {
            // console.log(player, tier9LastPlayerRank);
            let tiermax = 600;
            let tiermin = 500;
            let rankOfFirstPlayerInTier = tier8LastPlayerRank + 1;
            let rankOfLastPlayerInTier = tier9LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
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
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
    });
    return rankingsSet;
}
function pushDataToPostgreSQL(data, prisma) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Attempting to delete existing records from tradeAnalyzerData...");
            // Delete all existing records in the tradeAnalyzerData table
            const deleteResult = yield prisma.tradeAnalyzerData.deleteMany({});
            // Log the result of the deletion
            console.log("Delete operation completed:", deleteResult);
            // Map jaxDynoRankings to PlayerRanking interface
            const jaxMappedPlayerRankings = jaxDynoRankings.map((player) => ({
                Name: sanitizeName(player.Name),
                Team: player.Team,
                Position: sanitizeName(player.Position),
                Tiers: player.Tiers,
                overallSFRank: undefined, // Initialize with undefined or set it later
            }));
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
            assignValues(jaxMappedPlayerRankings, JaxTier1LastPlayerRank, JaxTier2LastPlayerRank, JaxTier3LastPlayerRank, JaxTier4LastPlayerRank, JaxTier5LastPlayerRank, JaxTier6LastPlayerRank, JaxTier7LastPlayerRank, JaxTier8LastPlayerRank, JaxTier9LastPlayerRank);
            // console.log(jaxMappedPlayerRankings);
            //
            // map travDynoRankings to PlayerRanking interface
            const travMappedPlayerRankings = travDynoRankings.map((player) => ({
                Name: sanitizeName(player.Name),
                Team: player.Team,
                Position: sanitizeName(player.Position),
                Tiers: player.Tiers,
                overallSFRank: undefined, // Initialize with undefined or set it later
            }));
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
            assignValues(travMappedPlayerRankings, travTier1LastPlayerRank, travTier2LastPlayerRank, travTier3LastPlayerRank, travTier4LastPlayerRank, travTier5LastPlayerRank, travTier6LastPlayerRank, travTier7LastPlayerRank, travTier8LastPlayerRank, travTier9LastPlayerRank);
            // map joeDynoRankings to PlayerRanking interface
            const joeDynoRankingsMappedPlayerRankings = joeDynoRankings.map((player) => ({
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
            assignValues(joeDynoRankingsMappedPlayerRankings, joeTier1LastPlayerRank, joeTier2LastPlayerRank, joeTier3LastPlayerRank, joeTier4LastPlayerRank, joeTier5LastPlayerRank, joeTier6LastPlayerRank, joeTier7LastPlayerRank, joeTier8LastPlayerRank, joeTier9LastPlayerRank);
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
                        if (sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName) {
                            // console.log(player);
                            // console.log(tradeData);
                            if (player.thierValue) {
                                tradeData.jaxValue = Math.round(player.thierValue);
                            }
                        }
                    });
                    travMappedPlayerRankings.forEach((player) => {
                        if (sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName) {
                            // console.log(player);
                            // console.log(tradeData);
                            if (player.thierValue) {
                                tradeData.travValue = Math.round(player.thierValue);
                            }
                        }
                    });
                    joeDynoRankingsMappedPlayerRankings.forEach((player) => {
                        if (sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName) {
                            // console.log(player);
                            // console.log(tradeData);
                            if (player.thierValue) {
                                tradeData.joeValue = Math.round(player.thierValue);
                            }
                        }
                    });
                    // console.log(tradeData);
                    if (tradeData.jaxValue && tradeData.travValue && tradeData.joeValue) {
                        tradeData.consensusValue = Math.round((tradeData.myValue +
                            tradeData.jaxValue +
                            tradeData.travValue +
                            tradeData.joeValue) /
                            4);
                        tradeData.consensusVsMarketValueDiff = tradeData.consensusValue - tradeData.marketValue;
                    }
                    else {
                        tradeData.consensusValue = tradeData.myValue;
                        tradeData.consensusVsMarketValueDiff = tradeData.consensusValue - tradeData.marketValue;
                    }
                    if (tradeData.consensusValue !== tradeData.myValue) {
                        tradeData.valueDiffBetweenMyValueAndMarketValue =
                            tradeData.consensusValue - tradeData.marketValue;
                    }
                    // console.log(tradeData);
                    yield prisma.tradeAnalyzerData.create({
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
                            // overallSFRank: tradeData.overallSFRank,
                            jaxValue: tradeData.jaxValue,
                            travValue: tradeData.travValue,
                            joeValue: tradeData.joeValue,
                            consensusValue: tradeData.consensusValue,
                            consensusVsMarketValueDiff: tradeData.consensusVsMarketValueDiff,
                        },
                    });
                }
            }
        }
        catch (error) {
            console.error("Error while pushing data to PostgreSQL:", error);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Main function started");
        try {
            // Dynamically import PrismaClient
            const pkg = yield Promise.resolve().then(() => __importStar(require("../../../src/app/generated/prisma/index.js")));
            const { PrismaClient } = pkg;
            const prisma = new PrismaClient();
            console.log("Prisma Client created");
            console.log("Attempting to delete existing records from tradeAnalyzerData...");
            // Delete all existing records in the tradeAnalyzerData table
            const deleteResult = yield prisma.tradeAnalyzerData.deleteMany({});
            // Log the result of the deletion
            console.log("Delete operation completed:", deleteResult);
            // console.log('Fetching data from MongoDB...');
            const data = yield fetchDataFromMongoDB();
            // console.log('Data fetched from MongoDB:', data);
            console.log("Pushing data to PostgreSQL...");
            yield pushDataToPostgreSQL(data, prisma);
            console.log("Data pushed to PostgreSQL successfully!");
            return prisma; // Return the client so we can disconnect it
        }
        catch (error) {
            console.error("Error in main function:", error);
        }
    });
}
let prisma = null;
main()
    .then((client) => {
    prisma = client;
})
    .catch((e) => console.error("Error in main promise chain:", e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoClient.close();
    if (prisma) {
        yield prisma.$disconnect();
    }
}));
// commands to run in terminal to run the script:
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// npx tsc fetchAndPushData.ts
// node fetchAndPushData.js
