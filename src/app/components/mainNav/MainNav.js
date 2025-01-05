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
                <li ><a href="#" className={styles.navLink}>Home</a></li>
                <li ><a href="#" className={styles.navLink}>Articles</a></li>
                
                <li ><a href="#" className={styles.navLink}>Rankings</a></li>
                <li ><a href="#" className={styles.navLink}>Tools</a></li>
                <li ><a href="#" className={styles.navLink}>Shows</a></li>
                <li ><a href="#" className={styles.navLink}>Shop</a></li>

                
            </ul>
        </nav>
    );
}