
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

console.log("Debug script starting...");

dotenv.config({ path: path.resolve(__dirname, '../.env') });
console.log("Dotenv loaded.");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

console.log("URL exists:", !!supabaseUrl);
console.log("Key exists:", !!supabaseKey);

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase client created.");

async function main() {
    console.log("Fetching 1 row from UNScorePlayer...");
    const { data, error } = await supabase.from('UNScorePlayer').select('id').limit(1);
    if (error) console.error("Error:", error);
    else console.log("Success:", data);
}

main()
    .then(() => console.log("Done."))
    .catch(e => console.error("Fatal:", e));
