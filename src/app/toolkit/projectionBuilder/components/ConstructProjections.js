"use client";
import React from "react";
import allTeamsList from "./allTeamsList";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";

export default function ConstructProjections() {
  const [team, setTeam] = React.useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className={styles.teamSelectWrapper}
      >
        <label htmlFor="team-select" className={styles.teamSelectLabel}>
          Select team to start projections for:
        </label>

        <select
          id="team-select"
          value={team}
          onChange={(event) => {
            setTeam(event.target.value);
          }}
          className={styles.teamSelectSelect}
          placeholder="Select Team"
        >
          {allTeamsList.map((team) => (
            <option value={team}>{team}</option>
          ))}
        </select>
      </form>

      <p className={styles.selectedTeamText}>
        <strong>Selected Team:</strong>
        {"    "}
        {"   "}
        {team}
      </p>
    </div>
  );
}
