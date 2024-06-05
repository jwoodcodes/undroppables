import styles from "../../table.module.css";
import React from "react";
import PassingTableBody from "../passingTable/PassingTableBody";
import PassingTableHead from "../passingTable/PassingTableHead";

export default function RecievingTable({
  rb1Data,
  rb2Data,
  rb3Data,
  wr1Data,
  wr2Data,
  wr3Data,
  wr4Data,
  te1Data,
  te2Data,
}) {
  const [tableData, setTableData] = React.useState([]);

  let dataArray = [
    rb1Data,
    rb2Data,
    rb3Data,
    wr1Data,
    wr2Data,
    wr3Data,
    wr4Data,
    te1Data,
    te2Data,
  ];

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
    // { label: "Games", accessor: "gamesPlayed" },
    { label: "Target Share %", accessor: "targetShare" },
    { label: "Targets", accessor: "targets" },
    { label: "Catch %", accessor: "catchPercentage" },
    { label: "Receptions", accessor: "receptions" },
    { label: "Yards", accessor: "recievingYards" },
    { label: "TDs", accessor: "recievingTDs" },
  ];

  // projectedNextOffseasonDynastyValue
  //valueDifferenceBetweenCurrentMarketValueAndPNODV

  return (
    <>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <caption className={styles.caption}>Recieving Projections</caption>
          <PassingTableHead columns={columns} />
          <PassingTableBody columns={columns} tableData={tableData} />
        </table>
      </div>
    </>
  );
}
