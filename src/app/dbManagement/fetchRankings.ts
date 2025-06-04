// src/app/dbManagement/fetchRankings.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchRankings() {
  // const rankings = await prisma.tradeAnalyzerData.findMany();
  // const rankings = await prisma.$queryRaw`SELECT * FROM tradeAnalyzerData`;
  // return rankings;
}
