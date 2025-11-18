import { PrismaClient } from "../generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const getPostgresData = async () => {
  try {
    const data = await prisma.tradeAnalyzerData.findMany();
    console.log("Postgres data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from PostgreSQL:", error);
    return [];
  } finally {
    // It's generally not recommended to disconnect after every query in a serverless environment
    // as it can lead to connection pool exhaustion. Prisma manages connections automatically.
    // await prisma.$disconnect();
  }
};




