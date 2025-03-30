'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Header from "./components/header/Header";
import MainNav from "./components/mainNav/MainNav"
import SecondaryNav from "./components/secondaryNav/SecondaryNav";
import Footer from "./components/footer/Footer";



export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <MainNav />
      {/* <SecondaryNav /> */}
      <div className={styles.mainSectionWrapper}>
        {/* <div className={styles.mainSiteTitle}>The Undroppables</div> */}
          {/* <div className={styles.articlesSectionWrapper}>articles</div> */}
      
            {/* <div className={styles.middleSectionWrapper}>main</div>
          <div className={styles.rssSectionWrapper}>rss</div>   */}

          <div className={styles.mainToolTitle}>UN <span className={styles.scoreToolSpan}>Score Data</span></div>
        
      </div>
      
      <Footer />
    </main>
  );
}
