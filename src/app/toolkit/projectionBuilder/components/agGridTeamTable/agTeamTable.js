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
    row.position = row.data.position;
    row.passAttempts = row.data.passAttempts;
    row["comp %"] = row.data.completionPercentage;
    row.comps = row.data.completions;
    row.passYards = row.data.passingYards;
    row.YPC = row.data.yardsPerCompletion;
    row["Pass TDs"] = row.data.passTDs;
    row.tdRate = row.data.tdRate;
    row.ints = row.data.ints;
    row.intRate = row.data.intRate;
    row.rushAttempts = row.data.rushAttempts;
    row["Yards/Carry"] = row.data.yardsPerCarry;
    row.rushYards = row.data.rushYards;
    row.rushTDs = row.data.rushTDs;
    row.targetShare = row.data.targetShare;
    row.targets = row.data.targets;
    row["Catch %"] = row.data.catchPercentage;
    row.receptions = row.data.receptions;
    row.YPR = row.data.yardsPerReception;
    row["Rec Yards"] = row.data.recievingYards;
    row.recTDs = row.data.recTDs;
    row["half PPR"] = row.data.halfPPR;
    row["PPR Points"] = row.data.pprPoints;
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
      maxWidth: 70,
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
      field: "rushAttempts",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 130,
    },
    {
      field: "Yards/Carry",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 110,
    },
    {
      field: "rushYards",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 110,
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
      field: "receptions",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 110,
    },
    {
      field: "YPR",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 80,
    },
    {
      field: "Rec Yards",
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
      field: "PPR Points",
      filter: true,
      floatingFilter: true,
      flex: 1,

      maxWidth: 120,
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
