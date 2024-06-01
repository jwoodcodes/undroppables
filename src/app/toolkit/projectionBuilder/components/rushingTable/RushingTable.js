import styles from "../../table.module.css";
import React from "react";
import PassingTableBody from "../passingTable/PassingTableBody";
import PassingTableHead from "../passingTable/PassingTableHead";

export default function RushingTable({
  qb1Data,
  qb2Data,
  qb3Data,
  rb1Data,
  rb2Data,
  rb3Data,
}) {
  const [tableData, setTableData] = React.useState([]);

  let dataArray = [qb1Data, qb2Data, qb3Data, rb1Data, rb2Data, rb3Data];

  let data = dataArray.flat();
  //   console.log(data);
  //   console.log(rb1Data);

  // console.log(Object.entries(tableData));

  // console.log(tempTwo);
  // setTableData(tempTwo);

  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  const columns = [
    { label: "Player Name", accessor: "name" },
    { label: "Games", accessor: "gamesPlayed" },
    { label: "Rush Attempts", accessor: "rushAttempts" },
    { label: "Yards per carry", accessor: "YPC" },
    { label: "Rushing Yards", accessor: "RushingYards" },
    { label: "TDs", accessor: "TDs" },
  ];

  // projectedNextOffseasonDynastyValue
  //valueDifferenceBetweenCurrentMarketValueAndPNODV

  return (
    <>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <caption className={styles.caption}>Rushing Projections</caption>
          <PassingTableHead columns={columns} />
          <PassingTableBody columns={columns} tableData={tableData} />
        </table>
      </div>
    </>
  );
}
