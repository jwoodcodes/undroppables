"use client";
import React from "react";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import allTeamsList from "./data/allTeamsList";
import previousYearTeamData from "./data/previousYearTeamData";
import axios from "axios";
import PassingTable from "./passingTable/PassingTable";
import RushingTable from "./rushingTable/RushingTable";
import RecievingTable from "./recievingTable/RecievingTable";
// import QbDataEntryAndTable from "./qbDataEntryAndTable";
// import DataFetcher from "./data/dataFetcher";
// import playerData from "./data/dataFetcher";

export default function ConstructProjections(dataTest) {
  const [team, setTeam] = React.useState("");
  const [teamTotalProjectedPlays, setTeamTotalProjectedPlays] =
    React.useState();
  const [passPercecntage, setPassPercecntage] = React.useState();
  const [runPercecntage, setRunPercecntage] = React.useState();
  const [totalPassPlays, setTotalPassPlays] = React.useState();
  const [totalRunPlays, setTotalRunPlays] = React.useState();
  const [teamTotalTargetShare, setTeamTotalTargetShare] = React.useState();

  const [allQBDataArray, setAllQBDataArray] = React.useState([]);

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

  // console.log(dataTest.dataTest.allPlayerData);
  // dataTest.dataTest.allPlayerData.map((team) => {
  //   if (team.team === "IND") {
  //     console.log(team);
  //   }
  // });

  function logTeam(teamData) {
    console.log(topLeveLTeam);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className={styles.teamSelectWrapper}
      >
        <label htmlFor="team-select" className={styles.teamSelectLabel}>
          Select team to start projections for:
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

      {allTeamsList.map((topLeveLTeam) => {
        if (team === topLeveLTeam.teamName) {
          return (
            <div>
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
                  >
                    <label
                      htmlFor="teamTotalProjectedPlays-field"
                      className={styles.teamSelectLabel}
                    >
                      Total projected team plays:
                    </label>
                    <input
                      id="teamTotalProjectedPlays-field"
                      value={teamTotalProjectedPlays}
                      type="number"
                      max={1600}
                      onChange={(event) => {
                        if (
                          event.target.value > -1 &&
                          event.target.value < 1600
                        ) {
                          setTeamTotalProjectedPlays(event.target.value);
                        }
                      }}
                      className={styles.teamSelectSelect}
                    />
                  </form>

                  <p className={styles.selectedTeamText}>
                    <strong>Total team plays:</strong>
                    {"    "}{" "}
                    {teamTotalProjectedPlays || "Enter total plays number"}
                  </p>

                  {teamTotalProjectedPlays > 900 && (
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
                          value={passPercecntage}
                          type="number"
                          onChange={(event) => {
                            if (
                              event.target.value > -5 &&
                              event.target.value < 100
                            ) {
                              setPassPercecntage(event.target.value);
                              let runPercent = 100 - event.target.value;
                              // console.log(passPercecntage);
                              setRunPercecntage(runPercent);

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
                              setTotalRunPlays(
                                +(
                                  teamTotalProjectedPlays *
                                  ((100 - event.target.value) / 100)
                                ).toFixed(0)
                              );
                            }
                          }}
                          className={styles.teamSelectSelect}
                        />
                      </form>

                      <p className={styles.runAndPassPercentText}>
                        <strong>Projected pass percentage:</strong>
                        {"    "}{" "}
                        {passPercecntage || "Enter Value between 0 and 100"}
                      </p>
                      <p className={styles.runAndPassPercentText}>
                        <strong>Projected run percentage:</strong>
                        {"    "}{" "}
                        {runPercecntage || "Enter projected pass percentage"}
                      </p>

                      {totalPassPlays > 400 && totalPassPlays < 800 && (
                        <div>
                          <p className={styles.runAndPassPercentText}>
                            <strong>Total pass plays:</strong>
                            {"    "}{" "}
                            {totalPassPlays ||
                              "Enter projected pass percentage"}
                          </p>
                          <p className={styles.runAndPassPercentText}>
                            <strong>Total run plays:</strong>
                            {"    "}{" "}
                            {totalRunPlays || "Enter projected pass percentage"}
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

              <div>
                <div className={styles.qbSectionTitle}> Teams QB's</div>
                {dataTest.dataTest.allPlayerData.map((player) => {
                  if (player.team === team) {
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
                        player.name !== topLeveLTeam.qb2.name
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
                        topLeveLTeam.qb2.name !== player.name
                      ) {
                        topLeveLTeam.qb3.name = player.name;
                        qb3Data.name = player.name;
                      }
                      return (
                        <div
                          key={player.name}
                          className={styles.teamsQBsWrapper}
                        >
                          {" "}
                          <div>{player.name}</div>
                          <form
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
                                  : topLeveLTeam.qb3.gamesPlayed
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
                                    qb3Data.gamesPlayed = +event.target.value;
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
                          >
                            <label htmlFor="passAttempts">Pass Atmp/game</label>

                            <input
                              id="passAttempts"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.passAttemptsPerGame
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.passAttemptsPerGame
                                  : topLeveLTeam.qb3.passAttemptsPerGame
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={50}
                              onChange={(event) => {
                                let tempTotalTeamAttemptsPerGameForHere = +(
                                  totalPassPlays / 18
                                ).toFixed(1);

                                if (topLeveLTeam.qb1.name === player.name) {
                                  let tempAttemptsForHere =
                                    +event.target.value *
                                    topLeveLTeam.qb1.gamesPlayed;

                                  if (
                                    (!qb2Data.PassAtmpts &&
                                      !qb3Data.PassAtmpts &&
                                      tempAttemptsForHere > totalPassPlays) ||
                                    (qb2Data.PassAtmpts &&
                                      !qb3Data.PassAtmpts &&
                                      tempAttemptsForHere + qb2Data.PassAtmpts >
                                        totalPassPlays) ||
                                    (qb2Data.PassAtmpts &&
                                      qb3Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb2Data.PassAtmpts +
                                        qb3Data.PassAtmpts >
                                        totalPassPlays)
                                  ) {
                                    topLeveLTeam.qb1.passAttemptsPerGame = 0;
                                    alert(
                                      `Total Pass Attempts should not exceed projected team pass attempts of ${totalPassPlays}`
                                    );
                                  }

                                  if (
                                    (!qb2Data.PassAtmpts &&
                                      !qb3Data.PassAtmpts &&
                                      tempAttemptsForHere <= totalPassPlays) ||
                                    (qb2Data.PassAtmpts &&
                                      !qb3Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb2Data.PassAtmpts <=
                                        totalPassPlays) ||
                                    (qb2Data.PassAtmpts &&
                                      qb3Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb2Data.PassAtmpts +
                                        qb3Data.PassAtmpts <=
                                        totalPassPlays)
                                  ) {
                                    topLeveLTeam.qb1.passAttemptsPerGame =
                                      +event.target.value;
                                    qb1Data.passAttemptsPerGame =
                                      +event.target.value;
                                    qb1Data.PassAtmpts =
                                      +event.target.value *
                                      topLeveLTeam.qb1.gamesPlayed;
                                  }
                                }

                                if (topLeveLTeam.qb2.name === player.name) {
                                  let tempAttemptsForHere =
                                    +event.target.value *
                                    topLeveLTeam.qb2.gamesPlayed;

                                  if (
                                    (!qb1Data.PassAtmpts &&
                                      !qb3Data.PassAtmpts &&
                                      tempAttemptsForHere > totalPassPlays) ||
                                    (qb1Data.PassAtmpts &&
                                      !qb3Data.PassAtmpts &&
                                      tempAttemptsForHere + qb1Data.PassAtmpts >
                                        totalPassPlays) ||
                                    (qb1Data.PassAtmpts &&
                                      qb3Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb1Data.PassAtmpts +
                                        qb3Data.PassAtmpts >
                                        totalPassPlays)
                                  ) {
                                    topLeveLTeam.qb2.passAttemptsPerGame = 0;
                                    alert(
                                      `Total Pass Attempts should not exceed projected team pass attempts of ${totalPassPlays} `
                                    );
                                  }

                                  if (
                                    (!qb1Data.PassAtmpts &&
                                      !qb3Data.PassAtmpts &&
                                      tempAttemptsForHere <= totalPassPlays) ||
                                    (qb1Data.PassAtmpts &&
                                      !qb3Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb1Data.PassAtmpts <=
                                        totalPassPlays) ||
                                    (qb1Data.PassAtmpts &&
                                      qb3Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb1Data.PassAtmpts +
                                        qb3Data.PassAtmpts <=
                                        totalPassPlays)
                                  ) {
                                    topLeveLTeam.qb2.passAttemptsPerGame =
                                      +event.target.value;
                                    qb2Data.passAttemptsPerGame =
                                      +event.target.value;
                                    qb2Data.PassAtmpts =
                                      +event.target.value *
                                      topLeveLTeam.qb2.gamesPlayed;
                                  }
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.passAttemptsPerGame =
                                    +event.target.value;
                                  qb3Data.passAttemptsPerGame =
                                    +event.target.value;
                                  qb3Data.PassAtmpts =
                                    +event.target.value *
                                    topLeveLTeam.qb3.gamesPlayed;

                                  //

                                  let tempAttemptsForHere =
                                    +event.target.value *
                                    topLeveLTeam.qb3.gamesPlayed;

                                  if (
                                    (!qb1Data.PassAtmpts &&
                                      !qb2Data.PassAtmpts &&
                                      tempAttemptsForHere > totalPassPlays) ||
                                    (qb1Data.PassAtmpts &&
                                      !qb2Data.PassAtmpts &&
                                      tempAttemptsForHere + qb1Data.PassAtmpts >
                                        totalPassPlays) ||
                                    (qb1Data.PassAtmpts &&
                                      qb2Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb1Data.PassAtmpts +
                                        qb2Data.PassAtmpts >
                                        totalPassPlays)
                                  ) {
                                    topLeveLTeam.qb3.passAttemptsPerGame = 0;
                                    alert(
                                      `Total Pass Attempts should not exceed projected team pass attempts of ${totalPassPlays} `
                                    );
                                  }

                                  if (
                                    (!qb2Data.PassAtmpts &&
                                      !qb1Data.PassAtmpts &&
                                      tempAttemptsForHere <= totalPassPlays) ||
                                    (qb2Data.PassAtmpts &&
                                      !qb1Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb2Data.PassAtmpts <=
                                        totalPassPlays) ||
                                    (qb2Data.PassAtmpts &&
                                      qb1Data.PassAtmpts &&
                                      tempAttemptsForHere +
                                        qb2Data.PassAtmpts +
                                        qb1Data.PassAtmpts <=
                                        totalPassPlays)
                                  ) {
                                    topLeveLTeam.qb3.passAttemptsPerGame =
                                      +event.target.value;
                                    qb3Data.passAttemptsPerGame =
                                      +event.target.value;
                                    qb3Data.PassAtmpts =
                                      +event.target.value *
                                      topLeveLTeam.qb3.gamesPlayed;
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
                          >
                            <label htmlFor="compPercent">Completion %</label>

                            <input
                              id="compPercent"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.compPercent
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.compPercent
                                  : topLeveLTeam.qb3.compPercent
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={80}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.compPercent =
                                    +event.target.value;
                                  qb1Data.compPercent = +event.target.value;
                                  qb1Data.completions = (
                                    (+event.target.value / 100) *
                                    qb1Data.PassAtmpts
                                  ).toFixed(0);
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.compPercent =
                                    +event.target.value;
                                  qb2Data.compPercent = +event.target.value;
                                  qb2Data.completions = (
                                    (+event.target.value / 100) *
                                    qb2Data.PassAtmpts
                                  ).toFixed(0);
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.compPercent =
                                    +event.target.value;
                                  qb3Data.compPercent = +event.target.value;
                                  qb3Data.completions = (
                                    (+event.target.value / 100) *
                                    qb3Data.PassAtmpts
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
                          >
                            <label htmlFor="YPA">Yards/Attempt</label>

                            <input
                              id="YPA"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.YPA
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.YPA
                                  : topLeveLTeam.qb3.YPA
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={15}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.YPA = +event.target.value;
                                  qb1Data.YPA = +event.target.value;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.YPA = +event.target.value;
                                  qb2Data.YPA = +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.YPA = +event.target.value;
                                  qb3Data.YPA = +event.target.value;
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
                          >
                            <label htmlFor="YPC">Yards/Comp</label>

                            <input
                              id="YPC"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.YPC
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.YPC
                                  : topLeveLTeam.qb3.YPC
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={19.9}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.YPC = +event.target.value;
                                  qb1Data.YPC = +event.target.value;
                                  qb1Data.passYrds =
                                    +event.target.value * qb1Data.completions;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.YPC = +event.target.value;
                                  qb2Data.YPC = +event.target.value;
                                  qb2Data.passYrds =
                                    +event.target.value * qb2Data.completions;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.YPC = +event.target.value;
                                  qb3Data.YPC = +event.target.value;
                                  qb3Data.passYrds =
                                    +event.target.value * qb3Data.completions;
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
                          >
                            <label htmlFor="passingTDs">Passing TD's</label>

                            <input
                              id="passingTDs"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.passingTDs
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.passingTDs
                                  : topLeveLTeam.qb3.passingTDs
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={60}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.passingTDs =
                                    +event.target.value;
                                  qb1Data.passingTDs = +event.target.value;
                                  // console.log(qb1Data);

                                  allQBDataArray.push(qb1Data);
                                  setAllQBDataArray(allQBDataArray);
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.passingTDs =
                                    +event.target.value;
                                  qb2Data.passingTDs = +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.passingTDs =
                                    +event.target.value;
                                  qb3Data.passingTDs = +event.target.value;
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
                          >
                            <label htmlFor="INTs">INTs</label>

                            <input
                              id="INTs"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.INTs
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.INTs
                                  : topLeveLTeam.qb3.INTs
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={40}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.INTs = +event.target.value;
                                  qb1Data.INTs = +event.target.value;
                                  // console.log(qb1Data);

                                  allQBDataArray.push(qb1Data);
                                  setAllQBDataArray(allQBDataArray);
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.INTs = +event.target.value;
                                  qb2Data.INTs = +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.INTs = +event.target.value;
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
                  }
                  // end QB/passing
                  //
                  // rushing
                  //
                })}

                <PassingTable
                  qb1Data={qb1Data}
                  qb2Data={qb2Data}
                  qb3Data={qb3Data}
                />

                <div className={styles.qbSectionTitle}> Rushing</div>
                {dataTest.dataTest.allPlayerData.map((player) => {
                  if (player.team === team) {
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
                        player.name !== topLeveLTeam.rb2.name
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
                        topLeveLTeam.rb2.name !== player.name
                      ) {
                        topLeveLTeam.rb3.name = player.name;
                        rb3Data.name = player.name;
                      }
                    }

                    //

                    //

                    if (player.position === "WR") {
                      // console.log(player);
                      if (!topLeveLTeam.wr1) {
                        topLeveLTeam.wr1 = {};
                      }
                      if (
                        !topLeveLTeam.wr2 &&
                        player.name !== topLeveLTeam.wr1.name
                      ) {
                        topLeveLTeam.wr2 = {};
                      }
                      if (
                        !topLeveLTeam.wr3 &&
                        player.name !== topLeveLTeam.wr1.name &&
                        player.name !== topLeveLTeam.wr2.name
                      ) {
                        topLeveLTeam.wr3 = {};
                      }
                      if (
                        !topLeveLTeam.wr4 &&
                        player.name !== topLeveLTeam.wr1.name &&
                        player.name !== topLeveLTeam.wr2.name &&
                        player.name !== topLeveLTeam.wr3.name
                      ) {
                        topLeveLTeam.wr4 = {};
                      }
                      if (!topLeveLTeam.wr1.name) {
                        topLeveLTeam.wr1.name = player.name;
                        wr1Data.name = player.name;
                        // console.log(rb1Data);
                      }

                      if (
                        topLeveLTeam.wr1.name &&
                        !topLeveLTeam.wr2.name &&
                        topLeveLTeam.wr1.name !== player.name
                      ) {
                        topLeveLTeam.wr2.name = player.name;

                        wr2Data.name = player.name;
                      }

                      if (
                        topLeveLTeam.wr1.name &&
                        topLeveLTeam.wr2.name &&
                        !topLeveLTeam.wr3.name &&
                        topLeveLTeam.wr1.name !== player.name &&
                        topLeveLTeam.wr2.name !== player.name
                      ) {
                        topLeveLTeam.wr3.name = player.name;
                        wr3Data.name = player.name;
                      }

                      if (
                        topLeveLTeam.wr1.name &&
                        topLeveLTeam.wr2.name &&
                        topLeveLTeam.wr3.name &&
                        !topLeveLTeam.wr4.name &&
                        topLeveLTeam.wr1.name !== player.name &&
                        topLeveLTeam.wr2.name !== player.name &&
                        topLeveLTeam.wr3.name !== player.name
                      ) {
                        topLeveLTeam.wr4.name = player.name;
                        wr4Data.name = player.name;
                      }
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

                    //
                    //
                    if (player.position === "RB" || player.position === "QB") {
                      return (
                        <div
                          key={player.name}
                          className={styles.teamsQBsWrapper}
                        >
                          {" "}
                          <div>{player.name}</div>
                          <form
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
                                  : topLeveLTeam.rb3.gamesPlayed
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
                          </form>
                          <form
                            onSubmit={(event) => {
                              event.preventDefault();

                              // Do something with `name` here
                            }}
                          >
                            <label htmlFor="rushAttempts">Rush Attemtps</label>

                            <input
                              id="rushAttempts"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.rushAttempts
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.rushAttempts
                                  : topLeveLTeam.qb3.name === player.name
                                  ? topLeveLTeam.qb3.rushAttempts
                                  : topLeveLTeam.rb1.name === player.name
                                  ? topLeveLTeam.rb1.rushAttempts
                                  : topLeveLTeam.rb2.name === player.name
                                  ? topLeveLTeam.rb2.rushAttempts
                                  : topLeveLTeam.rb3.rushAttempts
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={18}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.rushAttempts =
                                    +event.target.value;
                                  qb1Data.name = topLeveLTeam.qb1.name;
                                  qb1Data.rushAttempts = +event.target.value;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  qb2Data.name = topLeveLTeam.qb2.name;
                                  topLeveLTeam.qb2.rushAttempts =
                                    +event.target.value;
                                  qb2Data.rushAttempts = +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  qb3Data.name = topLeveLTeam.qb3.name;

                                  topLeveLTeam.qb3.rushAttempts =
                                    +event.target.value;
                                  qb3Data.rushAttempts = +event.target.value;
                                }

                                if (topLeveLTeam.rb1.name === player.name) {
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
                                  rb1Data.rushAttempts = +event.target.value;
                                  // }
                                }

                                if (topLeveLTeam.rb2.name === player.name) {
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
                                  rb2Data.rushAttempts = +event.target.value;
                                }
                                if (topLeveLTeam.rb3.name === player.name) {
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
                                  rb3Data.rushAttempts = +event.target.value;
                                  // }
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
                          >
                            <label htmlFor="games">Yards Per Carry</label>

                            <input
                              id="games"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.YPC
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.YPC
                                  : topLeveLTeam.qb3.name === player.name
                                  ? topLeveLTeam.qb3.YPC
                                  : topLeveLTeam.rb1.name === player.name
                                  ? topLeveLTeam.rb1.YPC
                                  : topLeveLTeam.rb2.name === player.name
                                  ? topLeveLTeam.rb2.YPC
                                  : topLeveLTeam.rb3.YPC
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.YPC = +event.target.value;

                                  qb1Data.YPC = +event.target.value;
                                  qb1Data.RushingYards =
                                    +event.target.value * qb1Data.rushAttempts;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.YPC = +event.target.value;
                                  qb2Data.YPC = +event.target.value;

                                  qb2Data.RushingYards =
                                    +event.target.value * qb2Data.rushAttempts;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.YPC = +event.target.value;
                                  qb3Data.YPC = +event.target.value;

                                  qb3Data.RushingYards =
                                    +event.target.value * qb3Data.rushAttempts;
                                }

                                if (topLeveLTeam.rb1.name === player.name) {
                                  topLeveLTeam.rb1.YPC = +event.target.value;

                                  rb1Data.YPC = +event.target.value;
                                  rb1Data.RushingYards =
                                    +event.target.value * rb1Data.rushAttempts;
                                }
                                if (topLeveLTeam.rb2.name === player.name) {
                                  topLeveLTeam.rb2.YPC = +event.target.value;

                                  rb2Data.YPC = +event.target.value;
                                  rb2Data.RushingYards =
                                    +event.target.value * rb2Data.rushAttempts;
                                }
                                if (topLeveLTeam.rb3.name === player.name) {
                                  topLeveLTeam.rb3.YPC = +event.target.value;

                                  rb3Data.YPC = +event.target.value;
                                  rb3Data.RushingYards =
                                    +event.target.value * rb3Data.rushAttempts;
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
                          >
                            <label htmlFor="touchdowns">TDs</label>

                            <input
                              id="touchdowns"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.TDs
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.TDs
                                  : topLeveLTeam.qb3.name === player.name
                                  ? topLeveLTeam.qb3.TDs
                                  : topLeveLTeam.rb1.name === player.name
                                  ? topLeveLTeam.rb1.TDs
                                  : topLeveLTeam.rb2.name === player.name
                                  ? topLeveLTeam.rb2.TDs
                                  : topLeveLTeam.rb3.TDs
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.TDs = +event.target.value;

                                  qb1Data.TDs = +event.target.value;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.TDs = +event.target.value;
                                  qb2Data.TDs = +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.TDs = +event.target.value;
                                  qb3Data.TDs = +event.target.value;
                                }

                                if (topLeveLTeam.rb1.name === player.name) {
                                  topLeveLTeam.rb1.TDs = +event.target.value;

                                  rb1Data.TDs = +event.target.value;
                                }
                                if (topLeveLTeam.rb2.name === player.name) {
                                  topLeveLTeam.rb2.TDs = +event.target.value;

                                  rb2Data.TDs = +event.target.value;
                                }
                                if (topLeveLTeam.rb3.name === player.name) {
                                  topLeveLTeam.rb3.TDs = +event.target.value;

                                  rb3Data.TDs = +event.target.value;
                                }
                                // console.log(topLeveLTeam);
                                // console.log(topLeveLTeam.qb1);
                                // console.log(topLeveLTeam.qb2);
                              }}
                            />
                          </form>
                        </div>
                      );
                    }
                  }
                })}

                <RushingTable
                  qb1Data={qb1Data}
                  qb2Data={qb2Data}
                  qb3Data={qb3Data}
                  rb1Data={rb1Data}
                  rb2Data={rb2Data}
                  rb3Data={rb3Data}
                />

                <div className={styles.qbSectionTitle}> Recieving</div>
                {dataTest.dataTest.allPlayerData.map((player) => {
                  if (player.team === team) {
                    if (
                      player.position === "RB" ||
                      player.position === "WR" ||
                      player.position === "TE"
                    ) {
                      return (
                        <div
                          key={player.name}
                          className={styles.teamsQBsWrapper}
                        >
                          {" "}
                          <div>{player.name}</div>
                          <form
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
                          </form>
                          <form
                            onSubmit={(event) => {
                              event.preventDefault();

                              // Do something with `name` here
                            }}
                          >
                            <label htmlFor="targetShare">Target Share %</label>

                            <input
                              id="targetShare"
                              value={
                                topLeveLTeam.rb1.name === player.name
                                  ? topLeveLTeam.rb1.targetShare
                                  : topLeveLTeam.rb2.name === player.name
                                  ? topLeveLTeam.rb2.targetShare
                                  : topLeveLTeam.rb3.name === player.name
                                  ? topLeveLTeam.targetShare
                                  : topLeveLTeam.wr1.name === player.name
                                  ? topLeveLTeam.wr1.targetShare
                                  : topLeveLTeam.wr2.name === player.name
                                  ? topLeveLTeam.wr2.targetShare
                                  : topLeveLTeam.wr3.name === player.name
                                  ? topLeveLTeam.wr3.targetShare
                                  : topLeveLTeam.wr4.name === player.name
                                  ? topLeveLTeam.wr4.targetShare
                                  : topLeveLTeam.te1 &&
                                    topLeveLTeam.te1.name === player.name
                                  ? topLeveLTeam.te1.targetShare
                                  : topLeveLTeam.te2 &&
                                    topLeveLTeam.te2.targetShare
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

                                  // if (!rb1Data.targetShare) {
                                  //   rb1Data.targetShare = 0;
                                  // }
                                  // if (!rb2Data.targetShare) {
                                  //   rb2Data.targetShare = 0;
                                  // }
                                  // if (!rb3Data.targetShare) {
                                  //   rb3Data.targetShare = 0;
                                  // }
                                  // // if (
                                  // //   !wr1Data.targetShare ||
                                  // //   wr1Data.targetShare < 1
                                  // // ) {
                                  // //   wr1Data.targetShare = 0;
                                  // // }
                                  // if (!wr2Data.targetShare) {
                                  //   wr2Data.targetShare = 0;
                                  // }
                                  // if (!wr3Data.targetShare) {
                                  //   wr3Data.targetShare = 0;
                                  // }
                                  // if (!wr4Data.targetShare) {
                                  //   wr4Data.targetShare = 0;
                                  // }
                                  // if (!te1Data.targetShare) {
                                  //   te1Data.targetShare = 0;
                                  // }
                                  // if (!te2Data.targetShare) {
                                  //   te2Data.targetShare = 0;
                                  // }

                                  // let totalTargetShare =
                                  //   +rb1Data.targetShare +
                                  //   +rb2Data.targetShare +
                                  //   +rb3Data.targetShare +
                                  //   +wr1Data.targetShare +
                                  //   +wr2Data.targetShare +
                                  //   +wr3Data.targetShare +
                                  //   +wr4Data.targetShare +
                                  //   +te1Data.targetShare +
                                  //   +te2Data.targetShare;

                                  // // console.log(totalTargetShare);
                                  // setTeamTotalTargetShare(totalTargetShare);
                                  // console.log(totalTargetShare);

                                  // if (totalTargetShare > 100) {
                                  //   alert(
                                  //     "Total team target share should not exceed 100"
                                  //   );
                                  // }

                                  // if (
                                  //   topLeveLTeam.rb1.targetShare +
                                  //     topLeveLTeam.rb2.targetShare +
                                  //     topLeveLTeam.rb3.targetShare +
                                  //     topLeveLTeam.wr1.targetShare +
                                  //     topLeveLTeam.wr2.targetShare +
                                  //     topLeveLTeam.wr3.targetShare +
                                  //     topLeveLTeam.wr4.targetShare +
                                  //     topLeveLTeam.te1.targetShare <=
                                  //   100
                                  // ) {
                                  // RB

                                  if (topLeveLTeam.rb1.name === player.name) {
                                    topLeveLTeam.rb1.targetShare =
                                      +event.target.value;

                                    rb1Data.targetShare = +event.target.value;
                                  }
                                  if (topLeveLTeam.rb2.name === player.name) {
                                    topLeveLTeam.rb2.targetShare =
                                      +event.target.value;

                                    rb2Data.targetShare = +event.target.value;
                                  }
                                  if (topLeveLTeam.rb3.name === player.name) {
                                    topLeveLTeam.rb3.targetShare =
                                      +event.target.value;

                                    rb3Data.targetShare = +event.target.value;
                                  }

                                  // WR

                                  if (topLeveLTeam.wr1.name === player.name) {
                                    topLeveLTeam.wr1.targetShare =
                                      +event.target.value;

                                    wr1Data.targetShare = +event.target.value;
                                  }
                                  if (topLeveLTeam.wr2.name === player.name) {
                                    topLeveLTeam.wr2.targetShare =
                                      +event.target.value;

                                    wr2Data.targetShare = +event.target.value;
                                  }
                                  if (topLeveLTeam.wr3.name === player.name) {
                                    topLeveLTeam.wr3.targetShare =
                                      +event.target.value;

                                    wr3Data.targetShare = +event.target.value;
                                  }

                                  if (topLeveLTeam.wr4.name === player.name) {
                                    topLeveLTeam.wr4.targetShare =
                                      +event.target.value;

                                    wr4Data.targetShare = +event.target.value;
                                  }

                                  // TE

                                  if (topLeveLTeam.te1.name === player.name) {
                                    topLeveLTeam.te1.targetShare =
                                      +event.target.value;

                                    te1Data.targetShare = +event.target.value;
                                  }
                                  if (topLeveLTeam.te2) {
                                    if (topLeveLTeam.te2.name === player.name) {
                                      te2Data.targetShare = +event.target.value;
                                    }
                                  }
                                  // }
                                }
                              }}
                            />
                          </form>
                        </div>
                      );
                    }
                  }
                })}

                <RecievingTable
                  rb1Data={rb1Data}
                  rb2Data={rb2Data}
                  rb3Data={rb3Data}
                  wr1Data={wr1Data}
                  wr2Data={wr2Data}
                  wr3Data={wr3Data}
                  wr4Data={wr4Data}
                  te1Data={te1Data}
                  te2Data={te2Data}
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
