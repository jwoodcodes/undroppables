
// import styles from "./recentArticlesSection.module.css";
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// export default function RecentArticlesSection() {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         const fetchArticles = async () => {
//             try {
//                 const response = await fetch('/api/getArticles');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log(data);
//                 setArticles(data);
//             } catch (error) {
//                 console.error('Error fetching articles:', error);
//             }
//         };
//         fetchArticles();
//     }, []);

//     return (
//         <div className={styles.mainWrapper}>
//             <h1 className={styles.mainTitle}>Recent Articles</h1>
//             <section className={styles.articlesSection}>
//                 {articles.map(article => (
//                     <div key={article.id} className={styles.articleCard}>
//                         <h2>{article.title}</h2>
//                         {article.author && <p className={styles.articleAuthor}>{article.author}</p>}
//                         {article.imageUrl && (
//                             <Image
//                                 className={`${styles.articleImage}`}
//                                 src={article.imageUrl}
//                                 alt="Article Image"
//                                 width={275}
//                                 height={75}
//                             />
//                         )}
//                     </div>
//                 ))}
//             </section>
//         </div>
//     );
// }