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
  const [QBCompletionPercentage, setQBCompletionPercentage] = React.useState();
  const [qbCompletions, setQbCompletions] = React.useState();

  let tempTotalPassPlays = 0;
  let tempTotalRunPlays = 0;

  console.log(dataTest.dataTest.allPlayerData);

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

      {team && (
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
                  if (event.target.value > -1 && event.target.value < 1600) {
                    setTeamTotalProjectedPlays(event.target.value);
                  }
                }}
                className={styles.teamSelectSelect}
              />
            </form>

            <p className={styles.selectedTeamText}>
              <strong>Total team plays:</strong>
              {"    "} {teamTotalProjectedPlays || "Enter total plays number"}
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
                      if (event.target.value > -5 && event.target.value < 100) {
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
                  {"    "} {passPercecntage || "Enter Value between 0 and 100"}
                </p>
                <p className={styles.runAndPassPercentText}>
                  <strong>Projected run percentage:</strong>
                  {"    "} {runPercecntage || "Enter projected pass percentage"}
                </p>

                {totalPassPlays > 400 && totalPassPlays < 800 && (
                  <div>
                    <p className={styles.runAndPassPercentText}>
                      <strong>Total pass plays:</strong>
                      {"    "}{" "}
                      {totalPassPlays || "Enter projected pass percentage"}
                    </p>
                    <p className={styles.runAndPassPercentText}>
                      <strong>Total run plays:</strong>
                      {"    "}{" "}
                      {totalRunPlays || "Enter projected pass percentage"}
                    </p>
                  </div>
                )}

                {totalPassPlays > 400 && (
                  <div>
                    {/* <button onClick={getData}>Fetch teams players</button> */}

                    <form
                      onSubmit={(event) => {
                        event.preventDefault();

                        // Do something with `teamTotalProjectedPlays` here
                      }}
                      className={styles.teamProjectedPlaysFormWrapper}
                    >
                      <label
                        htmlFor="QBCompletionPercentage-field"
                        className={styles.teamSelectLabel}
                      >
                        projected QB completion percentage:
                      </label>
                      <input
                        id="QBCompletionPercentage-field"
                        value={QBCompletionPercentage}
                        onChange={(event) => {
                          if (
                            event.target.value > -1 &&
                            event.target.value < 80
                          ) {
                            setQBCompletionPercentage(event.target.value);
                            if (event.target.value > 50) {
                              // console.log(event.target.value / 100);
                              setQbCompletions(
                                (
                                  totalPassPlays *
                                  (event.target.value / 100)
                                ).toFixed(0)
                              );
                            }
                          }
                        }}
                        className={styles.teamSelectSelect}
                      />
                    </form>

                    <p className={styles.selectedTeamText}>
                      <strong>Proejcted QB completion percentage:</strong>
                      {"    "}{" "}
                      {QBCompletionPercentage ||
                        "Enter projected QB completion percentage"}
                    </p>
                    <p className={styles.selectedTeamText}>
                      <strong>Proejcted QB completions:</strong>
                      {"    "}{" "}
                      {qbCompletions ||
                        "Enter projected QB completion percentage"}
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
            {allTeamsList.map((selectedTeam) => {
              return (
                selectedTeam.teamName === team && (
                  <div>
                    <div className={styles.lastYearsTeamInfoInsideWrapper}>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Total Plays</p>
                        <div className={styles.previousYearsTotalPlaysNode}>
                          <strong>{selectedTeam.totalPlays}</strong>
                        </div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Total Plays Rank</p>
                        <div>{selectedTeam.totalPlaysRank}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Seconds Per Snap</p>
                        <div>{selectedTeam.secondsPerSnap}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Seconds Per Snap Rank</p>
                        <div>{selectedTeam.secPerSnapRank}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Team pass percentage</p>
                        <div>{selectedTeam.passPercecntage}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Team run percentage</p>
                        <div>{selectedTeam.runPercecntage}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>New Head Coach</p>
                        <div>{selectedTeam.newHeadCoach}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>New Offensive Coordinator</p>
                        <div>{selectedTeam.newOffensiveCoordinator}</div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
