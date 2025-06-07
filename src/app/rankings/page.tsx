"use client";

import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import styles from "./rankings.module.css";

export default function Rankings() {
  const [rowData, setRowData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [testLoading, setTestLoading] = useState(true);

  const columnDefs = [
    { field: "name", filter: true, floatingFilter: true },
    { field: "position", filter: true, floatingFilter: true },
    { field: "team", filter: true, floatingFilter: true },
    { field: "marketValue", filter: true, floatingFilter: true },
    { field: "myValue", filter: true, floatingFilter: true },
    { field: "consensusValue", filter: true, floatingFilter: true },
    // Add more fields as needed
  ];

  useEffect(() => {
    fetch("/api/rankings")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data from /api/rankings:", data);
        setRowData(data as any[]);
        setLoading(false);
      });
  }, [testLoading]);

  return (
    <main className={styles.main}>
      <h1>Rankings</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
        <button onClick={() => setTestLoading(!testLoading)}>load data</button>
        <div className="ag-theme-quartz" style={{ height: 600, width: "100%" }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
        </div>
      )}
    </main>
  );
}
