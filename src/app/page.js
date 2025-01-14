'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import MainNav from "./components/mainNav/MainNav"
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainNav />
      <div className={styles.mainSiteTitleWrapper}>
        {/* <div className={styles.mainSiteTitle}>The Undroppables</div> */}
        <Image
          src="/Art-of-Dynasty-Chapter-1-1.webp"
          alt="The Undroppables Logo"
          width={1000}
          height={500}
          className={styles.artOfDynastyImage}
        />
        
      </div>
      
      <Footer />
    </main>
  );
}
