'use client';

import Image from "next/image";
import styles from "./projectionsBuilder.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MainNav from "../../components/mainNav/MainNav";

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

        // Fetch all player data from Next.js API route
        const allPlayersResponse = await fetch('/api/players/all');
        if (!allPlayersResponse.ok) {
          throw new Error(`Failed to fetch all players: ${allPlayersResponse.status}`);
        }
        const allData = await allPlayersResponse.json();

        // Fetch sleeper data from Next.js API route
        const sleeperResponse = await fetch('/api/players/sleeper');
        if (!sleeperResponse.ok) {
          throw new Error(`Failed to fetch sleeper data: ${sleeperResponse.status}`);
        }
        const sleeperPlayers = await sleeperResponse.json();

        // Set data in the same structure as before
        setDataTest({ allPlayerData: allData });
        setSleeperData({ JustSleeperNamesTeamsAndPostionsArray: sleeperPlayers });
        setError(null);
      } catch (err) {
        console.error('Error fetching data from API:', err);
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
      <MainNav />
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
