import Image from "next/image";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import Link from "next/link";
import React from "react";
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import ConstructProjections from "./components/ConstructProjections";

// async function getData() {
//   const res = await fetch(
//     "https://data.mongodb-api.com/app/data-pqtmg/endpoint/data/v1"
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   // const client = await clientPromise;
//   // const db = client.db("dailydynasties");

//   // const dynastyRankingsData = await db
//   //   .collection("tradeAnalyzerData")
//   //   .find({})
//   //   .toArray();
//   // console.log(dynastyRankingsData);
//   //

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();

//   try {
//     const client = await clientPromise;
//     const db = client.db("dailydynasties");
//     const data = await db.collection("tradeAnalyzerData").find({}).toArray();
//     // console.log(data);
//     res.json(data);
//     return data.json();
//   } catch (e) {
//     console.error(e);
//   }
// }

export default async function ProjectionsBuilder(
  NextApiRequest,
  NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("dailydynasties");
    const data = await db.collection("tradeAnalyzerData").find({}).toArray();
    console.log(res.json(data));
    return res.json(data);
  } catch (e) {
    console.error(e);
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainSiteTitleWrapper}>
        <div className={styles.pageTitle}>UN Projections Builder</div>
        <ConstructProjections />
      </div>
    </main>
  );
}

// export async function getStaticProps() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("dailydynasties");

//     const dynastyRankingsData = await db
//       .collection("tradeAnalyzerData")
//       .find({})
//       .toArray();
//     // console.log(dynastyRankingsData);
//     //

//     return {
//       props: {
//         dynastyRankingsData: JSON.parse(JSON.stringify(dynastyRankingsData)),
//       },
//     };
//   } catch (e) {
//     console.error(e);
//   }
// }
