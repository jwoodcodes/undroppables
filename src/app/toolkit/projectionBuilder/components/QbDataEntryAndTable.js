"use client";
import React from "react";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import PassingTable from "./passingTable/PassingTable";
import allTeamsList from "./data/allTeamsList";

export default function QbDataEntryAndTable({
  dataTest,
  team,
  teamTotalProjectedPlays,
}) {
  const [passPercecntage, setPassPercecntage] = React.useState();
  const [runPercecntage, setRunPercecntage] = React.useState();
  const [totalPassPlays, setTotalPassPlays] = React.useState();
  const [totalRunPlays, setTotalRunPlays] = React.useState();

  const [allQBDataArray, setAllQBDataArray] = React.useState([]);

  let qb1Data = {};
  let qb2Data = {};
  let qb3Data = {};

  console.log(team);

  {
    allTeamsList.map((topLeveLTeam) => {
      return (
        <div>
          <div> Teams QB's</div>
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
                  <div key={player.name} className={styles.teamsQBsWrapper}>
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
                            topLeveLTeam.qb1.gamesPlayed = +event.target.value;
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
                              alert("Total games played should not exceed 18");
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
                              alert("Total games played should not exceed 18");
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
                                tempAttemptsForHere + qb2Data.PassAtmpts <=
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
                              qb1Data.passAttemptsPerGame = +event.target.value;
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
                                tempAttemptsForHere + qb1Data.PassAtmpts <=
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
                              qb2Data.passAttemptsPerGame = +event.target.value;
                              qb2Data.PassAtmpts =
                                +event.target.value *
                                topLeveLTeam.qb2.gamesPlayed;
                            }
                          }
                          if (topLeveLTeam.qb3.name === player.name) {
                            topLeveLTeam.qb3.passAttemptsPerGame =
                              +event.target.value;
                            qb3Data.passAttemptsPerGame = +event.target.value;
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
                                tempAttemptsForHere + qb2Data.PassAtmpts <=
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
                              qb3Data.passAttemptsPerGame = +event.target.value;
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
                            topLeveLTeam.qb1.compPercent = +event.target.value;
                            qb1Data.compPercent = +event.target.value;
                            qb1Data.completions = (
                              (+event.target.value / 100) *
                              qb1Data.PassAtmpts
                            ).toFixed(0);
                          }
                          if (topLeveLTeam.qb2.name === player.name) {
                            topLeveLTeam.qb2.compPercent = +event.target.value;
                            qb2Data.compPercent = +event.target.value;
                            qb2Data.completions = (
                              (+event.target.value / 100) *
                              qb2Data.PassAtmpts
                            ).toFixed(0);
                          }
                          if (topLeveLTeam.qb3.name === player.name) {
                            topLeveLTeam.qb3.compPercent = +event.target.value;
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
                            topLeveLTeam.qb1.passingTDs = +event.target.value;
                            qb1Data.passingTDs = +event.target.value;
                            // console.log(qb1Data);

                            allQBDataArray.push(qb1Data);
                            setAllQBDataArray(allQBDataArray);
                          }
                          if (topLeveLTeam.qb2.name === player.name) {
                            topLeveLTeam.qb2.passingTDs = +event.target.value;
                            qb2Data.passingTDs = +event.target.value;
                          }
                          if (topLeveLTeam.qb3.name === player.name) {
                            topLeveLTeam.qb3.passingTDs = +event.target.value;
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

          <PassingTable qb1Data={qb1Data} qb2Data={qb2Data} qb3Data={qb3Data} />

          {/* <button onClick={logTeam}>log team data</button> */}
        </div>
      );
    });
  }
}
