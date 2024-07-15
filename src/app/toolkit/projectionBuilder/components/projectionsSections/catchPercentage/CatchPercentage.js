"use client";
import React from "react";
import styles from "../yardsPerCarry/yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function CatchPercentage({
  userSelectedPlayersToProjectArray,
  team,
  totalPassPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsYardsPerReceptionVisable,
  setTeamTotalReceptions,
  yardsPerReceptionRef,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curValue3, setCurValue3] = React.useState("");
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");
  const [
    curTotalProjectedCatchPercentage,
    setCurTotalProjectedCatchPercentage,
  ] = React.useState(0);
  const [curTotalProjectedRushAttempts, setCurTotalProjectedRushAttempts] =
    React.useState(0);
  const [
    totalCatchPercentageLeftToDistribute,
    setTotalCatchPercentageLeftToDistribute,
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
    let tempTotalProjectedCatchPercentage = 0;
    let tempTotalReceptions = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.catchPercentage);
      if (curPlayerBeingProjected === player.data.name) {
        // console.log(curPlayerBeingProjected, curValue, curValue2, curValue3);
        player.data.catchPercentage = +curValue;
      }
      if (player.data.catchPercentage) {
        //   if (!player.data.catchPercentage || player.data.catchPercentage === "") {
        //     player.data.catchPercentage = 0;
        //   }
        // console.log(player);
        let temp = player.data.catchPercentage;
        tempTotalProjectedCatchPercentage += temp;

        let recTemp = player.data.receptions;
        tempTotalReceptions += recTemp;
      }
      // console.log(tempTotalProjectedCatchPercentage);
      setCurTotalProjectedCatchPercentage(tempTotalProjectedCatchPercentage);
      setTeamTotalReceptions(tempTotalReceptions);
    });
  }, [curValue, curValue2, curValue3, userSelectedPlayersToProjectArray]);

  function submitCatchPercentage() {
    // console.log(topLevelTeam);
    setIsYardsPerReceptionVisable(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.catchPercentage) {
        player.data.catchPercentage = 0;
      }
      if (!player.data.receptions) {
        player.data.receptions = 0;
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
          if (!player.data.catchPercentage) {
            player.data.catchPercentage = 0;
          }
          if (!player.data.receptions) {
            player.data.receptions = 0;
          }
        });
        // console.log(topLeveLTeam.usersSelectedPlayers);
      }
    });

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );

    if (yardsPerReceptionRef.current.firstChild) {
      let tempRef = yardsPerReceptionRef.current.firstChild.firstChild;
      //   // console.log(tempRef);
      tempRef.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(() => {
        if (yardsPerReceptionRef.current.firstChild) {
          let tempRef = yardsPerReceptionRef.current.firstChild.firstChild;
          //   // console.log(tempRef);
          tempRef.scrollIntoView({ behavior: "smooth" });
        } else {
          if (yardsPerReceptionRef.current.firstChild) {
            setTimeout(() => {
              let tempRef = yardsPerReceptionRef.current.firstChild.firstChild;
              //   // console.log(tempRef);
              tempRef.scrollIntoView({ behavior: "smooth" });
            }, 500);
          }
        }
      }, 500);
    }
  }

  return (
    <div>
      <p className={styles.SectionLabel}>
        Project player catch percentage & receptions
      </p>

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
                        <label htmlFor="catchPercentage">
                          Catch Percentage
                        </label>

                        <input
                          id="catchPercentage"
                          value={
                            // topPlayer.data.name === player.data.name
                            //   ? player.data.catchPercentage
                            //   : +event.target.value === 0
                            //   ? ""
                            //   : player.data.catchPercentage ===
                            //       +event.target.value &&
                            //     +event.target.value !== 0
                            //   ? player.data.catchPercentage
                            //   : +event.target.value !== "" &&
                            //     +event.target.value !== 0
                            //   ? +event.target.value
                            //   : curPlayerBeingProjected === player.data.name
                            //   ? +curValue
                            //   : ""

                            player.data.catchPercentage === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue !== 0
                              ? +curValue
                              : player.data.catchPercentage !== 0
                              ? player.data.catchPercentage
                              : ""
                          }
                          className={styles.selectedTeamsPlayerInput}
                          type="number"
                          onChange={(event) => {
                            setCurPlayerBeingProjected(player.data.name);
                            if (
                              +event.target.value !==
                              player.data.catchPercentage
                            ) {
                              player.data.catchPercentage = +event.target.value;
                              setCurValue3(event.target.value);
                            }
                            setCurValue(+event.target.value);
                            if (
                              +event.target.value < player.data.catchPercentage
                            ) {
                              setCurValue2(+event.target.value);
                              player.data.catchPercentage = +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.catchPercentage = "";
                              }
                            }

                            // console.log(
                            //   player.data.catchPercentage,
                            //   event.target.value
                            // );
                            player.data.catchPercentage = +event.target.value;
                            if (+event.target.value === 0) {
                              player.data.catchPercentage = "";
                            }
                            topPlayer.data.catchPercentage =
                              +event.target.value;

                            if (player.data.catchPercentage) {
                              player.data.receptions = +(
                                (+event.target.value * player.data.targets) /
                                100
                              ).toFixed(0);

                              topPlayer.data.receptions = +(
                                (+event.target.value * player.data.targets) /
                                100
                              ).toFixed(0);

                              //   if (
                              //     player.data.catchPercentage === 0 ||
                              //     player.data.catchPercentage === "" ||
                              //     +event.target.value === 0 ||
                              //     +event.target.value === ""
                              //   ) {
                              //     topPlayer.data.receptions = 0;
                              //     player.data.receptions = 0;
                              //   }
                            }
                          }}
                        />
                        {/* <div className={styles.playercalcStatWrapper}> */}

                        <div className={styles.showCalcPlayerstats}>
                          Projected Targets: {player.data.targets}
                        </div>
                        <div className={styles.showCalcPlayerstats}>
                          Projected Receptions: {player.data.receptions}
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
          onClick={() => submitCatchPercentage()}
        >
          Submit catch percentage projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Catch Percentage projections must be submitted to move to next section
      </p>
    </div>
  );
}

{
  /* <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
<div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
  <div>Remaning catchPercentage to distribute</div>
//   {/* <div>{totalCatchPercentageLeftToDistribute}</div> */
}
//   {isTotalProjectedOverLimit ||
//   totalCatchPercentageLeftToDistribute < 0 ? (
//     <div className={styles.limitExceeded}>
//       {totalCatchPercentageLeftToDistribute}
//       <div>Limit Exceeded!</div>
//     </div>
//   ) : (
//     <div>{totalCatchPercentageLeftToDistribute}</div>
//   )}
// </div>
// </div> */}
