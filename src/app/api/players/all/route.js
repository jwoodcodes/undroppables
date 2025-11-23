import { NextResponse } from "next/server";
import { getAllPlayerData } from "../../../dbManagement/getAllPlayerData";

export async function GET() {
    console.log("API /api/players/all GET called");
    try {
        const data = await getAllPlayerData();
        console.log("Data returned from getAllPlayerData:", data?.length || 0, "records");
        return NextResponse.json(data);
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Failed to fetch all player data" }, { status: 500 });
    }
}
