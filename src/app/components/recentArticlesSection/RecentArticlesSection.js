import styles from "./recentArticlesSection.module.css";

export default function RecentArticlesSection() {
    return (
        <div className={styles.mainWrapper}>
            
                <h1 className={styles.mainTitle}>Recent Articles</h1>
            
            <section className={styles.articlesSection}>
                <div className={styles.articleCard}>placeholder</div>
                <div className={styles.articleCard}>placeholder</div>
                <div className={styles.articleCard}>placeholder</div>
            </section>
        </div>
    )
}