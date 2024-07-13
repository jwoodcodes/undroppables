import React from "react";
import styles from "./selectPlayers.module.css";
import allTeamsList from "../../data/allTeamsList";

export default function SelectPlayersToProject({
  selectedTeamObject,
  userSelectedPlayersToProjectArray,
  setUserSelectedPlayersToProjectArray,
  team,
  setIsStoredValue,
  isStoredValue,
  usersAllTeamsList,
  setUsersAllTeamsList,
}) {
  //   console.log(selectedTeamObject);
  const [teamPlayersArray, setTeamPlayersArray] = React.useState([]);
  const [isTeamArrayAllPossiblePlayers, setIsTeamArrayAllPossiblePlayers] =
    React.useState(true);

  React.useEffect(() => {
    const storedValue = window.localStorage.getItem("usersAllTeamsList");

    setUsersAllTeamsList(storedValue ? JSON.parse(storedValue) : allTeamsList);
  }, [team]);

  React.useEffect(() => {
    const storedValue = window.localStorage.getItem(
      `userSelectedPlayersToProjectArray${team}`
    );
    if (storedValue) {
      setIsTeamArrayAllPossiblePlayers(false);
      setIsStoredValue(true);

      // console.log(storedValue);
      setTeamPlayersArray(storedValue ? JSON.parse(storedValue) : []);
      setUserSelectedPlayersToProjectArray(
        storedValue ? JSON.parse(storedValue) : []
      );
    }
  }, [team]);

  React.useEffect(() => {
    if (
      (isStoredValue === false && isTeamArrayAllPossiblePlayers) ||
      teamPlayersArray.length === 0
    ) {
      let tempArray = [];
      for (const [key, value] of Object.entries(selectedTeamObject)) {
        //   console.log(`${key}: ${typeof value}`);
        if (typeof value === "object") {
          tempArray.push({ assesor: key, data: value });
        }
        setTeamPlayersArray(tempArray);
      }
    }
  }, [selectedTeamObject, isTeamArrayAllPossiblePlayers, team]);

  function deletePlayer(player) {
    setTeamPlayersArray(teamPlayersArray.filter((p) => p !== player));
    setIsTeamArrayAllPossiblePlayers(false);
  }

  function submitPlayersToProject(teamPlayersArray) {
    let newTempPlayerArray = [];

    teamPlayersArray.map((player) => {
      if (player.data.position === "QB") {
        newTempPlayerArray.push(player);
      }
    });
    teamPlayersArray.map((player) => {
      if (player.data.position === "RB") {
        newTempPlayerArray.push(player);
      }
    });

    teamPlayersArray.map((player) => {
      if (player.data.position === "WR") {
        newTempPlayerArray.push(player);
      }
    });
    teamPlayersArray.map((player) => {
      if (player.data.position === "TE") {
        newTempPlayerArray.push(player);
      }
    });

    console.log(newTempPlayerArray);

    setUserSelectedPlayersToProjectArray(newTempPlayerArray);
    setIsStoredValue(true);

    usersAllTeamsList.map((teamObject) => {
      if (teamObject.teamName === team) {
        console.log(teamObject);
        teamObject.usersSelectedPlayers = userSelectedPlayersToProjectArray;
      }
    });

    window.localStorage.setItem(
      `userSelectedPlayersToProjectArray${team}`,
      JSON.stringify(teamPlayersArray)
    );
  }

  function resetButton() {
    setIsTeamArrayAllPossiblePlayers(true);
    setIsStoredValue(false);

    window.localStorage.removeItem(`userSelectedPlayersToProjectArray${team}`);
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.sectionTitle}>
        Delete all players you do not want to project from this team
      </div>

      {/* <div className={styles.resetBtnWrapper}>
        <button className={styles.resetBtn} onClick={() => resetButton()}>
          Reset team to all possible players
        </button>
      </div> */}

      <div className={styles.positionLabel}>QBs</div>
      <div className={styles.positionWrapper}>
        {teamPlayersArray.map((player) => {
          if (player.data.position === "QB") {
            return (
              <button
                className={styles.playerBtns}
                key={player.data.name}
                onClick={() => deletePlayer(player)}
              >
                {player.data.name} <span className={styles.spanx}>X</span>
              </button>
            );
          }
        })}
      </div>
      <div className={styles.positionLabel}>RBs</div>
      <div className={styles.positionWrapper}>
        {teamPlayersArray.map((player) => {
          if (player.data.position === "RB") {
            return (
              <button
                className={styles.playerBtns}
                key={player.data.name}
                onClick={() => deletePlayer(player)}
              >
                {player.data.name} <span className={styles.spanx}>X</span>
              </button>
            );
          }
        })}
      </div>

      <div className={styles.positionLabel}>WRs</div>
      <div className={styles.positionWrapper}>
        {teamPlayersArray.map((player) => {
          if (player.data.position === "WR") {
            return (
              <button
                className={styles.playerBtns}
                key={player.data.name}
                onClick={() => deletePlayer(player)}
              >
                {player.data.name} <span className={styles.spanx}>X</span>
              </button>
            );
          }
        })}
      </div>
      <div className={styles.positionLabel}>TEs</div>
      <div className={styles.positionWrapper}>
        {teamPlayersArray.map((player) => {
          if (player.data.position === "TE") {
            return (
              <button
                className={styles.playerBtns}
                key={player.data.name}
                onClick={() => deletePlayer(player)}
              >
                {player.data.name} <span className={styles.spanx}>X</span>
              </button>
            );
          }
        })}
      </div>

      <div className={styles.resetBtnWrapper}>
        <button className={styles.resetBtn} onClick={() => resetButton()}>
          Reset team to all possible players
        </button>
      </div>
      <div className={styles.submitBtnWrapper}>
        <button
          className={styles.submitBtn}
          onClick={() => submitPlayersToProject(teamPlayersArray)}
        >
          Submit players to project
        </button>
      </div>
      <p className={styles.howToMoveToNextSectionText}>
        players to project must be submitted to move to team level section
      </p>
    </div>
  );
}
