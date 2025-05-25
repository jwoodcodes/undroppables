/*
  Warnings:

  - The `projectedNextOffseasonDynastyValue` column on the `tradeAnalyzerData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "tradeAnalyzerData" DROP COLUMN "projectedNextOffseasonDynastyValue",
ADD COLUMN     "projectedNextOffseasonDynastyValue" JSONB;
