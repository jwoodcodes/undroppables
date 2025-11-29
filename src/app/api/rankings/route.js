import { NextResponse } from "next/server";
import { getPostgresData } from "../../dbManagement/getPostgresData";

// Force dynamic execution to prevent static generation at build time
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  console.log("API /api/rankings GET called");
  try {
    const data = await getPostgresData();
    console.log("Data returned from getPostgresData:", data ? data.length : 0);
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    // Return the actual error message for debugging (be careful in prod, but needed now)
    return NextResponse.json(
      {
        error: "Failed to fetch data",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
