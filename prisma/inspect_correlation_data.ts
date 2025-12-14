
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

async function inspectCorrelation() {
    console.log("Fetching sample players...");

    // Fetch a few players to check their data
    const { data: players, error } = await supabase
        .from('UNScorePlayer')
        .select('name, class, draftRound, draftPick, pprFantasyPointsPerGameAvgSeason1To3')
        .limit(20);

    if (error) {
        console.error(error);
        return;
    }

    console.log("Sample Data check:");
    const x: number[] = [];
    const y: number[] = [];

    players.forEach(p => {
        let overallPick: number | null = null;
        if (p.draftRound && p.draftPick) {
            overallPick = (p.draftRound - 1) * 32 + p.draftPick;
        }

        console.log(`Player: ${p.name}, Round: ${p.draftRound}, Pick: ${p.draftPick} -> Overall: ${overallPick}, AvgPts: ${p.pprFantasyPointsPerGameAvgSeason1To3}`);

        if (overallPick !== null && p.pprFantasyPointsPerGameAvgSeason1To3 !== null) {
            x.push(overallPick);
            y.push(p.pprFantasyPointsPerGameAvgSeason1To3);
        }
    });

    // Calculate correlation manually
    if (x.length > 1) {
        const n = x.length;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
        const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
        const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);

        const numerator = (n * sumXY) - (sumX * sumY);
        const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
        const corr = denominator === 0 ? 0 : numerator / denominator;

        console.log("\nCorrelation for this sample:", corr);
    } else {
        console.log("Not enough data for sample correlation.");
    }
}

inspectCorrelation();
