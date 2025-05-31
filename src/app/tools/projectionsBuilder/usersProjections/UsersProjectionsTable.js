import styles from "./usersProjectionsPage.module.css";
import React from "react";
import UserProjectionsTableBody from "./UserProjectionsTableBody";
import UserProjectionsTableHead from "./UserProjectionTableHead";

export default function UsersProjectionsTable({ data, positionToShow }) {
  // console.log(data);
  const [tableData, setTableData] = React.useState(data);

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

  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleSorting = (sortField, sortOrder) => {
    console.log(sortField, sortOrder);

    if (sortField) {
      // console.log(sortField);
      let sorted = [...tableData].sort((a, b) => {
        console.log(a, sortField);
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;

        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });

      setTableData(sorted);
    }
  };

  return (
    <>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <caption className={styles.caption}>Your Fantasy Projections</caption>
          <UserProjectionsTableHead
            columns={columns}
            handleSorting={handleSorting}
          />
          <UserProjectionsTableBody columns={columns} data={tableData} />
        </table>
      </div>
    </>
  );
}
