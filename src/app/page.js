import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainSiteTitleWrapper}>
        <div className={styles.mainSiteTitle}>The Undroppables</div>
      </div>
      <div className={styles.linkWrapper}>
        <Link href={"/toolkit"} className={styles.mainNavLink}>
          UN Toolkit
        </Link>
      </div>
    </main>
  );
}
