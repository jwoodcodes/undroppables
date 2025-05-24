import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Header from "./components/header/Header";
import MainNav from "./components/mainNav/MainNav"

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
      {/* <p style={{fontSize: "1rem", color: "var(--color-white)", textAlign: "center", marginTop: "2rem"}}> this is the main page placeholder, will be home page is ever go fully custom</p> */}
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
