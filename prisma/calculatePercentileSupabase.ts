/**
 * Calculate and update UN Score percentiles using Supabase directly.
 * This bypasses Prisma client which needs regeneration.
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function calculatePercentiles() {
    console.log("Fetching all UNScore players...");

    // Fetch all players
    const { data: players, error: fetchError } = await supabase
        .from('UNScorePlayer')
        .select('id, name, unScore')
        .order('unScore', { ascending: false });

    if (fetchError) {
        throw new Error(`Failed to fetch players: ${fetchError.message}`);
    }

    console.log(`Found ${players?.length || 0} players`);

    // Filter out players with null/undefined unScore
    const playersWithScores = (players || []).filter(
        (p) => p.unScore !== null && p.unScore !== undefined
    );

    const total = playersWithScores.length;
    console.log(`Players with UN Scores: ${total}`);

    if (total <= 1) {
        console.log("Not enough players to calculate percentiles");
        return;
    }

    // Calculate and update percentiles
    let updatedCount = 0;
    for (let i = 0; i < playersWithScores.length; i++) {
        const player = playersWithScores[i];
        const rank = i + 1; // 1-based rank (1 = highest score)

        // Percentile: 100 for rank 1, 0 for last rank
        const percentile = Math.round(((total - rank) / (total - 1)) * 1000) / 10; // Round to 1 decimal

        const { error: updateError } = await supabase
            .from('UNScorePlayer')
            .update({ unScorePercentile: percentile })
            .eq('id', player.id);

        if (updateError) {
            console.error(`Failed to update ${player.name}: ${updateError.message}`);
        } else {
            updatedCount++;
            if (updatedCount % 50 === 0) {
                console.log(`Updated ${updatedCount}/${total} players...`);
            }
        }
    }

    // Set percentile to null for players without UN Score
    const playersWithoutScores = (players || []).filter(
        (p) => p.unScore === null || p.unScore === undefined
    );

    for (const player of playersWithoutScores) {
        await supabase
            .from('UNScorePlayer')
            .update({ unScorePercentile: null })
            .eq('id', player.id);
    }

    console.log(`\nDone! Updated percentiles for ${updatedCount} players.`);
    console.log(`Set null percentile for ${playersWithoutScores.length} players without UN Scores.`);
}

calculatePercentiles()
    .then(() => {
        console.log('Script completed successfully');
        process.exit(0);
    })
    .catch((e) => {
        console.error('Error:', e);
        process.exit(1);
    });
