import styles from "./secondaryNav.module.css";
import Image from "next/image";

export default function SecondaryNav() {
    return (
        <nav className={styles.secondaryNavWrapper}>
            
            <ul className={styles.secondaryNavLinksWrapper}>
                <li className={styles.secondaryNavLink}><a href="#" >
                <Image
            src="/UNscore.webp"
            width={325}
            height={50}
            alt=""
            className={styles.secondaryNavLogo}
          ></Image>
                    </a></li>
                <li className={styles.secondaryNavLink}><a href="#" >
                <Image
            src="/PlayerProfiler-logo.webp"
            width={325}
            height={50}
            alt=""
            className={styles.secondaryNavLogo}
          ></Image>
                    </a></li>
                <li className={styles.secondaryNavLink}><a href="#" >
                <Image
            src="/FastDraft-FullLogo.webp"
            width={325}
            height={50}
            alt=""
            className={styles.secondaryNavLogo}
          ></Image>
                    </a></li>
                <li className={styles.secondaryNavLink}><a href="#" >
                <Image
            src="/underdogWordsLogo.webp"
            width={300}
            height={50}
            alt=""
            className={styles.secondaryNavLogo}
          ></Image>
                    </a></li>
                
            </ul>

        </nav>
    );
}