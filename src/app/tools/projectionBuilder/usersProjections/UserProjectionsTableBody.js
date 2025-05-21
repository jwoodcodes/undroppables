import styles from "./usersProjectionsPage.module.css";
import React from "react";

export default function UserProjectionsTableBody({ data, columns }) {
  let num = 0;
  const [tableData, setTableData] = React.useState(data);

  React.useEffect(() => {
    setTableData(data);
  }, [data]);
  // console.log(tableData);

  return (
    <tbody>
      {tableData &&
        tableData.map((data) => {
          num = num + 1;

          //   if (data.teamName === "BUF") {
          //     //   console.log(Object.entries(data.qb1));
          //     //   console.log(data.qb1);
          //   }
          // console.log(data);

          return (
            <tr key={`${data.id}-${num}`}>
              <td>{num}</td>
              {columns.map(({ accessor }) => {
                //   console.log(data.myOverallRank);

                const tData = data[accessor] ? data[accessor] : "——";
                return <td key={accessor}>{tData}</td>;
              })}
            </tr>
          );
        })}
    </tbody>
  );
}
