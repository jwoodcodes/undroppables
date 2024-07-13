"use client";
import React from "react";
import styles from "../yardsPerCarry/yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function PassAttempts({
  userSelectedPlayersToProjectArray,
  team,
  totalPassPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsQBCompletionsSectionVisible,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curValue3, setCurValue3] = React.useState("");
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");
  const [curTotalProjectedPassAttempts, setCurTotalProjectedPassAttempts] =
    React.useState(0);

  const [
    totalPassAttemptsLeftToDistribute,
    setTotalPassAttemptsLeftToDistribute,
  ] = React.useState(totalPassPlays);
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
    let tempTotalProjectedPassAttempts = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.passAttempts);
      if (curPlayerBeingProjected === player.data.name) {
        // console.log(curPlayerBeingProjected, curValue, curValue2, curValue3);
        player.data.passAttempts = +curValue;
      }
      if (player.data.passAttempts) {
        //   if (!player.data.passAttempts || player.data.passAttempts === "") {
        //     player.data.passAttempts = 0;
        //   }
        // console.log(player);
        let temp = player.data.passAttempts;
        tempTotalProjectedPassAttempts += temp;
      }
      // console.log(tempTotalProjectedTargets);
      setCurTotalProjectedPassAttempts(tempTotalProjectedPassAttempts);

      setTotalPassAttemptsLeftToDistribute(
        totalPassPlays - tempTotalProjectedPassAttempts
      );
    });
  }, [curValue, curValue2, curValue3, userSelectedPlayersToProjectArray]);

  function submitPassAttempts() {
    // console.log(topLevelTeam);
    setIsQBCompletionsSectionVisible(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.passAttempts) {
        player.data.passAttempts = 0;
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
          if (!player.data.passAttempts) {
            player.data.passAttempts = 0;
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
      <p className={styles.SectionLabel}>Project player pass attempts</p>
      <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
        <div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
          <div>Remaning pass attempts to distribute</div>
          {/* <div>{totalTargetsLeftToDistribute}</div> */}
          {isTotalProjectedOverLimit ||
          totalPassAttemptsLeftToDistribute < 0 ? (
            <div className={styles.limitExceeded}>
              {totalPassAttemptsLeftToDistribute}
              <div>Limit Exceeded!</div>
            </div>
          ) : (
            <div>{totalPassAttemptsLeftToDistribute}</div>
          )}
        </div>
      </div>
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
                        <label htmlFor="passAttempts">Pass Attempts</label>

                        <input
                          id="targets"
                          value={
                            // topPlayer.data.name === player.data.name
                            //   ? player.data.passAttempts
                            //   : +event.target.value === 0
                            //   ? ""
                            //   : player.data.passAttempts ===
                            //       +event.target.value &&
                            //     +event.target.value !== 0
                            //   ? player.data.passAttempts
                            //   : +event.target.value !== "" &&
                            //     +event.target.value !== 0
                            //   ? +event.target.value
                            //   : curPlayerBeingProjected === player.data.name
                            //   ? +curValue
                            //   : ""

                            player.data.passAttempts === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue !== 0
                              ? +curValue
                              : player.data.passAttempts !== 0
                              ? player.data.passAttempts
                              : ""
                          }
                          className={styles.selectedTeamsPlayerInput}
                          type="number"
                          onChange={(event) => {
                            setCurPlayerBeingProjected(player.data.name);
                            if (
                              +event.target.value !== player.data.passAttempts
                            ) {
                              player.data.passAttempts = +event.target.value;
                              setCurValue3(event.target.value);
                            }
                            setCurValue(+event.target.value);
                            if (
                              +event.target.value < player.data.passAttempts
                            ) {
                              setCurValue2(+event.target.value);
                              player.data.passAttempts = +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.passAttempts = "";
                              }
                            }

                            // console.log(
                            //   player.data.passAttempts,
                            //   event.target.value
                            // );
                            player.data.passAttempts = +event.target.value;
                            if (+event.target.value === 0) {
                              player.data.passAttempts = "";
                            }
                            topPlayer.data.passAttempts = +event.target.value;
                          }}
                        />
                        {/* <div className={styles.playercalcStatWrapper}> */}

                        {/* <div className={styles.showCalcPlayerstats}>
                          Projected Target Share: {player.data.targetShare}
                        </div> */}
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
        <button
          className={styles.submitBtn}
          onClick={() => submitPassAttempts()}
        >
          Submit pass attempts projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Pass attempts must be submitted to move to next section
      </p>
    </div>
  );
}
