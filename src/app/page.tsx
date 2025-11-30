import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Header from "./components/header/Header";
import MainNav from "./components/mainNav/MainNav";

import Footer from "./components/footer/Footer";
import { fetchData } from "./components/unScoreComponents/DataFetcher.js";
import DataTableWrapper from "./components/unScoreComponents/DataTableWrapper";
import { text } from "stream/consumers";

// Define the type for the data fetched
type DataType = {
  // Define the structure of your data here
};

export default async function Home(): Promise<React.ReactElement> {
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

        <Image
          src="/unscoreDataLogo.png"
          alt="UN Score Data Logo"
          width={400}
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
