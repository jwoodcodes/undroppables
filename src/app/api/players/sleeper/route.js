import { NextResponse } from "next/server";
import { getSleeperPlayerData } from "../../../dbManagement/getSleeperPlayerData";

export async function GET() {
    console.log("API /api/players/sleeper GET called");
    try {
        const data = await getSleeperPlayerData();
        console.log("Data returned from getSleeperPlayerData:", data?.length || 0, "records");
        return NextResponse.json(data);
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Failed to fetch sleeper player data" }, { status: 500 });
    }
}
