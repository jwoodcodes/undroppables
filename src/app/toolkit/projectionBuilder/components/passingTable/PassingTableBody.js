import styles from "../../table.module.css";

export default function PassingTableBody({ tableData, columns }) {
  let num = 0;

  // console.log(tableData);

  return (
    <tbody>
      {tableData &&
        tableData.map((data) => {
          num = num + 1;
          return (
            <tr key={`${data.id}-${num}`}>
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
