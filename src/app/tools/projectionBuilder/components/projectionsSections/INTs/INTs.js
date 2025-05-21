"use client";
import React from "react";
import styles from "../yardsPerCarry/yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function INTs({
  userSelectedPlayersToProjectArray,
  team,
  totalPassPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsINTSectionVisible,
  teamTotalReceptions,
  setIsIntsSubmitted,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curValue3, setCurValue3] = React.useState("");
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");
  const [curTotalProjectedINTs, setCurTotalProjectedINTs] = React.useState(0);
  const [curTotalProjectedRushAttempts, setCurTotalProjectedRushAttempts] =
    React.useState(0);
  const [totalINTsLeftToDistribute, setTotalINTsLeftToDistribute] =
    React.useState(teamTotalReceptions);
  const [isTotalProjectedOverLimit, setIsTotalProjectedOverLimit] =
    React.useState(false);

  React.useEffect(() => {
    const storedValue = window.localStorage.getItem("usersAllTeamsList");

    setUsersAllTeamsList(storedValue ? JSON.parse(storedValue) : allTeamsList);

    // console.log(userSelectedPlayersToProjectArray, totalRunPlays);
    const playerArrayStoredValue = window.localStorage.getItem(
      `userSelectedPlayersToProjectArray${team}`
    );

    setUserSelectedPlayersToProjectArray(
      playerArrayStoredValue
        ? JSON.parse(playerArrayStoredValue)
        : userSelectedPlayersToProjectArray
    );

    if (storedValue) {
      //   console.log(usersAllTeamsList);
      // if (totalRunPlays) {
      //   setIsPlayerRushAttemtpsSectionVisible(true);
      // }
    }
  }, [team]);

  React.useEffect(() => {
    let tempTotalProjectedINTs = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.ints);
      if (curPlayerBeingProjected === player.data.name) {
        // console.log(curPlayerBeingProjected, curValue, curValue2, curValue3);
        player.data.ints = +curValue;
        // if (+curValue === 0) {
        //   //   player.data.ints = "";
        //   setCurValue("");
        // }
        player.data.intRate = +(
          (+curValue / player.data.passAttempts) *
          100
        ).toFixed(1);
      }
      if (player.data.ints) {
        //   if (!player.data.ints || player.data.ints === "") {
        //     player.data.ints = 0;
        //   }
        // console.log(player);
        let temp = player.data.ints;
        tempTotalProjectedINTs += temp;
      }
      //   console.log(teamTotalReceptions);
      setCurTotalProjectedINTs(tempTotalProjectedINTs);

      //   setTotalCompletionsLeftToDistribute(
      //     teamTotalReceptions - tempTotalProjectedINTs
      //   );
    });
  }, [curValue, curValue2, curValue3, userSelectedPlayersToProjectArray]);

  function submitQBINTs() {
    // console.log(topLevelTeam);

    setIsIntsSubmitted(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.ints) {
        player.data.ints = 0;
      }

      // console.log(player);
    });

    window.localStorage.setItem(
      `userSelectedPlayersToProjectArray${team}`,
      JSON.stringify(userSelectedPlayersToProjectArray)
    );

    usersAllTeamsList.map((topLeveLTeam) => {
      if (team === topLeveLTeam.teamName) {
        topLeveLTeam.usersSelectedPlayers.map((player) => {
          if (
            !player.data.ints ||
            player.data.ints === "" ||
            player.data.ints === 0
          ) {
            player.data.ints = 0;
          }
          if (
            !player.data.ints ||
            player.data.ints === "" ||
            player.data.ints === 0
          ) {
            player.data.intRate = 0;
          }
        });
        // console.log(topLeveLTeam.usersSelectedPlayers);
      }
    });

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
  }

  return (
    <div>
      <p className={styles.SectionLabel}>Project INTs & INT rate</p>

      <div className={styles.wholeSectionWrapper}>
        {usersAllTeamsList.map((topLeveLTeam) => {
          if (team === topLeveLTeam.teamName) {
            // console.log(topLeveLTeam.usersSelectedPlayers);

            return topLeveLTeam.usersSelectedPlayers.map((topPlayer) => {
              // console.log(topPlayer);
              return userSelectedPlayersToProjectArray.map((player) => {
                // console.log(player);

                if (
                  topPlayer.data.name === player.data.name &&
                  player.data.position === "QB"
                ) {
                  return (
                    <div
                      key={player.data.name}
                      className={styles.teamsQBsWrapper}
                    >
                      {" "}
                      <div className={styles.playerNameWrapper}>
                        <div className={styles.playerNameLabel}>
                          {player.data.name}
                        </div>
                      </div>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();

                          // Do something with `name` here
                        }}
                        className={styles.playerInputForm}
                      >
                        <label htmlFor="ints">INTs</label>

                        <input
                          id="targets"
                          value={
                            // topPlayer.data.name === player.data.name
                            //   ? player.data.ints
                            //   : +event.target.value === 0
                            //   ? ""
                            //   : player.data.ints ===
                            //       +event.target.value &&
                            //     +event.target.value !== 0
                            //   ? player.data.ints
                            //   : +event.target.value !== "" &&
                            //     +event.target.value !== 0
                            //   ? +event.target.value
                            //   : curPlayerBeingProjected === player.data.name
                            //   ? +curValue
                            //   : ""
                            player.data.ints === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue !== 0
                              ? +curValue
                              : player.data.ints !== 0
                              ? player.data.ints
                              : ""
                          }
                          className={styles.selectedTeamsPlayerInput}
                          type="number"
                          onChange={(event) => {
                            setCurPlayerBeingProjected(player.data.name);
                            if (+event.target.value !== player.data.ints) {
                              player.data.ints = +event.target.value;
                              setCurValue3(event.target.value);
                            }
                            setCurValue(+event.target.value);
                            if (+curValue === 0) {
                              player.data.ints = "";
                            }
                            if (+event.target.value < player.data.ints) {
                              setCurValue2(+event.target.value);
                              player.data.ints = +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.ints = "";
                              }
                            }

                            // console.log(
                            //   player.data.ints,
                            //   event.target.value
                            // );
                            player.data.ints = +event.target.value;
                            if (+event.target.value === 0) {
                              player.data.ints = "";
                            }
                            topPlayer.data.ints = +event.target.value;

                            topPlayer.data.intRate = +(
                              (+event.target.value / player.data.passAttempts) *
                              100
                            ).toFixed(1);
                          }}
                        />
                        {/* <div className={styles.playercalcStatWrapper}> */}

                        <div className={styles.showCalcPlayerstats}>
                          Projected Attempts: {player.data.passAttempts}
                        </div>
                        <div className={styles.showCalcPlayerstats}>
                          INT rate %: {player.data.intRate}
                        </div>
                        {/* </div> */}
                      </form>
                    </div>
                  );
                }
              });
            });
          }
        })}
      </div>
      <p className={styles.informToEnterValueForEveryPlayerText}>
        If you want to project zero for a player simply leave it blank
      </p>
      <div className={styles.submitBtnWrapper}>
        <button className={styles.submitBtn} onClick={() => submitQBINTs()}>
          Submit QB INTs projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        QB INTs projections must be submitted to move to next section
      </p>
    </div>
  );
}
