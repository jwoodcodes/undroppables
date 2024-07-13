"use client";
import React from "react";
import styles from "./teamTotalsandSplits.module.css";

import allTeamsList from "../../data/allTeamsList";

export default function TeamTotalPlaysAndSplits({
  userSelectedPlayersToProjectArray,
  team,
  teamTotalProjectedPlays,
  setTeamTotalProjectedPlays,
  totalPassPlays,
  setTotalPassPlays,
  totalRunPlays,
  setTotalRunPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setIsPlayerRushAttemtpsSectionVisible,
}) {
  //   console.log(userSelectedPlayersToProjectArray);

  const [passPercecntage, setPassPercecntage] = React.useState();
  const [runPercecntage, setRunPercecntage] = React.useState();

  React.useEffect(() => {
    const storedValue = window.localStorage.getItem("usersAllTeamsList");

    setUsersAllTeamsList(storedValue ? JSON.parse(storedValue) : allTeamsList);

    if (storedValue) {
      //   console.log(usersAllTeamsList);
      usersAllTeamsList.map((teamForHere) => {
        if (team === teamForHere.teamName) {
          //   console.log(teamForHere);
          setTeamTotalProjectedPlays(+teamForHere.teamTotalProjectedPlays);
          setPassPercecntage(+teamForHere.teamProjectedPassPercentage);
          setRunPercecntage(teamForHere.teamProjectedRunPercentage);
          setTotalPassPlays(teamForHere.totalProjectedPassPlays);
          setTotalRunPlays(teamForHere.totalProjectedRunPlays);
          //
        }
      });
      // if (totalRunPlays) {
      //   setIsPlayerRushAttemtpsSectionVisible(true);
      // }
    }
  }, [team]);

  function submitTeamLevelProjectionsToProject(topLeveLTeam) {
    // usersAllTeamsList.map((topLeveLTeam) => {
    //   if (team === topLeveLTeam.teamName) {
    //     topLeveLTeam.usersSelectedPlayers = userSelectedPlayersToProjectArray;
    //   }
    // });
    topLeveLTeam.usersSelectedPlayers = userSelectedPlayersToProjectArray;

    usersAllTeamsList.map((teamForHere) => {
      if (team === teamForHere.teamName) {
        // teamForHere = topLeveLTeam;
        // console.log(userSelectedPlayersToProjectArray);
        teamForHere.usersSelectedPlayers = userSelectedPlayersToProjectArray;

        teamForHere.teamProjectedPassPercentage = +passPercecntage;
        teamForHere.teamProjectedRunPercentage = runPercecntage;
        teamForHere.teamTotalProjectedPlays = +teamTotalProjectedPlays;
        teamForHere.totalProjectedPassPlays = totalPassPlays;
        teamForHere.totalProjectedRunPlays = totalRunPlays;

        // console.log(teamForHere);
      }
    });

    // console.log(usersAllTeamsList);

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );

    setIsPlayerRushAttemtpsSectionVisible(true);
  }

  return (
    <div key={team}>
      <div className={styles.SectionLabel}>
        Project Total Team Plays & Pass/Run Splits
      </div>
      {allTeamsList.map((topLeveLTeam) => {
        if (team === topLeveLTeam.teamName) {
          return (
            <>
              <div
                className={
                  styles.lastYearsTeamDataDisplayAndSelectingTotalProjectedPlaysWrapper
                }
                key={topLeveLTeam.teamName}
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
                      value={teamTotalProjectedPlays}
                      type="number"
                      max={1600}
                      onChange={(event) => {
                        if (event.target.value === 0) {
                          setTeamTotalProjectedPlays("");
                        }

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

                        if (teamTotalProjectedPlays) {
                          topLeveLTeam.teamTotalProjectedPlays =
                            teamTotalProjectedPlays;
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

                  {teamTotalProjectedPlays > 700 && (
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
                              // event.target.value > -5 &&
                              event.target.value < 100
                            ) {
                              setPassPercecntage(event.target.value);
                              topLeveLTeam.teamProjectedPassPercentage =
                                +event.target.value;
                              let runPercent = 100 - event.target.value;
                              if (passPercecntage) {
                                topLeveLTeam.teamProjectedPassPercentage =
                                  passPercecntage;
                              }
                              // console.log(passPercecntage);
                              setRunPercecntage(runPercent);
                              topLeveLTeam.teamProjectedRunPercentage =
                                runPercent;
                              if (runPercecntage) {
                                topLeveLTeam.teamProjectedRunPercentage =
                                  runPercecntage;
                              }
                              // let decimalPassPercent = +passPercecntage / 10;

                              // tempTotalPassPlays =
                              //   +teamTotalProjectedPlays * decimalPassPercent;
                              // setTotalPassPlays(+tempTotalPassPlays);
                              //
                              setTotalPassPlays(
                                +(
                                  teamTotalProjectedPlays *
                                  (event.target.value / 100)
                                ).toFixed(0)
                              );
                              topLeveLTeam.totalProjectedPassPlays = +(
                                teamTotalProjectedPlays *
                                (event.target.value / 100)
                              ).toFixed(0);
                              if (totalPassPlays) {
                                topLeveLTeam.totalProjectedPassPlays =
                                  totalPassPlays;
                              }

                              //
                              setTotalRunPlays(
                                +(
                                  teamTotalProjectedPlays *
                                  ((100 - event.target.value) / 100)
                                ).toFixed(0)
                              );
                              // setTotalTeamRushingAttemptsToDistribute(
                              //   +(
                              //     teamTotalProjectedPlays *
                              //     ((100 - event.target.value) / 100)
                              //   ).toFixed(0)
                              // );
                              topLeveLTeam.totalProjectedRunPlays = +(
                                teamTotalProjectedPlays *
                                ((100 - +event.target.value) / 100)
                              ).toFixed(0);

                              if (totalRunPlays) {
                                topLeveLTeam.totalProjectedRunPlays =
                                  totalRunPlays;
                              }
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

                      {totalPassPlays && (
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
              <div className={styles.submitBtnWrapper}>
                <button
                  className={styles.submitBtn}
                  onClick={() =>
                    submitTeamLevelProjectionsToProject(topLeveLTeam)
                  }
                >
                  Submit team level projections
                </button>
              </div>
              <p className={styles.howToMoveToNextSectionText}>
                team level splits must be submitted to move to next section
              </p>
            </>
          );
        }
      })}
    </div>
  );
}
