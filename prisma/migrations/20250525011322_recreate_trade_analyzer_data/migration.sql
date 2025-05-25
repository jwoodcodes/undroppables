-- AlterTable
ALTER TABLE "tradeAnalyzerData" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "position" DROP NOT NULL,
ALTER COLUMN "team" DROP NOT NULL,
ALTER COLUMN "marketValue" DROP NOT NULL,
ALTER COLUMN "myValue" DROP NOT NULL,
ALTER COLUMN "valueDiffBetweenMyValueAndMarketValue" DROP NOT NULL,
ALTER COLUMN "PRPScore" DROP NOT NULL,
ALTER COLUMN "projectedNextOffseasonDynastyValue" DROP NOT NULL,
ALTER COLUMN "valueDifferenceBetweenCurrentMarketValueAndPNODV" DROP NOT NULL;
