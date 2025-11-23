'use server'

export async function fetchData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5081';

    const response = await fetch(`${apiUrl}/api/players/unscore`, {
      cache: 'no-store' // Ensure fresh data on each request
    });

    if (!response.ok) {
      console.error(`Failed to fetch UN Score data: ${response.status}`);
      return [];
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      console.log('No data returned from C# API');
      return [];
    }

    return data;

  } catch (error) {
    console.error('Error fetching data from C# API:', error);
    return [];
  }
}
