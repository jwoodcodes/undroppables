import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.mainLogo}>
            <Image src="/UNLogoWithRed.webp" alt="logo" width={100} height={150} />
            
          

            </a>
        </header>
    );
}