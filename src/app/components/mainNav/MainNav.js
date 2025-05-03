"use client";
import Image from "next/image";
import styles from "./mainNav.module.css";

export default function MainNav() {
    return (
        <nav className={styles.mainNavWrapper}>
             
            <ul className={styles.navLinksWrapper}>
                <li><Image src="/UNLogoWithRed.webp" alt="logo" width={300} height={50} /></li>
                
                
                <li ><a href="#" className={styles.navLink}>Rankings</a></li>
                <li ><a href="/unscore" className={styles.navLink}>UN Score</a></li>
                <li ><a href="#" className={styles.navLink}>Podcasts</a></li>
                <li ><a href="/toolkit" className={styles.navLink}>Tools</a></li>
                {/* <li ><a href="#" className={styles.navLink}>The Undrafted</a></li> */}
                
                <li ><a href="#" className={styles.navLink}>Partnerships</a></li>
                <li ><a href="#" className={styles.navLink}>Patreon</a></li>

                
            </ul>

            <div className={styles.socialsWrapper}>
                
                <Image
            src="/1691832581twitter-x-icon-png.png"
            width={50}
            height={50}
            alt=""
          ></Image>
          <Image
            src="/instagramLogo.png"
            width={50}
            height={50}
            alt=""
          ></Image>
          <Image
            src="/Bluesky_Logo.svg"
            width={40}
            height={40}
            alt=""
          ></Image>
          <Image
            src="/tiktok-logo.png"
            width={40}
            height={40}
            alt=""
          ></Image>
            </div>
        </nav>
    );
}