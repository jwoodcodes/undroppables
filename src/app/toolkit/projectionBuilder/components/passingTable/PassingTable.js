import styles from "../../table.module.css";
import React from "react";
import PassingTableBody from "./PassingTableBody";
import PassingTableHead from "./PassingTableHead";

export default function PassingTable({ qb1Data, qb2Data, qb3Data }) {
  const [tableData, setTableData] = React.useState([]);

  let dataArray = [qb1Data, qb2Data];
  if (qb3Data) {
    dataArray = [qb1Data, qb2Data, qb3Data];
  }
  let data = dataArray.flat();
  // console.log(data);

  // console.log(Object.entries(tableData));

  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  const columns = [
    { label: "Player Name", accessor: "name" },
    { label: "Games", accessor: "gamesPlayed" },
    // { label: 'Team', accessor: 'team' },
    { label: "% of Tm Attempts", accessor: "percentOfTotalTeamPassAttempts" },
    { label: "PassAtmpts", accessor: "PassAtmpts" },
    { label: "Comp %", accessor: "compPercent" },
    { label: "Comps", accessor: "completions" },
    // { label: "YPA", accessor: "YPA" },
    { label: "pass Yrds", accessor: "passYrds" },
    { label: "YPC", accessor: "YPC" },

    { label: "Pass TDs", accessor: "passingTDs" },
    { label: "INTs", accessor: "INTs" },
  ];

  // projectedNextOffseasonDynastyValue
  //valueDifferenceBetweenCurrentMarketValueAndPNODV

  return (
    <>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <caption className={styles.caption}>Passing Projections</caption>
          <PassingTableHead columns={columns} />
          <PassingTableBody columns={columns} tableData={tableData} />
        </table>
      </div>
    </>
  );
}
