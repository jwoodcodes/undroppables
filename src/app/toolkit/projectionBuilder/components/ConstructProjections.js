"use client";
import React from "react";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import allTeamsList from "./data/allTeamsList";
import previousYearTeamData from "./data/previousYearTeamData";
import axios from "axios";
import PassingTable from "./passingTable/PassingTable";
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

  const [allQBDataArray, setAllQBDataArray] = React.useState([]);

  let tempTotalPassPlays = 0;
  let tempTotalRunPlays = 0;

  let qb1Data = {};
  let qb2Data = {};
  let qb3Data = {};

  // console.log(dataTest.dataTest.allPlayerData);
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
                <div>selected teams players</div>
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
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.gamesPlayed =
                                    +event.target.value;
                                  qb1Data.name = topLeveLTeam.qb1.name;
                                  qb1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.gamesPlayed =
                                    +event.target.value;
                                  qb2Data.name = topLeveLTeam.qb2.name;
                                  qb2Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.gamesPlayed =
                                    +event.target.value;
                                  qb3Data.name = topLeveLTeam.qb3.name;
                                  qb3Data.gamesPlayed = +event.target.value;
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
                            <label htmlFor="games">Pass Atmp/game</label>

                            <input
                              id="games"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.passAttemptsPerGame
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.passAttemptsPerGame
                                  : topLeveLTeam.qb3.passAttemptsPerGame
                              }
                              className={styles.selectedTeamsPlayerInput}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.passAttemptsPerGame =
                                    +event.target.value;
                                  qb1Data.passAttemptsPerGame =
                                    +event.target.value;
                                  qb1Data.PassAtmpts =
                                    +event.target.value *
                                    topLeveLTeam.qb1.gamesPlayed;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.passAttemptsPerGame =
                                    +event.target.value;
                                  qb2Data.passAttemptsPerGame =
                                    +event.target.value;
                                  qb2Data.PassAtmpts =
                                    +event.target.value *
                                    topLeveLTeam.qb2.gamesPlayed;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.passAttemptsPerGame =
                                    +event.target.value;
                                  qb3Data.passAttemptsPerGame =
                                    +event.target.value;
                                  qb3Data.PassAtmpts =
                                    +event.target.value *
                                    topLeveLTeam.qb3.gamesPlayed;
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

                {/* <button onClick={logTeam}>log team data</button> */}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
