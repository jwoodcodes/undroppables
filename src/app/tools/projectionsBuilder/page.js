'use client';

import Image from "next/image";
import styles from "./projectionsBuilder.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import ConstructProjections from "./components/ConstructProjections";
import BuildTeamProjections from "./components/BuildTeamProjections";

function ProjectionsBuilder() {
  const [dataTest, setDataTest] = useState({ allPlayerData: [] });
  const [sleeperData, setSleeperData] = useState({ JustSleeperNamesTeamsAndPostionsArray: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5081';

        // Fetch all player data
        const allPlayersResponse = await fetch(`${apiUrl}/api/players/all`);
        if (!allPlayersResponse.ok) {
          throw new Error(`Failed to fetch all players: ${allPlayersResponse.status}`);
        }
        const allData = await allPlayersResponse.json();

        // Fetch sleeper data
        const sleeperResponse = await fetch(`${apiUrl}/api/players/sleeper`);
        if (!sleeperResponse.ok) {
          throw new Error(`Failed to fetch sleeper data: ${sleeperResponse.status}`);
        }
        const sleeperPlayers = await sleeperResponse.json();

        // Set data in the same structure as before
        setDataTest({ allPlayerData: allData });
        setSleeperData({ JustSleeperNamesTeamsAndPostionsArray: sleeperPlayers });
        setError(null);
      } catch (err) {
        console.error('Error fetching data from C# API:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.mainSiteTitleWrapper}>
          <div className={styles.pageTitle}>UN Projections Builder</div>
          <div>Loading player data...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.main}>
        <div className={styles.mainSiteTitleWrapper}>
          <div className={styles.pageTitle}>UN Projections Builder</div>
          <div style={{ color: 'red' }}>Error: {error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainSiteTitleWrapper}>
        <div className={styles.pageTitle}>UN Projections Builder</div>

        {/* <ConstructProjections dataTest={dataTest} sleeperData={sleeperData} /> */}

        <BuildTeamProjections dataTest={dataTest} sleeperData={sleeperData} />
      </div>
    </main>
  );
}

const PureProjectionsBuilder = React.memo(ProjectionsBuilder);

export default PureProjectionsBuilder;
