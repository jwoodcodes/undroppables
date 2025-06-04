"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
// import { PrismaClient } from '../../../src/app/generated/prisma';
var jaxDynoRankings = require("./rankings/jaxDynoRankings");
var travDynoRankings = require("./rankings/travDynoRankings");
var joeDynoRankings = require("./rankings/joeDynoRankings");
// const prisma = new PrismaClient();
var mongoClient = new mongodb_1.MongoClient("mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test");
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
    return __awaiter(this, void 0, void 0, function () {
        var database, collection, tempData, data, tradeDataArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoClient.connect()];
                case 1:
                    _a.sent();
                    database = mongoClient.db("dailydynasties");
                    collection = database.collection("tradeAnalyzerData");
                    return [4 /*yield*/, collection.find({}).toArray()];
                case 2:
                    tempData = _a.sent();
                    data = [];
                    tradeDataArray = [];
                    tempData.forEach(function (item) {
                        // console.log(item.tradeAnalyzerDataObjectsArray);
                        // Create a new YourDataType object for each item
                        tradeDataArray = item.tradeAnalyzerDataObjectsArray.map(function (tradeData) { return ({
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
                        }); });
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
                    return [2 /*return*/, data];
            }
        });
    });
}
function assignValues(rankingsSet, tier1LastPlayerRank, tier2LastPlayerRank, tier3LastPlayerRank, tier4LastPlayerRank, tier5LastPlayerRank, tier6LastPlayerRank, tier7LastPlayerRank, tier8LastPlayerRank, tier9LastPlayerRank) {
    function assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier) {
        // console.log(player, tier1LastPlayerRank);
        // console.log(Math.round(tier1LastPlayerRank / 2));
        var maxMinDiff = tiermax - tiermin;
        var middleValue = tiermin + maxMinDiff / 2;
        var tempMiddleOfTier = Math.round((rankOfLastPlayerInTier - rankOfFirstPlayerInTier) / 2);
        var middleOfTier = tempMiddleOfTier + rankOfFirstPlayerInTier;
        if (player.overallSFRank === middleOfTier) {
            player.thierValue = middleValue;
            // console.log(player, tier1min, maxMinDiff, tier1min + maxMinDiff / 2);
        }
        if (player.overallSFRank && player.overallSFRank !== middleOfTier) {
            var diffBetweenMiddleAndPlayer = Math.abs(middleOfTier - player.overallSFRank);
            var diffAsPercentageOfTotal = diffBetweenMiddleAndPlayer / middleOfTier;
            var valueIncrease = (maxMinDiff / 2) * diffAsPercentageOfTotal;
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
    rankingsSet.forEach(function (player) {
        // console.log(player);
        var tier10LastPlayerRank = rankingsSet.length;
        if (player.Tiers === "1") {
            // console.log(player, tier1LastPlayerRank);
            // console.log(Math.round(tier1LastPlayerRank / 2));
            var tiermax = 10000;
            var tiermin = 8500;
            var maxMinDiff = tiermax - tiermin;
            var middleValue = tiermin + maxMinDiff / 2;
            var middleOfTier = Math.round(tier1LastPlayerRank / 2);
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
                var diffBetweenMiddleAndPlayer = Math.abs(middleOfTier - player.overallSFRank);
                var diffAsPercentageOfTotal = diffBetweenMiddleAndPlayer / middleOfTier;
                var valueIncrease = (maxMinDiff / 2) * diffAsPercentageOfTotal;
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
            var tiermax = 6500;
            var tiermin = 5600;
            var rankOfFirstPlayerInTier = tier1LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier2LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "3") {
            // console.log(player, tier3LastPlayerRank);
            var tiermax = 4500;
            var tiermin = 3650;
            var rankOfFirstPlayerInTier = tier2LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier3LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "4") {
            // console.log(player, tier4LastPlayerRank);
            var tiermax = 3200;
            var tiermin = 2800;
            var rankOfFirstPlayerInTier = tier3LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier4LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "5") {
            // console.log(player, tier5LastPlayerRank);
            var tiermax = 2400;
            var tiermin = 1900;
            var rankOfFirstPlayerInTier = tier4LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier5LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "6") {
            // console.log(player, tier6LastPlayerRank);
            var tiermax = 1700;
            var tiermin = 1400;
            var rankOfFirstPlayerInTier = tier5LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier6LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "7") {
            // console.log(player, tier7LastPlayerRank);
            var tiermax = 1200;
            var tiermin = 900;
            var rankOfFirstPlayerInTier = tier6LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier7LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "8") {
            // console.log(player, tier8LastPlayerRank);
            var tiermax = 800;
            var tiermin = 600;
            var rankOfFirstPlayerInTier = tier7LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier8LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "9") {
            // console.log(player, tier9LastPlayerRank);
            var tiermax = 600;
            var tiermin = 500;
            var rankOfFirstPlayerInTier = tier8LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier9LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
        if (player.Tiers === "10") {
            // console.log(
            //   player,
            //   tier9LastPlayerRank,
            //   tier10LastPlayerRank
            // );
            var tiermax = 500;
            var tiermin = 200;
            var rankOfFirstPlayerInTier = tier9LastPlayerRank + 1;
            var rankOfLastPlayerInTier = tier10LastPlayerRank;
            assignThierValuesBasedOffTiersAndRankings(player, tiermax, tiermin, rankOfFirstPlayerInTier, rankOfLastPlayerInTier);
        }
    });
    return rankingsSet;
}
function pushDataToPostgreSQL(data, prisma) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteResult, jaxMappedPlayerRankings, jaxCounter_1, JaxTier1LastPlayerRank_1, JaxTier2LastPlayerRank_1, JaxTier3LastPlayerRank_1, JaxTier4LastPlayerRank_1, JaxTier5LastPlayerRank_1, JaxTier6LastPlayerRank_1, JaxTier7LastPlayerRank_1, JaxTier8LastPlayerRank_1, JaxTier9LastPlayerRank_1, travMappedPlayerRankings, travCounter_1, travTier1LastPlayerRank_1, travTier2LastPlayerRank_1, travTier3LastPlayerRank_1, travTier4LastPlayerRank_1, travTier5LastPlayerRank_1, travTier6LastPlayerRank_1, travTier7LastPlayerRank_1, travTier8LastPlayerRank_1, travTier9LastPlayerRank_1, joeDynoRankingsMappedPlayerRankings, joeCounter_1, joeTier1LastPlayerRank_1, joeTier2LastPlayerRank_1, joeTier3LastPlayerRank_1, joeTier4LastPlayerRank_1, joeTier5LastPlayerRank_1, joeTier6LastPlayerRank_1, joeTier7LastPlayerRank_1, joeTier8LastPlayerRank_1, joeTier9LastPlayerRank_1, _i, data_1, item, tradeDataArray, _loop_1, _a, tradeDataArray_1, tradeData, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 8, , 9]);
                    console.log("Attempting to delete existing records from tradeAnalyzerData...");
                    return [4 /*yield*/, prisma.tradeAnalyzerData.deleteMany({})];
                case 1:
                    deleteResult = _b.sent();
                    // Log the result of the deletion
                    console.log("Delete operation completed:", deleteResult);
                    jaxMappedPlayerRankings = jaxDynoRankings.map(function (player) { return ({
                        Name: sanitizeName(player.Name),
                        Team: player.Team,
                        Position: sanitizeName(player.Position),
                        Tiers: player.Tiers,
                        overallSFRank: undefined, // Initialize with undefined or set it later
                    }); });
                    jaxCounter_1 = 1;
                    JaxTier1LastPlayerRank_1 = 0;
                    JaxTier2LastPlayerRank_1 = 0;
                    JaxTier3LastPlayerRank_1 = 0;
                    JaxTier4LastPlayerRank_1 = 0;
                    JaxTier5LastPlayerRank_1 = 0;
                    JaxTier6LastPlayerRank_1 = 0;
                    JaxTier7LastPlayerRank_1 = 0;
                    JaxTier8LastPlayerRank_1 = 0;
                    JaxTier9LastPlayerRank_1 = 0;
                    jaxMappedPlayerRankings.forEach(function (player) {
                        player.overallSFRank = jaxCounter_1;
                        // console.log(player, counter);
                        if (JaxTier1LastPlayerRank_1 === 0 && player.Tiers === "2") {
                            JaxTier1LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        if (JaxTier2LastPlayerRank_1 === 0 && player.Tiers === "3") {
                            JaxTier2LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        if (JaxTier3LastPlayerRank_1 === 0 && player.Tiers === "4") {
                            JaxTier3LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        if (JaxTier4LastPlayerRank_1 === 0 && player.Tiers === "5") {
                            JaxTier4LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        if (JaxTier5LastPlayerRank_1 === 0 && player.Tiers === "6") {
                            JaxTier5LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        if (JaxTier6LastPlayerRank_1 === 0 && player.Tiers === "7") {
                            JaxTier6LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        if (JaxTier7LastPlayerRank_1 === 0 && player.Tiers === "8") {
                            JaxTier7LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        if (JaxTier8LastPlayerRank_1 === 0 && player.Tiers === "9") {
                            JaxTier8LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        if (JaxTier9LastPlayerRank_1 === 0 && player.Tiers === "10") {
                            JaxTier9LastPlayerRank_1 = jaxCounter_1 - 1;
                        }
                        jaxCounter_1++;
                    });
                    assignValues(jaxMappedPlayerRankings, JaxTier1LastPlayerRank_1, JaxTier2LastPlayerRank_1, JaxTier3LastPlayerRank_1, JaxTier4LastPlayerRank_1, JaxTier5LastPlayerRank_1, JaxTier6LastPlayerRank_1, JaxTier7LastPlayerRank_1, JaxTier8LastPlayerRank_1, JaxTier9LastPlayerRank_1);
                    travMappedPlayerRankings = travDynoRankings.map(function (player) { return ({
                        Name: sanitizeName(player.Name),
                        Team: player.Team,
                        Position: sanitizeName(player.Position),
                        Tiers: player.Tiers,
                        overallSFRank: undefined, // Initialize with undefined or set it later
                    }); });
                    travCounter_1 = 1;
                    travTier1LastPlayerRank_1 = 0;
                    travTier2LastPlayerRank_1 = 0;
                    travTier3LastPlayerRank_1 = 0;
                    travTier4LastPlayerRank_1 = 0;
                    travTier5LastPlayerRank_1 = 0;
                    travTier6LastPlayerRank_1 = 0;
                    travTier7LastPlayerRank_1 = 0;
                    travTier8LastPlayerRank_1 = 0;
                    travTier9LastPlayerRank_1 = 0;
                    travMappedPlayerRankings.forEach(function (player) {
                        player.overallSFRank = travCounter_1;
                        // console.log(player, counter);
                        if (travTier1LastPlayerRank_1 === 0 && player.Tiers === "2") {
                            travTier1LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        if (travTier2LastPlayerRank_1 === 0 && player.Tiers === "3") {
                            travTier2LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        if (travTier3LastPlayerRank_1 === 0 && player.Tiers === "4") {
                            travTier3LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        if (travTier4LastPlayerRank_1 === 0 && player.Tiers === "5") {
                            travTier4LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        if (travTier5LastPlayerRank_1 === 0 && player.Tiers === "6") {
                            travTier5LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        if (travTier6LastPlayerRank_1 === 0 && player.Tiers === "7") {
                            travTier6LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        if (travTier7LastPlayerRank_1 === 0 && player.Tiers === "8") {
                            travTier7LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        if (travTier8LastPlayerRank_1 === 0 && player.Tiers === "9") {
                            travTier8LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        if (travTier9LastPlayerRank_1 === 0 && player.Tiers === "10") {
                            travTier9LastPlayerRank_1 = travCounter_1 - 1;
                        }
                        travCounter_1++;
                    });
                    assignValues(travMappedPlayerRankings, travTier1LastPlayerRank_1, travTier2LastPlayerRank_1, travTier3LastPlayerRank_1, travTier4LastPlayerRank_1, travTier5LastPlayerRank_1, travTier6LastPlayerRank_1, travTier7LastPlayerRank_1, travTier8LastPlayerRank_1, travTier9LastPlayerRank_1);
                    joeDynoRankingsMappedPlayerRankings = joeDynoRankings.map(function (player) { return ({
                        Name: sanitizeName(player.Name),
                        Team: player.Team,
                        Position: sanitizeName(player.Position),
                        Tiers: player.Tiers,
                        overallSFRank: undefined, // Initialize with undefined or set it later
                    }); });
                    joeCounter_1 = 1;
                    joeTier1LastPlayerRank_1 = 0;
                    joeTier2LastPlayerRank_1 = 0;
                    joeTier3LastPlayerRank_1 = 0;
                    joeTier4LastPlayerRank_1 = 0;
                    joeTier5LastPlayerRank_1 = 0;
                    joeTier6LastPlayerRank_1 = 0;
                    joeTier7LastPlayerRank_1 = 0;
                    joeTier8LastPlayerRank_1 = 0;
                    joeTier9LastPlayerRank_1 = 0;
                    joeDynoRankingsMappedPlayerRankings.forEach(function (player) {
                        player.overallSFRank = joeCounter_1;
                        // console.log(player, counter);
                        if (joeTier1LastPlayerRank_1 === 0 && player.Tiers === "2") {
                            joeTier1LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        if (joeTier2LastPlayerRank_1 === 0 && player.Tiers === "3") {
                            joeTier2LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        if (joeTier3LastPlayerRank_1 === 0 && player.Tiers === "4") {
                            joeTier3LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        if (joeTier4LastPlayerRank_1 === 0 && player.Tiers === "5") {
                            joeTier4LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        if (joeTier5LastPlayerRank_1 === 0 && player.Tiers === "6") {
                            joeTier5LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        if (joeTier6LastPlayerRank_1 === 0 && player.Tiers === "7") {
                            joeTier6LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        if (joeTier7LastPlayerRank_1 === 0 && player.Tiers === "8") {
                            joeTier7LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        if (joeTier8LastPlayerRank_1 === 0 && player.Tiers === "9") {
                            joeTier8LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        if (joeTier9LastPlayerRank_1 === 0 && player.Tiers === "10") {
                            joeTier9LastPlayerRank_1 = joeCounter_1 - 1;
                        }
                        joeCounter_1++;
                    });
                    assignValues(joeDynoRankingsMappedPlayerRankings, joeTier1LastPlayerRank_1, joeTier2LastPlayerRank_1, joeTier3LastPlayerRank_1, joeTier4LastPlayerRank_1, joeTier5LastPlayerRank_1, joeTier6LastPlayerRank_1, joeTier7LastPlayerRank_1, joeTier8LastPlayerRank_1, joeTier9LastPlayerRank_1);
                    _i = 0, data_1 = data;
                    _b.label = 2;
                case 2:
                    if (!(_i < data_1.length)) return [3 /*break*/, 7];
                    item = data_1[_i];
                    tradeDataArray = item.tradeAnalyzerDataObjectsArray;
                    // Sort tradeDataArray by myValue in descending order
                    tradeDataArray.sort(function (a, b) { return b.myValue - a.myValue; });
                    _loop_1 = function (tradeData) {
                        var sanitizedTradeDataName;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    // Ensure that the required fields are populated
                                    if (!tradeData.name) {
                                        console.error("Missing name for trade data:", tradeData);
                                        return [2 /*return*/, "continue"];
                                    }
                                    sanitizedTradeDataName = sanitizeName(tradeData.name);
                                    // Update overallSFRank based on the jaxMappedPlayerRankings
                                    jaxMappedPlayerRankings.forEach(function (player) {
                                        // console.log(sanitizeName(player.Name).slice(1, -1), sanitizedTradeDataName);
                                        // if(tradeData.name === 'Patrick Mahomes') {
                                        //   console.log(sanitizeName(player.Name).slice(1, -1), sanitizedTradeDataName)
                                        // }
                                        if (sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName) {
                                            // console.log(player);
                                            // console.log(tradeData);
                                            tradeData.jaxValue = player.thierValue;
                                        }
                                    });
                                    travMappedPlayerRankings.forEach(function (player) {
                                        if (sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName) {
                                            // console.log(player);
                                            // console.log(tradeData);
                                            tradeData.travValue = player.thierValue;
                                        }
                                    });
                                    joeDynoRankingsMappedPlayerRankings.forEach(function (player) {
                                        if (sanitizeName(player.Name).slice(1, -1) === sanitizedTradeDataName) {
                                            // console.log(player);
                                            // console.log(tradeData);
                                            tradeData.joeValue = player.thierValue;
                                        }
                                    });
                                    // console.log(tradeData);
                                    if (tradeData.jaxValue && tradeData.travValue && tradeData.joeValue) {
                                        tradeData.concensusValue =
                                            (tradeData.myValue +
                                                tradeData.jaxValue +
                                                tradeData.travValue +
                                                tradeData.joeValue) /
                                                4;
                                    }
                                    else {
                                        tradeData.concensusValue = tradeData.myValue;
                                    }
                                    if (tradeData.concensusValue !== tradeData.myValue) {
                                        tradeData.valueDiffBetweenMyValueAndMarketValue =
                                            tradeData.concensusValue - tradeData.marketValue;
                                    }
                                    // console.log(tradeData);
                                    return [4 /*yield*/, prisma.tradeAnalyzerData.create({
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
                                                concensusValue: tradeData.concensusValue,
                                            },
                                        })];
                                case 1:
                                    // console.log(tradeData);
                                    _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _a = 0, tradeDataArray_1 = tradeDataArray;
                    _b.label = 3;
                case 3:
                    if (!(_a < tradeDataArray_1.length)) return [3 /*break*/, 6];
                    tradeData = tradeDataArray_1[_a];
                    return [5 /*yield**/, _loop_1(tradeData)];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    _a++;
                    return [3 /*break*/, 3];
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _b.sent();
                    console.error("Error while pushing data to PostgreSQL:", error_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var pkg, PrismaClient, prisma_1, deleteResult, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Main function started");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("../../../src/app/generated/prisma/index.js"); })];
                case 2:
                    pkg = _a.sent();
                    PrismaClient = pkg.PrismaClient;
                    prisma_1 = new PrismaClient();
                    console.log("Prisma Client created");
                    console.log("Attempting to delete existing records from tradeAnalyzerData...");
                    return [4 /*yield*/, prisma_1.tradeAnalyzerData.deleteMany({})];
                case 3:
                    deleteResult = _a.sent();
                    // Log the result of the deletion
                    console.log("Delete operation completed:", deleteResult);
                    return [4 /*yield*/, fetchDataFromMongoDB()];
                case 4:
                    data = _a.sent();
                    // console.log('Data fetched from MongoDB:', data);
                    console.log("Pushing data to PostgreSQL...");
                    return [4 /*yield*/, pushDataToPostgreSQL(data, prisma_1)];
                case 5:
                    _a.sent();
                    console.log("Data pushed to PostgreSQL successfully!");
                    return [2 /*return*/, prisma_1]; // Return the client so we can disconnect it
                case 6:
                    error_2 = _a.sent();
                    console.error("Error in main function:", error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
var prisma = null;
main()
    .then(function (client) {
    prisma = client;
})
    .catch(function (e) { return console.error("Error in main promise chain:", e); })
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mongoClient.close()];
            case 1:
                _a.sent();
                if (!prisma) return [3 /*break*/, 3];
                return [4 /*yield*/, prisma.$disconnect()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
// commands to run in terminal to run the script:
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// *****  ALWAYS ALWAYS ALWAYS RUN npx tsc fetchAndPushData.ts **BEFORE** node fetchAndPushData.js **************
// npx tsc fetchAndPushData.ts
// node fetchAndPushData.js
