"use client";
import Image from "next/image";
import styles from "./mainNav.module.css";

export default function MainNav() {
    return (
        <nav className={styles.mainNavWrapper}>
            <div>
                <a href="/">
                <Image src="/TU-LOGO-WHITE-ON-TRANSPARENT.webp" alt="logo" width={150} height={50} />
            </a>
            </div>
            <ul className={styles.navLinksWrapper}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}