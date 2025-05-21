"use client";
import React from "react";
import styles from "../playerRushAttempts/playerRushAttempts.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function RushTDs({
  userSelectedPlayersToProjectArray,
  team,

  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsTargetsSectionVisble,
  targetsRef,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curPlayerBeingProjected, setCurPlayerBeingProjected] =
    React.useState("");

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

  //   React.useEffect(() => {

  //   }, [curValue, curValue2, userSelectedPlayersToProjectArray]);

  function submitRushingTDs() {
    // console.log(topLevelTeam);
    setIsTargetsSectionVisble(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.rushTDs) {
        player.data.rushTDs = 0;
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
          if (!player.data.rushTDs) {
            player.data.rushTDs = 0;
          }
        });
        // console.log(topLeveLTeam.usersSelectedPlayers);
      }
    });

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );

    if (targetsRef.current.firstChild) {
      let tempRef = targetsRef.current.firstChild.firstChild;
      //   // console.log(tempRef);
      tempRef.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(() => {
        if (targetsRef.current.firstChild) {
          let tempRef = targetsRef.current.firstChild.firstChild;
          //   // console.log(tempRef);
          tempRef.scrollIntoView({ behavior: "smooth" });
        } else {
          if (targetsRef.current.firstChild) {
            setTimeout(() => {
              let tempRef = targetsRef.current.firstChild.firstChild;
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
      <p className={styles.SectionLabel}>Project player rush TDs</p>
      {/* <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
        <div className={styles.howMuchIsLeftIndividualSectionsWrapper}>
          <div>Total run plays left to distribute</div>
          {isTotalProjectedOverLimit ||
          totalRushAttemptsLeftToDistribute < 0 ? (
            <div className={styles.limitExceeded}>
              {totalRushAttemptsLeftToDistribute}
              <div>Limit Exceeded!</div>
            </div>
          ) : (
            <div>{totalRushAttemptsLeftToDistribute}</div>
          )}
        </div>
      </div> */}

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
                    <div className={styles.playerNameLabel}>
                      {player.data.name}
                    </div>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();

                        // Do something with `name` here
                      }}
                      className={styles.playerInputForm}
                    >
                      {/* <label htmlFor="RushTDs">Rush Attempts</label> */}

                      <input
                        id="RushTDs"
                        value={
                          // topPlayer.data.name === player.data.name
                          //   ? player.data.rushTDs
                          //   : player.data.rushTDs === +event.target.value
                          //   ? player.data.rushTDs
                          //   : +event.target.value !== ""
                          //   ? +event.target.value
                          //   : ""

                          player.data.rushTDs === 0
                            ? ""
                            : curPlayerBeingProjected === player.data.name &&
                              +curValue === 0
                            ? ""
                            : curPlayerBeingProjected === player.data.name &&
                              +curValue !== 0
                            ? +curValue
                            : player.data.rushTDs !== 0
                            ? player.data.rushTDs
                            : ""
                        }
                        className={styles.selectedTeamsPlayerInput}
                        type="number"
                        onChange={(event) => {
                          setCurPlayerBeingProjected(player.data.name);
                          setCurValue(event.target.value);

                          if (+event.target.value < player.data.rushTDs) {
                            setCurValue2(event.target.value);
                          }
                          // console.log(
                          //   player.data.rushTDs,
                          //   event.target.value
                          // );
                          player.data.rushTDs = +event.target.value;
                          if (+event.target.value === 0) {
                            player.data.rushTDs = "";
                          }
                          topPlayer.data.rushTDs = +event.target.value;
                        }}
                      />
                    </form>
                  </div>
                );
              }
            });
          });
        }
      })}
      <p className={styles.informToEnterValueForEveryPlayerText}>
        If you want to project zero for a player simply leave it blank
      </p>
      <div className={styles.submitBtnWrapper}>
        <button className={styles.submitBtn} onClick={() => submitRushingTDs()}>
          Submit rushing TDs projections
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Rush TDs must be submitted to move to next section
      </p>
    </div>
  );
}
