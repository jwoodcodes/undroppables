import prisma from "../../lib/prisma";

export const getPostgresData = async () => {
  try {
    const data = await prisma.tradeAnalyzerData.findMany();
    // console.log("Postgres data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from PostgreSQL:", error);
    return [];
  }
};




