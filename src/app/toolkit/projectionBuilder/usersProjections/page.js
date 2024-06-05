"use client";
import React from "react";
import allTeamsList from "../components/data/allTeamsList";
import styles from "./usersProjectionsPage.module.css";
import UsersProjectionsTable from "./UsersProjectionsTable";
import Spinner from "../components/Spinner";
import Link from "next/link";

export default function UsersProjections() {
  const [positionToShow, setPositionToShow] = React.useState("QB");
  const [tableData, setTableData] = React.useState([]);
  const [usersAllTeamsList, setUsersAllTeamsList] = React.useState(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedValue = window.localStorage.getItem("usersAllTeamsList");
    return JSON.parse(storedValue) || allTeamsList;
  });

  // React.useEffect(() => {
  //   window.localStorage.setItem(
  //     "usersAllTeamsList",
  //     JSON.stringify(usersAllTeamsList)
  //   );
  // }, [usersAllTeamsList]);

  // console.log(usersAllTeamsList);

  function Flex(event) {
    setPositionToShow("FLEX");
  }
  function Qb(event) {
    setPositionToShow("QB");
  }
  function Rb(event) {
    setPositionToShow("RB");
  }
  function Wr(event) {
    setPositionToShow("WR");
  }
  function Te(event) {
    setPositionToShow("TE");
  }

  let dataToUse = [];
  let qbsDataArray = [];
  let rbsDataArray = [];
  let wrsDataArray = [];
  let tesDataArray = [];
  let flexDataArray = [];

  usersAllTeamsList.map((data) => {
    if (data.qb1) {
      // qbsDataArray.push(data.qb1);
      if (!data.qb1.name) {
      } else {
        qbsDataArray.push(data.qb1);
      }
    }
    if (data.qb2) {
      // qbsDataArray.push(data.qb2);
      if (!data.qb2.name) {
      } else {
        qbsDataArray.push(data.qb2);
      }
    }
    if (data.qb3) {
      if (!data.qb3.name) {
      } else {
        qbsDataArray.push(data.qb3);
      }
    }

    // RB

    if (data.rb1) {
      // qbsDataArray.push(data.rb1);
      if (!data.rb1.name) {
      } else {
        rbsDataArray.push(data.rb1);
        flexDataArray.push(data.rb1);
      }
    }
    if (data.rb2) {
      // qbsDataArray.push(data.rb2);
      if (!data.rb2.name) {
      } else {
        rbsDataArray.push(data.rb2);
        flexDataArray.push(data.rb2);
      }
    }
    if (data.rb3) {
      if (!data.rb3.name) {
      } else {
        rbsDataArray.push(data.rb3);
        flexDataArray.push(data.rb3);
      }
    }

    // WR

    if (data.wr1) {
      // qbsDataArray.push(data.wr1);
      if (!data.wr1.name) {
      } else {
        wrsDataArray.push(data.wr1);
        flexDataArray.push(data.wr1);
      }
    }
    if (data.wr2) {
      // wrsDataArray.push(data.wr2);
      if (!data.wr2.name) {
      } else {
        wrsDataArray.push(data.wr2);
        flexDataArray.push(data.wr2);
      }
    }
    if (data.wr3) {
      if (!data.wr3.name) {
      } else {
        wrsDataArray.push(data.wr3);
        flexDataArray.push(data.wr3);
      }
    }
    if (data.wr4) {
      if (!data.wr4.name) {
      } else {
        wrsDataArray.push(data.wr4);
        flexDataArray.push(data.wr4);
      }
    }

    //TE

    if (data.te1) {
      // tesDataArray.push(data.te1);
      if (!data.te1.name) {
      } else {
        tesDataArray.push(data.te1);
        flexDataArray.push(data.te1);
      }
    }
    if (data.te2) {
      // tesDataArray.push(data.te2);
      if (!data.te2.name) {
      } else {
        tesDataArray.push(data.te2);
        flexDataArray.push(data.te2);
      }
    }
  });

  React.useEffect(() => {
    setTableData(qbsDataArray);
  }, [usersAllTeamsList]);

  function posToUse() {
    // console.log(teDataArray);
    if (positionToShow === "QB") {
      //   console.log(player);
      dataToUse = qbsDataArray;
      return qbsDataArray;
    }
    if (positionToShow === "RB") {
      //   console.log(player);
      dataToUse = rbsDataArray;
      return rbsDataArray;
    }
    if (positionToShow === "WR") {
      //   console.log(player);
      dataToUse = wrsDataArray;
      return wrsDataArray;
    }
    if (positionToShow === "TE") {
      //   console.log(player);
      dataToUse = tesDataArray;
      return tesDataArray;
    }
    if (positionToShow === "FLEX") {
      //   console.log(player);
      dataToUse = flexDataArray;
      return flexDataArray;
    }
  }
  posToUse();

  return (
    <div>
      {usersAllTeamsList === allTeamsList ? (
        <div>No saved user projections yet</div>
      ) : (
        <div className={styles.wholePageWrapper}>
          <div className={styles.linkWrapper}>
            <Link
              href={"/toolkit/projectionBuilder"}
              className={styles.projectionsLink}
            >
              &larr; back to creating team projecitons page
            </Link>
          </div>
          <div className={styles.btnsWrapper}>
            <button className={styles.posBtn} onClick={Qb}>
              QB
            </button>
            <button className={styles.posBtn} onClick={Rb}>
              RB
            </button>
            <button className={styles.posBtn} onClick={Wr}>
              WR
            </button>
            <button className={styles.posBtn} onClick={Te}>
              TE
            </button>
            <button className={styles.posBtn} onClick={Flex}>
              FLEX
            </button>
          </div>
          <UsersProjectionsTable
            data={dataToUse}
            positionToShow={positionToShow}
          />
        </div>
      )}
    </div>
  );
}
