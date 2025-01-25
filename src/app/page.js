'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Header from "./components/header/Header";
import MainNav from "./components/mainNav/MainNav"
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MainNav />
      <div className={styles.mainSiteTitleWrapper}>
        {/* <div className={styles.mainSiteTitle}>The Undroppables</div> */}
       
        
      </div>
      
      <Footer />
    </main>
  );
}
