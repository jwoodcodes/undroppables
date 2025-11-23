import prisma from "../../lib/prisma";

export const getAllPlayerData = async () => {
    try {
        const data = await prisma.allPlayerData.findMany();
        return data;
    } catch (error) {
        console.error("Error fetching AllPlayerData from PostgreSQL:", error);
        return [];
    }
};
