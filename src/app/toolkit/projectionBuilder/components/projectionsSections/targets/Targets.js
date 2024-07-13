"use client";
import React from "react";
import styles from "../yardsPerCarry/yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function Targets({
  userSelectedPlayersToProjectArray,
  team,
  totalPassPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsCatchPercentageSectionVisible,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curValue3, setCurValue3] = React.useState("");
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");
  const [curTotalProjectedTargets, setCurTotalProjectedTargets] =
    React.useState(0);
  const [curTotalProjectedRushAttempts, setCurTotalProjectedRushAttempts] =
    React.useState(0);
  const [totalTargetsLeftToDistribute, setTotalTargetsLeftToDistribute] =
    React.useState(totalPassPlays);
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
    let tempTotalProjectedTargets = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.targets);
      if (curPlayerBeingProjected === player.data.name) {
        // console.log(curPlayerBeingProjected, curValue, curValue2, curValue3);
        player.data.targets = +curValue;
      }
      if (player.data.targets) {
        //   if (!player.data.targets || player.data.targets === "") {
        //     player.data.targets = 0;
        //   }
        // console.log(player);
        let temp = player.data.targets;
        tempTotalProjectedTargets += temp;
      }
      // console.log(tempTotalProjectedTargets);
      setCurTotalProjectedTargets(tempTotalProjectedTargets);

      setTotalTargetsLeftToDistribute(
        totalPassPlays - tempTotalProjectedTargets
      );
    });
  }, [curValue, curValue2, curValue3, userSelectedPlayersToProjectArray]);

  function submitTargets() {
    // console.log(topLevelTeam);
    setIsCatchPercentageSectionVisible(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.targets) {
        player.data.targets = 0;
      }

      if (player.data.position === "QB") {
        player.data.targets = 0;
        player.data.targetShare = 0;
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
          if (!player.data.targets) {
            player.data.targets = 0;
          }
          if (player.data.position === "QB") {
            player.data.targets = 0;
            player.data.targetShare = 0;
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
        Project player Targets and Target share
      </p>
      <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
        <div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
          <div>Remaning targets to distribute</div>
          {/* <div>{totalTargetsLeftToDistribute}</div> */}
          {isTotalProjectedOverLimit || totalTargetsLeftToDistribute < 0 ? (
            <div className={styles.limitExceeded}>
              {totalTargetsLeftToDistribute}
              <div>Limit Exceeded!</div>
            </div>
          ) : (
            <div>{totalTargetsLeftToDistribute}</div>
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
                  player.data.position !== "QB"
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
                        <label htmlFor="targets">Targets</label>

                        <input
                          id="targets"
                          value={
                            // topPlayer.data.name === player.data.name
                            //   ? player.data.targets
                            //   : +event.target.value === 0
                            //   ? ""
                            //   : player.data.targets === +event.target.value &&
                            //     +event.target.value !== 0
                            //   ? player.data.targets
                            //   : +event.target.value !== "" &&
                            //     +event.target.value !== 0
                            //   ? +event.target.value
                            //   : curPlayerBeingProjected === player.data.name
                            //   ? +curValue
                            //   : ""

                            player.data.targets === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue !== 0
                              ? +curValue
                              : player.data.targets !== 0
                              ? player.data.targets
                              : ""
                          }
                          className={styles.selectedTeamsPlayerInput}
                          type="number"
                          onChange={(event) => {
                            setCurPlayerBeingProjected(player.data.name);
                            if (+event.target.value !== player.data.targets) {
                              player.data.targets = +event.target.value;
                              setCurValue3(event.target.value);
                            }
                            setCurValue(+event.target.value);
                            if (+event.target.value < player.data.targets) {
                              setCurValue2(+event.target.value);
                              player.data.targets = +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.targets = "";
                              }
                            }

                            // console.log(
                            //   player.data.targets,
                            //   event.target.value
                            // );
                            player.data.targets = +event.target.value;
                            if (+event.target.value === 0) {
                              player.data.targets = "";
                            }
                            topPlayer.data.targets = +event.target.value;

                            if (player.data.targets) {
                              player.data.targetShare = +(
                                (+event.target.value / totalPassPlays) *
                                100
                              ).toFixed(2);

                              topPlayer.data.targetShare = +(
                                (+event.target.value / totalPassPlays) *
                                100
                              ).toFixed(2);

                              if (
                                player.data.targets === 0 ||
                                player.data.targets === "" ||
                                +event.target.value === 0 ||
                                +event.target.value === ""
                              ) {
                                topPlayer.data.targetShare = 0;
                                player.data.targetShare = 0;
                              }
                            }
                          }}
                        />
                        {/* <div className={styles.playercalcStatWrapper}> */}

                        <div className={styles.showCalcPlayerstats}>
                          Projected Target Share: {player.data.targetShare}
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
        <button className={styles.submitBtn} onClick={() => submitTargets()}>
          Submit targets projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Target projections must be submitted to move to next section
      </p>
    </div>
  );
}
