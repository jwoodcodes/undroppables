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
type DataType = {
  careerAveragedStats: {
    "1D/RR": number;
    "1D/Snap": number;
    "Adjusted Yds Per Team Play": number;
    "Dominator Rating": number;
    "EPA Per Play": number;
    "EPA Per Team Pass Attempt": number;
    "MTF/REC %": number;
    "Man YPRR": number;
    "PPR Points": number;
    "REC Grade": number;
    "RR": number;
    "Rec": number;
    "Rec TD MS": number;
    "Rec TDs": number;
    "Rec TDs per Game": number;
    "Rec Yds": number;
    "Rec Yds MS": number;
    "Rec Yds Per Team Pass Att": number;
    "Rec Yds per Game": number;
    "Rec per Game": number;
    "Reception MS (Games Played)": number;
    "Rush Att per Game": number;
    "Scrimmage Yds Per Team Pass Attempt": number;
    "Scrimmage Yds Per Team Play": number;
    "TD Per Team Pass Att": number;
    "TGTs/G": number;
    "TPRR": number;
    "Targets": number;
    "Total EPA": number;
    "Weighted Dominator Rating": number;
    "YAC/Rec": number;
    "YPRR": number;
    "Yards Per Rec": number;
    "Zone YPRR": number;
  }
};

export default async function unscore(): Promise<React.ReactElement> {
  // Fetch data at the server level
  const data: DataType = await fetchData();

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

          <div className={styles.mainToolTitle}>UN <span className={styles.scoreToolSpan}>Score Data</span></div>
        
      </div>

      <DataTableWrapper initialData={data} />
      
      <Footer />
    </main>
  );
}



