"use client";
import React from "react";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import Link from "next/link";
import allTeamsList from "./data/allTeamsList";
import previousYearTeamData from "./data/previousYearTeamData";
import axios from "axios";
import PassingTable from "./passingTable/PassingTable";
import RushingTable from "./rushingTable/RushingTable";
import RecievingTable from "./recievingTable/RecievingTable";
import TeamLevelFantasyTable from "./teamLevelFantasyTable/teamLevelFantasyTable";
// import QbDataEntryAndTable from "./qbDataEntryAndTable";
// import DataFetcher from "./data/dataFetcher";
// import playerData from "./data/dataFetcher";

export default function ConstructProjections({ dataTest, sleeperData }) {
  const [team, setTeam] = React.useState("");
  const [teamTotalProjectedPlays, setTeamTotalProjectedPlays] =
    React.useState();
  const [passPercecntage, setPassPercecntage] = React.useState();
  const [runPercecntage, setRunPercecntage] = React.useState();
  const [totalPassPlays, setTotalPassPlays] = React.useState();
  const [totalRunPlays, setTotalRunPlays] = React.useState();

  const [teamQB1, setTeamQB1] = React.useState();
  const [teamQB2, setTeamQB2] = React.useState();
  const [teamQB3, setTeamQB3] = React.useState();

  const [isTeamQB3, setIsTeamQB3] = React.useState(false);

  const [showRBs, setShowRBs] = React.useState(false);

  const [teamRB1, setTeamRB1] = React.useState();
  const [teamRB2, setTeamRB2] = React.useState();
  const [teamRB3, setTeamRB3] = React.useState();

  const [teamWR1, setTeamWR1] = React.useState();
  const [teamWR2, setTeamWR2] = React.useState();
  const [teamWR3, setTeamWR3] = React.useState();
  const [teamWR4, setTeamWR4] = React.useState();

  const [teamTE1, setTeamTE1] = React.useState();
  const [teamTE2, setTeamTE2] = React.useState();

  const [
    selectedTeamsUserSelectedPlayersToProjectArray,
    setSelectedTeamsUserSelectedPlayersToProjectArray,
  ] = React.useState([]);

  const [teamTotalTargetShare, setTeamTotalTargetShare] = React.useState();

  const [allQBDataArray, setAllQBDataArray] = React.useState([]);

  //

  const [qb1GamesPlayed, setQb1GamesPlayed] = React.useState("");
  const [qb2GamesPlayed, setQb2GamesPlayed] = React.useState("");
  const [qb3GamesPlayed, setQb3GamesPlayed] = React.useState("");

  const [qb1PercentOfTeamPassAttempts, setQb1PercentOfTeamPassAttempts] =
    React.useState();
  const [qb2PercentOfTeamPassAttempts, setQb2PercentOfTeamPassAttempts] =
    React.useState();
  const [qb3PercentOfTeamPassAttempts, setQb3PercentOfTeamPassAttempts] =
    React.useState();

  const [
    totalPercentOfPassAttemptsLeftToDistribute,
    setTotalPercentOfPassAttemptsLeftToDistribute,
  ] = React.useState(100);

  const [qb1PassAttempts, setQb1PassAttempts] = React.useState();
  const [qb2PassAttempts, setQb2PassAttempts] = React.useState();
  const [qb3PassAttempts, setQb3PassAttempts] = React.useState();

  const [qb1CompPercent, setQb1CompPercent] = React.useState();
  const [qb2CompPercent, setQb2CompPercent] = React.useState();
  const [qb3CompPercent, setQb3CompPercent] = React.useState();

  const [qb1Completions, setQb1Completions] = React.useState();
  const [qb2Completions, setQb2Completions] = React.useState();
  const [qb3Completions, setQb3Completions] = React.useState();

  const [qb1PassingYards, setQb1PassingYards] = React.useState("");
  const [qb2PassingYards, setQb2PassingYards] = React.useState("");
  const [qb3PassingYards, setQb3PassingYards] = React.useState("");

  const [qb1PassTDs, setQb1PassTDs] = React.useState();
  const [qb2PassTDs, setQb2PassTDs] = React.useState();
  const [qb3PassTDs, setQb3PassTDs] = React.useState();

  const [qb1INTs, setQb1INTs] = React.useState();
  const [qb2INTs, setQb2INTs] = React.useState();
  const [qb3INTs, setQb3INTs] = React.useState();

  const [teamTotalPassingYards, setTeamTotalPassingYards] = React.useState("");

  // const [usersAllTeamsList, setUsersAllTeamsList] = React.useState(() => {
  //   const storedValue = window.localStorage.getItem("usersAllTeamsList");
  //   return JSON.parse(storedValue) || allTeamsList;
  // });

  // console.log(sleeperData.JustSleeperNamesTeamsAndPostionsArray);
  const sleeperDataArray = sleeperData.JustSleeperNamesTeamsAndPostionsArray;
  let tempDataTest = dataTest.allPlayerData;

  sleeperDataArray.map((sleeperPlayer) => {
    // console.log(sleeperPlayer.name);
    tempDataTest.map((dataTestPlayer) => {
      if (sleeperPlayer.name === dataTestPlayer.name) {
        if (sleeperPlayer.team === null) {
          // console.log(
          //   dataTestPlayer.name,
          //   sleeperPlayer.team,
          //   dataTestPlayer.team
          // );
          sleeperPlayer.team = dataTestPlayer.team;
        }
      }
    });
  });

  const [usersAllTeamsList, setUsersAllTeamsList] =
    React.useState(allTeamsList);

  React.useEffect(() => {
    const storedValue = window.localStorage.getItem("usersAllTeamsList");

    setUsersAllTeamsList(storedValue ? JSON.parse(storedValue) : allTeamsList);
  }, []);

  React.useEffect(() => {
    console.log("ran");
    !showRBs && teamQB3
      ? setShowRBs(true)
      : !showRBs && teamQB2 && !isTeamQB3
      ? setShowRBs(true)
      : console.log("ran here", showRBs, teamQB2, isTeamQB3);
  }, [teamQB2, teamQB3]);

  // console.log(usersAllTeamsList);

  function saveUsersProjectionData(data, team) {
    // console.log(data);
    usersAllTeamsList[team] = data;
    console.log(usersAllTeamsList);
    setUsersAllTeamsList(usersAllTeamsList);

    // console.log("ran here");
    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
  }

  function clearUsersQBsProjectionData(data, team) {
    // console.log(data);
    data.qb1 = { name: data.qb1.name };
    data.qb2 = { name: data.qb2.name };
    data.qb3 = { name: data.qb2.name };
    usersAllTeamsList[team] = data;
    setUsersAllTeamsList(usersAllTeamsList);

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
    window.location.reload();
  }

  function clearUsersRushingProjectionData(data, team) {
    console.log(data);
    data.qb1 = {
      name: data.qb1.name,
      INTs: data.qb1.INTs,
      PassAtmpts: data.qb1.PassAtmpts,
      passingTDs: data.qb1.passingTDs,
      YPA: data.qb1.YPA,
      YPC: data.qb1.YPC,
      compPercent: data.qb1.compPercent,
      completions: data.qb1.completions,
      gamesPlayed: data.qb1.gamesPlayed,
      percentOfTotalTeamPassAttempts: data.qb1.percentOfTotalTeamPassAttempts,
      passYrds: data.qb1.passYrds,
    };
    data.qb2 = {
      name: data.qb2.name,
      INTs: data.qb2.INTs,
      PassAtmpts: data.qb2.PassAtmpts,
      passingTDs: data.qb2.passingTDs,
      YPA: data.qb2.YPA,
      YPC: data.qb2.YPC,
      compPercent: data.qb2.compPercent,
      completions: data.qb2.completions,
      gamesPlayed: data.qb2.gamesPlayed,
      percentOfTotalTeamPassAttempts: data.qb2.percentOfTotalTeamPassAttempts,
      passYrds: data.qb2.passYrds,
    };
    data.qb3 = {
      name: data.qb3.name,
      INTs: data.qb3.INTs,
      PassAtmpts: data.qb3.PassAtmpts,
      passingTDs: data.qb3.passingTDs,
      YPA: data.qb3.YPA,
      YPC: data.qb3.YPC,
      compPercent: data.qb3.compPercent,
      completions: data.qb3.completions,
      gamesPlayed: data.qb3.gamesPlayed,
      percentOfTotalTeamPassAttempts: data.qb3.percentOfTotalTeamPassAttempts,
      passYrds: data.qb3.passYrds,
    };
    data.rb1 = {
      name: data.rb1.name,
      targetShare: data.rb1.targetShare,
      targets: data.rb1.targets,
      catchPercentage: data.rb1.catchPercentage,
      receptions: data.rb1.receptions,
      recievingYards: data.rb1.recievingYards,
      recievingTDs: data.rb1.recievingTDs,
    };
    data.rb2 = {
      name: data.rb2.name,
      targetShare: data.rb2.targetShare,
      targets: data.rb2.targets,
      catchPercentage: data.rb2.catchPercentage,
      receptions: data.rb2.receptions,
      recievingYards: data.rb2.recievingYards,
      recievingTDs: data.rb2.recievingTDs,
    };
    data.rb3 = {
      name: data.rb3.name,
      targetShare: data.rb3.targetShare,
      targets: data.rb3.targets,
      catchPercentage: data.rb3.catchPercentage,
      receptions: data.rb3.receptions,
      recievingYards: data.rb3.recievingYards,
      recievingTDs: data.rb3.recievingTDs,
    };

    data.wr1 = {
      name: data.wr1.name,
      targetShare: data.wr1.targetShare,
      targets: data.wr1.targets,
      catchPercentage: data.wr1.catchPercentage,
      receptions: data.wr1.receptions,
      recievingYards: data.wr1.recievingYards,
      recievingTDs: data.wr1.recievingTDs,
    };
    data.wr2 = {
      name: data.wr2.name,
      targetShare: data.wr2.targetShare,
      targets: data.wr2.targets,
      catchPercentage: data.wr2.catchPercentage,
      receptions: data.wr2.receptions,
      recievingYards: data.wr2.recievingYards,
      recievingTDs: data.wr2.recievingTDs,
    };
    data.wr3 = {
      name: data.wr3.name,
      targetShare: data.wr3.targetShare,
      targets: data.wr3.targets,
      catchPercentage: data.wr3.catchPercentage,
      receptions: data.wr3.receptions,
      recievingYards: data.wr3.recievingYards,
      recievingTDs: data.wr3.recievingTDs,
    };
    data.wr4 = {
      name: data.wr4.name,
      targetShare: data.wr4.targetShare,
      targets: data.wr4.targets,
      catchPercentage: data.wr4.catchPercentage,
      receptions: data.wr4.receptions,
      recievingYards: data.wr4.recievingYards,
      recievingTDs: data.wr4.recievingTDs,
    };
    data.te1 = {
      name: data.te1.name,
      targetShare: data.te1.targetShare,
      targets: data.te1.targets,
      catchPercentage: data.te1.catchPercentage,
      receptions: data.te1.receptions,
      recievingYards: data.te1.recievingYards,
      recievingTDs: data.te1.recievingTDs,
    };
    data.te2 = {
      name: data.te2.name,
      targetShare: data.te2.targetShare,
      targets: data.te2.targets,
      catchPercentage: data.te2.catchPercentage,
      receptions: data.te2.receptions,
      recievingYards: data.te2.recievingYards,
      recievingTDs: data.te2.recievingTDs,
    };
    usersAllTeamsList[team] = data;
    setUsersAllTeamsList(usersAllTeamsList);

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
    window.location.reload();
  }

  function clearUsersRecievingProjectionData(data, team) {
    // console.log(data);
    data.rb1 = {
      name: data.rb1.name,
      RushingYards: data.rb1.RushingYards,
      TDs: data.rb1.TDs,
      YPCarry: data.rb1.YPCarry,
      rushAttempts: data.rb1.rushAttempts,
    };
    data.rb2 = {
      name: data.rb2.name,
      RushingYards: data.rb2.RushingYards,
      TDs: data.rb2.TDs,
      YPCarry: data.rb2.YPCarry,
      rushAttempts: data.rb2.rushAttempts,
    };
    data.rb3 = {
      name: data.rb3.name,
      RushingYards: data.rb3.RushingYards,
      TDs: data.rb3.TDs,
      YPCarry: data.rb3.YPCarry,
      rushAttempts: data.rb3.rushAttempts,
    };

    data.wr1 = {
      name: data.wr1.name,
      RushingYards: data.wr1.RushingYards,
      TDs: data.wr1.TDs,
      YPCarry: data.wr1.YPCarry,
      rushAttempts: data.wr1.rushAttempts,
    };
    data.wr2 = {
      name: data.wr2.name,
      RushingYards: data.wr2.RushingYards,
      TDs: data.wr2.TDs,
      YPCarry: data.wr2.YPCarry,
      rushAttempts: data.wr2.rushAttempts,
    };
    data.wr3 = {
      name: data.wr3.name,
      RushingYards: data.wr3.RushingYards,
      TDs: data.wr3.TDs,
      YPCarry: data.wr3.YPCarry,
      rushAttempts: data.wr3.rushAttempts,
    };
    data.wr4 = {
      name: data.wr4.name,
      RushingYards: data.wr4.RushingYards,
      TDs: data.wr4.TDs,
      YPCarry: data.wr4.YPCarry,
      rushAttempts: data.wr4.rushAttempts,
    };
    data.te1 = { name: data.te1.name };
    data.te2 = { name: data.te1.name };
    usersAllTeamsList[team] = data;
    setUsersAllTeamsList(usersAllTeamsList);

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
    window.location.reload();
  }

  // React.useEffect(() => {
  //   console.log("ran here");
  //   window.localStorage.setItem(
  //     "usersAllTeamsList",
  //     JSON.stringify(usersAllTeamsList)
  //   );
  // }, [usersAllTeamsList]);

  let tempTotalPassPlays = 0;
  let tempTotalRunPlays = 0;

  let qb1Data = {};
  let qb2Data = {};
  let qb3Data = {};

  let rb1Data = {};
  let rb2Data = {};
  let rb3Data = {};

  let wr1Data = {};
  let wr2Data = {};
  let wr3Data = {};
  let wr4Data = {};

  let te1Data = {};
  let te2Data = {};

  let teamTotal = {};

  let totalProjectedPercentOfTeamPassAttempts = 0;

  // function logTeam(teamData) {
  //   console.log(topLeveLTeam);
  // }

  //   if (
  //     qb1PercentOfTeamPassAttempts &&
  //     !qb2PercentOfTeamPassAttempts &&
  //     !qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(qb1PercentOfTeamPassAttempts);
  //   }

  //   if (
  //     qb2PercentOfTeamPassAttempts &&
  //     !qb1PercentOfTeamPassAttempts &&
  //     !qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(qb2PercentOfTeamPassAttempts);
  //   }

  //   if (
  //     qb3PercentOfTeamPassAttempts &&
  //     !qb1PercentOfTeamPassAttempts &&
  //     !qb2PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(qb3PercentOfTeamPassAttempts);
  //   }
  //   if (
  //     qb1PercentOfTeamPassAttempts &&
  //     qb2PercentOfTeamPassAttempts &&
  //     !qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(
  //       qb1PercentOfTeamPassAttempts + qb2PercentOfTeamPassAttempts
  //     );
  //   }

  //   if (
  //     qb1PercentOfTeamPassAttempts &&
  //     !qb2PercentOfTeamPassAttempts &&
  //     qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(
  //       qb1PercentOfTeamPassAttempts + qb3PercentOfTeamPassAttempts
  //     );
  //   }

  //   if (
  //     !qb1PercentOfTeamPassAttempts &&
  //     qb2PercentOfTeamPassAttempts &&
  //     qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(
  //       qb2PercentOfTeamPassAttempts + qb3PercentOfTeamPassAttempts
  //     );
  //   }

  //   if (
  //     qb1PercentOfTeamPassAttempts &&
  //     qb2PercentOfTeamPassAttempts &&
  //     qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(
  //       qb1PercentOfTeamPassAttempts +
  //         qb2PercentOfTeamPassAttempts +
  //         qb3PercentOfTeamPassAttempts
  //     );
  //   }
  // }

  return (
    <div>
      <div className={styles.linkWrapper}>
        <Link
          href={"/toolkit/projectionBuilder/usersProjections"}
          className={styles.projectionsLink}
        >
          view all your projections &rarr;
        </Link>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className={styles.teamSelectWrapper}
      >
        <label htmlFor="team-select" className={styles.teamSelectLabel}>
          Select team to start projections:
        </label>

        <select
          id="team-select"
          value={team}
          onChange={(event) => {
            setTeam(event.target.value);
          }}
          className={styles.teamSelectSelect}
          placeholder="Select Team"
        >
          <option value={"SELECT"}></option>
          {allTeamsList.map((team) => (
            <option key={team.teamName} value={team.teamName}>
              {team.teamName}
            </option>
          ))}
        </select>
      </form>

      <p className={styles.selectedTeamText}>
        <strong>Selected Team:</strong>
        {"    "}
        {"   "}
        {team}
      </p>

      {usersAllTeamsList.map((topLeveLTeam) => {
        if (team === topLeveLTeam.teamName) {
          // console.log(topLeveLTeam);
          return (
            <div key={topLeveLTeam.teamName}>
              <div
                className={
                  styles.lastYearsTeamDataDisplayAndSelectingTotalProjectedPlaysWrapper
                }
              >
                <div>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();

                      // Do something with `teamTotalProjectedPlays` here
                    }}
                    className={styles.teamProjectedPlaysFormWrapper}
                    key={`${topLeveLTeam.teamName}-form` || "form"}
                  >
                    <label
                      htmlFor="teamTotalProjectedPlays-field"
                      className={styles.teamSelectLabel}
                    >
                      Total projected team plays:
                    </label>
                    <input
                      id="teamTotalProjectedPlays-field"
                      value={topLeveLTeam.teamTotalProjectedPlays}
                      type="number"
                      max={1600}
                      onChange={(event) => {
                        if (
                          event.target.value > -1 &&
                          event.target.value < 1600
                        ) {
                          setTeamTotalProjectedPlays(event.target.value);
                          if (!topLeveLTeam.teamTotalProjectedPlays) {
                            topLeveLTeam.teamTotalProjectedPlays =
                              +event.target.value;
                          }
                          if (
                            topLeveLTeam.teamTotalProjectedPlays &&
                            +event.target.value !==
                              topLeveLTeam.teamTotalProjectedPlays
                          ) {
                            topLeveLTeam.teamTotalProjectedPlays =
                              +event.target.value;
                          }
                        }
                      }}
                      className={styles.teamSelectSelect}
                    />
                  </form>

                  <p className={styles.selectedTeamText}>
                    <strong>Total team plays:</strong>
                    {"    "}{" "}
                    {topLeveLTeam.teamTotalProjectedPlays ||
                      "Enter total plays number"}
                  </p>

                  {topLeveLTeam.teamTotalProjectedPlays > 700 && (
                    <div>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();

                          // Do something with `teamTotalProjectedPlays` here
                        }}
                        className={styles.teamProjectedPlaysFormWrapper}
                      >
                        <label
                          htmlFor="passPercecntage-field"
                          className={styles.teamSelectLabel}
                        >
                          Team projected pass percentage
                        </label>
                        <input
                          id="passPercecntage-field"
                          value={topLeveLTeam.teamPassPercentage}
                          type="number"
                          onChange={(event) => {
                            if (
                              // event.target.value > -5 &&
                              event.target.value < 100
                            ) {
                              setPassPercecntage(event.target.value);
                              topLeveLTeam.teamPassPercentage =
                                +event.target.value;
                              let runPercent = 100 - event.target.value;
                              // console.log(passPercecntage);
                              setRunPercecntage(runPercent);
                              topLeveLTeam.teamRunPercentage = runPercent;

                              // let decimalPassPercent = +passPercecntage / 10;

                              // tempTotalPassPlays =
                              //   +teamTotalProjectedPlays * decimalPassPercent;
                              // setTotalPassPlays(+tempTotalPassPlays);
                              setTotalPassPlays(
                                +(
                                  teamTotalProjectedPlays *
                                  (event.target.value / 100)
                                ).toFixed(0)
                              );
                              topLeveLTeam.totalPassPlays = +(
                                teamTotalProjectedPlays *
                                (event.target.value / 100)
                              ).toFixed(0);
                              setTotalRunPlays(
                                +(
                                  teamTotalProjectedPlays *
                                  ((100 - event.target.value) / 100)
                                ).toFixed(0)
                              );
                              topLeveLTeam.totalRunPlays = +(
                                teamTotalProjectedPlays *
                                ((100 - +event.target.value) / 100)
                              ).toFixed(0);
                            }
                          }}
                          className={styles.teamSelectSelect}
                        />
                      </form>

                      <p className={styles.runAndPassPercentText}>
                        <strong>Projected pass percentage:</strong>
                        {"    "}{" "}
                        {topLeveLTeam.teamPassPercentage ||
                          "Enter Value between 0 and 100"}
                      </p>
                      <p className={styles.runAndPassPercentText}>
                        <strong>Projected run percentage:</strong>
                        {"    "}{" "}
                        {topLeveLTeam.teamRunPercentage ||
                          "Enter projected pass percentage"}
                      </p>

                      {topLeveLTeam.totalPassPlays && (
                        <div>
                          <p className={styles.runAndPassPercentText}>
                            <strong>Total pass plays:</strong>
                            {"    "}{" "}
                            {topLeveLTeam.totalPassPlays ||
                              "Enter projected pass percentage"}
                          </p>
                          <p className={styles.runAndPassPercentText}>
                            <strong>Total run plays:</strong>
                            {"    "}{" "}
                            {topLeveLTeam.totalRunPlays ||
                              "Enter projected pass percentage"}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className={styles.lastYearsTeamInfoOutsideWrapper}>
                  <div className={styles.selectedTeamPreviousYearLabel}>
                    Selected teams previous year team stats
                  </div>

                  <div>
                    <div className={styles.lastYearsTeamInfoInsideWrapper}>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Total Plays</p>
                        <div className={styles.previousYearsTotalPlaysNode}>
                          <strong>{topLeveLTeam.totalPlays}</strong>
                        </div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Total Plays Rank</p>
                        <div>{topLeveLTeam.totalPlaysRank}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Seconds Per Snap</p>
                        <div>{topLeveLTeam.secondsPerSnap}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Seconds Per Snap Rank</p>
                        <div>{topLeveLTeam.secPerSnapRank}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Team pass percentage</p>
                        <div>{topLeveLTeam.passPercecntage}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Team run percentage</p>
                        <div>{topLeveLTeam.runPercecntage}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>New Head Coach</p>
                        <div>{topLeveLTeam.newHeadCoach}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>New Offensive Coordinator</p>
                        <div>{topLeveLTeam.newOffensiveCoordinator}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {sleeperDataArray.map((player) => {
                if (player.team === team) {
                  // console.log(player);
                  //
                  // QB/passing
                  //
                  if (player.position === "QB") {
                    // console.log(player);
                    if (!topLeveLTeam.qb1) {
                      topLeveLTeam.qb1 = {};
                    }
                    if (
                      !topLeveLTeam.qb2 &&
                      player.name !== topLeveLTeam.qb1.name
                    ) {
                      topLeveLTeam.qb2 = {};
                    }
                    if (
                      !topLeveLTeam.qb3 &&
                      player.name !== topLeveLTeam.qb1.name &&
                      player.name !== topLeveLTeam.qb2.name &&
                      topLeveLTeam.qb1.name !== topLeveLTeam.qb2.name
                    ) {
                      topLeveLTeam.qb3 = {};
                    }
                    if (!topLeveLTeam.qb1.name) {
                      topLeveLTeam.qb1.name = player.name;
                      qb1Data.name = player.name;
                    }

                    if (
                      topLeveLTeam.qb1.name &&
                      !topLeveLTeam.qb2.name &&
                      topLeveLTeam.qb1.name !== player.name
                    ) {
                      topLeveLTeam.qb2.name = player.name;

                      qb2Data.name = player.name;
                    }

                    if (
                      topLeveLTeam.qb1.name &&
                      topLeveLTeam.qb2.name &&
                      !topLeveLTeam.qb3.name &&
                      topLeveLTeam.qb1.name !== player.name &&
                      topLeveLTeam.qb2.name !== player.name &&
                      topLeveLTeam.qb1.name !== topLeveLTeam.qb2.name
                    ) {
                      topLeveLTeam.qb3.name = player.name;
                      qb3Data.name = player.name;
                      setIsTeamQB3(true);
                    }
                  }
                  // //
                  if (player.position === "RB") {
                    // console.log(player);
                    if (!topLeveLTeam.rb1) {
                      topLeveLTeam.rb1 = {};
                    }
                    if (
                      !topLeveLTeam.rb2 &&
                      player.name !== topLeveLTeam.rb1.name
                    ) {
                      topLeveLTeam.rb2 = {};
                    }
                    if (
                      !topLeveLTeam.rb3 &&
                      player.name !== topLeveLTeam.rb1.name &&
                      player.name !== topLeveLTeam.rb2.name &&
                      topLeveLTeam.rb1.name !== topLeveLTeam.rb2.name
                    ) {
                      topLeveLTeam.rb3 = {};
                    }
                    if (!topLeveLTeam.rb1.name) {
                      topLeveLTeam.rb1.name = player.name;
                      rb1Data.name = player.name;
                      // console.log(rb1Data);
                    }

                    if (
                      topLeveLTeam.rb1.name &&
                      !topLeveLTeam.rb2.name &&
                      topLeveLTeam.rb1.name !== player.name
                    ) {
                      topLeveLTeam.rb2.name = player.name;

                      rb2Data.name = player.name;
                    }

                    if (
                      topLeveLTeam.rb1.name &&
                      topLeveLTeam.rb2.name &&
                      !topLeveLTeam.rb3.name &&
                      topLeveLTeam.rb1.name !== player.name &&
                      topLeveLTeam.rb2.name !== player.name &&
                      topLeveLTeam.rb1.name !== topLeveLTeam.rb2.name
                    ) {
                      topLeveLTeam.rb3.name = player.name;
                      rb3Data.name = player.name;
                    }
                  }

                  //

                  if (player.position === "WR") {
                    // console.log(player);
                    if (!topLeveLTeam.wr1) {
                      topLeveLTeam.wr1 = {};
                      topLeveLTeam.wr1.name = player.name;
                      wr1Data.name = player.name;
                    }
                    if (
                      !topLeveLTeam.wr2 &&
                      player.name !== topLeveLTeam.wr1.name
                    ) {
                      topLeveLTeam.wr2 = {};
                      topLeveLTeam.wr2.name = player.name;

                      wr2Data.name = player.name;
                    }
                    if (
                      !topLeveLTeam.wr3 &&
                      player.name !== topLeveLTeam.wr1.name &&
                      player.name !== topLeveLTeam.wr2.name &&
                      topLeveLTeam.wr1.name !== topLeveLTeam.wr2.name
                    ) {
                      topLeveLTeam.wr3 = {};
                      topLeveLTeam.wr3.name = player.name;
                      wr3Data.name = player.name;
                    }
                    if (
                      !topLeveLTeam.wr4 &&
                      player.name !== topLeveLTeam.wr1.name &&
                      player.name !== topLeveLTeam.wr2.name &&
                      topLeveLTeam.wr3.name &&
                      player.name !== topLeveLTeam.wr3.name &&
                      topLeveLTeam.wr1.name !== topLeveLTeam.wr2.name &&
                      topLeveLTeam.wr1.name !== topLeveLTeam.wr3.name &&
                      topLeveLTeam.wr2.name !== topLeveLTeam.wr3.name
                    ) {
                      topLeveLTeam.wr4 = {};
                      topLeveLTeam.wr4.name = player.name;
                      wr4Data.name = player.name;
                    }
                    // if (!topLeveLTeam.wr1.name) {
                    //   topLeveLTeam.wr1.name = player.name;
                    //   wr1Data.name = player.name;
                    //   // console.log(rb1Data);
                    // }

                    // if (
                    //   topLeveLTeam.wr1.name &&
                    //   !topLeveLTeam.wr2.name &&
                    //   topLeveLTeam.wr1.name !== player.name
                    // ) {
                    //   topLeveLTeam.wr2.name = player.name;

                    //   wr2Data.name = player.name;
                    // }

                    // if (
                    //   topLeveLTeam.wr1.name &&
                    //   topLeveLTeam.wr2.name &&
                    //   !topLeveLTeam.wr3.name &&
                    //   topLeveLTeam.wr1.name !== player.name &&
                    //   topLeveLTeam.wr2.name !== player.name &&
                    //   topLeveLTeam.wr1.name !== topLeveLTeam.wr2.name
                    // ) {
                    //   topLeveLTeam.wr3.name = player.name;
                    //   wr3Data.name = player.name;
                    // }

                    // if (
                    //   topLeveLTeam.wr1.name &&
                    //   topLeveLTeam.wr2.name &&
                    //   topLeveLTeam.wr3.name &&
                    //   !topLeveLTeam.wr4.name &&
                    //   topLeveLTeam.wr1.name !== player.name &&
                    //   topLeveLTeam.wr2.name !== player.name &&
                    //   topLeveLTeam.wr3.name !== player.name &&
                    //   topLeveLTeam.wr1.name !== topLeveLTeam.wr2.name &&
                    //   topLeveLTeam.wr1.name !== topLeveLTea3.name &&
                    //   topLeveLTeam.wr2.name !== topLeveLTeam.wr3.name
                    // ) {
                    //   topLeveLTeam.wr4.name = player.name;
                    //   wr4Data.name = player.name;
                    // }
                  }

                  if (player.position === "TE") {
                    // console.log(player);
                    if (!topLeveLTeam.te1) {
                      topLeveLTeam.te1 = {};
                      topLeveLTeam.te1.name = player.name;
                      te1Data.name = player.name;
                    }

                    if (
                      !topLeveLTeam.te2 &&
                      player.name !== topLeveLTeam.te1.name
                    ) {
                      topLeveLTeam.te2 = {};
                      topLeveLTeam.te2.name = player.name;

                      te2Data.name = player.name;
                    }

                    if (!topLeveLTeam.te1.name) {
                      topLeveLTeam.te1.name = player.name;
                      te1Data.name = player.name;
                      // console.log(topLeveLTeam.te1.name);
                    }

                    if (
                      topLeveLTeam.te1.name &&
                      topLeveLTeam.te1.name !== player.name
                    ) {
                      topLeveLTeam.te2.name = player.name;

                      te2Data.name = player.name;
                    }
                    // console.log(topLeveLTeam);
                  }
                }
              })}

              <div>
                <div className={styles.selectPlayersToProjectLabel}>
                  Select players from team to project
                </div>
                <div className={styles.selectTeamsQBsWrapper}>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                    }}
                    className={styles.playerSelectWrapper}
                  >
                    <label
                      htmlFor="player-select"
                      className={styles.teamSelectLabel}
                    >
                      QB1:
                    </label>
                    <select
                      id="player-select"
                      value={teamQB1}
                      onChange={(event) => {
                        topLeveLTeam.qb1 = {};
                        topLeveLTeam.qb1.name = event.target.value;
                        setTeamQB1(topLeveLTeam.qb1.name);
                        setSelectedTeamsUserSelectedPlayersToProjectArray([
                          topLeveLTeam.qb1.name,
                        ]);
                        // console.log(
                        //   topLeveLTeam.qb1.name,
                        //   topLeveLTeam.qb2.name,
                        //   topLeveLTeam.qb3.name
                        // );
                      }}
                      className={styles.teamSelectSelect}
                      placeholder="Select Team"
                    >
                      <option>Select a QB</option>
                      {sleeperDataArray.map((player) => {
                        if (player.team === team) {
                          if (
                            player.position === "QB"
                            // ||
                            // (player.position === "RB") |
                            //   (player.position === "WR") ||
                            // player.position === "TE"
                          ) {
                            return (
                              <option key={player.name} value={player.name}>
                                {player.name}: {player.position}
                              </option>
                            );
                          }
                        }
                      })}
                    </select>
                  </form>

                  {teamQB1 && (
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        QB2:
                      </label>
                      <select
                        id="player-select"
                        value={teamQB2}
                        onChange={(event) => {
                          topLeveLTeam.qb2 = {};
                          topLeveLTeam.qb2.name = event.target.value;
                          setTeamQB2(topLeveLTeam.qb2.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a QB</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "QB"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>
                  )}

                  {teamQB1 && teamQB2 && topLeveLTeam.qb3.name && (
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        QB3:
                      </label>
                      <select
                        id="player-select"
                        value={teamQB3}
                        onChange={(event) => {
                          topLeveLTeam.qb3 = {};
                          topLeveLTeam.qb3.name = event.target.value;
                          setTeamQB3(topLeveLTeam.qb3.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                            topLeveLTeam.qb3.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a QB</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "QB"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>
                  )}
                </div>

                {showRBs && (
                  <div className={styles.selectTeamsQBsWrapper}>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        RB1:
                      </label>
                      <select
                        id="player-select"
                        value={teamRB1}
                        onChange={(event) => {
                          topLeveLTeam.rb1 = {};
                          topLeveLTeam.rb1.name = event.target.value;
                          setTeamRB1(topLeveLTeam.rb1.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                            topLeveLTeam.qb3.name,
                            topLeveLTeam.rb1.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a RB</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "RB"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>

                    {showRBs && teamRB1 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          RB2:
                        </label>
                        <select
                          id="player-select"
                          value={teamRB2}
                          onChange={(event) => {
                            topLeveLTeam.rb2 = {};
                            topLeveLTeam.rb2.name = event.target.value;
                            setTeamRB2(topLeveLTeam.rb2.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a RB</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "RB"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}

                    {showRBs && teamRB2 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          RB3:
                        </label>
                        <select
                          id="player-select"
                          value={teamRB3}
                          onChange={(event) => {
                            topLeveLTeam.rb3 = {};
                            topLeveLTeam.rb3.name = event.target.value;
                            setTeamRB3(topLeveLTeam.rb3.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a RB</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "RB"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                  </div>
                )}

                {teamRB3 && (
                  <div className={styles.selectTeamsQBsWrapper}>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        WR1:
                      </label>
                      <select
                        id="player-select"
                        value={teamWR1}
                        onChange={(event) => {
                          topLeveLTeam.wr1 = {};
                          topLeveLTeam.wr1.name = event.target.value;
                          setTeamWR1(topLeveLTeam.wr1.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                            topLeveLTeam.qb3.name,
                            topLeveLTeam.rb1.name,
                            topLeveLTeam.rb2.name,
                            topLeveLTeam.rb3.name,
                            topLeveLTeam.wr1.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a WR</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "WR"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>

                    {teamWR1 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          WR2:
                        </label>
                        <select
                          id="player-select"
                          value={teamWR2}
                          onChange={(event) => {
                            topLeveLTeam.wr2 = {};
                            topLeveLTeam.wr2.name = event.target.value;
                            setTeamWR2(topLeveLTeam.wr2.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                              topLeveLTeam.wr1.name,
                              topLeveLTeam.wr2.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a WR</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "WR"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                    {teamWR2 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          WR3:
                        </label>
                        <select
                          id="player-select"
                          value={teamWR3}
                          onChange={(event) => {
                            topLeveLTeam.wr3 = {};
                            topLeveLTeam.wr3.name = event.target.value;
                            setTeamWR3(topLeveLTeam.wr3.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                              topLeveLTeam.wr1.name,
                              topLeveLTeam.wr2.name,
                              topLeveLTeam.wr3.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a WR</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "WR"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                    {teamWR3 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          WR4:
                        </label>
                        <select
                          id="player-select"
                          value={teamWR4}
                          onChange={(event) => {
                            topLeveLTeam.wr4 = {};
                            topLeveLTeam.wr4.name = event.target.value;
                            setTeamWR4(topLeveLTeam.wr4.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                              topLeveLTeam.wr1.name,
                              topLeveLTeam.wr2.name,
                              topLeveLTeam.wr3.name,
                              topLeveLTeam.wr4.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a WR</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "WR"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                  </div>
                )}
                {teamWR4 && (
                  <div className={styles.selectTeamsQBsWrapper}>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        TE1:
                      </label>
                      <select
                        id="player-select"
                        value={teamTE1}
                        onChange={(event) => {
                          topLeveLTeam.te1 = {};
                          topLeveLTeam.te1.name = event.target.value;
                          setTeamTE1(topLeveLTeam.te1.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                            topLeveLTeam.qb3.name,
                            topLeveLTeam.rb1.name,
                            topLeveLTeam.rb2.name,
                            topLeveLTeam.rb3.name,
                            topLeveLTeam.wr1.name,
                            topLeveLTeam.wr2.name,
                            topLeveLTeam.wr3.name,
                            topLeveLTeam.wr4.name,
                            topLeveLTeam.te1.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a TE</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "TE"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>

                    {teamTE1 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          TE2:
                        </label>
                        <select
                          id="player-select"
                          value={teamTE2}
                          onChange={(event) => {
                            topLeveLTeam.te2 = {};
                            topLeveLTeam.te2.name = event.target.value;
                            setTeamTE2(topLeveLTeam.te2.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                              topLeveLTeam.wr1.name,
                              topLeveLTeam.wr2.name,
                              topLeveLTeam.wr3.name,
                              topLeveLTeam.wr4.name,
                              topLeveLTeam.te1.name,
                              topLeveLTeam.te2.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a TE</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "TE"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                  </div>
                )}

                <div className={styles.qbSectionTitle}> Teams QBs</div>
                <div className={styles.amountsLeftToDistributeLabel}>
                  Amounts Left to Distribute
                </div>
                <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
                  <div
                    className={styles.howMuchIsLeftIndividualSectionsWrapper}
                  >
                    <div>Team Pass Attempt</div>
                    <div>{totalPercentOfPassAttemptsLeftToDistribute}</div>
                  </div>
                </div>
                {selectedTeamsUserSelectedPlayersToProjectArray && (
                  <div className={styles.sectionWrapper}>
                    {selectedTeamsUserSelectedPlayersToProjectArray.map(
                      (player) => {
                        // console.log(
                        //   selectedTeamsUserSelectedPlayersToProjectArray
                        // );
                        // console.log(player, teamQB1);
                        if (
                          player === teamQB1 ||
                          player === teamQB2 ||
                          player === teamQB3
                        ) {
                          return (
                            <div
                              key={player}
                              className={styles.teamsQBsWrapper}
                            >
                              {" "}
                              <div className={styles.playerNameLabel}>
                                {player}
                              </div>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="games">Games Played</label>

                                <input
                                  id="games"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1GamesPlayed
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2GamesPlayed
                                      : qb3GamesPlayed
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.gamesPlayed =
                                        +event.target.value;
                                      setQb1GamesPlayed(
                                        +topLeveLTeam.qb1.gamesPlayed
                                      );
                                      qb1Data.name = topLeveLTeam.qb1.name;
                                      qb1Data.gamesPlayed = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      setQb2GamesPlayed(+event.target.value);
                                      qb2Data.name = topLeveLTeam.qb2.name;
                                      if (
                                        +event.target.value +
                                          topLeveLTeam.qb1.gamesPlayed >
                                        18
                                      ) {
                                        alert(
                                          "Total games played should not exceed 18"
                                        );
                                      }
                                      if (
                                        +event.target.value +
                                          topLeveLTeam.qb1.gamesPlayed <=
                                        18
                                      ) {
                                        topLeveLTeam.qb2.gamesPlayed =
                                          +event.target.value;
                                        qb2Data.gamesPlayed =
                                          +event.target.value;
                                      }
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      setQb3GamesPlayed(+event.target.value);
                                      qb3Data.name = topLeveLTeam.qb3.name;

                                      if (
                                        +event.target.value +
                                          topLeveLTeam.qb1.gamesPlayed +
                                          topLeveLTeam.qb2.gamesPlayed >
                                        18
                                      ) {
                                        alert(
                                          "Total games played should not exceed 18"
                                        );
                                      }
                                      if (
                                        +event.target.value +
                                          topLeveLTeam.qb1.gamesPlayed +
                                          topLeveLTeam.qb2.gamesPlayed <=
                                        18
                                      ) {
                                        topLeveLTeam.qb3.gamesPlayed =
                                          +event.target.value;
                                        qb3Data.gamesPlayed =
                                          +event.target.value;
                                      }
                                    }

                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="passAttempts">
                                  % of Tm Atmpts
                                </label>

                                <input
                                  id="passAttempts"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1PercentOfTeamPassAttempts
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2PercentOfTeamPassAttempts
                                      : qb3PercentOfTeamPassAttempts
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={100}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      qb1Data.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      setQb1PercentOfTeamPassAttempts(
                                        +event.target.value
                                      );
                                      topLeveLTeam.qb1.PassAtmpts = (
                                        (topLeveLTeam.qb1
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        totalPassPlays
                                      ).toFixed(0);
                                      qb1Data.PassAtmpts = (
                                        (+topLeveLTeam.qb1
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        +totalPassPlays
                                      ).toFixed(0);
                                      setQb1PassAttempts(+qb1Data.PassAtmpts);
                                      // console.log(typeof qb1PassAttempts);

                                      totalProjectedPercentOfTeamPassAttempts =
                                        +event.target.value;

                                      if (qb2PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb2PercentOfTeamPassAttempts;
                                      }

                                      if (qb3PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb3PercentOfTeamPassAttempts;
                                      }

                                      if (
                                        qb2PercentOfTeamPassAttempts &&
                                        qb3PercentOfTeamPassAttempts
                                      ) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb2PercentOfTeamPassAttempts +
                                          +qb3PercentOfTeamPassAttempts;
                                      }

                                      // console.log(
                                      //   totalProjectedPercentOfTeamPassAttempts
                                      // );

                                      if (
                                        totalProjectedPercentOfTeamPassAttempts >
                                        100
                                      ) {
                                        topLeveLTeam.qb1.percentOfTotalTeamPassAttempts = 0;

                                        qb1Data.PassAtmpts = 0;
                                        setQb1PercentOfTeamPassAttempts("");

                                        alert(
                                          // `Total Pass Attempts should not exceed projected team pass attempts of ${totalPassPlays}`
                                          `Total percent of team pass attempts should not exceed 100`
                                        );
                                      }
                                    }

                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      qb2Data.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      setQb2PercentOfTeamPassAttempts(
                                        +event.target.value
                                      );
                                      topLeveLTeam.qb2.PassAtmpts = (
                                        (topLeveLTeam.qb2
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        totalPassPlays
                                      ).toFixed(0);
                                      qb2Data.PassAtmpts = (
                                        (+topLeveLTeam.qb2
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        +totalPassPlays
                                      ).toFixed(0);
                                      setQb2PassAttempts(qb2Data.PassAtmpts);

                                      totalProjectedPercentOfTeamPassAttempts =
                                        +event.target.value;

                                      if (qb1PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb1PercentOfTeamPassAttempts;
                                      }

                                      if (qb3PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb3PercentOfTeamPassAttempts;
                                      }

                                      if (
                                        qb1PercentOfTeamPassAttempts &&
                                        qb3PercentOfTeamPassAttempts
                                      ) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb1PercentOfTeamPassAttempts +
                                          +qb3PercentOfTeamPassAttempts;
                                      }

                                      // console.log(
                                      //   totalProjectedPercentOfTeamPassAttempts
                                      // );

                                      if (
                                        totalProjectedPercentOfTeamPassAttempts >
                                        100
                                      ) {
                                        topLeveLTeam.qb2.percentOfTotalTeamPassAttempts = 0;
                                        qb2Data.PassAtmpts = 0;

                                        setQb2PercentOfTeamPassAttempts("");

                                        alert(
                                          `Total percent of team pass attempts should not exceed 100`
                                        );
                                      }
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      //

                                      topLeveLTeam.qb3.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      qb3Data.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      setQb3PercentOfTeamPassAttempts(
                                        +event.target.value
                                      );
                                      topLeveLTeam.qb3.PassAtmpts = (
                                        (topLeveLTeam.qb3
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        totalPassPlays
                                      ).toFixed(0);

                                      qb3Data.PassAtmpts = (
                                        (+topLeveLTeam.qb3
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        +totalPassPlays
                                      ).toFixed(0);
                                      setQb3PassAttempts(
                                        topLeveLTeam.qb3.PassAtmpts
                                      );

                                      totalProjectedPercentOfTeamPassAttempts =
                                        +event.target.value;

                                      if (qb1PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb1PercentOfTeamPassAttempts;
                                      }

                                      if (qb2PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb2PercentOfTeamPassAttempts;
                                      }

                                      if (
                                        qb1PercentOfTeamPassAttempts &&
                                        qb2PercentOfTeamPassAttempts
                                      ) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb1PercentOfTeamPassAttempts +
                                          +qb2PercentOfTeamPassAttempts;
                                      }

                                      if (
                                        totalProjectedPercentOfTeamPassAttempts >
                                        100
                                      ) {
                                        topLeveLTeam.qb3.percentOfTotalTeamPassAttempts = 0;

                                        setQb3PercentOfTeamPassAttempts("");
                                        alert(
                                          `Total percent of team pass attempts should not exceed 100`
                                        );
                                      }

                                      console.log(
                                        totalPercentOfPassAttemptsLeftToDistribute,
                                        totalProjectedPercentOfTeamPassAttempts
                                      );
                                    }
                                    setTotalPercentOfPassAttemptsLeftToDistribute(
                                      100 -
                                        totalProjectedPercentOfTeamPassAttempts
                                    );

                                    // console.log(
                                    //   totalProjectedPercentOfTeamPassAttempts,
                                    //   qb1PercentOfTeamPassAttempts,
                                    //   qb2PercentOfTeamPassAttempts,
                                    //   qb3PercentOfTeamPassAttempts
                                    // );
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="compPercent">
                                  Completion %
                                </label>

                                <input
                                  id="compPercent"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1CompPercent
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2CompPercent
                                      : qb3CompPercent
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={80}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.compPercent =
                                        +event.target.value;
                                      qb1Data.compPercent = +event.target.value;
                                      setQb1CompPercent(+event.target.value);
                                      topLeveLTeam.qb1.completions = (
                                        +(+event.target.value / 100) *
                                        +qb1PassAttempts
                                      ).toFixed(0);
                                      qb1Data.completions = (
                                        +(+event.target.value / 100) *
                                        +qb1PassAttempts
                                      ).toFixed(0);
                                      setQb1Completions(
                                        topLeveLTeam.qb1.completions
                                      );
                                      // console.log(typeof qb1Data.completions);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.compPercent =
                                        +event.target.value;
                                      qb2Data.compPercent = +event.target.value;
                                      setQb2CompPercent(+event.target.value);
                                      topLeveLTeam.qb2.completions = (
                                        +(+event.target.value / 100) *
                                        +qb2PassAttempts
                                      ).toFixed(0);
                                      qb2Data.completions = (
                                        +(+event.target.value / 100) *
                                        +qb2PassAttempts
                                      ).toFixed(0);
                                      setQb2Completions(
                                        topLeveLTeam.qb2.completions
                                      );
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.compPercent =
                                        +event.target.value;
                                      qb3Data.compPercent = +event.target.value;
                                      setQb3CompPercent(+event.target.value);
                                      topLeveLTeam.qb3.completions = (
                                        +(+event.target.value / 100) *
                                        +qb3PassAttempts
                                      ).toFixed(0);
                                      qb3Data.completions = (
                                        +(+event.target.value / 100) *
                                        +qb3PassAttempts
                                      ).toFixed(0);
                                      setQb3Completions(
                                        topLeveLTeam.qb3.completions
                                      );
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="games">Passing Yards</label>

                                <input
                                  id="games"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1PassingYards
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2PassingYards
                                      : qb3PassingYards
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.passYrds =
                                        +event.target.value;
                                      setQb1PassingYards(+event.target.value);
                                      qb1Data.name = topLeveLTeam.qb1.name;
                                      qb1Data.passYrds = +event.target.value;

                                      topLeveLTeam.qb1.YPC = +(
                                        +event.target.value / qb1Completions
                                      ).toFixed(1);

                                      console.log(
                                        +event.target.value,
                                        qb1Completions
                                      );

                                      let temp1YPC =
                                        +event.target.value / qb1Completions;
                                      let temp2YPC = temp1YPC.toFixed(1);

                                      qb1Data.YPC = +temp2YPC;
                                      // console.log(qb1Data.YPC);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.passYrds =
                                        +event.target.value;
                                      setQb2PassingYards(+event.target.value);
                                      qb2Data.name = topLeveLTeam.qb2.name;
                                      qb2Data.passYrds = +event.target.value;

                                      topLeveLTeam.qb2.YPC = +(
                                        +event.target.value / qb2Completions
                                      ).toFixed(1);

                                      qb2Data.YPC = +(
                                        +event.target.value / qb2Completions
                                      ).toFixed(1);
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.passYrds =
                                        +event.target.value;
                                      setQb3PassingYards(+event.target.value);
                                      qb3Data.name = topLeveLTeam.qb3.name;
                                      qb3Data.passYrds = +event.target.value;

                                      topLeveLTeam.qb3.YPC = +(
                                        +event.target.value / qb3Completions
                                      ).toFixed(1);

                                      qb3Data.YPC = +(
                                        +event.target.value / qb3Completions
                                      ).toFixed(1);
                                    }

                                    if (
                                      !topLeveLTeam.totalTeamProjectedPassingYards ||
                                      topLeveLTeam.totalTeamProjectedPassingYards ===
                                        0
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards = 0;
                                    }

                                    if (
                                      qb1PassingYards &&
                                      !qb2PassingYards &&
                                      !qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb1PassingYards;
                                    }
                                    if (
                                      !qb1PassingYards &&
                                      qb2PassingYards &&
                                      !qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb2PassingYards;
                                    }
                                    if (
                                      !qb1PassingYards &&
                                      !qb2PassingYards &&
                                      qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb3PassingYards;
                                    }

                                    if (
                                      qb1PassingYards &&
                                      qb2PassingYards &&
                                      !qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb1PassingYards + +qb2PassingYards;
                                    }
                                    if (
                                      qb1PassingYards &&
                                      !qb2PassingYards &&
                                      qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb1PassingYards + +qb3PassingYards;
                                    }
                                    if (
                                      !qb1PassingYards &&
                                      qb2PassingYards &&
                                      qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb2PassingYards + +qb3PassingYards;
                                    }
                                    if (
                                      qb1PassingYards &&
                                      qb2PassingYards &&
                                      qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb1PassingYards +
                                        +qb2PassingYards +
                                        +qb3PassingYards;
                                    }

                                    setTeamTotalPassingYards(
                                      topLeveLTeam.totalTeamProjectedPassingYards
                                    );
                                  }}
                                />
                              </form>
                              {/* <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="YPA">Yards/Attempt</label>

                                <input
                                  id="YPA"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? topLeveLTeam.qb1.YPA
                                      : topLeveLTeam.qb2.name === player
                                      ? topLeveLTeam.qb2.YPA
                                      : topLeveLTeam.qb3.YPA
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={15}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.YPA =
                                        +event.target.value;
                                      qb1Data.YPA = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.YPA =
                                        +event.target.value;
                                      qb2Data.YPA = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.YPA =
                                        +event.target.value;
                                      qb3Data.YPA = +event.target.value;
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form> */}
                              {/* <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="YPC">Yards/Comp</label>

                                <input
                                  id="YPC"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? topLeveLTeam.qb1.YPC
                                      : topLeveLTeam.qb2.name === player
                                      ? topLeveLTeam.qb2.YPC
                                      : topLeveLTeam.qb3.YPC
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={19.9}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.YPC =
                                        +event.target.value;

                                      qb1Data.YPC = +event.target.value;
                                      topLeveLTeam.qb1.passYrds = +(
                                        +event.target.value *
                                        +qb1Data.completions
                                      ).toFixed(0);
                                      qb1Data.passYrds = +(
                                        +event.target.value *
                                        +qb1Data.completions
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.YPC =
                                        +event.target.value;
                                      qb2Data.YPC = +event.target.value;
                                      topLeveLTeam.qb2.passYrds = +(
                                        +event.target.value *
                                        +qb2Data.completions
                                      ).toFixed(0);
                                      qb2Data.passYrds = +(
                                        +event.target.value *
                                        +qb2Data.completions
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.YPC =
                                        +event.target.value;
                                      qb3Data.YPC = +event.target.value;
                                      topLeveLTeam.qb3.passYrds = +(
                                        +event.target.value *
                                        +qb3Data.completions
                                      ).toFixed(0);
                                      qb3Data.passYrds = +(
                                        +event.target.value *
                                        +qb3Data.completions
                                      ).toFixed(0);
                                    }

                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form> */}
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="passingTDs">Passing TDs</label>

                                <input
                                  id="passingTDs"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1PassTDs
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2PassTDs
                                      : qb3PassTDs
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={60}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.passingTDs =
                                        +event.target.value;
                                      qb1Data.passingTDs = +event.target.value;
                                      // console.log(qb1Data);
                                      setQb1PassTDs(+event.target.value);
                                      allQBDataArray.push(qb1Data);
                                      setAllQBDataArray(allQBDataArray);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.passingTDs =
                                        +event.target.value;
                                      qb2Data.passingTDs = +event.target.value;
                                      setQb2PassTDs(+event.target.value);
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.passingTDs =
                                        +event.target.value;
                                      qb3Data.passingTDs = +event.target.value;
                                      setQb3PassTDs(+event.target.value);
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb2);
                                    // console.log(allQBDataArray);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="INTs">Interceptions</label>

                                <input
                                  id="INTs"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1INTs
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2INTs
                                      : qb3INTs
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={40}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.INTs =
                                        +event.target.value;
                                      qb1Data.INTs = +event.target.value;
                                      // console.log(qb1Data);
                                      setQb1INTs(+event.target.value);
                                      allQBDataArray.push(qb1Data);
                                      setAllQBDataArray(allQBDataArray);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.INTs =
                                        +event.target.value;
                                      setQb2INTs(+event.target.value);
                                      qb2Data.INTs = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.INTs =
                                        +event.target.value;
                                      setQb3INTs(+event.target.value);
                                      qb3Data.INTs = +event.target.value;
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb2);
                                    // console.log(allQBDataArray);
                                  }}
                                />
                              </form>
                            </div>
                          );
                        }

                        // end QB/passing
                        //
                        // rushing
                        //
                      }
                    )}
                  </div>
                )}
                <div className={styles.saveAndClearBTNsWrapper}>
                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        saveUsersProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Save QB Projections
                    </button>
                  </div>

                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        clearUsersQBsProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Clear Saved QB Projections
                    </button>
                  </div>
                </div>
                <PassingTable
                  qb1Data={topLeveLTeam.qb1}
                  qb2Data={topLeveLTeam.qb2}
                  qb3Data={topLeveLTeam.qb3}
                />
                <div className={styles.qbSectionTitle}> Rushing</div>
                {selectedTeamsUserSelectedPlayersToProjectArray && (
                  <div className={styles.sectionWrapper}>
                    {selectedTeamsUserSelectedPlayersToProjectArray.map(
                      (player) => {
                        // if (player.team === team) {
                        //
                        //
                        if (
                          player === teamQB1 ||
                          player === teamQB2 ||
                          player === teamQB3 ||
                          player === teamRB1 ||
                          player === teamRB2 ||
                          player === teamRB3 ||
                          player === teamWR1 ||
                          player === teamWR2 ||
                          player === teamWR3 ||
                          player === teamWR4
                        ) {
                          return (
                            <div
                              key={`${player}-${player.position}`}
                              className={styles.teamsQBsWrapper}
                            >
                              {" "}
                              <div className={styles.playerNameLabel}>
                                {player}
                              </div>
                              {/* <form
                            onSubmit={(event) => {
                              event.preventDefault();

                              // Do something with `name` here
                            }}
                          >
                            <label htmlFor="games">Games Played</label>

                            <input
                              id="games"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.gamesPlayed
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.gamesPlayed
                                  : topLeveLTeam.qb3.name === player.name
                                  ? topLeveLTeam.qb3.gamesPlayed
                                  : topLeveLTeam.rb1.name === player.name
                                  ? topLeveLTeam.rb1.gamesPlayed
                                  : topLeveLTeam.rb2.name === player.name
                                  ? topLeveLTeam.rb2.gamesPlayed
                                  : topLeveLTeam.rb3.name === player.name
                                  ? topLeveLTeam.gamesPlayed
                                  : topLeveLTeam.wr1.name === player.name
                                  ? topLeveLTeam.wr1.gamesPlayed
                                  : topLeveLTeam.wr2.name === player.name
                                  ? topLeveLTeam.wr2.gamesPlayed
                                  : topLeveLTeam.wr3.name === player.name
                                  ? topLeveLTeam.wr3.gamesPlayed
                                  : topLeveLTeam.wr4.gamesPlayed
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={18}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.gamesPlayed =
                                    +event.target.value;
                                  qb1Data.name = topLeveLTeam.qb1.name;
                                  qb1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  qb2Data.name = topLeveLTeam.qb2.name;
                                  if (
                                    +event.target.value +
                                      topLeveLTeam.qb1.gamesPlayed >
                                    18
                                  ) {
                                    alert(
                                      "Total games played for QB's should not exceed 18"
                                    );
                                  }
                                  if (
                                    +event.target.value +
                                      topLeveLTeam.qb1.gamesPlayed <=
                                    18
                                  ) {
                                    topLeveLTeam.qb2.gamesPlayed =
                                      +event.target.value;
                                    qb2Data.gamesPlayed = +event.target.value;
                                  }
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  qb3Data.name = topLeveLTeam.qb3.name;

                                  if (
                                    +event.target.value +
                                      topLeveLTeam.qb1.gamesPlayed +
                                      topLeveLTeam.qb2.gamesPlayed >
                                    18
                                  ) {
                                    alert(
                                      "Total games played for QB's should not exceed 18"
                                    );
                                  }
                                  if (
                                    +event.target.value +
                                      topLeveLTeam.qb1.gamesPlayed +
                                      topLeveLTeam.qb2.gamesPlayed <=
                                    18
                                  ) {
                                    topLeveLTeam.qb3.gamesPlayed =
                                      +event.target.value;
                                    qb3Data.gamesPlayed = +event.target.value;
                                  }
                                }

                                if (topLeveLTeam.rb1.name === player.name) {
                                  topLeveLTeam.rb1.gamesPlayed =
                                    +event.target.value;
                                  rb1Data.name = topLeveLTeam.rb1.name;
                                  rb1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.rb2.name === player.name) {
                                  topLeveLTeam.rb2.gamesPlayed =
                                    +event.target.value;
                                  rb2Data.name = topLeveLTeam.rb2.name;
                                  rb2Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.rb3.name === player.name) {
                                  topLeveLTeam.rb3.gamesPlayed =
                                    +event.target.value;
                                  rb3Data.name = topLeveLTeam.rb3.name;
                                  rb3Data.gamesPlayed = +event.target.value;
                                }
                                // console.log(topLeveLTeam);
                                // console.log(topLeveLTeam.qb1);
                                // console.log(topLeveLTeam.qb2);
                              }}
                            />
                          </form> */}
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="rushAttempts">
                                  Rush Atmpts
                                </label>

                                <input
                                  id="rushAttempts"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? topLeveLTeam.qb1.rushAttempts
                                      : topLeveLTeam.qb2.name === player
                                      ? topLeveLTeam.qb2.rushAttempts
                                      : topLeveLTeam.qb3.name === player
                                      ? topLeveLTeam.qb3.rushAttempts
                                      : topLeveLTeam.rb1.name === player
                                      ? topLeveLTeam.rb1.rushAttempts
                                      : topLeveLTeam.rb2.name === player
                                      ? topLeveLTeam.rb2.rushAttempts
                                      : topLeveLTeam.rb3.name === player
                                      ? topLeveLTeam.rushAttempts
                                      : topLeveLTeam.wr1.name === player
                                      ? topLeveLTeam.wr1.rushAttempts
                                      : topLeveLTeam.wr2.name === player
                                      ? topLeveLTeam.wr2.rushAttempts
                                      : topLeveLTeam.wr3.name === player
                                      ? topLeveLTeam.wr3.rushAttempts
                                      : topLeveLTeam.wr4.rushAttempts
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.rushAttempts =
                                        +event.target.value;
                                      qb1Data.name = topLeveLTeam.qb1.name;
                                      qb1Data.rushAttempts =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      qb2Data.name = topLeveLTeam.qb2.name;
                                      topLeveLTeam.qb2.rushAttempts =
                                        +event.target.value;
                                      qb2Data.rushAttempts =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      qb3Data.name = topLeveLTeam.qb3.name;

                                      topLeveLTeam.qb3.rushAttempts =
                                        +event.target.value;
                                      qb3Data.rushAttempts =
                                        +event.target.value;
                                    }

                                    if (topLeveLTeam.rb1.name === player) {
                                      if (
                                        rb1Data.rushAttempts > totalRunPlays ||
                                        rb2Data.rushAttempts > totalRunPlays ||
                                        rb3Data.rushAttempts > totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb2Data.rushAttempts >
                                          totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb2Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays ||
                                        rb2Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays
                                      ) {
                                        topLeveLTeam.rb1.rushAttempts = 0;
                                        alert(
                                          `Total RB Rush Attempts should not exceed projected team pass attempts of ${totalRunPlays} `
                                        );
                                      }
                                      // if (
                                      //   rb1Data.rushAttempts <= totalRunPlays &&
                                      //   rb2Data.rushAttempts <= totalRunPlays &&
                                      //   rb3Data.rushAttempts <= totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb2Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb2Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb2Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays
                                      // ) {
                                      topLeveLTeam.rb1.rushAttempts =
                                        +event.target.value;
                                      rb1Data.name = topLeveLTeam.rb1.name;
                                      rb1Data.rushAttempts =
                                        +event.target.value;
                                      // }
                                    }

                                    if (topLeveLTeam.rb2.name === player) {
                                      if (
                                        rb1Data.rushAttempts > totalRunPlays ||
                                        rb2Data.rushAttempts > totalRunPlays ||
                                        rb3Data.rushAttempts > totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb2Data.rushAttempts >
                                          totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb2Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays ||
                                        rb2Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays
                                      ) {
                                        topLeveLTeam.rb2.rushAttempts = 0;
                                        alert(
                                          `Total RB Rush Attempts should not exceed projected team pass attempts of ${totalRunPlays} `
                                        );
                                      }
                                      // if (
                                      //   rb1Data.rushAttempts <= totalRunPlays &&
                                      //   rb2Data.rushAttempts <= totalRunPlays &&
                                      //   rb3Data.rushAttempts <= totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb2Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb2Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb2Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays
                                      // ) {
                                      // }
                                      topLeveLTeam.rb2.rushAttempts =
                                        +event.target.value;
                                      rb2Data.name = topLeveLTeam.rb2.name;
                                      rb2Data.rushAttempts =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      if (
                                        rb1Data.rushAttempts > totalRunPlays ||
                                        rb2Data.rushAttempts > totalRunPlays ||
                                        rb3Data.rushAttempts > totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb2Data.rushAttempts >
                                          totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb2Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays ||
                                        rb1Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays ||
                                        rb2Data.rushAttempts +
                                          rb3Data.rushAttempts >
                                          totalRunPlays
                                      ) {
                                        topLeveLTeam.rb3.rushAttempts = 0;
                                        alert(
                                          `Total RB Rush Attempts should not exceed projected team pass attempts of ${totalRunPlays} `
                                        );
                                      }
                                      // if (
                                      //   rb1Data.rushAttempts <= totalRunPlays &&
                                      //   rb2Data.rushAttempts <= totalRunPlays &&
                                      //   rb3Data.rushAttempts <= totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb2Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb2Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb1Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays &&
                                      //   rb2Data.rushAttempts +
                                      //     rb3Data.rushAttempts <=
                                      //     totalRunPlays
                                      // ) {
                                      topLeveLTeam.rb3.rushAttempts =
                                        +event.target.value;
                                      rb3Data.name = topLeveLTeam.rb3.name;
                                      rb3Data.rushAttempts =
                                        +event.target.value;
                                      // }
                                    }

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.rushAttempts =
                                        +event.target.value;
                                      wr1Data.name = topLeveLTeam.wr1.name;
                                      wr1Data.rushAttempts =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      wr2Data.name = topLeveLTeam.wr2.name;
                                      topLeveLTeam.wr2.rushAttempts =
                                        +event.target.value;
                                      wr2Data.rushAttempts =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      wr3Data.name = topLeveLTeam.wr3.name;

                                      topLeveLTeam.wr3.rushAttempts =
                                        +event.target.value;
                                      wr3Data.rushAttempts =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.wr4.name === player) {
                                      wr4Data.name = topLeveLTeam.wr4.name;

                                      topLeveLTeam.wr4.rushAttempts =
                                        +event.target.value;
                                      wr4Data.rushAttempts =
                                        +event.target.value;
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="games">Yards/Carry</label>

                                <input
                                  id="games"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? topLeveLTeam.qb1.YPCarry
                                      : topLeveLTeam.qb2.name === player
                                      ? topLeveLTeam.qb2.YPCarry
                                      : topLeveLTeam.qb3.name === player
                                      ? topLeveLTeam.qb3.YPCarry
                                      : topLeveLTeam.rb1.name === player
                                      ? topLeveLTeam.rb1.YPCarry
                                      : topLeveLTeam.rb2.name === player
                                      ? topLeveLTeam.rb2.YPCarry
                                      : topLeveLTeam.rb3.YPCarry
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.YPCarry =
                                        +event.target.value;

                                      qb1Data.YPCarry = +event.target.value;
                                      qb1Data.RushingYards = +(
                                        +event.target.value *
                                        qb1Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.qb1.RushingYards = +(
                                        +event.target.value *
                                        qb1Data.rushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.YPCarry =
                                        +event.target.value;
                                      qb2Data.YPCarry = +event.target.value;

                                      qb2Data.RushingYards = +(
                                        +event.target.value *
                                        qb2Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.qb2.RushingYards = +(
                                        +event.target.value *
                                        qb2Data.rushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.YPCarry =
                                        +event.target.value;
                                      qb3Data.YPCarry = +event.target.value;

                                      qb3Data.RushingYards = +(
                                        +event.target.value *
                                        qb3Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.qb3.RushingYards = +(
                                        +event.target.value *
                                        qb3Data.rushAttempts
                                      ).toFixed(0);
                                    }

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.YPCarry =
                                        +event.target.value;

                                      rb1Data.YPCarry = +event.target.value;
                                      rb1Data.RushingYards = +(
                                        +event.target.value *
                                        rb1Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.rb1.RushingYards = +(
                                        +event.target.value *
                                        rb1Data.rushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.YPCarry =
                                        +event.target.value;

                                      rb2Data.YPCarry = +event.target.value;
                                      rb2Data.RushingYards = +(
                                        +event.target.value *
                                        rb2Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.rb2.RushingYards = +(
                                        +event.target.value *
                                        rb2Data.rushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.YPCarry =
                                        +event.target.value;

                                      rb3Data.YPCarry = +event.target.value;
                                      rb3Data.RushingYards = +(
                                        +event.target.value *
                                        rb3Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.rb3.RushingYards = +(
                                        +event.target.value *
                                        rb3Data.rushAttempts
                                      ).toFixed(0);
                                    }

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.YPCarry =
                                        +event.target.value;

                                      wr1Data.YPCarry = +event.target.value;
                                      wr1Data.RushingYards = +(
                                        +event.target.value *
                                        wr1Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.wr1.RushingYards = +(
                                        +event.target.value *
                                        wr1Data.rushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.YPCarry =
                                        +event.target.value;
                                      wr2Data.YPCarry = +event.target.value;

                                      wr2Data.RushingYards = +(
                                        +event.target.value *
                                        wr2Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.wr2.RushingYards = +(
                                        +event.target.value *
                                        wr2Data.rushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.YPCarry =
                                        +event.target.value;
                                      wr3Data.YPCarry = +event.target.value;

                                      wr3Data.RushingYards = +(
                                        +event.target.value *
                                        wr3Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.wr3.RushingYards = +(
                                        +event.target.value *
                                        wr3Data.rushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.YPCarry =
                                        +event.target.value;
                                      wr4Data.YPCarry = +event.target.value;

                                      wr4Data.RushingYards = +(
                                        +event.target.value *
                                        wr4Data.rushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.wr4.RushingYards = +(
                                        +event.target.value *
                                        wr4Data.rushAttempts
                                      ).toFixed(0);
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="touchdowns">Touchdowns</label>

                                <input
                                  id="touchdowns"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? topLeveLTeam.qb1.TDs
                                      : topLeveLTeam.qb2.name === player
                                      ? topLeveLTeam.qb2.TDs
                                      : topLeveLTeam.qb3.name === player
                                      ? topLeveLTeam.qb3.TDs
                                      : topLeveLTeam.rb1.name === player
                                      ? topLeveLTeam.rb1.TDs
                                      : topLeveLTeam.rb2.name === player
                                      ? topLeveLTeam.rb2.TDs
                                      : topLeveLTeam.rb3.name === player
                                      ? topLeveLTeam.TDs
                                      : topLeveLTeam.wr1.name === player
                                      ? topLeveLTeam.wr1.TDs
                                      : topLeveLTeam.wr2.name === player
                                      ? topLeveLTeam.wr2.TDs
                                      : topLeveLTeam.wr3.name === player
                                      ? topLeveLTeam.wr3.TDs
                                      : topLeveLTeam.wr4.TDs
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.TDs =
                                        +event.target.value;

                                      qb1Data.TDs = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.TDs =
                                        +event.target.value;
                                      qb2Data.TDs = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.TDs =
                                        +event.target.value;
                                      qb3Data.TDs = +event.target.value;
                                    }

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.TDs =
                                        +event.target.value;

                                      rb1Data.TDs = +event.target.value;
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.TDs =
                                        +event.target.value;

                                      rb2Data.TDs = +event.target.value;
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.TDs =
                                        +event.target.value;

                                      rb3Data.TDs = +event.target.value;
                                    }
                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.TDs =
                                        +event.target.value;

                                      wr1Data.TDs = +event.target.value;
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.TDs =
                                        +event.target.value;
                                      wr2Data.TDs = +event.target.value;
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.TDs =
                                        +event.target.value;
                                      wr3Data.TDs = +event.target.value;
                                    }
                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.TDs =
                                        +event.target.value;
                                      wr4Data.TDs = +event.target.value;
                                    }

                                    topLeveLTeam.qb1.fantasyPoints = +(
                                      +(qb1Data.passYrds * 0.04) +
                                      +(qb1Data.passingTDs * 6) -
                                      +(qb1Data.INTs * 2) +
                                      +(qb1Data.RushingYards * 0.1) +
                                      +(qb1Data.TDs * 6)
                                    ).toFixed(1);
                                    topLeveLTeam.qb2.fantasyPoints = +(
                                      +(qb2Data.passYrds * 0.04) +
                                      +(qb2Data.passingTDs * 6) -
                                      +(qb2Data.INTs * 2) +
                                      +qb2Data.RushingYards * 0.1 +
                                      +(qb2Data.TDs * 6)
                                    ).toFixed(1);
                                    topLeveLTeam.qb3.fantasyPoints = +(
                                      +(qb3Data.passYrds * 0.04) +
                                      +(qb3Data.passingTDs * 6) -
                                      +(qb3Data.INTs * 2) +
                                      +qb3Data.RushingYards * 0.1 +
                                      +(qb3Data.TDs * 6)
                                    ).toFixed(1);

                                    // console.log(qb1Data.fantasyPoints);
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                            </div>
                          );
                        }
                        // }
                      }
                    )}
                  </div>
                )}
                <div className={styles.saveAndClearBTNsWrapper}>
                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        saveUsersProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Save Rushing Projections
                    </button>
                  </div>

                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        clearUsersRushingProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Clear Saved Rushing Projections
                    </button>
                  </div>
                </div>
                <RushingTable
                  qb1Data={topLeveLTeam.qb1}
                  qb2Data={topLeveLTeam.qb2}
                  qb3Data={topLeveLTeam.qb3}
                  rb1Data={topLeveLTeam.rb1}
                  rb2Data={topLeveLTeam.rb2}
                  rb3Data={topLeveLTeam.rb3}
                  wr1Data={topLeveLTeam.wr1}
                  wr2Data={topLeveLTeam.wr2}
                  wr3Data={topLeveLTeam.wr3}
                  wr4Data={topLeveLTeam.wr4}
                />
                <div className={styles.qbSectionTitle}> Recieving</div>
                {selectedTeamsUserSelectedPlayersToProjectArray && (
                  <div className={styles.sectionWrapper}>
                    {/* {dataTest.allPlayerData.map((player) => { */}
                    {selectedTeamsUserSelectedPlayersToProjectArray.map(
                      (player) => {
                        // if (player.team === team) {
                        if (
                          player === teamRB1 ||
                          player === teamRB2 ||
                          player === teamRB3 ||
                          player === teamWR1 ||
                          player === teamWR2 ||
                          player === teamWR3 ||
                          player === teamWR4 ||
                          player === teamTE1 ||
                          player === teamTE2
                        ) {
                          return (
                            <div
                              key={`${player}-${player.myValue}}`}
                              className={styles.teamsQBsWrapper}
                            >
                              {" "}
                              <div className={styles.playerNameLabel}>
                                {player}
                              </div>
                              {/* <form
                            onSubmit={(event) => {
                              event.preventDefault();

                              // Do something with `name` here
                            }}
                          >
                            <label htmlFor="games">Games Played</label>

                            <input
                              id="games"
                              value={
                                topLeveLTeam.rb1.name === player.name
                                  ? topLeveLTeam.rb1.gamesPlayed
                                  : topLeveLTeam.rb2.name === player.name
                                  ? topLeveLTeam.rb2.gamesPlayed
                                  : topLeveLTeam.rb3.name === player.name
                                  ? topLeveLTeam.rb3gamesPlayed
                                  : topLeveLTeam.wr1.name === player.name
                                  ? topLeveLTeam.wr1.gamesPlayed
                                  : topLeveLTeam.wr2.name === player.name
                                  ? topLeveLTeam.wr2.gamesPlayed
                                  : topLeveLTeam.wr3.name === player.name
                                  ? topLeveLTeam.wr3.gamesPlayed
                                  : topLeveLTeam.wr4.name === player.name
                                  ? topLeveLTeam.wr4.gamesPlayed
                                  : topLeveLTeam.te1 &&
                                    topLeveLTeam.te1.name === player.name
                                  ? topLeveLTeam.te1.gamesPlayed
                                  : topLeveLTeam.te2 &&
                                    topLeveLTeam.te2.gamesPlayed
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              onChange={(event) => {
                                // RB

                                if (topLeveLTeam.rb1.name === player.name) {
                                  topLeveLTeam.rb1.gamesPlayed =
                                    +event.target.value;
                                  rb1Data.name = topLeveLTeam.rb1.name;
                                  rb1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.rb2.name === player.name) {
                                  topLeveLTeam.rb2.gamesPlayed =
                                    +event.target.value;
                                  rb2Data.name = topLeveLTeam.rb2.name;
                                  rb2Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.rb3.name === player.name) {
                                  topLeveLTeam.rb3.gamesPlayed =
                                    +event.target.value;
                                  rb3Data.name = topLeveLTeam.rb3.name;
                                  rb3Data.gamesPlayed = +event.target.value;
                                }

                                // WR

                                if (topLeveLTeam.wr1.name === player.name) {
                                  topLeveLTeam.wr1.gamesPlayed =
                                    +event.target.value;
                                  wr1Data.name = topLeveLTeam.wr1.name;
                                  wr1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.wr2.name === player.name) {
                                  topLeveLTeam.wr2.gamesPlayed =
                                    +event.target.value;
                                  wr2Data.name = topLeveLTeam.wr2.name;
                                  wr2Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.wr3.name === player.name) {
                                  topLeveLTeam.wr3.gamesPlayed =
                                    +event.target.value;
                                  wr3Data.name = topLeveLTeam.wr3.name;
                                  wr3Data.gamesPlayed = +event.target.value;
                                }

                                if (topLeveLTeam.wr4.name === player.name) {
                                  topLeveLTeam.wr4.gamesPlayed =
                                    +event.target.value;
                                  wr4Data.name = topLeveLTeam.wr4.name;
                                  wr4Data.gamesPlayed = +event.target.value;
                                }

                                // TE

                                if (topLeveLTeam.te1.name === player.name) {
                                  topLeveLTeam.te1.gamesPlayed =
                                    +event.target.value;
                                  te1Data.name = topLeveLTeam.te1.name;
                                  te1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.te2) {
                                  if (topLeveLTeam.te2.name === player.name) {
                                    topLeveLTeam.te2.gamesPlayed =
                                      +event.target.value;
                                    te2Data.name = topLeveLTeam.te2.name;
                                    te2Data.gamesPlayed = +event.target.value;
                                  }
                                }
                              }}
                            />
                          </form>{" "} */}
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="targetShare">
                                  Targ Share %
                                </label>

                                <input
                                  id="targetShare"
                                  value={
                                    topLeveLTeam.rb1.name === player
                                      ? topLeveLTeam.rb1.targetShare
                                      : topLeveLTeam.rb2.name === player
                                      ? topLeveLTeam.rb2.targetShare
                                      : topLeveLTeam.rb3.name === player
                                      ? topLeveLTeam.targetShare
                                      : topLeveLTeam.wr1.name === player
                                      ? topLeveLTeam.wr1.targetShare
                                      : topLeveLTeam.wr2.name === player
                                      ? topLeveLTeam.wr2.targetShare
                                      : topLeveLTeam.wr3.name === player
                                      ? topLeveLTeam.wr3.targetShare
                                      : topLeveLTeam.wr4.name === player
                                      ? topLeveLTeam.wr4.targetShare
                                      : topLeveLTeam.te1 &&
                                        topLeveLTeam.te1.name === player
                                      ? topLeveLTeam.te1.targetShare
                                      : topLeveLTeam.te2.targetShare
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  maximum={35}
                                  onChange={(event) => {
                                    //
                                    if (
                                      +event.target.value > -1 &&
                                      +event.target.value < 36
                                    ) {
                                      let currentPlayerTryingToInputTargetShare =
                                        +event.target.value;

                                      // RB

                                      if (topLeveLTeam.rb1.name === player) {
                                        rb1Data.name = topLeveLTeam.rb1.name;
                                        topLeveLTeam.rb1.targetShare =
                                          +event.target.value;

                                        rb1Data.targetShare =
                                          +event.target.value;
                                        rb1Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(rb1Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.rb1.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(+topLeveLTeam.rb1.targetShare / 100)
                                        ).toFixed(0);
                                      }
                                      if (topLeveLTeam.rb2.name === player) {
                                        rb2Data.name = topLeveLTeam.rb2.name;
                                        topLeveLTeam.rb2.targetShare =
                                          +event.target.value;

                                        rb2Data.targetShare =
                                          +event.target.value;
                                        rb2Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(rb2Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.rb2.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(rb2Data.targetShare / 100)
                                        ).toFixed(0);
                                      }
                                      if (topLeveLTeam.rb3.name === player) {
                                        rb3Data.name = topLeveLTeam.rb3.name;
                                        topLeveLTeam.rb3.targetShare =
                                          +event.target.value;

                                        rb3Data.targetShare =
                                          +event.target.value;
                                        rb3Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(rb3Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.rb3.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(rb3Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      // WR

                                      if (topLeveLTeam.wr1.name === player) {
                                        wr1Data.name = topLeveLTeam.wr1.name;
                                        topLeveLTeam.wr1.targetShare =
                                          +event.target.value;

                                        wr1Data.targetShare =
                                          +event.target.value;
                                        wr1Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(wr1Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.wr1.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(wr1Data.targetShare / 100)
                                        ).toFixed(0);
                                      }
                                      if (topLeveLTeam.wr2.name === player) {
                                        wr2Data.name = topLeveLTeam.wr2.name;
                                        topLeveLTeam.wr2.targetShare =
                                          +event.target.value;

                                        wr2Data.targetShare =
                                          +event.target.value;
                                        wr2Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(wr2Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.wr2.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(wr2Data.targetShare / 100)
                                        ).toFixed(0);
                                      }
                                      if (topLeveLTeam.wr3.name === player) {
                                        wr3Data.name = topLeveLTeam.wr3.name;
                                        topLeveLTeam.wr3.targetShare =
                                          +event.target.value;

                                        wr3Data.targetShare =
                                          +event.target.value;
                                        wr3Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(wr3Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.wr3.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(wr3Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      if (topLeveLTeam.wr4.name === player) {
                                        wr4Data.name = topLeveLTeam.wr4.name;
                                        topLeveLTeam.wr4.targetShare =
                                          +event.target.value;

                                        wr4Data.targetShare =
                                          +event.target.value;
                                        wr4Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(wr4Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.wr4.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(wr4Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      // TE

                                      if (topLeveLTeam.te1.name === player) {
                                        te1Data.name = topLeveLTeam.te1.name;
                                        topLeveLTeam.te1.targetShare =
                                          +event.target.value;

                                        te1Data.targetShare =
                                          +event.target.value;
                                        te1Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(te1Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.te1.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(te1Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      if (
                                        topLeveLTeam.te2.name === player.name
                                      ) {
                                        te2Data.name = topLeveLTeam.te2.name;
                                        te2Data.targetShare =
                                          +event.target.value;
                                        te2Data.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(te2Data.targetShare / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.te2.targets = +(
                                          +topLeveLTeam.totalPassPlays *
                                          +(te2Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      // }
                                    }
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="catchPercentage">
                                  Catch Percent
                                </label>

                                <input
                                  id="catchPercentage"
                                  value={
                                    topLeveLTeam.rb1.name === player
                                      ? topLeveLTeam.rb1.catchPercentage
                                      : topLeveLTeam.rb2.name === player
                                      ? topLeveLTeam.rb2.catchPercentage
                                      : topLeveLTeam.rb3.name === player
                                      ? topLeveLTeam.catchPercentage
                                      : topLeveLTeam.wr1.name === player
                                      ? topLeveLTeam.wr1.catchPercentage
                                      : topLeveLTeam.wr2.name === player
                                      ? topLeveLTeam.wr2.catchPercentage
                                      : topLeveLTeam.wr3.name === player
                                      ? topLeveLTeam.wr3.catchPercentage
                                      : topLeveLTeam.wr4.name === player
                                      ? topLeveLTeam.wr4.catchPercentage
                                      : topLeveLTeam.te1 &&
                                        topLeveLTeam.te1.name === player
                                      ? topLeveLTeam.te1.catchPercentage
                                      : topLeveLTeam.te2.catchPercentage
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    //

                                    // RB

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.catchPercentage =
                                        +event.target.value;

                                      rb1Data.catchPercentage =
                                        +event.target.value;
                                      rb1Data.receptions = +(
                                        +rb1Data.targets *
                                        +(rb1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.rb1.receptions = +(
                                        +rb1Data.targets *
                                        +(rb1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.catchPercentage =
                                        +event.target.value;

                                      rb2Data.catchPercentage =
                                        +event.target.value;
                                      rb2Data.receptions = +(
                                        +rb2Data.targets *
                                        +(rb2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.rb2.receptions = +(
                                        +rb2Data.targets *
                                        +(rb2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.catchPercentage =
                                        +event.target.value;

                                      rb3Data.catchPercentage =
                                        +event.target.value;
                                      rb3Data.receptions = +(
                                        +rb3Data.targets *
                                        +(rb3Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.rb3.receptions = +(
                                        +rb3Data.targets *
                                        +(rb3Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }

                                    // WR

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.catchPercentage =
                                        +event.target.value;

                                      wr1Data.catchPercentage =
                                        +event.target.value;
                                      wr1Data.receptions = +(
                                        +wr1Data.targets *
                                        +(wr1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.wr1.receptions = +(
                                        +wr1Data.targets *
                                        +(wr1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.catchPercentage =
                                        +event.target.value;

                                      wr2Data.catchPercentage =
                                        +event.target.value;
                                      wr2Data.receptions = +(
                                        +wr2Data.targets *
                                        +(wr2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.wr2.receptions = +(
                                        +wr2Data.targets *
                                        +(wr2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.catchPercentage =
                                        +event.target.value;

                                      wr3Data.catchPercentage =
                                        +event.target.value;
                                      wr3Data.receptions = +(
                                        +wr3Data.targets *
                                        +(wr3Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.wr3.receptions = +(
                                        +wr3Data.targets *
                                        +(wr3Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }

                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.catchPercentage =
                                        +event.target.value;

                                      wr4Data.catchPercentage =
                                        +event.target.value;
                                      wr4Data.receptions = +(
                                        +wr4Data.targets *
                                        +(wr4Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.wr4.receptions = +(
                                        +wr4Data.targets *
                                        +(wr4Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }

                                    // TE

                                    if (topLeveLTeam.te1.name === player) {
                                      topLeveLTeam.te1.catchPercentage =
                                        +event.target.value;

                                      te1Data.catchPercentage =
                                        +event.target.value;
                                      te1Data.receptions = +(
                                        +te1Data.targets *
                                        +(te1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.te1.receptions = +(
                                        +te1Data.targets *
                                        +(te1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }

                                    if (topLeveLTeam.te2.name === player) {
                                      te2Data.catchPercentage =
                                        +event.target.value;

                                      te2Data.receptions = +(
                                        +te2Data.targets *
                                        +(te2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.te2.receptions = +(
                                        +te2Data.targets *
                                        +(te2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                    }

                                    // }
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="recievingYards">
                                  Recieving Yards
                                </label>

                                <input
                                  id="recievingYards"
                                  value={
                                    topLeveLTeam.rb1.name === player
                                      ? topLeveLTeam.rb1.recievingYards
                                      : topLeveLTeam.rb2.name === player
                                      ? topLeveLTeam.rb2.recievingYards
                                      : topLeveLTeam.rb3.name === player
                                      ? topLeveLTeam.recievingYards
                                      : topLeveLTeam.wr1.name === player
                                      ? topLeveLTeam.wr1.recievingYards
                                      : topLeveLTeam.wr2.name === player
                                      ? topLeveLTeam.wr2.recievingYards
                                      : topLeveLTeam.wr3.name === player
                                      ? topLeveLTeam.wr3.recievingYards
                                      : topLeveLTeam.wr4.name === player
                                      ? topLeveLTeam.wr4.recievingYards
                                      : topLeveLTeam.te1 &&
                                        topLeveLTeam.te1.name === player
                                      ? topLeveLTeam.te1.recievingYards
                                      : topLeveLTeam.te2.recievingYards
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (!rb1Data.recievingYards) {
                                      rb1Data.recievingYards = 0;
                                    }
                                    if (!rb2Data.recievingYards) {
                                      rb2Data.recievingYards = 0;
                                    }
                                    if (!rb3Data.recievingYards) {
                                      rb3Data.recievingYards = 0;
                                    }
                                    if (!wr1Data.recievingYards) {
                                      wr1Data.recievingYards = 0;
                                    }
                                    if (!wr2Data.recievingYards) {
                                      wr2Data.recievingYards = 0;
                                    }
                                    if (!wr3Data.recievingYards) {
                                      wr3Data.recievingYards = 0;
                                    }
                                    if (!wr4Data.recievingYards) {
                                      wr4Data.recievingYards = 0;
                                    }

                                    if (!te1Data.recievingYards) {
                                      te1Data.recievingYards = 0;
                                    }
                                    if (!te2Data.recievingYards) {
                                      te2Data.recievingYards = 0;
                                    }
                                    //

                                    // RB

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.recievingYards =
                                        +event.target.value;
                                      let temp = +event.target.value;
                                      rb1Data.recievingYards = +temp;
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.recievingYards =
                                        +event.target.value;

                                      let temp = +event.target.value;
                                      rb2Data.recievingYards = +temp;
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.recievingYards =
                                        +event.target.value;

                                      let temp = +event.target.value;
                                      rb3Data.recievingYards = +temp;
                                    }

                                    // WR

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.recievingYards =
                                        +event.target.value;

                                      let temp = +event.target.value;
                                      wr1Data.recievingYards = +temp;
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.recievingYards =
                                        +event.target.value;

                                      let temp = +event.target.value;
                                      wr2Data.recievingYards = +temp;
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.recievingYards =
                                        +event.target.value;

                                      let temp = +event.target.value;
                                      wr3Data.recievingYards = +temp;
                                    }

                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.recievingYards =
                                        +event.target.value;

                                      let temp = +event.target.value;
                                      wr4Data.recievingYards = +temp;
                                    }

                                    // TE

                                    if (topLeveLTeam.te1.name === player) {
                                      topLeveLTeam.te1.recievingYards =
                                        +event.target.value;

                                      let temp = +event.target.value;
                                      te1Data.recievingYards = +temp;
                                    }

                                    if (topLeveLTeam.te2.name === player) {
                                      topLeveLTeam.te2.recievingYards =
                                        +event.target.value;
                                      let temp = +event.target.value;
                                      te2Data.recievingYards = +temp;
                                    }

                                    let teamTotalProjectedRecivingYards =
                                      +rb1Data.recievingYards +
                                      +rb2Data.recievingYards +
                                      +rb3Data.recievingYards +
                                      +wr1Data.recievingYards +
                                      +wr2Data.recievingYards +
                                      +wr3Data.recievingYards +
                                      +wr4Data.recievingYards +
                                      +te1Data.recievingYards;

                                    // console.log(teamTotalProjectedRecivingYards);

                                    if (
                                      +teamTotalProjectedRecivingYards >
                                      topLeveLTeam.totalTeamProjectedPassingYards
                                    ) {
                                      alert(
                                        `Team total projected recieving yards should not exceed projected team passing yards of ${topLeveLTeam.totalTeamProjectedPassingYards}`
                                      );
                                    }

                                    // }
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="recievingTDs">Touchdowns</label>

                                <input
                                  id="recievingTDs"
                                  value={
                                    topLeveLTeam.rb1.name === player
                                      ? topLeveLTeam.rb1.recievingTDs
                                      : topLeveLTeam.rb2.name === player
                                      ? topLeveLTeam.rb2.recievingTDs
                                      : topLeveLTeam.rb3.name === player
                                      ? topLeveLTeam.recievingTDs
                                      : topLeveLTeam.wr1.name === player
                                      ? topLeveLTeam.wr1.recievingTDs
                                      : topLeveLTeam.wr2.name === player
                                      ? topLeveLTeam.wr2.recievingTDs
                                      : topLeveLTeam.wr3.name === player
                                      ? topLeveLTeam.wr3.recievingTDs
                                      : topLeveLTeam.wr4.name === player
                                      ? topLeveLTeam.wr4.recievingTDs
                                      : topLeveLTeam.te1 &&
                                        topLeveLTeam.te1.name === player
                                      ? topLeveLTeam.te1.recievingTDs
                                      : topLeveLTeam.te2.recievingTDs
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    //

                                    // RB

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.recievingTDs =
                                        +event.target.value;

                                      rb1Data.recievingTDs =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.recievingTDs =
                                        +event.target.value;

                                      rb2Data.recievingTDs =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.recievingTDs =
                                        +event.target.value;

                                      rb3Data.recievingTDs =
                                        +event.target.value;
                                    }

                                    // WR

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.recievingTDs =
                                        +event.target.value;

                                      wr1Data.recievingTDs =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.recievingTDs =
                                        +event.target.value;

                                      wr2Data.recievingTDs =
                                        +event.target.value;
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.recievingTDs =
                                        +event.target.value;

                                      wr3Data.recievingTDs =
                                        +event.target.value;
                                    }

                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.recievingTDs =
                                        +event.target.value;

                                      wr4Data.recievingTDs =
                                        +event.target.value;
                                    }

                                    // TE

                                    if (topLeveLTeam.te1.name === player) {
                                      topLeveLTeam.te1.recievingTDs =
                                        +event.target.value;

                                      te1Data.recievingTDs =
                                        +event.target.value;
                                    }

                                    if (topLeveLTeam.te2.name === player) {
                                      te2Data.recievingTDs =
                                        +event.target.value;
                                    }

                                    // }
                                    topLeveLTeam.rb1.fantasyPoints = +(
                                      +(rb1Data.RushingYards * 0.1) +
                                      +(rb1Data.TDs * 6) +
                                      +(rb1Data.receptions * 1) +
                                      +(rb1Data.recievingYards * 0.1) +
                                      +(rb1Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.rb2.fantasyPoints = +(
                                      +(rb2Data.RushingYards * 0.1) +
                                      +(rb2Data.TDs * 6) +
                                      +(rb2Data.receptions * 1) +
                                      +(rb2Data.recievingYards * 0.1) +
                                      +(rb2Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.rb3.fantasyPoints = +(
                                      +(rb3Data.RushingYards * 0.1) +
                                      +(rb3Data.TDs * 6) +
                                      +(rb3Data.receptions * 1) +
                                      +(rb3Data.recievingYards * 0.1) +
                                      +(rb3Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.wr1.fantasyPoints = +(
                                      +(wr1Data.RushingYards * 0.1) +
                                      +(wr1Data.TDs * 6) +
                                      +(wr1Data.receptions * 1) +
                                      +(wr1Data.recievingYards * 0.1) +
                                      +(wr1Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.wr1.fantasyPoints = +(
                                      +(wr2Data.RushingYards * 0.1) +
                                      +(wr2Data.TDs * 6) +
                                      +(wr2Data.receptions * 1) +
                                      +(wr2Data.recievingYards * 0.1) +
                                      +(wr2Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.wr1.fantasyPoints = +(
                                      +(wr3Data.RushingYards * 0.1) +
                                      +(wr3Data.TDs * 6) +
                                      +(wr3Data.receptions * 1) +
                                      +(wr3Data.recievingYards * 0.1) +
                                      +(wr3Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.wr1.fantasyPoints = +(
                                      +(wr4Data.RushingYards * 0.1) +
                                      +(wr4Data.TDs * 6) +
                                      +(wr4Data.receptions * 1) +
                                      +(wr4Data.recievingYards * 0.1) +
                                      +(wr4Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.te1.fantasyPoints = +(
                                      +(te1Data.receptions * 1) +
                                      +(te1Data.recievingYards * 0.1) +
                                      +(te1Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.te2.fantasyPoints = +(
                                      +(te2Data.receptions * 1) +
                                      +(te2Data.recievingYards * 0.1) +
                                      +(te2Data.recievingTDs * 6)
                                    ).toFixed(1);
                                  }}
                                />
                              </form>
                            </div>
                          );
                        }
                      }
                    )}
                  </div>
                )}
                <div className={styles.saveAndClearBTNsWrapper}>
                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        saveUsersProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Save Recieving Projections
                    </button>
                  </div>

                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        clearUsersRecievingProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Clear Saved Recieving Projections
                    </button>
                  </div>
                </div>
                <RecievingTable
                  rb1Data={topLeveLTeam.rb1}
                  rb2Data={topLeveLTeam.rb2}
                  rb3Data={topLeveLTeam.rb3}
                  wr1Data={topLeveLTeam.wr1}
                  wr2Data={topLeveLTeam.wr2}
                  wr3Data={topLeveLTeam.wr3}
                  wr4Data={topLeveLTeam.wr4}
                  te1Data={topLeveLTeam.te1}
                  te2Data={topLeveLTeam.te2}
                />
                <TeamLevelFantasyTable
                  qb1Data={topLeveLTeam.qb1}
                  qb2Data={topLeveLTeam.qb2}
                  qb3Data={topLeveLTeam.qb3}
                  rb1Data={topLeveLTeam.rb1}
                  rb2Data={topLeveLTeam.rb2}
                  rb3Data={topLeveLTeam.rb3}
                  wr1Data={topLeveLTeam.wr1}
                  wr2Data={topLeveLTeam.wr2}
                  wr3Data={topLeveLTeam.wr3}
                  wr4Data={topLeveLTeam.wr4}
                  te1Data={topLeveLTeam.te1}
                  te2Data={topLeveLTeam.te2}
                />
                {/* <button onClick={logTeam}>log team data</button> */}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
