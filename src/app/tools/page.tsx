import React from "react";
import Link from "next/link";
import MainNav from "../components/mainNav/MainNav";
export default function tools() {
    return (
        
        <div style={{ backgroundColor: "black", color: "white" }}>
            <MainNav />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <h1>Tools</h1>
            <Link href="/tools/projectionsBuilder">Projections Builder</Link>
            <Link href="/tools/tradeCalculator">Trade Calculator</Link>
            <Link href="/tools/unscore">UNscore</Link>
            </div>
        </div>
    )
}