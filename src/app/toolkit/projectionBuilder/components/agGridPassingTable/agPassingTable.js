"use client";
import React from "react";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Content } from "next/font/google";

export default function AgPassingTable({ usersAllTeamsList, team }) {
  const [rowData, setRowData] = React.useState([]);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    let newTempPlayerArray = [];
    usersAllTeamsList.map((teamObject) => {
      if (teamObject.teamName === team) {
        // console.log(teamObject);
        teamObject.usersSelectedPlayers.map((player) => {
          if (player.data.position === "QB") {
            newTempPlayerArray.push(player);
          }
        });
      }
    });
    usersAllTeamsList.map((teamObject) => {
      if (teamObject.teamName === team) {
        // console.log(teamObject);
        teamObject.usersSelectedPlayers.map((player) => {
          if (player.data.position === "RB") {
            newTempPlayerArray.push(player);
          }
        });
      }
    });
    usersAllTeamsList.map((teamObject) => {
      if (teamObject.teamName === team) {
        // console.log(teamObject);
        teamObject.usersSelectedPlayers.map((player) => {
          if (player.data.position === "WR") {
            newTempPlayerArray.push(player);
          }
        });
      }
    });
    usersAllTeamsList.map((teamObject) => {
      if (teamObject.teamName === team) {
        // console.log(teamObject);
        teamObject.usersSelectedPlayers.map((player) => {
          if (player.data.position === "TE") {
            newTempPlayerArray.push(player);
          }
        });
      }
    });

    console.log(newTempPlayerArray);
    setRowData(newTempPlayerArray);

    // newTempPlayerArray.map((teamObject) => {
    //   if (teamObject.teamName === team) {
    //     console.log(teamObject);
    //     // setRowData(teamObject.usersSelectedPlayers);
    //     setRowData(newTempPlayerArray);
    //   }
    // });
  }, [usersAllTeamsList, team]);

  //   console.log(rowData);
  rowData.map((row) => {
    console.log(row.data);
    row.name = row.data.name;
    row.position = row.data.position;
    row.passAttempts = row.data.passAttempts;
    row["comp %"] = row.data.completionPercentage;
    row.comps = row.data.completions;
    row.passYards = row.data.passingYards;
    row.YPC = row.data.yardsPerCompletion;
    row["Pass TDs"] = row.data.passTDs;
    row.tdRate = row.data.tdRate;
  });

  const [colDefs, setColDefs] = React.useState([
    {
      field: "name",
      filter: true,
      floatingFilter: true,
      flex: 1,
      pinned: "left",
      maxWidth: 140,
    },
    {
      field: "position",
      filter: true,
      floatingFilter: true,
      flex: 1,
      pinned: "left",
      maxWidth: 100,
    },
    {
      field: "passAttempts",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 125,
    },
    {
      field: "comp %",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 100,
    },
    {
      field: "comps",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 90,
    },
    {
      field: "passYards",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 100,
    },
    {
      field: "YPC",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 80,
    },
    {
      field: "Pass TDs",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 100,
    },
    {
      field: "tdRate",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 100,
    },
  ]);

  //   const gridOptions = {
  //     pagination: true,
  //     paginationPageSize: 200,
  //     paginationPageSizeSelector: [200, 500, 1000],

  //     // other grid options ...
  //   };

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div>
      <div
        className="ag-theme-quartz-dark" // applying the grid theme
        style={{ height: 1000 }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
}
