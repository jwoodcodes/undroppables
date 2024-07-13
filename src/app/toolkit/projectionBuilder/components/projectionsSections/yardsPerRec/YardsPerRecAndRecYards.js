"use client";
import React from "react";
import styles from "../yardsPerCarry/yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function YardsPerReceptionAndRecYards({
  userSelectedPlayersToProjectArray,
  team,
  totalRunPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsRecTDsSectionVisible,
  setTotalProjectedTeamPassingYards,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [
    curTotalProjectedTeamRecievingYards,
    setCurTotalProjectedTeamRecievingYards,
  ] = React.useState(0);
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");
  //   const [curTotalProjectedRushAttempts, setCurTotalProjectedRushAttempts] =
  //     React.useState(0);
  //   const [
  //     totalRushAttemptsLeftToDistribute,
  //     setTotalRushAttemptsLeftToDistribute,
  //   ] = React.useState(totalRunPlays);
  //   const [isTotalProjectedOverLimit, setIsTotalProjectedOverLimit] =
  //     React.useState(false);

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
    let tempTotalProjectedTeamRecievingYards = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.yardsPerReception);
      //   if (player.data.yardsPerReception) {
      if (
        !player.data.yardsPerReception ||
        player.data.yardsPerReception === ""
      ) {
        player.data.yardsPerReception = 0;
      }
      let temp = player.data.yardsPerReception * player.data.receptions;
      tempTotalProjectedTeamRecievingYards += temp;
      //   }
      setCurTotalProjectedTeamRecievingYards(
        tempTotalProjectedTeamRecievingYards
      );
      setTotalProjectedTeamPassingYards(tempTotalProjectedTeamRecievingYards);

      //   setTotalRushAttemptsLeftToDistribute(
      //     totalRunPlays - tempTotalProjectedRushAttempts
      //   );
    });

    // console.log(curTotalProjectedRushAttempts);
  }, [curValue, curValue2, userSelectedPlayersToProjectArray]);

  function submitYardsPerReceptionToProject() {
    // console.log(topLevelTeam);
    setIsRecTDsSectionVisible(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.yardsPerReception) {
        player.data.yardsPerReception = 0;
      }
      // console.log(player);
    });

    window.localStorage.setItem(
      `userSelectedPlayersToProjectArray${team}`,
      JSON.stringify(userSelectedPlayersToProjectArray)
    );

    usersAllTeamsList.map((topLeveLTeam) => {
      topLeveLTeam.totalProjectedPassingYards =
        curTotalProjectedTeamRecievingYards;
      if (team === topLeveLTeam.teamName) {
        topLeveLTeam.usersSelectedPlayers.map((player) => {
          if (!player.data.yardsPerReception) {
            player.data.yardsPerReception = 0;
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
        Project player Yards Per Reception & Recieving Yards
      </p>
      <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
        <div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
          <div>Current total team projected recieving yards</div>
          <div>{curTotalProjectedTeamRecievingYards}</div>
          {/* {isTotalProjectedOverLimit ||
          totalRushAttemptsLeftToDistribute < 0 ? (
            <div className={styles.limitExceeded}>
              {totalRushAttemptsLeftToDistribute}
              <div>Limit Exceeded!</div>
            </div>
          ) : (
            <div>{totalRushAttemptsLeftToDistribute}</div>
          )} */}
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
                if (topPlayer.data.name === player.data.name) {
                  if (player.data.position !== "QB") {
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
                          <label htmlFor="yardsPerReception">
                            Yards/Reception
                          </label>

                          <input
                            id="yardsPerReception"
                            value={
                              // topPlayer.data.name === player.data.name
                              //   ? player.data.yardsPerReception
                              //   : player.data.yardsPerReception ===
                              //     +event.target.value
                              //   ? player.data.yardsPerReception
                              //   : +event.target.value !== ""
                              //   ? +event.target.value
                              //   : +event.target.value === 0
                              //   ? ""
                              //   : ""
                              player.data.yardsPerReception === 0
                                ? ""
                                : curPlayerBeingProjected ===
                                    player.data.name && +curValue === 0
                                ? ""
                                : curPlayerBeingProjected ===
                                    player.data.name && +curValue !== 0
                                ? +curValue
                                : player.data.yardsPerReception !== 0
                                ? player.data.yardsPerReception
                                : ""
                            }
                            className={styles.selectedTeamsPlayerInput}
                            type="number"
                            onChange={(event) => {
                              setCurPlayerBeingProjected(player.data.name);
                              setCurValue(event.target.value);
                              if (
                                +event.target.value <
                                player.data.yardsPerReception
                              ) {
                                setCurValue2(event.target.value);
                                player.data.yardsPerReception =
                                  +event.target.value;
                                if (+event.target.value === 0) {
                                  player.data.yardsPerReception = "";
                                }
                              }
                              // console.log(
                              //   player.data.yardsPerReception,
                              //   event.target.value
                              // );
                              player.data.yardsPerReception =
                                +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.yardsPerReception = "";
                              }
                              topPlayer.data.yardsPerReception =
                                +event.target.value;

                              if (player.data.receptions) {
                                player.data.recievingYards =
                                  +event.target.value * player.data.receptions;

                                topPlayer.data.recievingYards =
                                  +event.target.value * player.data.receptions;
                              }
                            }}
                          />
                          {/* <div className={styles.playercalcStatWrapper}> */}
                          <div className={styles.showCalcPlayerstats}>
                            Projected Receptions: {player.data.receptions}
                          </div>
                          <div className={styles.showCalcPlayerstats}>
                            Projected Recieving yards:{" "}
                            {player.data.recievingYards}
                          </div>
                          {/* </div> */}
                        </form>
                      </div>
                    );
                  }
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
          onClick={() => submitYardsPerReceptionToProject()}
        >
          Submit Yards Per Reception projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Yards Per Reception projections must be submitted to move to next
        section
      </p>
    </div>
  );
}
