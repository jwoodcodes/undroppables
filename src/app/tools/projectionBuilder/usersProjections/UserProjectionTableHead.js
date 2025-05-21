import React from "react";
import styles from "./usersProjectionsPage.module.css";

export default function UserProjectionsTableHead({ columns, handleSorting }) {
  //   console.log(columns);
  const [sortField, setSortField] = React.useState("");
  const [order, setOrder] = React.useState("asc");

  React.useEffect(() => {
    handleSorting("fantasyPoints", "desc");
  }, []);

  const handleSortingChange = (accessor) => {
    // console.log(accessor);
    const sortOrder =
      accessor === sortField && order === "desc" ? "asc" : "desc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        <th className={styles.tableHead}>Rank</th>
        {columns.map(({ label, accessor }) => {
          return (
            <th
              className={styles.tableHead}
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
