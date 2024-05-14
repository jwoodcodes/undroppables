import Image from "next/image";
import styles from "@/app/toolkit/toolkit.module.css";
import Link from "next/link";

export default function Toolkit() {
  return (
    <main className={styles.main}>
      <div className={styles.mainSiteTitleWrapper}>
        <div className={styles.pageTitle}>The UN Toolkit</div>
      </div>
      <div className={styles.linkWrapper}>
        <Link
          href={"/toolkit/projectionBuilder"}
          className={styles.projectionsLink}
        >
          Projections Builder
        </Link>
      </div>
    </main>
  );
}
