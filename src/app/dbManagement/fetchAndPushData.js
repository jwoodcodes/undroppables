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
// const prisma = new PrismaClient();
var mongoClient = new mongodb_1.MongoClient('mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test');
function fetchDataFromMongoDB() {
    return __awaiter(this, void 0, void 0, function () {
        var database, collection, tempData, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoClient.connect()];
                case 1:
                    _a.sent();
                    database = mongoClient.db('dailydynasties');
                    collection = database.collection('tradeAnalyzerData');
                    return [4 /*yield*/, collection.find({}).toArray()];
                case 2:
                    tempData = _a.sent();
                    data = [];
                    tempData.forEach(function (item) {
                        // console.log(item.tradeAnalyzerDataObjectsArray);
                        // Create a new YourDataType object for each item
                        var tradeDataArray = item.tradeAnalyzerDataObjectsArray.map(function (tradeData) { return ({
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
function pushDataToPostgreSQL(data, prisma) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, data_1, item, tradeDataArray, _a, tradeDataArray_1, tradeData;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, data_1 = data;
                    _b.label = 1;
                case 1:
                    if (!(_i < data_1.length)) return [3 /*break*/, 6];
                    item = data_1[_i];
                    tradeDataArray = item.tradeAnalyzerDataObjectsArray;
                    _a = 0, tradeDataArray_1 = tradeDataArray;
                    _b.label = 2;
                case 2:
                    if (!(_a < tradeDataArray_1.length)) return [3 /*break*/, 5];
                    tradeData = tradeDataArray_1[_a];
                    // Ensure that the required fields are populated
                    if (!tradeData.name) {
                        console.error('Missing name for trade data:', tradeData);
                        return [3 /*break*/, 4]; // Skip this item if name is missing
                    }
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
                            },
                        })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    _a++;
                    return [3 /*break*/, 2];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var pkg, PrismaClient, prisma, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('../../../src/app/generated/prisma/index.js'); })];
                case 1:
                    pkg = _a.sent();
                    PrismaClient = pkg.PrismaClient;
                    prisma = new PrismaClient();
                    return [4 /*yield*/, fetchDataFromMongoDB()];
                case 2:
                    data = _a.sent();
                    return [4 /*yield*/, pushDataToPostgreSQL(data, prisma)];
                case 3:
                    _a.sent();
                    console.log('Data pushed to PostgreSQL successfully!');
                    return [2 /*return*/, prisma]; // Return the client so we can disconnect it
            }
        });
    });
}
var prisma = null;
main()
    .then(function (client) { prisma = client; })
    .catch(function (e) { return console.error(e); })
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
// npx tsc fetchAndPushData.ts
// node fetchAndPushData.js
