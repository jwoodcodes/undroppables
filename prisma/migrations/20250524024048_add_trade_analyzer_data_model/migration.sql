/*
  Warnings:

  - The primary key for the `tradeAnalyzerData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `PRPScore` to the `tradeAnalyzerData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketValue` to the `tradeAnalyzerData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `myValue` to the `tradeAnalyzerData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `tradeAnalyzerData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectedNextOffseasonDynastyValue` to the `tradeAnalyzerData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team` to the `tradeAnalyzerData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueDiffBetweenMyValueAndMarketValue` to the `tradeAnalyzerData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueDifferenceBetweenCurrentMarketValueAndPNODV` to the `tradeAnalyzerData` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "tradeAnalyzerData" DROP CONSTRAINT "tradeAnalyzerData_pkey",
ADD COLUMN     "PNODVScore" DOUBLE PRECISION,
ADD COLUMN     "PRPScore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "RVSScore" DOUBLE PRECISION,
ADD COLUMN     "marketValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "myValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "projectedNextOffseasonDynastyValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "team" TEXT NOT NULL,
ADD COLUMN     "valueDiffBetweenMyValueAndMarketValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "valueDifferenceBetweenCurrentMarketValueAndPNODV" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tradeAnalyzerData_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tradeAnalyzerData_id_seq";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";
