"use client";
import Image from "next/image";
import styles from "./mainNav.module.css";
import Link from "next/link";

export default function MainNav() {
    return (
        <nav className={styles.mainNavWrapper}>
             
            <ul className={styles.navLinksWrapper}>
                <Link href="https://www.theundroppables.com/" >
                <li><Image src="/UNLogoWithRed.webp" alt="logo" width={300} height={50} /></li>
                </Link>
                
                <li ><a href="/rankings" className={styles.navLink}>Rankings</a></li>
                <li ><a href="/tools/unscore" className={styles.navLink}>UN Score</a></li>
                <li ><a href="https://www.theundroppables.com/articles/" className={styles.navLink}>Content</a></li>
                
                <li ><a href="/tools" className={styles.navLink}>Tools</a></li>
                <li ><a href="https://shop.theundroppables.com/" className={styles.navLink}>Shop</a></li>
                <li ><a href="#" className={styles.navLink}>Pods</a></li>
                {/* <li ><a href="#" className={styles.navLink}>Patreon</a></li> */}
                <li ><a href="#" className={styles.navLink}>Partnerships</a></li>
                

                
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
          {/* <Image
            src="/Bluesky_Logo.svg"
            width={40}
            height={40}
            alt=""
          ></Image> */}
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