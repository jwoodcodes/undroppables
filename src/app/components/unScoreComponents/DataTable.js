"use client"

import React, { useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from './dataTable.module.css'
import PlayerDialog from './PlayerDialog';

export default function DataTable({ data }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null); // State to hold selected player
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility

  const [isCompsOpen, setIsCompsOpen] = useState(false);

  const [statsToShow, setStatsToShow] = useState([]);

  // console.log(data)
  const myTheme = {
    backgroundColor: "hsl(210deg, 15%, 25%)",
    foregroundColor: "hsl(210deg, 20%, 77%)",
    headerTextColor: "hsl(210deg, 20%, 77%)",
    headerBackgroundColor: "hsl(210deg, 15%, 20%)",
    oddRowBackgroundColor: "hsl(210deg, 10%, 40%)",
    headerColumnResizeHandleColor: "hsl(210deg, 19%, 10%)",
  };

  const containerStyle = useMemo(() => ({ width: "100%", height: "200dvh", marginBottom: "5rem", paddingBottom: "5rem" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%", }), []);

  const theme = useMemo(() => {
    return myTheme;
  }, []);

  const [classYear, setClassYear] = React.useState("all")

  const [positionForDataTable, setPositionForDataTable] = React.useState("all")

  const [dataSetToDisplay, setDataSetToDisplay] = React.useState(["name", "class", "UNScore"])

  const [rowData, setRowData] = React.useState([]);

  const [resetToAllPlayers, setResetToAllPlayers] = React.useState(false);



  //
  //

  let dataToUse = data

  //  console.log(dataToUse)

  React.useEffect(() => {

    const newPlayerArray = [];



    if (classYear !== "all") {

      dataToUse = dataToUse.filter((player) => {

        return +player.class === positionForDataTable
      })
    }




    dataToUse.map((player) => {
      let p = {};

      // console.log(player)

      // if(player.name === "Jalen Royals") {
      //   console.log(player)
      // }

      p.name = player.name;
      p.class = player.class;
      p.UNScore = player.unScore;
      p.Height = +player.height;
      p.weight = +player.weight;
      p.weight = +player.weight;
      if (!+player.weight) {
        p.weight = 0;
      }
      p['Draft Round'] = +player.draftRound;
      p['Draft Pick'] = +player.draftPick;
      p['slot %'] = 0;
      if (+player.careerSlotPercentage) {
        p['slot %'] = +player.careerSlotPercentage.toFixed(1);
      }
      p['wide %'] = 0;
      if (+player.careerWidePercentage) {
        p['wide %'] = +player.careerWidePercentage.toFixed(1);
      }
      p['HCT %'] = 0;
      if (+player.highestContestedTargetPercent) {
        p['HCT %'] = +player.highestContestedTargetPercent.toFixed(1);
      }

      p['AVG PPR'] = +player.careerAveragedStats['PPR Points'];
      p['MTF/REC %'] = +player.careerAveragedStats['MTF/REC %'];
      p['1D/Snap'] = +(player.careerAveragedStats['1D/Snap'] / 100).toFixed(3);
      p['1D/RR'] = +(player.careerAveragedStats['1D/RR'] / 100).toFixed(3);
      p['TGTs/G'] = +player.careerAveragedStats['TGTs/G'];
      p['AVG RR'] = +player.careerAveragedStats.RR;
      p.TPRR = +player.careerAveragedStats.TPRR;
      p['YAC/Rec'] = +player.careerAveragedStats['YAC/Rec'];
      p.YPRR = +player.careerAveragedStats.YPRR;
      p['Man YPRR'] = +player.careerAveragedStats['Man YPRR'];
      p['Zone YPRR'] = +player.careerAveragedStats['Zone YPRR'];
      //
      p['AVG Rec'] = +player.careerAveragedStats.Rec;
      if (!+player.careerAveragedStats.Rec) {
        p['AVG Rec'] = 0;
      }
      //
      p['AVG Rec Yds'] = Math.round(+player.careerAveragedStats['Rec Yds'], 1);
      if (!+player.careerAveragedStats['Rec Yds']) {
        p['AVG Rec Yds'] = 0;
      }
      //
      p['Rec TD MS'] = +player.careerAveragedStats['Rec TD MS'];
      if (!+player.careerAveragedStats['Rec TD MS']) {
        p['Rec TD MS'] = 0;
      }

      //
      p['RYPTPA'] = +player.careerAveragedStats['Rec Yds Per Team Pass Att'];
      if (!+player.careerAveragedStats['Rec Yds Per Team Pass Att']) {
        p['RYPTPA'] = 0;
      }
      //

      //
      p['TDPTPA'] = +player.careerAveragedStats['TD Per Team Pass Att'];
      if (!+player.careerAveragedStats['TD Per Team Pass Att']) {
        p['TDPTPA'] = 0;
      }
      //
      //
      p['Dom Rating'] = +player.careerAveragedStats['Dominator Rating'];
      if (!+player.careerAveragedStats['Dominator Rating']) {
        p['Dom Rating'] = 0;
      }
      //
      //
      p['AYPTP'] = +player.careerAveragedStats['Adjusted Yds Per Team Play'];
      if (!+player.careerAveragedStats['Adjusted Yds Per Team Play']) {
        p['AYPTP'] = 0;
      }
      //






      // careerAveragedStats: {






      //   app-1   |       'EPA Per Team Pass Attempt': 0.1267,
      //   app-1   |       'EPA Per Play': 0.6467,
      //   app-1   |       'Total EPA': 48.3333,
      //   app-1   |       'Yards Per Rec': 13.8333,


      //   app-1   |       'Rec TDs': 7.6667,
      //   app-1   |       'Rush Att per Game': 0.1,
      //   app-1   |       'Rec per Game': 3.7333,
      //   app-1   |       'Rec Yds per Game': 51.1667,
      //   app-1   |       'Rec TDs per



      newPlayerArray.push(p)
    })

    setRowData(newPlayerArray)

  }, [data, classYear, positionForDataTable, resetToAllPlayers])


  let baseColDefs = []







  const getResponsiveColumnDefs = (width) => {
    baseColDefs = [

      {
        field: "name",

        filter: true,
        floatingFilter: true,
        flex: 2,
        pinned: "left",
        maxWidth: width < 768 ? 130 : 200,
        minWidth: width < 768 ? 90 : 140,
        headerClass: 'header-center',
        cellStyle: { textAlign: width < 768 ? 'left' : 'center', fontSize: width < 768 ? '12px' : '14px' },
        cellRenderer: (params) => (
          <span
            style={{ cursor: 'pointer', textDecoration: 'none', textAlign: 'center', justifyContent: 'center' }}
            // onClick={() => openDialog(params.value)}
            onClick={() => openComps(params.value)}
          >
            {params.value}
          </span>
        ),
      },

      {
        field: "class",
        filter: true,
        floatingFilter: true,
        flex: 1,
        cellStyle: { textAlign: width < 768 ? 'left' : 'center', fontSize: width < 768 ? '12px' : '14px' },
        minWidth: width < 768 ? 65 : 70,
      },
      {
        field: "UNScore",
        filter: true,
        floatingFilter: true,
        flex: 1,
        cellStyle: { textAlign: width < 768 ? 'center' : 'center', fontSize: width < 768 ? '12px' : '14px' },
        minWidth: width < 768 ? 95 : 100,
        sortable: true,
        sort: 'desc',
      },

    ];


    return baseColDefs;


    setColDefs(baseColDefs);

  }





  // useEffect(() => {
  //   setColDefs(getResponsiveColumnDefs(windowWidth));
  // }, [windowWidth]);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const [colDefs, setColDefs] = useState(getResponsiveColumnDefs(windowWidth));

  const allPossibleMetrics = [

    {
      field: "Height",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "weight",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "Draft Round",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "Draft Pick",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "AVG PPR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },

    {
      field: "slot %",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "wide %",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "1D/RR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "1D/Snap",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "MTF/REC %",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "TPRR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "YPRR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "AVG Rec",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 80,
      sortable: true,

    },
    {
      field: "AVG Rec Yds",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 80,
      sortable: true,

    },

    {
      field: "YAC/Rec",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "TGTs/G",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "AVG RR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "Man YPRR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "Zone YPRR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },

    {
      field: "HCT %",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },

    {
      field: "Rec TD MS",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "RYPTPA",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "TDPTPA",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "Dom Rating",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },
    {
      field: "AYPTP",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: 'center' },
      minWidth: 100,
      sortable: true,

    },

  ]


  React.useEffect((windowWidth) => {
    let baseColDefs = [{
      field: "name",

      filter: true,
      floatingFilter: true,
      flex: 2,
      pinned: "left",
      maxWidth: windowWidth < 768 ? 130 : 200,
      minWidth: windowWidth < 768 ? 90 : 140,
      headerClass: 'header-center',
      cellStyle: { textAlign: windowWidth < 768 ? 'center' : 'center', fontSize: windowWidth < 768 ? '12px' : '14px' },
      cellRenderer: (params) => (
        <span
          style={{ cursor: 'pointer', textDecoration: 'none', textAlign: 'center', justifyContent: 'center' }}
          // onClick={() => openDialog(params.value)}
          onClick={() => openComps(params.value)}
        >
          {params.value}
        </span>
      ),
    },

    {
      field: "class",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: windowWidth < 768 ? 'center' : 'center', fontSize: windowWidth < 768 ? '12px' : '14px' },
      minWidth: windowWidth < 768 ? 65 : 70,
    },
    {
      field: "UNScore",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: { textAlign: windowWidth < 768 ? 'center' : 'center', fontSize: windowWidth < 768 ? '12px' : '14px' },
      minWidth: windowWidth < 768 ? 95 : 100,
      sortable: true,
      sort: 'desc',
    },]

    allPossibleMetrics.map((metric) => {
      dataSetToDisplay.map((dataSet) => {
        if (metric.field === dataSet) {
          baseColDefs.push(metric)
        }
      })

    })

    setColDefs(baseColDefs)
  }, [dataSetToDisplay, windowWidth])

  const defaultColDef = useMemo(() => ({
    flex: 1,
    sortable: true,
    comparator: (valueA, valueB) => {
      // Put null/undefined/empty values at the bottom when sorting
      if (!valueA && valueA !== 0) return 1;
      if (!valueB && valueB !== 0) return -1;
      // Convert to numbers for comparison since Grade is stored as string
      return Number(valueA) - Number(valueB);
    }
  }), []);

  // const openDialog = (playerName) => {
  //     console.log("Clicked Player Name:", playerName); // Log the clicked player name
  //     const TESTplayer = data.find(item => {
  //       // console.log(item.name)
  //       // item.name.trim().toLowerCase() === playerName.trim().toLowerCase();
  //     });
  //     const player = data.find(item => item.name.toLowerCase() === playerName.trim().toLowerCase()); // Find the player by name
  //     // console.log("Selected Player Data:", player); // Log the selected player data
  //     setSelectedPlayer(player); // Set the selected player
  //     setIsDialogOpen(true); // Open the dialog
  // };

  const openComps = (playerName) => {

    // console.log("Clicked Player Name:", playerName); // Log the clicked player name
    const TESTplayer = data.find(item => {
      // console.log(item.name)
      // item.name.trim().toLowerCase() === playerName.trim().toLowerCase();
    });
    const player = data.find(item => item.name.toLowerCase() === playerName.trim().toLowerCase()); // Find the player by name
    // console.log("Selected Player Data:", player); // Log the selected player data
    // setSelectedPlayer(player); // Set the selected player
    // setIsCompsOpen(true); // Open the dialog
    let selectedPlayersComps = player.topModelComps
    let compDataArray = [player]
    // console.log(data)
    data.map((metric) => {
      // console.log(metric)
      selectedPlayersComps.forEach((comp) => {
        // console.log(metric.name.toLowerCase(), comp.matchedPlayerName.toLowerCase())
        if (metric.name.toLowerCase() === comp.matchedPlayerName.toLowerCase()) {
          // console.log(metric.name.toLowerCase(), comp.matchedPlayerName.toLowerCase())
          compDataArray.push(metric)
        }

      })
    })
    // console.log(compDataArray)


    let finalCompArray = []
    //
    compDataArray.forEach((player) => {

      let p = {};

      p.name = player.name;
      p.class = player.class;
      p.UNScore = player.unScore;
      p.Height = +player.height;
      p.weight = +player.weight;
      p.weight = +player.weight;
      if (!+player.weight) {
        p.weight = 0;
      }
      p['Draft Round'] = +player.draftRound;
      p['Draft Pick'] = +player.draftPick;
      p['slot %'] = +player.careerSlotPercentage.toFixed(1);
      p['wide %'] = +player.careerWidePercentage.toFixed(1);
      p['HCT %'] = +player.highestContestedTargetPercent;

      p['AVG PPR'] = +player.careerAveragedStats['PPR Points'];
      p['MTF/REC %'] = +player.careerAveragedStats['MTF/REC %'];
      p['1D/Snap'] = +(player.careerAveragedStats['1D/Snap'] / 100).toFixed(3);
      p['1D/RR'] = +(player.careerAveragedStats['1D/RR'] / 100).toFixed(3);
      p['TGTs/G'] = +player.careerAveragedStats['TGTs/G'];
      p['AVG RR'] = +player.careerAveragedStats.RR;
      p.TPRR = +player.careerAveragedStats.TPRR;
      p['YAC/Rec'] = +player.careerAveragedStats['YAC/Rec'];
      p.YPRR = +player.careerAveragedStats.YPRR;
      p['Man YPRR'] = +player.careerAveragedStats['Man YPRR'];
      p['Zone YPRR'] = +player.careerAveragedStats['Zone YPRR'];
      //
      p['AVG Rec'] = +player.careerAveragedStats.Rec;
      if (!+player.careerAveragedStats.Rec) {
        p['AVG Rec'] = 0;
      }
      //
      p['AVG Rec Yds'] = Math.round(+player.careerAveragedStats['Rec Yds'], 1);
      if (!+player.careerAveragedStats['Rec Yds']) {
        p['AVG Rec Yds'] = 0;
      }
      //
      p['Rec TD MS'] = +player.careerAveragedStats['Rec TD MS'];
      if (!+player.careerAveragedStats['Rec TD MS']) {
        p['Rec TD MS'] = 0;
      }

      //
      p['RYPTPA'] = +player.careerAveragedStats['Rec Yds Per Team Pass Att'];
      if (!+player.careerAveragedStats['Rec Yds Per Team Pass Att']) {
        p['RYPTPA'] = 0;
      }
      //

      //
      p['TDPTPA'] = +player.careerAveragedStats['TD Per Team Pass Att'];
      if (!+player.careerAveragedStats['TD Per Team Pass Att']) {
        p['TDPTPA'] = 0;
      }
      //
      //
      p['Dom Rating'] = +player.careerAveragedStats['Dominator Rating'];
      if (!+player.careerAveragedStats['Dominator Rating']) {
        p['Dom Rating'] = 0;
      }
      //
      //
      p['AYPTP'] = +player.careerAveragedStats['Adjusted Yds Per Team Play'];
      if (!+player.careerAveragedStats['Adjusted Yds Per Team Play']) {
        p['AYPTP'] = 0;
      }
      //

      finalCompArray.push(p)

    })


    //

    setRowData(finalCompArray)


  };

  const [comparePlayer, setComparePlayer] = useState(null);

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedPlayer(null);
    setComparePlayer(null)
  };

  const resetTable = () => {

    setResetToAllPlayers(!resetToAllPlayers)



  }

  // console.log(dataSetToDisplay)

  return (
    <div style={containerStyle}>

      <div className={styles.dataTableSelectsWrapper}>

        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className={styles.clsSelectForm}
        >
          <label htmlFor="class-select" className={styles.clsSelectLabel}>
            Class
          </label>

          <select
            id="class-select"
            value={classYear}
            //  multiple= {true}
            onChange={event => {
              // console.log(event.target.value)
              event.target.value === "all" ? setClassYear("all") : setClassYear(+event.target.value)
              event.target.value === "all" ? setPositionForDataTable("all") : setPositionForDataTable(+event.target.value)

              // console.log(event.target.value, typeof event.target.value, classYear, )
            }}
            className={styles.clsSelect}
          >
            <option value={2018}>
              2018
            </option>
            <option value={2019}>
              2019
            </option>
            <option value={2020}>
              2020
            </option>
            <option value={2021}>
              2021
            </option>
            <option value={2022}>
              2022
            </option>
            <option value={2023}>
              2023
            </option>
            <option value={2024}>
              2024
            </option>
            <option value={2025}>
              2025
            </option>
            <option value="all">
              2018-2025
            </option>
          </select>
        </form>

        <button onClick={() => resetTable()} className={styles.clsSelect}>Return to all Players</button>

        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className={styles.dataSelectForm}
        >
          <label htmlFor="metrics-select" className={styles.clsSelectLabel}>
            Add/Remove metrics from table
          </label>

          <select
            id="metrics-select"
            value={classYear}
            multiple={true}
            onChange={event => {
              // console.log(event.target.value)
              //  event.target.value === "all" ? setClassYear("all") : setClassYear(+event.target.value)
              //  event.target.value === "all" ? setPositionForDataTable("all") : setPositionForDataTable(+event.target.value)
              dataSetToDisplay.includes(event.target.value) ? setDataSetToDisplay(dataSetToDisplay.filter(item => item !== event.target.value)) : setDataSetToDisplay([...dataSetToDisplay, event.target.value])



            }}
            className={styles.datasetSelect}
          >
            {dataSetToDisplay.includes("Height") ?
              <option value="Height" style={{ color: "red" }}>
                Height
              </option>
              : <option value="Height" >
                Height
              </option>
            }

            {dataSetToDisplay.includes("weight") ?
              <option value="weight" style={{ color: "red" }}>
                weight
              </option>
              : <option value="weight" >
                weight
              </option>
            }

            {dataSetToDisplay.includes("Draft Round") ?
              <option value="Draft Round" style={{ color: "red" }}>
                Draft Round
              </option>
              : <option value="Draft Round" >
                Draft Round
              </option>
            }

            {dataSetToDisplay.includes("Draft Pick") ?
              <option value="Draft Pick" style={{ color: "red" }}>
                Draft Pick
              </option>
              : <option value="Draft Pick" >
                Draft Pick
              </option>
            }


            {dataSetToDisplay.includes("AVG PPR") ?
              <option value="AVG PPR" style={{ color: "red" }}>
                AVG PPR
              </option>
              : <option value="AVG PPR" >
                AVG PPR
              </option>
            }

            {dataSetToDisplay.includes("slot %") ?
              <option value="slot %" style={{ color: "red" }}>
                slot %
              </option>
              : <option value="slot %" >
                slot %
              </option>
            }

            {dataSetToDisplay.includes("wide %") ?
              <option value="wide %" style={{ color: "red" }}>
                wide %
              </option>
              : <option value="wide %" >
                wide %
              </option>
            }

            {dataSetToDisplay.includes("1D/RR") ?
              <option value="1D/RR" style={{ color: "red" }}>
                1D/RR
              </option>
              : <option value="1D/RR" >
                1D/RR
              </option>
            }

            {dataSetToDisplay.includes("1D/Snap") ?
              <option value="1D/Snap" style={{ color: "red" }}>
                1D/Snap
              </option>
              : <option value="1D/Snap" >
                1D/Snap
              </option>
            }

            {/* {dataSetToDisplay.includes("MTF/REC %") ? 
                    <option value="MTF/REC %" style={{color: "red"}}>
                      MTF/REC %
                    </option>
                    : <option value="MTF/REC %" >
                    MTF/REC %
                  </option>
                    }  */}

            {dataSetToDisplay.includes("TPRR") ?
              <option value="TPRR" style={{ color: "red" }}>
                TPRR
              </option>
              : <option value="TPRR" >
                TPRR
              </option>
            }

            {dataSetToDisplay.includes("YPRR") ?
              <option value="YPRR" style={{ color: "red" }}>
                YPRR
              </option>
              : <option value="YPRR" >
                YPRR
              </option>
            }

            {dataSetToDisplay.includes("AVG Rec") ?
              <option value="AVG Rec" style={{ color: "red" }}>
                AVG Rec
              </option>
              : <option value="AVG Rec" >
                AVG Rec
              </option>
            }

            {dataSetToDisplay.includes("AVG Rec Yds") ?
              <option value="AVG Rec Yds" style={{ color: "red" }}>
                AVG Rec Yds
              </option>
              : <option value="AVG Rec Yds" >
                AVG Rec Yds
              </option>
            }

            {dataSetToDisplay.includes("YAC/Rec") ?
              <option value="YAC/Rec" style={{ color: "red" }}>
                YAC/Rec
              </option>
              : <option value="YAC/Rec" >
                YAC/Rec
              </option>
            }

            {dataSetToDisplay.includes("TGTs/G") ?
              <option value="TGTs/G" style={{ color: "red" }}>
                TGTs/G
              </option>
              : <option value="TGTs/G" >
                TGTs/G
              </option>
            }

            {dataSetToDisplay.includes("TGTs/G") ?
              <option value="TGTs/G" style={{ color: "red" }}>
                TGTs/G
              </option>
              : <option value="TGTs/G" >
                TGTs/G
              </option>
            }

            {dataSetToDisplay.includes("AVG RR") ?
              <option value="AVG RR" style={{ color: "red" }}>
                AVG RR
              </option>
              : <option value="AVG RR" >
                AVG RR
              </option>
            }

            {dataSetToDisplay.includes("Man YPRR") ?
              <option value="Man YPRR" style={{ color: "red" }}>
                Man YPRR
              </option>
              : <option value="Man YPRR" >
                Man YPRR
              </option>
            }

            {dataSetToDisplay.includes("Zone YPRR") ?
              <option value="Zone YPRR" style={{ color: "red" }}>
                Zone YPRR
              </option>
              : <option value="Zone YPRR" >
                Zone YPRR
              </option>
            }

            {dataSetToDisplay.includes("HCT %") ?
              <option value="HCT %" style={{ color: "red" }}>
                HCT %
              </option>
              : <option value="HCT %" >
                HCT %
              </option>
            }

            {dataSetToDisplay.includes("Rec TD MS") ?
              <option value="Rec TD MS" style={{ color: "red" }}>
                Rec TD MS
              </option>
              : <option value="Rec TD MS" >
                Rec TD MS
              </option>
            }

            {dataSetToDisplay.includes("RYPTPA") ?
              <option value="RYPTPA" style={{ color: "red" }}>
                RYPTPA
              </option>
              : <option value="RYPTPA" >
                RYPTPA
              </option>
            }

            {dataSetToDisplay.includes("TDPTPA") ?
              <option value="TDPTPA" style={{ color: "red" }}>
                TDPTPA
              </option>
              : <option value="TDPTPA" >
                TDPTPA
              </option>
            }

            {dataSetToDisplay.includes("Dom Rating") ?
              <option value="Dom Rating" style={{ color: "red" }}>
                Dom Rating
              </option>
              : <option value="Dom Rating" >
                Dom Rating
              </option>
            }

            {dataSetToDisplay.includes("AYPTP") ?
              <option value="AYPTP" style={{ color: "red" }}>
                AYPTP
              </option>
              : <option value="AYPTP" >
                AYPTP
              </option>
            }




          </select>
        </form>

      </div>


      <div className="ag-theme-alpine-dark" style={gridStyle}>
        <AgGridReact
          columnDefs={colDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={50}
          theme={theme}
          className={styles.dataGrid}
          sortModel={[{ colId: 'Grade', sort: 'desc' }]}

        />
      </div>

      {isDialogOpen && (
        <PlayerDialog player={selectedPlayer} onClose={closeDialog} data={data} comparePlayer={comparePlayer} setComparePlayer={setComparePlayer} />
      )}
    </div>

  );
}