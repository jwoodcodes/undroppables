import React from "react";
import Image from "next/image";
// import styles from "../../page.module.css";
import styles from "./unScoreData.module.css";
import Link from "next/link";

import Header from "../../components/header/Header";
import MainNav from "../../components/mainNav/MainNav"

import Footer from "../../components/footer/Footer";
import { fetchData } from "../../components/unScoreComponents/DataFetcher.js";
import DataTableWrapper from "../../components/unScoreComponents/DataTableWrapper";

// Define the type for the data fetched
type PlayerData = {
  name: string;
  class: string | null;
  unScore: number | null;
  height: number | null;
  weight: number | null;
  draftRound: number | null;
  draftPick: number | null;
  careerSlotPercentage: number | null;
  careerWidePercentage: number | null;
  highestContestedTargetPercent: number | null;
  careerAveragedStats: any; // JsonValue from Prisma
  topModelComps: any; // JsonValue from Prisma
};

type DataType = PlayerData[];

export default async function unscore(): Promise<React.ReactElement> {
  // Fetch data at the server level
  const data = await fetchData() as DataType;

  // console.log(data);

  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <MainNav />

      <div className={styles.mainSectionWrapper}>
        {/* <div className={styles.mainSiteTitle}>The Undroppables</div> */}
        {/* <div className={styles.articlesSectionWrapper}>articles</div> */}

        {/* <div className={styles.middleSectionWrapper}>main</div>
          <div className={styles.rssSectionWrapper}>rss</div>   */}

        {/* <div className={styles.mainToolTitle}>UN <span className={styles.scoreToolSpan}>Score Data</span></div> */}
        <Image
          src="/unscoreDataLogo.png"
          alt="UN Score Data Logo"
          width={800}
          height={100}
          quality={100}
          priority
          className={styles.mainToolTitle}
        />

      </div>

      <DataTableWrapper initialData={data} />

      <Footer />
    </main>
  );
}



