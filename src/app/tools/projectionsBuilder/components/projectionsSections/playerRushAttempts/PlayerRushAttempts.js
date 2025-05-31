"use client";
import React from "react";
import styles from "./playerRushAttempts.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function PlayerRushAttempts({
  userSelectedPlayersToProjectArray,
  team,
  totalRunPlays,
  usersAllTeamsList,
  setUsersAllTeamsList,
  setUserSelectedPlayersToProjectArray,
  setIsYardsPerRushAttemptSectionVisible,
  isYardsPerRushAttemptSectionVisible,
  yardsPerCarryRef,
}) {
  const [curValue, setCurValue] = React.useState("");
  const [curValue2, setCurValue2] = React.useState("");
  const [curTotalProjectedRushAttempts, setCurTotalProjectedRushAttempts] =
    React.useState(0);
  const [
    totalRushAttemptsLeftToDistribute,
    setTotalRushAttemptsLeftToDistribute,
  ] = React.useState(totalRunPlays);
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
    let tempTotalProjectedRushAttempts = 0;
    userSelectedPlayersToProjectArray.map((player) => {
      // console.log(player.data.rushAttempts);
      if (player.data.rushAttempts) {
        tempTotalProjectedRushAttempts += player.data.rushAttempts;
      }
      setCurTotalProjectedRushAttempts(tempTotalProjectedRushAttempts);

      setTotalRushAttemptsLeftToDistribute(
        totalRunPlays - tempTotalProjectedRushAttempts
      );
      if (totalRushAttemptsLeftToDistribute < 0) {
        setIsTotalProjectedOverLimit(true);
      }
      if (totalRushAttemptsLeftToDistribute >= 0) {
        setIsTotalProjectedOverLimit(false);
      }
    });

    // console.log(curTotalProjectedRushAttempts);
  }, [curValue, curValue2, userSelectedPlayersToProjectArray]);

  function submitRushAttemptsProjectionsToProject() {
    // console.log(topLevelTeam);
    setIsYardsPerRushAttemptSectionVisible(true);

    userSelectedPlayersToProjectArray.map((player) => {
      if (!player.data.rushAttempts) {
        player.data.rushAttempts = 0;
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
          if (!player.data.rushAttempts) {
            player.data.rushAttempts = 0;
          }
        });
        // console.log(topLeveLTeam.usersSelectedPlayers);
      }
    });

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );

    if (yardsPerCarryRef.current.firstChild) {
      let tempRef = yardsPerCarryRef.current.firstChild.firstChild;
      //   // console.log(tempRef);
      tempRef.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(() => {
        if (yardsPerCarryRef.current.firstChild) {
          let tempRef = yardsPerCarryRef.current.firstChild.firstChild;
          //   // console.log(tempRef);
          tempRef.scrollIntoView({ behavior: "smooth" });
        } else {
          if (yardsPerCarryRef.current.firstChild) {
            let tempRef = yardsPerCarryRef.current.firstChild.firstChild;
            //   // console.log(tempRef);
            tempRef.scrollIntoView({ behavior: "smooth" });
          } else {
            setTimeout(() => {
              if (yardsPerCarryRef.current.firstChild) {
                let tempRef = yardsPerCarryRef.current.firstChild.firstChild;
                //   // console.log(tempRef);
                tempRef.scrollIntoView({ behavior: "smooth" });
              } else {
                setTimeout(() => {
                  if (yardsPerCarryRef.current.firstChild) {
                    let tempRef =
                      yardsPerCarryRef.current.firstChild.firstChild;
                    //   // console.log(tempRef);
                    tempRef.scrollIntoView({ behavior: "smooth" });
                  }
                }, 500);
              }
            }, 500);
          }
        }
      }, 500);
    }
  }

  return (
    <div>
      <p className={styles.SectionLabel}>Project player rush attempts</p>
      <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
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
      </div>

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
                      {/* <label htmlFor="RushAttempts">Rush Attempts</label> */}

                      <input
                        id="RushAttempts"
                        value={
                          // topLeveLTeam.qb1.name === player
                          //   ? qb1INTs
                          //   : topLeveLTeam.qb2.name === player
                          //   ? qb2INTs
                          //   : qb3INTs

                          topPlayer.data.name === player.data.name
                            ? player.data.rushAttempts
                            : player.data.rushAttempts === +event.target.value
                            ? player.data.rushAttempts
                            : +event.target.value !== ""
                            ? +event.target.value
                            : ""
                        }
                        className={styles.selectedTeamsPlayerInput}
                        type="number"
                        onChange={(event) => {
                          setCurValue(event.target.value);

                          if (+event.target.value < player.data.rushAttempts) {
                            setCurValue2(event.target.value);
                          }
                          // console.log(
                          //   player.data.rushAttempts,
                          //   event.target.value
                          // );
                          player.data.rushAttempts = +event.target.value;
                          if (+event.target.value === 0) {
                            player.data.rushAttempts = "";
                          }
                          topPlayer.data.rushAttempts = +event.target.value;
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
        {isYardsPerRushAttemptSectionVisible ? (
          <button
            className={styles.submitBtn}
            onClick={() => submitRushAttemptsProjectionsToProject()}
          >
            &#8595; Submit rush attempts projections &#8595;
          </button>
        ) : (
          <button
            className={styles.submitBtn}
            onClick={() => submitRushAttemptsProjectionsToProject()}
          >
            Submit rush attempts projections
          </button>
        )}
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        Rush Attempts must be submitted to move to next section
      </p>
    </div>
  );
}
