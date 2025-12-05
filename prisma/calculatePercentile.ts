import prisma from "../src/lib/prisma";

/**
 * Calculate and update UN Score percentiles for all players.
 * Percentile formula: (rank - 1) / (total - 1) * 100
 * Where rank 1 = highest UN Score (gets 100th percentile)
 */
async function calculatePercentiles() {
    console.log("Fetching all UNScore players...");

    const players = await prisma.uNScorePlayer.findMany({
        select: {
            id: true,
            name: true,
            unScore: true,
        },
    });

    console.log(`Found ${players.length} players`);

    // Filter out players with null/undefined unScore and sort descending
    const playersWithScores = players
        .filter((p) => p.unScore !== null && p.unScore !== undefined)
        .sort((a, b) => (b.unScore ?? 0) - (a.unScore ?? 0));

    const total = playersWithScores.length;
    console.log(`Players with UN Scores: ${total}`);

    if (total <= 1) {
        console.log("Not enough players to calculate percentiles");
        return;
    }

    // Calculate and update percentiles
    for (let i = 0; i < playersWithScores.length; i++) {
        const player = playersWithScores[i];
        const rank = i + 1; // 1-based rank (1 = highest score)

        // Percentile: 100 for rank 1, 0 for last rank
        const percentile = ((total - rank) / (total - 1)) * 100;

        await prisma.uNScorePlayer.update({
            where: { id: player.id },
            data: { unScorePercentile: Math.round(percentile * 10) / 10 }, // Round to 1 decimal
        });

        if ((i + 1) % 50 === 0) {
            console.log(`Updated ${i + 1}/${total} players...`);
        }
    }

    // Set percentile to null for players without UN Score
    const playersWithoutScores = players.filter(
        (p) => p.unScore === null || p.unScore === undefined
    );

    for (const player of playersWithoutScores) {
        await prisma.uNScorePlayer.update({
            where: { id: player.id },
            data: { unScorePercentile: null },
        });
    }

    console.log(`\nDone! Updated percentiles for ${total} players.`);
    console.log(`Set null percentile for ${playersWithoutScores.length} players without UN Scores.`);
}

calculatePercentiles()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
