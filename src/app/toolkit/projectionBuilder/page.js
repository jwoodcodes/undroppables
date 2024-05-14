import Image from "next/image";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import Link from "next/link";
import React from "react";
import ConstructProjections from "./components/ConstructProjections";

export default function ProjectionsBuilder() {
  return (
    <main className={styles.main}>
      <div className={styles.mainSiteTitleWrapper}>
        <div className={styles.pageTitle}>UN Projections Builder</div>
        <ConstructProjections />
      </div>
    </main>
  );
}
