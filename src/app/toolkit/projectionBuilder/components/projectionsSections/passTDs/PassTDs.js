"use client";
import React from "react";
import styles from "../yardsPerCarry/yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function PassTDs({
  userSelectedPlayersToProjectArray,
  team,
  totalPassPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsINTSectionVisible,
  teamTotalReceptions,
  totalTeamProjectedPassingTDs,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curValue3, setCurValue3] = React.useState("");
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");
  const [curTotalProjectedPassTDs, setCurTotalProjectedPassTDs] =
    React.useState(0);
  const [curTotalProjectedRushAttempts, setCurTotalProjectedRushAttempts] =
    React.useState(0);
  const [totalPassTDsLeftToDistribute, setTotalPassTDsLeftToDistribute] =
    React.useState(totalTeamProjectedPassingTDs);
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
    let tempTotalProjectedPassTDs = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.passTDs);
      if (curPlayerBeingProjected === player.data.name) {
        // console.log(curPlayerBeingProjected, curValue, curValue2, curValue3);
        player.data.passTDs = +curValue;
        // if (+curValue === 0) {
        //   //   player.data.passTDs = "";
        //   setCurValue("");
        // }
        player.data.tdRate = +(
          (+curValue / player.data.passAttempts) *
          100
        ).toFixed(1);
      }
      if (player.data.passTDs) {
        //   if (!player.data.passTDs || player.data.passTDs === "") {
        //     player.data.passTDs = 0;
        //   }
        // console.log(player);
        let temp = player.data.passTDs;
        tempTotalProjectedPassTDs += temp;
      }
      //   console.log(teamTotalReceptions);
      setCurTotalProjectedPassTDs(tempTotalProjectedPassTDs);

      setTotalPassTDsLeftToDistribute(
        totalTeamProjectedPassingTDs - tempTotalProjectedPassTDs
      );

      //   setTotalCompletionsLeftToDistribute(
      //     teamTotalReceptions - tempTotalProjectedPassTDs
      //   );
    });
  }, [curValue, curValue2, curValue3, userSelectedPlayersToProjectArray]);

  function submitQBPassTDs() {
    // console.log(topLevelTeam);
    setIsINTSectionVisible(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.passTDs) {
        player.data.passTDs = 0;
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
          if (!player.data.passTDs) {
            player.data.passTDs = 0;
          }
          if (!player.data.tdRate) {
            player.data.tdRate = 0;
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
      <p className={styles.SectionLabel}>Project Pass TDs & Pass TD rate</p>
      <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
        <div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
          <div>Remaning TDs to distribute</div>
          {/* <div>{totalTargetsLeftToDistribute}</div> */}
          {isTotalProjectedOverLimit || totalPassTDsLeftToDistribute < 0 ? (
            <div className={styles.limitExceeded}>
              {totalPassTDsLeftToDistribute}
              <div>Limit Exceeded!</div>
            </div>
          ) : (
            <div>{totalPassTDsLeftToDistribute}</div>
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
                        <label htmlFor="passTDs">Pass TDs</label>

                        <input
                          id="targets"
                          value={
                            // topPlayer.data.name === player.data.name
                            //   ? player.data.passTDs
                            //   : +event.target.value === 0
                            //   ? ""
                            //   : player.data.passTDs ===
                            //       +event.target.value &&
                            //     +event.target.value !== 0
                            //   ? player.data.passTDs
                            //   : +event.target.value !== "" &&
                            //     +event.target.value !== 0
                            //   ? +event.target.value
                            //   : curPlayerBeingProjected === player.data.name
                            //   ? +curValue
                            //   : ""
                            player.data.passTDs === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue !== 0
                              ? +curValue
                              : player.data.passTDs !== 0
                              ? player.data.passTDs
                              : ""
                          }
                          className={styles.selectedTeamsPlayerInput}
                          type="number"
                          onChange={(event) => {
                            setCurPlayerBeingProjected(player.data.name);
                            if (+event.target.value !== player.data.passTDs) {
                              player.data.passTDs = +event.target.value;
                              setCurValue3(event.target.value);
                            }
                            setCurValue(+event.target.value);
                            if (+curValue === 0) {
                              player.data.passTDs = "";
                            }
                            if (+event.target.value < player.data.passTDs) {
                              setCurValue2(+event.target.value);
                              player.data.passTDs = +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.passTDs = "";
                              }
                            }

                            // console.log(
                            //   player.data.passTDs,
                            //   event.target.value
                            // );
                            player.data.passTDs = +event.target.value;
                            if (+event.target.value === 0) {
                              player.data.passTDs = "";
                            }
                            topPlayer.data.passTDs = +event.target.value;

                            topPlayer.data.tdRate = +(
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
                          TD rate %: {player.data.tdRate}
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
        <button className={styles.submitBtn} onClick={() => submitQBPassTDs()}>
          Submit pass TDs projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Pass TD projections must be submitted to move to next section
      </p>
    </div>
  );
}
