"use client";
import React from "react";
import styles from "../yardsPerCarry/yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function PassingYards({
  userSelectedPlayersToProjectArray,
  team,
  totalPassPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsPassingTDsSectionVisible,
  isPassingTDsSectionVisible,
  totalProjectedTeamPassingYards,
  passTDssRef,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curValue3, setCurValue3] = React.useState("");
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");
  const [curTotalProjectedPassingYards, setCurTotalProjectedPassingYards] =
    React.useState(0);
  const [curTotalProjectedRushAttempts, setCurTotalProjectedRushAttempts] =
    React.useState(0);
  const [
    totalPassingYardsLeftToDistribute,
    setTotalPassingYardsLeftToDistribute,
  ] = React.useState(totalProjectedTeamPassingYards);
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
    let tempTotalProjectedPassingYards = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.passingYards);
      if (curPlayerBeingProjected === player.data.name) {
        // console.log(curPlayerBeingProjected, curValue, curValue2, curValue3);
        player.data.passingYards = +curValue;
      }
      if (player.data.passingYards) {
        //   if (!player.data.passingYards || player.data.passingYards === "") {
        //     player.data.passingYards = 0;
        //   }
        // console.log(player);
        let temp = player.data.passingYards;
        tempTotalProjectedPassingYards += temp;
      }
      // console.log(tempTotalProjectedTargets);
      setCurTotalProjectedPassingYards(tempTotalProjectedPassingYards);

      setTotalPassingYardsLeftToDistribute(
        totalProjectedTeamPassingYards - tempTotalProjectedPassingYards
      );
    });
  }, [curValue, curValue2, curValue3, userSelectedPlayersToProjectArray]);

  function submitPassingYards() {
    // console.log(topLevelTeam);
    setIsPassingTDsSectionVisible(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.passingYards) {
        player.data.passingYards = 0;
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
          if (!player.data.passingYards) {
            player.data.passingYards = 0;
            player.data.yardsPerCompletion = 0;
          }
        });
        // console.log(topLeveLTeam.usersSelectedPlayers);
      }
    });

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );

    if (passTDssRef.current.firstChild) {
      let tempRef = passTDssRef.current.firstChild.firstChild;
      //   // console.log(tempRef);
      tempRef.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(() => {
        if (passTDssRef.current.firstChild) {
          let tempRef = passTDssRef.current.firstChild.firstChild;
          //   // console.log(tempRef);
          tempRef.scrollIntoView({ behavior: "smooth" });
        } else {
          if (passTDssRef.current.firstChild) {
            setTimeout(() => {
              let tempRef = passTDssRef.current.firstChild.firstChild;
              //   // console.log(tempRef);
              tempRef.scrollIntoView({ behavior: "smooth" });
            }, 500);
          }
        }
      }, 500);
    }
    if (isPassingTDsSectionVisible) {
      let tempRef = passTDssRef.current.firstChild.firstChild;
      //   // console.log(tempRef);
      tempRef.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <p className={styles.SectionLabel}>
        Project QB Passing Yards & Yards Per Completion
      </p>
      <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
        <div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
          <div>Remaning passing yards to distribute</div>
          {/* <div>{totalTargetsLeftToDistribute}</div> */}
          {isTotalProjectedOverLimit ||
          totalPassingYardsLeftToDistribute < 0 ? (
            <div className={styles.limitExceeded}>
              {totalPassingYardsLeftToDistribute}
              <div>Limit Exceeded!</div>
            </div>
          ) : (
            <div>{totalPassingYardsLeftToDistribute}</div>
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
                        <label htmlFor="passingYards">Passing Yards</label>

                        <input
                          id="passingYards"
                          value={
                            // topPlayer.data.name === player.data.name
                            //   ? player.data.passingYards
                            //   : +event.target.value === 0
                            //   ? ""
                            //   : player.data.passingYards === +event.target.value &&
                            //     +event.target.value !== 0
                            //   ? player.data.passingYards
                            //   : +event.target.value !== "" &&
                            //     +event.target.value !== 0
                            //   ? +event.target.value
                            //   : curPlayerBeingProjected === player.data.name
                            //   ? +curValue
                            //   : ""

                            player.data.passingYards === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue !== 0
                              ? +curValue
                              : player.data.passingYards !== 0
                              ? player.data.passingYards
                              : ""
                          }
                          className={styles.selectedTeamsPlayerInput}
                          type="number"
                          onChange={(event) => {
                            setCurPlayerBeingProjected(player.data.name);
                            if (
                              +event.target.value !== player.data.passingYards
                            ) {
                              player.data.passingYards = +event.target.value;
                              setCurValue3(event.target.value);
                            }
                            setCurValue(+event.target.value);
                            if (
                              +event.target.value < player.data.passingYards
                            ) {
                              setCurValue2(+event.target.value);
                              player.data.passingYards = +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.passingYards = "";
                              }
                            }

                            // console.log(
                            //   player.data.passingYards,
                            //   event.target.value
                            // );
                            player.data.passingYards = +event.target.value;
                            if (+event.target.value === 0) {
                              player.data.passingYards = "";
                            }
                            topPlayer.data.passingYards = +event.target.value;

                            if (player.data.passingYards) {
                              player.data.yardsPerCompletion = +(
                                +event.target.value / player.data.completions
                              ).toFixed(2);

                              topPlayer.data.yardsPerCompletion = +(
                                +event.target.value / player.data.completions
                              ).toFixed(2);
                            }
                          }}
                        />
                        {/* <div className={styles.playercalcStatWrapper}> */}

                        <div className={styles.showCalcPlayerstats}>
                          Projected Completions: {player.data.completions}
                        </div>
                        <div className={styles.showCalcPlayerstats}>
                          Projected Yards/Completion:{" "}
                          {player.data.yardsPerCompletion}
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
          onClick={() => submitPassingYards()}
        >
          Submit passing yards projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Passing yards projections must be submitted to move to next section
      </p>
    </div>
  );
}
