'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import MainNav from "./components/mainNav/MainNav"

export default function Home() {
  return (
    <main className={styles.main}>
      <MainNav />
      <div className={styles.mainSiteTitleWrapper}>
        <div className={styles.mainSiteTitle}>The Undroppables</div>
        
      </div>
      
    </main>
  );
}
