"use client";
import React from "react";
import styles from "../yardsPerCarry/yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function QbCompletions({
  userSelectedPlayersToProjectArray,
  team,
  totalPassPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsPassingYardsSectionVisible,
  teamTotalReceptions,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curValue3, setCurValue3] = React.useState("");
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");
  const [curTotalProjectedCompletions, setCurTotalProjectedCompletions] =
    React.useState(0);
  const [curTotalProjectedRushAttempts, setCurTotalProjectedRushAttempts] =
    React.useState(0);
  const [
    totalCompletionsLeftToDistribute,
    setTotalCompletionsLeftToDistribute,
  ] = React.useState(teamTotalReceptions);
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
    let tempTotalProjectedCompletions = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.completions);
      if (curPlayerBeingProjected === player.data.name) {
        // console.log(curPlayerBeingProjected, curValue, curValue2, curValue3);
        player.data.completions = +curValue;
        // if (+curValue === 0) {
        //   //   player.data.completions = "";
        //   setCurValue("");
        // }
        player.data.completionPercentage = +(
          (+curValue / player.data.passAttempts) *
          100
        ).toFixed(1);
      }
      if (player.data.completions) {
        //   if (!player.data.completions || player.data.completions === "") {
        //     player.data.completions = 0;
        //   }
        // console.log(player);
        let temp = player.data.completions;
        tempTotalProjectedCompletions += temp;
      }
      //   console.log(teamTotalReceptions);
      setCurTotalProjectedCompletions(tempTotalProjectedCompletions);

      setTotalCompletionsLeftToDistribute(
        teamTotalReceptions - tempTotalProjectedCompletions
      );
    });
  }, [curValue, curValue2, curValue3, userSelectedPlayersToProjectArray]);

  function submitQBCompletions() {
    // console.log(topLevelTeam);
    setIsPassingYardsSectionVisible(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.completions) {
        player.data.completions = 0;
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
          if (!player.data.completions) {
            player.data.completions = 0;
          }
          if (!player.data.completionPercentage) {
            player.data.completionPercentage = 0;
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
      <p className={styles.SectionLabel}>
        Project QB completions & completion percentage
      </p>

      <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
        <div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
          <div>Remaning completions to distribute</div>
          {/* <div>{totalTargetsLeftToDistribute}</div> */}
          {isTotalProjectedOverLimit || totalCompletionsLeftToDistribute < 0 ? (
            <div className={styles.limitExceeded}>
              {totalCompletionsLeftToDistribute}
              <div>Limit Exceeded!</div>
            </div>
          ) : (
            <div>{totalCompletionsLeftToDistribute}</div>
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
                        <label htmlFor="completions">Completions</label>

                        <input
                          id="targets"
                          value={
                            // topPlayer.data.name === player.data.name
                            //   ? player.data.completions
                            //   : +event.target.value === 0
                            //   ? ""
                            //   : player.data.completions ===
                            //       +event.target.value &&
                            //     +event.target.value !== 0
                            //   ? player.data.completions
                            //   : +event.target.value !== "" &&
                            //     +event.target.value !== 0
                            //   ? +event.target.value
                            //   : curPlayerBeingProjected === player.data.name
                            //   ? +curValue
                            //   : ""
                            player.data.completions === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue !== 0
                              ? +curValue
                              : player.data.completions !== 0
                              ? player.data.completions
                              : ""
                          }
                          className={styles.selectedTeamsPlayerInput}
                          type="number"
                          onChange={(event) => {
                            setCurPlayerBeingProjected(player.data.name);
                            if (
                              +event.target.value !== player.data.completions
                            ) {
                              player.data.completions = +event.target.value;
                              setCurValue3(event.target.value);
                            }
                            setCurValue(+event.target.value);
                            if (+curValue === 0) {
                              player.data.completions = "";
                            }
                            if (+event.target.value < player.data.completions) {
                              setCurValue2(+event.target.value);
                              player.data.completions = +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.completions = "";
                              }
                            }

                            // console.log(
                            //   player.data.completions,
                            //   event.target.value
                            // );
                            player.data.completions = +event.target.value;
                            if (+event.target.value === 0) {
                              player.data.completions = "";
                            }
                            topPlayer.data.completions = +event.target.value;

                            topPlayer.data.completionPercentage = +(
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
                          Projected Completion %:{" "}
                          {player.data.completionPercentage}
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
        <button
          className={styles.submitBtn}
          onClick={() => submitQBCompletions()}
        >
          Submit QB completions projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        QB completions projections must be submitted to move to next section
      </p>
    </div>
  );
}
