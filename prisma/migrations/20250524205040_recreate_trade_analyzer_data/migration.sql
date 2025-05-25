-- CreateTable
CREATE TABLE "tradeAnalyzerData" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "marketValue" DOUBLE PRECISION NOT NULL,
    "myValue" DOUBLE PRECISION NOT NULL,
    "valueDiffBetweenMyValueAndMarketValue" DOUBLE PRECISION NOT NULL,
    "PRPScore" DOUBLE PRECISION NOT NULL,
    "projectedNextOffseasonDynastyValue" DOUBLE PRECISION NOT NULL,
    "valueDifferenceBetweenCurrentMarketValueAndPNODV" DOUBLE PRECISION NOT NULL,
    "PNODVScore" DOUBLE PRECISION,
    "RVSScore" DOUBLE PRECISION,

    CONSTRAINT "tradeAnalyzerData_pkey" PRIMARY KEY ("id")
);
