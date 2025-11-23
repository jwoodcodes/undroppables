import prisma from "../../lib/prisma";

export const getUNScoreData = async () => {
    try {
        const data = await prisma.uNScorePlayer.findMany();
        // console.log("UNScore data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching UNScore data from PostgreSQL:", error);
        return [];
    }
};
