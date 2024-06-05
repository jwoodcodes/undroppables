import Image from "next/image";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import Link from "next/link";
import React from "react";
import clientPromise from "@/lib/mongodb";

import ConstructProjections from "./components/ConstructProjections";
import { MongoClient } from "mongodb";

export default async function ProjectionsBuilder() {
  async function fetchPlayerDataFromMongodb() {
    const url =
      "mongodb+srv://FFCoder:Hesstrucksarethebest!@undroppables.unq112p.mongodb.net/undroppables";
    const client = new MongoClient(url);

    // The database to use
    const dbName = "projectionsBuilder";
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);

      // Use the collection "fantasycalcData"
      const col = db.collection("allPlayerData");

      // Construct a document

      // Insert a single document, wait for promise so we can read it back
      // const p = await col.insertOne(allFantasyCalcData);
      // Find one document
      const myDoc = await col.findOne();

      // console.log(myDoc);
      // playerData = myDoc;

      return myDoc;
      // Print to the console

      ////////////////////////////////////
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }

  let dataTest = await fetchPlayerDataFromMongodb();
  // console.log(dataTest);
  // React.useEffect(() => {
  dataTest = JSON.parse(JSON.stringify(dataTest));
  // }, []);

  return (
    <main className={styles.main}>
      <div className={styles.mainSiteTitleWrapper}>
        <div className={styles.pageTitle}>UN Projections Builder</div>

        <ConstructProjections dataTest={dataTest} />
      </div>
    </main>
  );
}
