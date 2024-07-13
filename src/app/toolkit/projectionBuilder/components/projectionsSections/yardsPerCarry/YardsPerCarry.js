"use client";
import React from "react";
import styles from "./yardsPerCarry.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function YardsPerCarry({
  userSelectedPlayersToProjectArray,
  team,
  totalRunPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsRushTDsSectionVisible,
  setTotalProjectedTeamRushYards,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [
    curTotalProjectedTeamRushingYards,
    setCurTotalProjectedTeamRushingYards,
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
    let tempTotalProjectedTeamRushingYards = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      //   console.log(player.data.rushAttempts, player.data.yardsPerCarry);
      //   if (player.data.yardsPerCarry) {
      if (!player.data.yardsPerCarry || player.data.yardsPerCarry === "") {
        player.data.yardsPerCarry = 0;
      }
      let temp = player.data.yardsPerCarry * player.data.rushAttempts;
      tempTotalProjectedTeamRushingYards += temp;
      //   }
      setCurTotalProjectedTeamRushingYards(tempTotalProjectedTeamRushingYards);
      setTotalProjectedTeamRushYards(tempTotalProjectedTeamRushingYards);

      //   setTotalRushAttemptsLeftToDistribute(
      //     totalRunPlays - tempTotalProjectedRushAttempts
      //   );
    });

    // console.log(curTotalProjectedRushAttempts);
  }, [curValue, curValue2, userSelectedPlayersToProjectArray]);

  function submitRushYardsPerCarryToProject() {
    // console.log(topLevelTeam);
    setIsRushTDsSectionVisible(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.yardsPerCarry) {
        player.data.yardsPerCarry = 0;
      }
      // console.log(player);
    });

    window.localStorage.setItem(
      `userSelectedPlayersToProjectArray${team}`,
      JSON.stringify(userSelectedPlayersToProjectArray)
    );

    usersAllTeamsList.map((topLeveLTeam) => {
      if (team === topLeveLTeam.teamName) {
        topLeveLTeam.totalProjectedRushingYards =
          curTotalProjectedTeamRushingYards;
        topLeveLTeam.usersSelectedPlayers.map((player) => {
          if (!player.data.yardsPerCarry) {
            player.data.yardsPerCarry = 0;
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
      <p className={styles.SectionLabel}>Project player Yards Per Carry</p>
      <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
        <div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
          <div>Current total team projected rushing yards</div>
          <div>{curTotalProjectedTeamRushingYards}</div>
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
                        <label htmlFor="yardsPerCarry">Yards/Carry</label>

                        <input
                          id="yardsPerCarry"
                          value={
                            // topPlayer.data.name === player.data.name
                            //   ? player.data.yardsPerCarry
                            //   : player.data.yardsPerCarry ===
                            //     +event.target.value
                            //   ? player.data.yardsPerCarry
                            //   : +event.target.value !== ""
                            //   ? +event.target.value
                            //   : +event.target.value === 0
                            //   ? ""
                            //   : ""
                            player.data.yardsPerCarry === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue === 0
                              ? ""
                              : curPlayerBeingProjected === player.data.name &&
                                +curValue !== 0
                              ? +curValue
                              : player.data.yardsPerCarry !== 0
                              ? player.data.yardsPerCarry
                              : ""
                          }
                          className={styles.selectedTeamsPlayerInput}
                          type="number"
                          onChange={(event) => {
                            setCurPlayerBeingProjected(player.data.name);
                            setCurValue(event.target.value);
                            if (
                              +event.target.value < player.data.yardsPerCarry
                            ) {
                              setCurValue2(event.target.value);
                              player.data.yardsPerCarry = +event.target.value;
                              if (+event.target.value === 0) {
                                player.data.yardsPerCarry = "";
                              }
                            }
                            // console.log(
                            //   player.data.yardsPerCarry,
                            //   event.target.value
                            // );
                            player.data.yardsPerCarry = +event.target.value;
                            if (+event.target.value === 0) {
                              player.data.yardsPerCarry = "";
                            }
                            topPlayer.data.yardsPerCarry = +event.target.value;

                            if (player.data.rushAttempts) {
                              player.data.rushYards =
                                +event.target.value * player.data.rushAttempts;

                              topPlayer.data.rushYards =
                                +event.target.value * player.data.rushAttempts;
                            }
                          }}
                        />
                        {/* <div className={styles.playercalcStatWrapper}> */}
                        <div className={styles.showCalcPlayerstats}>
                          Projected Attempts: {player.data.rushAttempts}
                        </div>
                        <div className={styles.showCalcPlayerstats}>
                          Projected Rushing yards: {player.data.rushYards}
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
          onClick={() => submitRushYardsPerCarryToProject()}
        >
          Submit Yards Per Carry projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Yards Per Carry projections must be submitted to move to next section
      </p>
    </div>
  );
}
