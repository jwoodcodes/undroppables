"use client"

import React, { useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from './dataTable.module.css'
// import PlayerDialog from './PlayerDialog'; // Import the dialog component

export default function DataTable({ data }) {
    const [selectedPlayer, setSelectedPlayer] = useState(null); // State to hold selected player
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility

    console.log(data)
    const myTheme = {
        backgroundColor: "hsl(210deg, 15%, 25%)",
        foregroundColor: "hsl(210deg, 20%, 77%)",
        headerTextColor: "hsl(210deg, 20%, 77%)",
        headerBackgroundColor: "hsl(210deg, 15%, 20%)",
        oddRowBackgroundColor: "hsl(210deg, 10%, 40%)",
        headerColumnResizeHandleColor: "hsl(210deg, 19%, 10%)",
    };

    const containerStyle = useMemo(() => ({ width: "100%", height: "200dvh", marginBottom: "5rem", paddingBottom: "5rem" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%",  }), []);

    const theme = useMemo(() => {
        return myTheme;
    }, []);
    
    const [classYear, setClassYear] = React.useState("all")

    const [positionForDataTable,setPositionForDataTable] = React.useState("all")

    const [dataSetToDisplay, setDataSetToDisplay] = React.useState("prospect grades")

    const [rowData, setRowData] = React.useState([]);


    let dataToUse = data

    
    function year2018(event) {
      setClassYear(2018);
      // console.log(classYear)
    }
    function year2019(event) {
      setClassYear(2019);
      // console.log(classYear)
    }
    function year2020(event) {
      setClassYear(2020);
      // console.log(classYear)
    }
    function year2021(event) {
      setClassYear(2021);
      // console.log(classYear)
    }
    function year2022(event) {
      setClassYear(2022);
      // console.log(classYear)
    }
    function year2023(event) {
      setClassYear(2023);
      // console.log(classYear)
    }
    function year2024(event) {
      setClassYear(2024);
      // console.log(classYear)
    }
    function year2025(event) {
      setClassYear(2025);
      // console.log(classYear)
    }
    function yearAll(event) {
      setClassYear("all");
      // console.log(classYear)
    }

  //  React.useEffect(() => {
    
    

    

  //  }, [classYear])

    
  //  console.log(dataToUse)

    React.useEffect(() => {
    const newPlayerArray = [];

    // let tempDataToUse = data.filter((player) => {
      
    //   return +player.class === classYear
    // })

    if(classYear === "all") {
      let tempDataToUse = data
    }

    // dataToUse = tempDataToUse.filter((player) => {
      
    //   // console.log(player.rookieGuideData.Position, positionForDataTable)
      
      
    //   return player.rookieGuideData.Position === positionForDataTable
    // })
    // console.log("here", positionForDataTable)
    if(positionForDataTable === "all") {
      if(classYear === "all") {
      dataToUse = data
      } else {
        dataToUse = tempDataToUse
      }
      
    }

    dataToUse.map((player) => {
        let p = {};

        console.log(player)


        p.name = player.name;
        p.class = player.class;
        p.UNScore = player.unScore;
        p.height = player.height;
        p.weight = player.weight;
        p.draftRound = player.draftRound;
        p.draftPick = player.draftPick;
        p['slot %'] = player.careerSlotPercentage;
        p['wide %'] = player.careerWidePercentage;
        p['HCT %'] = player.highestContestedTargetPercent;

        p['AVG PPR'] = player.careerAveragedStats['PPR Points'];
        p['MTF/REC %'] = player.careerAveragedStats['MTF/REC %'];
        p['1D/Snap'] = (player.careerAveragedStats['1D/Snap'] / 100).toFixed(3);
        p['1D/RR'] = (player.careerAveragedStats['1D/RR'] / 100).toFixed(3);
        p['TGTs/G'] = player.careerAveragedStats['TGTs/G'];
        p.RR = player.careerAveragedStats.RR;
        p.TPRR = player.careerAveragedStats.TPRR;
        p['YAC/Rec'] = player.careerAveragedStats['YAC/Rec'];
        p.YPRR = player.careerAveragedStats.YPRR;
        p['Man YPRR'] = player.careerAveragedStats['Man YPRR'];
        p['Zone YPRR'] = player.careerAveragedStats['Zone YPRR'];
        
        
       
       

        // careerAveragedStats: {
        //   app-1   |       'MTF/REC %': 12.7,
        //   app-1   |       '1D/Snap': 9.6,
        //   app-1   |       '1D/RR': 10.12,
          
          
        //   app-1   |       'TGTs/G': 5.33,
        //   app-1   |       RR: 323.33,
        //   app-1   |       TPRR: 0.24,
        //   app-1   |       'YAC/Rec': 3.33,
        //   app-1   |       YPRR: 2.06,
        //   app-1   |       'Man YPRR': 0,
        //   app-1   |       'Zone YPRR': 0,
        //   app-1   |       'PPR Points': 163.63,
        //   app-1   |       'Reception MS (Games Played)': 0.2,
        //   app-1   |       'Rec Yds MS': 0.21,
        //   app-1   |       'Rec TD MS': 0.25,
        //   app-1   |       'Rec Yds Per Team Pass Att': 1.75,
        //   app-1   |       'TD Per Team Pass Att': 0.0198,
          
        //   app-1   |       'Dominator Rating': 0.2283,
        //   app-1   |       'Adjusted Yds Per Team Play': 1.5333,
        //   app-1   |       'Scrimmage Yds Per Team Play': 0.78,
        //   app-1   |       'Scrimmage Yds Per Team Pass Attempt': 1.79,
        //   app-1   |       'EPA Per Team Pass Attempt': 0.1267,
        //   app-1   |       'EPA Per Play': 0.6467,
        //   app-1   |       'Total EPA': 48.3333,
        //   app-1   |       'Yards Per Rec': 13.8333,
        //   app-1   |       Rec: 48.67,
        //   app-1   |       'Rec Yds': 532.2667,
        //   app-1   |       'Rec TDs': 7.6667,
        //   app-1   |       'Rush Att per Game': 0.1,
        //   app-1   |       'Rec per Game': 3.7333,
        //   app-1   |       'Rec Yds per Game': 51.1667,
        //   app-1   |       'Rec TDs per



        newPlayerArray.push(p)
    })

    setRowData(newPlayerArray)

}, [data, classYear, positionForDataTable])


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
          onClick={() => openDialog(params.value)}
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
      cellStyle: {   textAlign: width < 768 ? 'center' : 'center', fontSize: width < 768 ? '12px' : '14px' },
      minWidth: width < 768 ? 95 : 100,
      sortable: true,
      sort: 'desc',
    }
  ];


  

  if(dataSetToDisplay === "prospect grades") {
    baseColDefs.push(
 
    {
      field: "height",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "weight",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "draftRound",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "draftPick",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "AVG PPR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "slot %",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "wide %",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "1D/RR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "1D/Snap",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "MTF/REC %",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "TPRR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "YPRR",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
    {
      field: "YAC/Rec",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
   
  


    
    
    //     p['TGTs/G'] = player.careerAveragedStats['TGTs/G'];
    //     p.RR = player.careerAveragedStats.RR;
   
    
  
    //     p['Man YPRR'] = player.careerAveragedStats['Man YPRR'];
    //     p['Zone YPRR'] = player.careerAveragedStats['Zone YPRR'];
   
    {
      field: "HCT %",
      filter: true,
      floatingFilter: true,
      flex: 1,
      cellStyle: {textAlign: 'center'},
      minWidth: 100,
      sortable: true,
      
    },
  )
    
  }

  

  return baseColDefs;
// };


// function changeDataTableData(value) {

//   baseColDefs = [
//     {
//       field: "name",
//       filter: true,
//       floatingFilter: true,
//       flex: 2,
//       pinned: "left",
//       maxWidth: 160,
//       minWidth: 140,
//       cellStyle: {textAlign: 'center'},
//       cellRenderer: (params) => (
//         <span
//           style={{ cursor: 'pointer', textDecoration: 'none' }}
//           onClick={() => openDialog(params.value)}
//         >
//           {params.value}
//         </span>
//       ),
//     },
//     {
//       field: "Pos",
//       filter: true,
//       floatingFilter: true,
//       
      
//       
//       cellStyle: {textAlign: 'center'},
//     },
//     {
//       field: "class",
//       filter: true,
//       floatingFilter: true,
//       flex: 1,
      
//       minWidth: 70,
//       cellStyle: {textAlign: 'center'},
//     },
//     {
//       field: "Grade",
//       filter: true,
//       floatingFilter: true,
//       flex: 1,
      
//       minWidth: 100,
//       sortable: true,
//       sort: 'desc',
//       cellStyle: {textAlign: 'center'},
//     }
//   ];

//   if(value === "prospect grades") {
//     baseColDefs.push(
 
//     {
//       field: "analytical",
//       filter: true,
//       floatingFilter: true,
//       flex: 1,
      
//       minWidth: 100,
//       sortable: true,
//       cellStyle: {textAlign: 'center'},
//     },
//     {
//       field: "film",
//       filter: true,
//       floatingFilter: true,
//       flex: 1,
      
//       minWidth: 100,
//       sortable: true,
//       cellStyle: {textAlign: 'center'},
//     },
//     {
//       field: "Landing",
//       filter: true,
//       floatingFilter: true,
//       flex: 1,
      
//       minWidth: 100,
//       sortable: true,
//       cellStyle: {textAlign: 'center'},
//     },


   
//   )
    
//   }

//   if(value === "all") {
//     baseColDefs.push(
//       {
//         field: "ruAtt",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 75,
//         minWidth: 75,
        
//       },
//       {
//         field: "ruYds",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 75,
//         minWidth: 75,
        
//       },
//       {
//         field: "ruTD",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 70,
//         minWidth: 70,
        
//       },
//       {
//         field: "Ru Y/A",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 80,
//         minWidth: 80,
//       },
//       {
//         field: "Ru Y/G",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 80,
//         minWidth: 80,
//       },
//       {
//         field: "rec",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 60,
//         minWidth: 60,
//       },
//       {
//         field: "reYds",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 75,
//         minWidth: 75,
//       },
//       {
//         field: "reTD",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 75,
//         minWidth: 75,
//       },
//       {
//         field: "Re Y/R",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 75,
//         minWidth: 75,
//       },
//       {
//         field: "Re Y/G",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 75,
//         minWidth: 75,
//       },
//       {
//         field: "pAtt",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 70,
//         minWidth: 70,
//       },
//       {
//         field: "Cmp",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 70,
//         minWidth: 70,
//       },
//       {
//         field: "cmp%",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 80,
//         minWidth: 80,
//       },
//       {
//         field: "pYds",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 75,
//         minWidth: 75,
//       },
//       {
//         field: "pTD",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 70,
//         minWidth: 70,
//       },
//       {
//         field: "TD%",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 65,
//         minWidth: 65,
//       },
//       {
//         field: "Int",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 55,
//         minWidth: 55,
//       },
//       {
//         field: "Int%",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 65,
//         minWidth: 65,
//       },
//       {
//         field: "Y/A",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 60,
//         minWidth: 60,
//       },
//       {
//         field: "Y/C",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 60,
//         minWidth: 60,
//       },
//       {
//         field: "Y/G",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         maxWidth: 80,
//         minWidth: 80,
//       },
//     );
//   }

//   if(value === "passing") {
 
//     baseColDefs.push(
      
//       {
//         field: "pAtt",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 70,
//       },
//       {
//         field: "Cmp",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 70,
//       },
//       {
//         field: "cmp%",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 80,
//       },
//       {
//         field: "pYds",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 75,
//       },
//       {
//         field: "pTD",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 70,
//       },
//       {
//         field: "TD%",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 65,
//       },
//       {
//         field: "Int",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 55,
//       },
//       {
//         field: "Int%",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 65,
//       },
//       {
//         field: "Y/A",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 60,
//       },
//       {
//         field: "Y/C",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 60,
//       },
//       {
//         field: "Y/G",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 80,
//       },
//     );
//   }


//   if(value === "rushing & receiving") {
 
//     baseColDefs.push(
//       {
//         field: "ruAtt",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 75,
//       },
//       {
//         field: "ruYds",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 75,
//       },
//       {
//         field: "ruTD",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 70,
//       },
//       {
//         field: "Ru Y/A",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 80,
//       },
//       {
//         field: "Ru Y/G",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 80,
//       },
//       {
//         field: "rec",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 60,
//       },
//       {
//         field: "reYds",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 75,
//       },
//       {
//         field: "reTD",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 75,
//       },
//       {
//         field: "Re Y/R",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 75,
//       },
//       {
//         field: "Re Y/G",
//         filter: true,
//         floatingFilter: true,
//         flex: 1,
//         cellStyle: {textAlign: 'center'},
//         minWidth: 75,
//       },
//     )
  // }

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

    const openDialog = (playerName) => {
        console.log("Clicked Player Name:", playerName); // Log the clicked player name
        const player = data.find(item => item.Player_Name.trim().toLowerCase() === playerName.trim().toLowerCase()); // Find the player by name
        console.log("Selected Player Data:", player); // Log the selected player data
        setSelectedPlayer(player); // Set the selected player
        setIsDialogOpen(true); // Open the dialog
    };

    const [comparePlayer, setComparePlayer] = useState(null);

    const closeDialog = () => {
        setIsDialogOpen(false); // Close the dialog
        setSelectedPlayer(null); // Clear the selected player
        setComparePlayer(null)
    };

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
                   onChange={event => {
                     event.target.value === "all" ? setClassYear("all") : setClassYear(+event.target.value)
                    
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

                  {/* <form
                  onSubmit={(event) => {
                   event.preventDefault();
                  }}
                  className={styles.clsSelectForm}
              >
                  <label htmlFor="position-select" className={styles.clsSelectLabel}>
                   Position
                  </label>
        
                  <select
                    id="position-select"
                   value={positionForDataTable}
                   onChange={event => {
                    // console.log("target value", event.target.value)
                    event.target.value === "all" ? setPositionForDataTable("all") : setPositionForDataTable(event.target.value)
                     
                  // console.log(event.target.value, typeof event.target.value, classYear, )
                   }}
                   className={styles.clsSelect}
                  >
                   <option value={"QB"}>
                      QB
                    </option>
                    <option value={"RB"}>
                      RB
                    </option>
                    <option value={"WR"}>
                      WR
                   </option>
                    <option value={"TE"}>
                      TE
                    </option>
                    <option value={"all"}>
                      All
                    </option>
                   
                  </select>
                  </form> */}


                  {/* <form
                  onSubmit={(event) => {
                   event.preventDefault();
                  }}
                  className={styles.clsSelectForm}
              >
                  <label htmlFor="dataSet-select" className={styles.clsSelectLabel}>
                   Dataset
                  </label>
        
                  <select
                    id="dataSet-select"
                   value={dataSetToDisplay}
                   onChange={event => {
                    // console.log("target value", event.target.value)
                    event.target.value === "all" ? setDataSetToDisplay("all") : setDataSetToDisplay(event.target.value)
                    changeDataTableData(event.target.value)
                     
                  // console.log(event.target.value, typeof event.target.value, classYear, )
                   }}
                   className={styles.clsSelect}
                  >
                   <option value={"prospect grades"}>
                      prospect grades
                    </option>
                    <option value={"passing"}>
                      passing
                    </option>
                    
                    <option value={"rushing & receiving"}>
                      rushing & receiving
                    </option>
                    <option value={"all"}>
                      All
                    </option>
                   
                  </select>
                  </form> */}

        </div>

          {/* <div className={styles.clsSelectBtnsWrapper}>
          
          <button className={styles.clsSelectBtn} value={2021} onClick={year2021}>2021</button>
          <button className={styles.clsSelectBtn} onClick={year2022}>2022</button>
          <button className={styles.clsSelectBtn} onClick={year2023}>2023</button>
          <button className={styles.clsSelectBtn} onClick={year2024}>2024</button>
          <button className={styles.clsSelectBtn} onClick={year2025}>2025</button>
          <button className={styles.clsSelectBtn} onClick={yearAll}>21-25</button>

        </div> */}
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
         
        {/* {isDialogOpen && (
            <PlayerDialog player={selectedPlayer} onClose={closeDialog} data={data} comparePlayer={comparePlayer} setComparePlayer={setComparePlayer}/>
        )} */}
        </div> 
        
    );
}