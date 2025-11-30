"use client";

import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import styles from "./rankings.module.css";
import MainNav from "../components/mainNav/MainNav";

export default function Rankings() {
  const [rowData, setRowData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [positionFilter, setPositionFilter] = useState<string>("SUPERFLEX");

  const [testLoading, setTestLoading] = useState(true);

  const filteredRowData = rowData.filter((row: any) => {
    if (positionFilter === "SUPERFLEX") return true;
    if (positionFilter === "FLEX") return row.position !== "QB";
    return row.position === positionFilter;
  });

  const columnDefs = [
    { field: "name", filter: true, floatingFilter: true, pinned: true, cellClass: styles.nameCell },
    { field: "consensusValue", filter: true, floatingFilter: true, sort: 'desc' as const },
    { field: "position", headerName: "Pos", filter: true, floatingFilter: true, width: 100 },
    { field: "team", headerName: "Tm", filter: true, floatingFilter: true, width: 80 },

    { field: "marketValue", filter: true, floatingFilter: true },

    {
      field: "consensusVsMarketValueDiff",
      filter: true,
      floatingFilter: true,
      width: 180,
      headerName: "Concensus Vs Market",
      valueGetter: (params: any) => {
        const consensus = params.data?.consensusValue || 0;
        const market = params.data?.marketValue || 0;
        return consensus - market;
      }
    },
    { field: "myValue", headerName: "Jay Value", filter: true, floatingFilter: true },
    { field: "jaxValue", filter: true, floatingFilter: true },
    { field: "travValue", filter: true, floatingFilter: true },
    { field: "joeValue", filter: true, floatingFilter: true },

    // Add more fields as needed
  ];

  useEffect(() => {
    fetch("/api/rankings")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched data from /api/rankings:", data);
        setRowData(data as any[]);
        setLoading(false);
      });
  }, [testLoading]);



  return (
    <main className={styles.main}>
      <MainNav />
      <h1>Rankings</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* <button onClick={() => setTestLoading(!testLoading)}>load data</button> */}
          <h2 className={styles.rankingsLabel}>UN Dynasty Rankings</h2>

          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterBtn} ${positionFilter === "SUPERFLEX" ? styles.active : ""}`}
              onClick={() => setPositionFilter("SUPERFLEX")}
            >
              Sflex
            </button>
            <button
              className={`${styles.filterBtn} ${positionFilter === "QB" ? styles.active : ""}`}
              onClick={() => setPositionFilter("QB")}
            >
              QB
            </button>
            <button
              className={`${styles.filterBtn} ${positionFilter === "RB" ? styles.active : ""}`}
              onClick={() => setPositionFilter("RB")}
            >
              RB
            </button>
            <button
              className={`${styles.filterBtn} ${positionFilter === "WR" ? styles.active : ""}`}
              onClick={() => setPositionFilter("WR")}
            >
              WR
            </button>
            <button
              className={`${styles.filterBtn} ${positionFilter === "TE" ? styles.active : ""}`}
              onClick={() => setPositionFilter("TE")}
            >
              TE
            </button>
            <button
              className={`${styles.filterBtn} ${positionFilter === "FLEX" ? styles.active : ""}`}
              onClick={() => setPositionFilter("FLEX")}
            >
              Flex
            </button>
          </div>

          <div className={`ag-theme-quartz-dark ${styles.tableContainer}`}>
            <AgGridReact rowData={filteredRowData} columnDefs={columnDefs} />
          </div>
        </div>
      )}
    </main>
  );
}
