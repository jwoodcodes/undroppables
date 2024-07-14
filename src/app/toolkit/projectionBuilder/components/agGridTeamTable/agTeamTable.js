"use client";
import React from "react";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Content } from "next/font/google";

export default function AgTeamTable({
  usersAllTeamsList,
  team,
  isIntsSubmitted,
}) {
  const [rowData, setRowData] = React.useState([]);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    let newTempPlayerArray = [];
    usersAllTeamsList.map((teamObject) => {
      if (teamObject.teamName === team) {
        // console.log(teamObject);
        teamObject.usersSelectedPlayers.map((player) => {
          if (player.data.position === "QB") {
            player.data.pprPoints = +(
              +(player.data.passingYards * 0.04) +
              +(player.data.passTDs * 6) -
              +(player.data.ints * 2) +
              +(player.data.rushYards * 0.1) +
              +(player.data.rushTDs * 6) +
              +(player.data.receptions * 1) +
              +(player.data.recievingYards * 0.1) +
              +(player.data.recTDs * 6)
            ).toFixed(1);

            player.data.halfPPR = +(
              +(player.data.passingYards * 0.04) +
              +(player.data.passTDs * 6) -
              +(player.data.ints * 2) +
              +(player.data.rushYards * 0.1) +
              +(player.data.rushTDs * 6) +
              +(player.data.receptions * 0.5) +
              +(player.data.recievingYards * 0.1) +
              +(player.data.recTDs * 6)
            ).toFixed(1);

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
            player.data.pprPoints = +(
              +(player.data.rushYards * 0.1) +
              +(player.data.rushTDs * 6) +
              +(player.data.receptions * 1) +
              +(player.data.recievingYards * 0.1) +
              +(player.data.recTDs * 6)
            ).toFixed(1);

            player.data.halfPPR = +(
              +(player.data.rushYards * 0.1) +
              +(player.data.rushTDs * 6) +
              +(player.data.receptions * 0.5) +
              +(player.data.recievingYards * 0.1) +
              +(player.data.recTDs * 6)
            ).toFixed(1);

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
            player.data.pprPoints = +(
              +(player.data.rushYards * 0.1) +
              +(player.data.rushTDs * 6) +
              +(player.data.receptions * 1) +
              +(player.data.recievingYards * 0.1) +
              +(player.data.recTDs * 6)
            ).toFixed(1);

            player.data.halfPPR = +(
              +(player.data.rushYards * 0.1) +
              +(player.data.rushTDs * 6) +
              +(player.data.receptions * 0.5) +
              +(player.data.recievingYards * 0.1) +
              +(player.data.recTDs * 6)
            ).toFixed(1);

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
            player.data.pprPoints = +(
              +(player.data.rushYards * 0.1) +
              +(player.data.rushTDs * 6) +
              +(player.data.receptions * 1) +
              +(player.data.recievingYards * 0.1) +
              +(player.data.recTDs * 6)
            ).toFixed(1);

            player.data.halfPPR = +(
              +(player.data.rushYards * 0.1) +
              +(player.data.rushTDs * 6) +
              +(player.data.receptions * 0.5) +
              +(player.data.recievingYards * 0.1) +
              +(player.data.recTDs * 6)
            ).toFixed(1);

            newTempPlayerArray.push(player);
          }
        });
      }
    });

    // console.log(newTempPlayerArray);
    setRowData(newTempPlayerArray);

    // newTempPlayerArray.map((teamObject) => {
    //   if (teamObject.teamName === team) {
    //     console.log(teamObject);
    //     // setRowData(teamObject.usersSelectedPlayers);
    //     setRowData(newTempPlayerArray);
    //   }
    // });
  }, [usersAllTeamsList, team, isIntsSubmitted]);

  //   console.log(rowData);
  rowData.map((row) => {
    // console.log(row.data);
    row.name = row.data.name;
    row.Pos = row.data.position;
    row.Attempts = row.data.passAttempts;
    row["comp %"] = row.data.completionPercentage;
    row.comps = row.data.completions;
    row.passYrds = row.data.passingYards;
    row["Y/Comp"] = row.data.yardsPerCompletion;
    row["Pass TDs"] = row.data.passTDs;
    row.tdRate = row.data.tdRate;
    row.ints = row.data.ints;
    row.intRate = row.data.intRate;
    row["Ru Atmpts"] = row.data.rushAttempts;
    row.YPC = row.data.yardsPerCarry;
    row["Ru Yrds"] = row.data.rushYards;
    row.rushTDs = row.data.rushTDs;
    row.targetShare = row.data.targetShare;
    row.targets = row.data.targets;
    row["Catch %"] = row.data.catchPercentage;
    row.Recs = row.data.receptions;
    row.YPR = row.data.yardsPerReception;
    row["Rec Yrds"] = row.data.recievingYards;
    row.recTDs = row.data.recTDs;
    row["half PPR"] = row.data.halfPPR;
    row.PPR = row.data.pprPoints;
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
      field: "Pos",
      filter: true,
      floatingFilter: true,
      flex: 1,
      pinned: "left",
      maxWidth: 70,
    },
    {
      field: "Attempts",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 100,
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
      field: "passYrds",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 90,
    },
    {
      field: "Y/Comp",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 90,
    },
    {
      field: "Pass TDs",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 101,
    },
    // {
    //   field: "tdRate",
    //   filter: true,
    //   floatingFilter: true,
    //   flex: 1,

    //   maxWidth: 100,
    // },
    {
      field: "ints",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 80,
    },
    // {
    //   field: "intRate",
    //   filter: true,
    //   floatingFilter: true,
    //   flex: 1,

    //   maxWidth: 90,
    // },
    {
      field: "Ru Atmpts",
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

      maxWidth: 60,
    },
    {
      field: "Ru Yrds",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 80,
    },
    {
      field: "rushTDs",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 100,
    },
    {
      field: "targetShare",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 120,
    },
    {
      field: "targets",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 90,
    },
    {
      field: "Catch %",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 90,
    },
    {
      field: "Recs",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 70,
    },
    {
      field: "YPR",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 80,
    },
    {
      field: "Rec Yrds",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 100,
    },
    {
      field: "recTDs",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 100,
    },
    {
      field: "half PPR",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 120,
    },
    {
      field: "PPR",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 90,
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
