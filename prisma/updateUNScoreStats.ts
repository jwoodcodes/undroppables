
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

console.log("STEP 1: Script started.");

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });
console.log("STEP 2: Dotenv loaded.");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}

console.log("STEP 3: Supabase credentials found. Creating client...");
const supabase = createClient(supabaseUrl, supabaseKey);
console.log("STEP 4: Client created.");

// Interfaces
interface PlayerSeason {
    player_name: string;
    season: number | string;
    fantasy_points_ppr_avg: number | null;
}

interface UNScorePlayer {
    id: string;
    name: string;
    class: string | null;
    unScore: number | null;
    draftRound: number | null;
    draftPick: number | null;
}

interface PlayerStats {
    id: string;
    s1: number | null;
    s2: number | null;
    s3: number | null;
    s4: number | null;
    s5: number | null;
    avgS1To3: number | null;
    unScore: number | null;
    overallPick: number | null;
    hasDraftInfo: boolean;
}

// Helper to round to 2 decimals and default null to 0
function formatValue(val: number | null | undefined): number {
    if (val === null || val === undefined) return 0;
    return Math.round(val * 100) / 100;
}

// Helper to calculate simple correlation
function calculateCorrelation(x: number[], y: number[]): number | null {
    if (x.length !== y.length || x.length === 0) return null;

    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
    const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
    const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);

    const numerator = (n * sumXY) - (sumX * sumY);
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));

    if (denominator === 0) return 0;
    return Math.round((numerator / denominator) * 100) / 100;
}

// Helper to normalize names for matching
function normalizeName(name: string | null | undefined): string {
    if (!name) return '';
    return name.toLowerCase()
        .replace(/\./g, '') // Remove dots (D.K. -> dk)
        .replace(/\s+/g, ' ') // Standardize spaces
        .replace(/ (jr|sr|iii|ii|iv)$/, '') // Remove common suffixes
        .trim();
}

console.log("STEP 5: Functions defined. Defining updateStats...");

async function updateStats() {
    console.log("STEP 6: updateStats function started. Fetching UNScorePlayers...");

    const { data: unScorePlayers, error: userError } = await supabase
        .from('UNScorePlayer')
        .select('id, name, class, unScore, draftRound, draftPick');

    if (userError || !unScorePlayers) {
        throw new Error(`Failed to fetch UNScorePlayers: ${userError?.message}`);
    }
    console.log(`STEP 7: Fetched ${unScorePlayers.length} players. Fetching playerSeasons...`);

    // Fetch all PlayerSeasons with pagination
    let playerSeasonsData: any[] = [];
    let page = 0;
    const pageSize = 1000;
    let keepFetching = true;

    while (keepFetching) {
        const { data, error } = await supabase
            .from('playerSeasons')
            .select('player_name, season, fantasy_points_ppr_avg')
            .range(page * pageSize, (page + 1) * pageSize - 1);

        if (error) {
            throw new Error(`Failed to fetch playerSeasons page ${page}: ${error.message}`);
        }

        if (data && data.length > 0) {
            playerSeasonsData = playerSeasonsData.concat(data);
            if (data.length < pageSize) {
                keepFetching = false;
            } else {
                page++;
            }
        } else {
            keepFetching = false;
        }
    }

    console.log(`STEP 8: Fetched ${playerSeasonsData.length} season records. Processing...`);

    // Organize PlayerSeasons by Name -> Season -> Stats
    const seasonsMap = new Map<string, Map<number, number>>();

    playerSeasonsData.forEach((ps: any) => {
        const normName = normalizeName(ps.player_name);
        const season = Number(ps.season);
        const points = ps.fantasy_points_ppr_avg;

        if (normName && !isNaN(season) && points !== null) {
            if (!seasonsMap.has(normName)) {
                seasonsMap.set(normName, new Map());
            }
            seasonsMap.get(normName)!.set(season, points);
        }
    });

    const calculatedPlayers: PlayerStats[] = [];

    // Calculate per-player stats
    for (const player of unScorePlayers) {
        // We need draft info check
        const hasDraftInfo = player.draftRound !== null && player.draftRound !== 0 &&
            player.draftPick !== null && player.draftPick !== 0;

        if (!player.name) continue;

        // If class is missing, we can't find rookie year, so seasons are null
        let rookieYear = player.class ? parseInt(player.class) : NaN;
        if (isNaN(rookieYear)) {
            calculatedPlayers.push({
                id: player.id, s1: null, s2: null, s3: null, s4: null, s5: null, avgS1To3: null,
                unScore: player.unScore, overallPick: null, hasDraftInfo: false
            });
            continue;
        }

        const nameKey = normalizeName(player.name);
        const playerSeasons = seasonsMap.get(nameKey);

        let s1 = null, s2 = null, s3 = null, s4 = null, s5 = null;
        if (playerSeasons) {
            s1 = playerSeasons.get(rookieYear) ?? null;
            s2 = playerSeasons.get(rookieYear + 1) ?? null;
            s3 = playerSeasons.get(rookieYear + 2) ?? null;
            s4 = playerSeasons.get(rookieYear + 3) ?? null;
            s5 = playerSeasons.get(rookieYear + 4) ?? null;
        }

        const first3 = [s1, s2, s3].filter(s => s !== null) as number[];
        let avgS1To3 = null;
        if (first3.length > 0) {
            const sum = first3.reduce((a, b) => a + b, 0);
            avgS1To3 = sum / first3.length;
        }

        let overallPick = null;
        if (hasDraftInfo && player.draftRound && player.draftPick) {
            overallPick = (player.draftRound - 1) * 32 + player.draftPick;
        }

        calculatedPlayers.push({
            id: player.id,
            s1, s2, s3, s4, s5,
            avgS1To3,
            unScore: player.unScore,
            overallPick,
            hasDraftInfo // Keep track if original draft info was valid
        });
    }

    console.log(`STEP 9: Calculated stats for ${calculatedPlayers.length} players. Calculating dataset metrics...`);

    const buckets = {
        over90: [] as number[],
        b80to90: [] as number[],
        b72to80: [] as number[],
        b65to72: [] as number[],
        below62: [] as number[]
    };

    const validForCorrUN = [];
    const validForCorrPick = [];

    for (const p of calculatedPlayers) {
        // General validity for stats:
        // Must have Average S1-3
        // AND that Average must NOT be 0 (as per user request: "0 for fantasy points ... are not used")
        const isValidStats = p.avgS1To3 !== null && !isNaN(p.avgS1To3) && p.avgS1To3 > 0;

        if (isValidStats && p.unScore !== null && !isNaN(p.unScore)) {
            validForCorrUN.push({ x: p.unScore, y: p.avgS1To3! });

            // Buckets can perhaps include 0s? User request was about correlation. 
            // "if a player has ... 0 for fantasy points average are not used for the correltation"
            // I will assume buckets should also exclude invalid players to be safe, or just correlation.
            // Let's stick to correlation strictly as requested, but buckets usually imply valid players too.
            // I will use same filter for buckets for consistency.
            if (p.unScore > 90) buckets.over90.push(p.avgS1To3!);
            else if (p.unScore >= 80) buckets.b80to90.push(p.avgS1To3!);
            else if (p.unScore >= 72) buckets.b72to80.push(p.avgS1To3!);
            else if (p.unScore >= 65) buckets.b65to72.push(p.avgS1To3!);
            else if (p.unScore < 62) buckets.below62.push(p.avgS1To3!);
        }

        // Draft Pick Correlation:
        // Must have valid stats (Avg > 0)
        // Must have valid overallPick
        // Must have had valid draft info (no nulls in round/pick)
        if (isValidStats && p.overallPick !== null && !isNaN(p.overallPick) && p.hasDraftInfo) {
            validForCorrPick.push({ x: p.overallPick, y: p.avgS1To3! });
        }
    }

    const avg = (arr: number[]) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

    const rawStats = {
        avgOver90: avg(buckets.over90),
        avg80to90: avg(buckets.b80to90),
        avg72to80: avg(buckets.b72to80),
        avg65to72: avg(buckets.b65to72),
        avgBelow62: avg(buckets.below62),
        corrUnScore: calculateCorrelation(validForCorrUN.map(i => i.x), validForCorrUN.map(i => i.y)),
        corrDraftPick: calculateCorrelation(validForCorrPick.map(i => i.x), validForCorrPick.map(i => i.y))
    };

    // Debugging correlations for user confidence
    console.log(`Correlations calculated. UN Points: ${validForCorrUN.length}, Pick Points: ${validForCorrPick.length}`);
    console.log(`Raw Draft Pick Corr: ${rawStats.corrDraftPick}`);

    const stats = {
        avgOver90: formatValue(rawStats.avgOver90),
        avg80to90: formatValue(rawStats.avg80to90),
        avg72to80: formatValue(rawStats.avg72to80),
        avg65to72: formatValue(rawStats.avg65to72),
        avgBelow62: formatValue(rawStats.avgBelow62),
        corrUnScore: formatValue(rawStats.corrUnScore),
        corrDraftPick: formatValue(rawStats.corrDraftPick)
    };

    console.log('STEP 10: Dataset Stats calculated:', stats);
    console.log(`STEP 11: Starting DB updates for ${calculatedPlayers.length} players...`);

    let updatedCount = 0;

    for (const p of calculatedPlayers) {
        // Prepare object to ensure clean update
        const updatePayload = {
            pprFantasyPointsPerGameSeason1: formatValue(p.s1),
            pprFantasyPointsPerGameSeason2: formatValue(p.s2),
            pprFantasyPointsPerGameSeason3: formatValue(p.s3),
            pprFantasyPointsPerGameSeason4: formatValue(p.s4),
            pprFantasyPointsPerGameSeason5: formatValue(p.s5),
            pprFantasyPointsPerGameAvgSeason1To3: formatValue(p.avgS1To3),

            datasetWidePprPerGameAvgFirst3SeasonsBucketOver90: stats.avgOver90,
            datasetWidePprPerGameAvgFirst3SeasonsBucket80To90: stats.avg80to90,
            datasetWidePprPerGameAvgFirst3SeasonsBucket72To80: stats.avg72to80,
            datasetWidePprPerGameAvgFirst3SeasonsBucket65To72: stats.avg65to72,
            datasetWidePprPerGameAvgFirst3SeasonsBucketBelow62: stats.avgBelow62,
            datasetWideCorrelationUNScorePprPerGameFirst3Seasons: stats.corrUnScore,
            datasetWideCorrelationDraftPickPprPerGameFirst3Seasons: stats.corrDraftPick
        };

        const { error } = await supabase
            .from('UNScorePlayer')
            .update(updatePayload)
            .eq('id', p.id);

        if (error) {
            console.error(`Error updating player ${p.id}:`, error);
        } else {
            updatedCount++;
        }

        if (updatedCount % 50 === 0) process.stdout.write('.');
    }

    console.log(`\nSTEP 12: Finished. Updated ${updatedCount} records.`);
}

console.log("STEP 13: Calling updateStats...");
updateStats()
    .then(() => {
        console.log("STEP 14: updateStats finished successfully.");
        process.exit(0);
    })
    .catch(e => {
        console.error("STEP 14: Fatal Error:", e);
        process.exit(1);
    });
