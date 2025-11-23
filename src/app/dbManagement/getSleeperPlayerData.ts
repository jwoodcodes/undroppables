import prisma from "../../lib/prisma";

export const getSleeperPlayerData = async () => {
    try {
        const data = await prisma.sleeperPlayer.findMany();
        return data;
    } catch (error) {
        console.error("Error fetching SleeperPlayer data from PostgreSQL:", error);
        return [];
    }
};
