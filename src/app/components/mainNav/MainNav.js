"use client";
import Image from "next/image";
import styles from "./mainNav.module.css";

export default function MainNav() {
    return (
        <nav className={styles.mainNavWrapper}>
            
            <ul className={styles.navLinksWrapper}>
                
                <li ><a href="#" className={styles.navLink}>Podcasts</a></li>
                
                <li ><a href="#" className={styles.navLink}>Rankings</a></li>
                
                <li ><a href="#" className={styles.navLink}>The Undrafted</a></li>
                <li ><a href="#" className={styles.navLink}>ADP</a></li>
                <li ><a href="#" className={styles.navLink}>Tools</a></li>
                <li ><a href="#" className={styles.navLink}>Partnerships</a></li>
                <li ><a href="#" className={styles.navLink}>Patreon</a></li>

                
            </ul>

            <div className={styles.socialsWrapper}>
                Socials: 
                <Image
            src="/1691832581twitter-x-icon-png.png"
            width={60}
            height={60}
            alt=""
          ></Image>
            </div>
        </nav>
    );
}