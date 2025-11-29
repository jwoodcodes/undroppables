import { NextResponse } from "next/server";
import { getPostgresData } from "../../dbManagement/getPostgresData";

// Force dynamic execution to prevent static generation at build time
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  console.log("API /api/rankings GET called");
  try {
    const data = await getPostgresData();
    console.log("Data returned from getPostgresData:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
