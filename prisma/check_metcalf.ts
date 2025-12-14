
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

async function checkMetcalf() {
    console.log("Checking Metcalf...");

    // Check UNScorePlayer
    const { data: un, error: e1 } = await supabase
        .from('UNScorePlayer')
        .select('name')
        .ilike('name', '%Metcalf%');
    console.log('UNScorePlayer matches:', un);

    // Check PlayerSeasons
    const { data: ps, error: e2 } = await supabase
        .from('playerSeasons')
        .select('player_name')
        .ilike('player_name', '%Metcalf%')
        .limit(5);
    console.log('PlayerSeasons matches:', ps);
}

checkMetcalf().then(() => process.exit(0));
