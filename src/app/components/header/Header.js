import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.mainLogo}>
            <Image src="/TU-LOGO-WHITE-ON-TRANSPARENT.webp" alt="logo" width={900} height={150} />
            </a>
        </header>
    );
}