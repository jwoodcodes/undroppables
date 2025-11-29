export const getPostgresData = async () => {
  // Use direct REST API to bypass schema cache issues
  // Use server-side env vars for API routes, fallback to public vars for compatibility
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(`Missing Supabase credentials. URL: ${supabaseUrl ? 'Set' : 'Missing'}, Key: ${supabaseKey ? 'Set' : 'Missing'}`);
  }

  console.log("Fetching from Supabase REST API...");

  const response = await fetch(
    `${supabaseUrl}/rest/v1/tradeAnalyzerData?select=*&order=consensusValue.desc`,
    {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Ensure no caching at fetch level
    } as RequestInit
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Supabase API error:", response.status, errorText);
    throw new Error(`Supabase API error: ${response.status} ${errorText}`);
  }

  const data = await response.json() as unknown as any[];

  console.log("Supabase data sample (first item):", data?.[0]);
  console.log("Total records fetched:", data?.length);
  return data || [];
};
