"use client";

import { useEffect, useState } from "react";
// import { fetchRankings } from "../dbManagement/fetchRankings"; // Adjust the path as necessary
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import styles from "./rankings.module.css";
// import { TradeAnalyzerData } from "../dbManagement/types"; // Adjust the path as necessary
// import { ColDef } from "ag-grid-community"; // Import ColDef

export default function Rankings() {
  // const [rowData, setRowData] = useState<TradeAnalyzerData[]>([]);

  // // Explicitly type columnDefs as an array of ColDef
  // const [columnDefs] = useState<ColDef<TradeAnalyzerData>[]>([
  //   { headerName: "Name", field: "name" },
  //   { headerName: "Position", field: "position" },
  //   { headerName: "Team", field: "team" },
  //   { headerName: "Market Value", field: "marketValue" },
  //   { headerName: "My Value", field: "myValue" },
  //   { headerName: "Consensus Value", field: "concensusValue" },
  //   // Add more columns as needed
  // ]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetchRankings();
  //     setRowData(data as TradeAnalyzerData[]);
  //   };

  //   getData();
  // }, []);

  return (
    // <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
    //   <AgGridReact
    //     rowData={rowData}
    //     columnDefs={columnDefs}
    //     pagination={true}
    //     paginationPageSize={10}
    //   />
    // </div>
    <div>rankings</div>
  );
}
