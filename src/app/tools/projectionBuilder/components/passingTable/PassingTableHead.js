import React from "react";
import styles from "../../table.module.css";

export default function PassingTableHead({ columns }) {
  //   console.log(columns);

  // React.useEffect(() => {
  //   handleSorting("myOverallRank", "asc");
  // }, []);

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          return (
            <th className={styles.tableHead} key={accessor}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
