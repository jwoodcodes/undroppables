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

  const [testLoading, setTestLoading] = useState(true);

  const columnDefs = [
    { field: "name", filter: true, floatingFilter: true },
    { field: "consensusValue", filter: true, floatingFilter: true, sort: 'desc' as const },
    { field: "position", filter: true, floatingFilter: true },
    { field: "team", filter: true, floatingFilter: true },

    { field: "marketValue", filter: true, floatingFilter: true },

    {
      field: "consensusVsMarketValueDiff",
      filter: true,
      floatingFilter: true,
      valueGetter: (params: any) => {
        const consensus = params.data?.consensusValue || 0;
        const market = params.data?.marketValue || 0;
        return consensus - market;
      }
    },
    { field: "myValue", filter: true, floatingFilter: true },
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
          <div className="ag-theme-quartz-dark" style={{ height: 800, width: "95%", margin: "auto" }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
          </div>
        </div>
      )}
    </main>
  );
}
