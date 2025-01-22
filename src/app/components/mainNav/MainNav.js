"use client";
import Image from "next/image";
import styles from "./mainNav.module.css";

export default function MainNav() {
    return (
        <nav className={styles.mainNavWrapper}>
            <div>
                <a href="/" className={styles.mainLogo}>
                <Image src="/TU-LOGO-WHITE-ON-TRANSPARENT.webp" alt="logo" width={250} height={40} />
            </a>
            </div>
            <ul className={styles.navLinksWrapper}>
                
                <li ><a href="#" className={styles.navLink}>Tools</a></li>
                
                <li ><a href="#" className={styles.navLink}>Rankings</a></li>
                <li ><a href="#" className={styles.navLink}>Youtube Shows</a></li>
                <li ><a href="#" className={styles.navLink}>The Undrafted</a></li>
                <li ><a href="#" className={styles.navLink}>Underdog ADP</a></li>
                <li ><a href="#" className={styles.navLink}>partnerships</a></li>

                
            </ul>
        </nav>
    );
}