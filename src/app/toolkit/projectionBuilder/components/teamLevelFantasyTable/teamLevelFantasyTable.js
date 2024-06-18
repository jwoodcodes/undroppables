import styles from "../../table.module.css";
import React from "react";
import PassingTableBody from "../passingTable/PassingTableBody";
import PassingTableHead from "../passingTable/PassingTableHead";
import allTeamsList from "../data/allTeamsList";

export default function TeamLevelFantasyTable({
  qb1Data,
  qb2Data,
  qb3Data,
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

  // qb1Data.fantasyPoints =
  //   qb1Data.passYrds * 0.04 +
  //   qb1Data.passingTDs * 6 +
  //   qb1Data.INTs * -2 +
  //   qb1Data.RushingYards * 0.1 +
  //   qb1Data.TDs * 6 +
  //   qb1Data.receivingYards * 0.1 +
  //   qb1Data.receivingTDs * 6;

  qb1Data.fantasyPoints = +(
    +(qb1Data.passYrds * 0.04) +
    +(qb1Data.passingTDs * 6) -
    +(qb1Data.INTs * 2) +
    +(qb1Data.RushingYards * 0.1) +
    +(qb1Data.TDs * 6)
  ).toFixed(1);
  qb2Data.fantasyPoints = +(
    +(qb2Data.passYrds * 0.04) +
    +(qb2Data.passingTDs * 6) -
    +(qb2Data.INTs * 2) +
    +qb2Data.RushingYards * 0.1 +
    +(qb2Data.TDs * 6)
  ).toFixed(1);
  qb3Data.fantasyPoints = +(
    +(qb3Data.passYrds * 0.04) +
    +(qb3Data.passingTDs * 6) -
    +(qb3Data.INTs * 2) +
    +qb3Data.RushingYards * 0.1 +
    +(qb3Data.TDs * 6)
  ).toFixed(1);

  rb1Data.fantasyPoints = +(
    +(rb1Data.RushingYards * 0.1) +
    +(rb1Data.TDs * 6) +
    +(rb1Data.receptions * 1) +
    +(rb1Data.recievingYards * 0.1) +
    +(rb1Data.recievingTDs * 6)
  ).toFixed(1);

  rb2Data.fantasyPoints = +(
    +(rb2Data.RushingYards * 0.1) +
    +(rb2Data.TDs * 6) +
    +(rb2Data.receptions * 1) +
    +(rb2Data.recievingYards * 0.1) +
    +(rb2Data.recievingTDs * 6)
  ).toFixed(1);

  rb3Data.fantasyPoints = +(
    +(rb3Data.RushingYards * 0.1) +
    +(rb3Data.TDs * 6) +
    +(rb3Data.receptions * 1) +
    +(rb3Data.recievingYards * 0.1) +
    +(rb3Data.recievingTDs * 6)
  ).toFixed(1);

  wr1Data.fantasyPoints = +(
    +(wr1Data.RushingYards * 0.1) +
    +(wr1Data.TDs * 6) +
    +(wr1Data.receptions * 1) +
    +(wr1Data.recievingYards * 0.1) +
    +(wr1Data.recievingTDs * 6)
  ).toFixed(1);

  wr2Data.fantasyPoints = +(
    +(wr2Data.RushingYards * 0.1) +
    +(wr2Data.TDs * 6) +
    +(wr2Data.receptions * 1) +
    +(wr2Data.recievingYards * 0.1) +
    +(wr2Data.recievingTDs * 6)
  ).toFixed(1);

  wr3Data.fantasyPoints = +(
    +(wr3Data.RushingYards * 0.1) +
    +(wr3Data.TDs * 6) +
    +(wr3Data.receptions * 1) +
    +(wr3Data.recievingYards * 0.1) +
    +(wr3Data.recievingTDs * 6)
  ).toFixed(1);

  wr4Data.fantasyPoints = +(
    +(wr4Data.RushingYards * 0.1) +
    +(wr4Data.TDs * 6) +
    +(wr4Data.receptions * 1) +
    +(wr4Data.recievingYards * 0.1) +
    +(wr4Data.recievingTDs * 6)
  ).toFixed(1);

  te1Data.fantasyPoints = +(
    +(te1Data.receptions * 1) +
    +(te1Data.recievingYards * 0.1) +
    +(te1Data.recievingTDs * 6)
  ).toFixed(1);

  if (te2Data) {
    te2Data.fantasyPoints = +(
      +(te2Data.receptions * 1) +
      +(te2Data.recievingYards * 0.1) +
      +(te2Data.recievingTDs * 6)
    ).toFixed(1);
  }

  // console.log(
  //   +(rb1Data.RushingYards * 0.1),
  //   +(rb1Data.TDs * 6),
  //   +(rb1Data.receptions * 1),
  //   +(rb1Data.recievingYards * 0.1),
  //   +(rb1Data.recievingTDs * 6)
  // );

  let dataArray = [
    qb1Data,
    qb2Data,
    qb3Data,
    rb1Data,
    rb2Data,
    rb3Data,
    wr1Data,
    wr2Data,
    wr3Data,
    wr4Data,
    te1Data,
  ];

  if (te2Data) {
    dataArray = [
      qb1Data,
      qb2Data,
      qb3Data,
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
  }

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
    { label: "pass Yrds", accessor: "passYrds" },
    { label: "Pass TDs", accessor: "passingTDs" },
    { label: "INTs", accessor: "INTs" },
    { label: "Rushing Yards", accessor: "RushingYards" },
    { label: "RuTDs", accessor: "TDs" },
    { label: "Receptions", accessor: "receptions" },
    { label: "Recieving Yards", accessor: "recievingYards" },
    { label: "ReTDs", accessor: "recievingTDs" },
    { label: "Fantasy Points", accessor: "fantasyPoints" },
  ];

  // projectedNextOffseasonDynastyValue
  //valueDifferenceBetweenCurrentMarketValueAndPNODV

  return (
    <>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <caption className={styles.caption}>Team Fantasy Projections</caption>
          <PassingTableHead columns={columns} />
          <PassingTableBody columns={columns} tableData={tableData} />
        </table>
      </div>
    </>
  );
}
