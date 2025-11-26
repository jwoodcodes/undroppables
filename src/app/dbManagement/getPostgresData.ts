export const getPostgresData = async () => {
  try {
    // Use direct REST API to bypass schema cache issues
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    console.log("Fetching from Supabase REST API...");

    const response = await fetch(
      `${supabaseUrl}/rest/v1/tradeAnalyzerData?select=*&order=consensusValue.desc`,
      {
        headers: {
          'apikey': supabaseKey!,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase API error:", response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as unknown as any[];

    console.log("Supabase data sample (first item):", data?.[0]);
    console.log("Total records fetched:", data?.length);
    console.log("Keys in first item:", data?.[0] ? Object.keys(data[0]) : 'No data');
    return data || [];
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    return [];
  }
};
