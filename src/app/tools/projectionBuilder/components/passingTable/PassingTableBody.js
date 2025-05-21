import styles from "../../table.module.css";

export default function PassingTableBody({ tableData, columns }) {
  let num = 0;

  // console.log(tableData);

  return (
    <tbody>
      {tableData &&
        tableData.map((data) => {
          num = num + 1;
          // console.log(data);
          if (data) {
            return (
              <tr key={`${data.name}-${num}`}>
                {columns.map(({ accessor }) => {
                  // console.log(data, accessor);

                  if (data) {
                    const tData = data[accessor] ? data[accessor] : "——";
                    return <td key={accessor}>{tData}</td>;
                  }
                })}
              </tr>
            );
          }
        })}
    </tbody>
  );
}
