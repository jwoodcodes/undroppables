import Image from "next/image";
import styles from "./projectionsBuilder.module.css";
import Link from "next/link";
import React from "react";
import prisma from "../../../lib/prisma";

import ConstructProjections from "./components/ConstructProjections";
import BuildTeamProjections from "./components/BuildTeamProjections";

async function ProjectionsBuilder() {
  async function fetchPlayerDataFromPostgres() {
    try {
      const allData = await prisma.allPlayerData.findMany();
      // The original code expected a single document with an 'allPlayerData' property
      // But our migration flattened it. However, looking at the original code:
      // const myDoc = await col.findOne();
      // return myDoc;
      // And then: let tempDataTest = dataTest.allPlayerData;

      // So we need to return an object that has an allPlayerData property which is the array of players.
      return { allPlayerData: allData };
    } catch (err) {
      console.log(err.stack);
      return { allPlayerData: [] };
    }
  }

  let dataTest = await fetchPlayerDataFromPostgres();
  // console.log(dataTest);
  // React.useEffect(() => {

  dataTest = JSON.parse(JSON.stringify(dataTest));

  // }, []);

  //

  async function fetchSleeperDataFromPostgres() {
    try {
      const sleeperPlayers = await prisma.sleeperPlayer.findMany();

      // Original code:
      // const mySleperDoc = await col.findOne();
      // return mySleperDoc;
      // And then: const sleeperDataArray = sleeperData.JustSleeperNamesTeamsAndPostionsArray;

      return { JustSleeperNamesTeamsAndPostionsArray: sleeperPlayers };
    } catch (err) {
      console.log(err.stack);
      return { JustSleeperNamesTeamsAndPostionsArray: [] };
    }
  }

  let sleeperData = await fetchSleeperDataFromPostgres();
  // console.log(dataTest);
  //   console.log(sleeperData);
  // React.useEffect(() => {

  sleeperData = JSON.parse(JSON.stringify(sleeperData));

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
