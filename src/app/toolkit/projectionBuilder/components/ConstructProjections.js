"use client";
import React from "react";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import allTeamsList from "./data/allTeamsList";
import previousYearTeamData from "./data/previousYearTeamData";
import axios from "axios";
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
  // const [QBCompletionPercentage, setQBCompletionPercentage] = React.useState();
  // const [qbCompletions, setQbCompletions] = React.useState();

  let tempTotalPassPlays = 0;
  let tempTotalRunPlays = 0;

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
                <div>selected teams players here</div>
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
                      }

                      if (
                        topLeveLTeam.qb1.name &&
                        !topLeveLTeam.qb2.name &&
                        topLeveLTeam.qb1.name !== player.name
                      ) {
                        topLeveLTeam.qb2.name = player.name;
                      }

                      if (
                        topLeveLTeam.qb1.name &&
                        topLeveLTeam.qb2.name &&
                        !topLeveLTeam.qb3.name &&
                        topLeveLTeam.qb1.name !== player.name &&
                        topLeveLTeam.qb2.name !== player.name
                      ) {
                        topLeveLTeam.qb3.name = player.name;
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
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.gamesPlayed =
                                    +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.gamesPlayed =
                                    +event.target.value;
                                }
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
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.compPercent =
                                    +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.compPercent =
                                    +event.target.value;
                                }
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
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.YPA = +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.YPA = +event.target.value;
                                }
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
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  topLeveLTeam.qb2.passingTDs =
                                    +event.target.value;
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  topLeveLTeam.qb3.passingTDs =
                                    +event.target.value;
                                }
                                console.log(topLeveLTeam);
                                // console.log(topLeveLTeam.qb2);
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

                {/* <button onClick={logTeam}>log team data</button> */}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
