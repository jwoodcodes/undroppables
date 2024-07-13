"use client";
import React from "react";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import Link from "next/link";
import allTeamsList from "./data/allTeamsList";
import previousYearTeamData from "./data/previousYearTeamData";
import axios from "axios";
import PassingTable from "./passingTable/PassingTable";
import RushingTable from "./rushingTable/RushingTable";
import RecievingTable from "./recievingTable/RecievingTable";
import TeamLevelFantasyTable from "./teamLevelFantasyTable/teamLevelFantasyTable";

// import QbDataEntryAndTable from "./qbDataEntryAndTable";
// import DataFetcher from "./data/dataFetcher";
// import playerData from "./data/dataFetcher";

export default function ConstructProjections({ dataTest, sleeperData }) {
  const [team, setTeam] = React.useState("");
  const [teamTotalProjectedPlays, setTeamTotalProjectedPlays] =
    React.useState();
  const [passPercecntage, setPassPercecntage] = React.useState();
  const [runPercecntage, setRunPercecntage] = React.useState();
  const [totalPassPlays, setTotalPassPlays] = React.useState();
  const [totalRunPlays, setTotalRunPlays] = React.useState();

  const [teamQB1, setTeamQB1] = React.useState();
  const [teamQB2, setTeamQB2] = React.useState();
  const [teamQB3, setTeamQB3] = React.useState();

  const [isTeamQB3, setIsTeamQB3] = React.useState(false);

  const [showRBs, setShowRBs] = React.useState(false);

  const [teamRB1, setTeamRB1] = React.useState();
  const [teamRB2, setTeamRB2] = React.useState();
  const [teamRB3, setTeamRB3] = React.useState();

  const [teamWR1, setTeamWR1] = React.useState();
  const [teamWR2, setTeamWR2] = React.useState();
  const [teamWR3, setTeamWR3] = React.useState();
  const [teamWR4, setTeamWR4] = React.useState();

  const [teamTE1, setTeamTE1] = React.useState();
  const [teamTE2, setTeamTE2] = React.useState();

  const [
    selectedTeamsUserSelectedPlayersToProjectArray,
    setSelectedTeamsUserSelectedPlayersToProjectArray,
  ] = React.useState([]);

  // team level  total stats state variables

  const [
    totalPercentOfPassAttemptsLeftToDistribute,
    setTotalPercentOfPassAttemptsLeftToDistribute,
  ] = React.useState(100);

  const [teamTotalCompletions, setTeamTotalCompletions] = React.useState(0);

  const [
    totalTeamRushingAttemptsToDistribute,
    setTotalTeamRushingAttemptsToDistribute,
  ] = React.useState();

  const [totalProjectedQBRushAttempts, setTotalProjectedQBRushAttempts] =
    React.useState(0);

  const [totalProjectedRBRushAttempts, setTotalProjectedRBRushAttempts] =
    React.useState(0);

  const [totalProjectedWRRushAttempts, setTotalProjectedWRRushAttempts] =
    React.useState(0);

  let tempTotalProjectedQBRushAttempts = 0;
  let tempTotalProjectedRBRushAttempts = 0;
  let tempTotalProjectedWRRushAttempts = 0;

  const [teamTotalTargetShare, setTeamTotalTargetShare] = React.useState();

  const [teamTotalPassingYards, setTeamTotalPassingYards] = React.useState("");

  const [allQBDataArray, setAllQBDataArray] = React.useState([]);

  const [isTotalProjectedOverLimit, setIsTotalProjectedOverLimit] =
    React.useState(false);
  const [
    isTotalProjectedRushAttemptsOverLimit,
    setIsTotalProjectedRushAttemptsOverLimit,
  ] = React.useState(false);

  const [totalProjectedReceptions, setTotalProjectedReceptions] =
    React.useState();

  const [totalRecievingYards, setTotalRecievingYards] = React.useState(0);

  // Passing stats state variables

  const [qb1GamesPlayed, setQb1GamesPlayed] = React.useState("");
  const [qb2GamesPlayed, setQb2GamesPlayed] = React.useState("");
  const [qb3GamesPlayed, setQb3GamesPlayed] = React.useState("");

  const [qb1PercentOfTeamPassAttempts, setQb1PercentOfTeamPassAttempts] =
    React.useState();
  const [qb2PercentOfTeamPassAttempts, setQb2PercentOfTeamPassAttempts] =
    React.useState();
  const [qb3PercentOfTeamPassAttempts, setQb3PercentOfTeamPassAttempts] =
    React.useState();

  const [qb1PassAttempts, setQb1PassAttempts] = React.useState();
  const [qb2PassAttempts, setQb2PassAttempts] = React.useState();
  const [qb3PassAttempts, setQb3PassAttempts] = React.useState();

  const [qb1CompPercent, setQb1CompPercent] = React.useState();
  const [qb2CompPercent, setQb2CompPercent] = React.useState();
  const [qb3CompPercent, setQb3CompPercent] = React.useState();

  const [qb1Completions, setQb1Completions] = React.useState();
  const [qb2Completions, setQb2Completions] = React.useState();
  const [qb3Completions, setQb3Completions] = React.useState();

  const [qb1PassingYards, setQb1PassingYards] = React.useState("");
  const [qb2PassingYards, setQb2PassingYards] = React.useState("");
  const [qb3PassingYards, setQb3PassingYards] = React.useState("");

  const [qb1PassTDs, setQb1PassTDs] = React.useState();
  const [qb2PassTDs, setQb2PassTDs] = React.useState();
  const [qb3PassTDs, setQb3PassTDs] = React.useState();

  const [qb1INTs, setQb1INTs] = React.useState();
  const [qb2INTs, setQb2INTs] = React.useState();
  const [qb3INTs, setQb3INTs] = React.useState();

  // rushing stats state variables

  const [qb1RushAttempts, setQb1RushAttempts] = React.useState();
  const [qb2RushAttempts, setQb2RushAttempts] = React.useState();
  const [qb3RushAttempts, setQb3RushAttempts] = React.useState();
  const [rb1RushAttempts, setrb1RushAttempts] = React.useState();
  const [rb2RushAttempts, setrb2RushAttempts] = React.useState();
  const [rb3RushAttempts, setrb3RushAttempts] = React.useState();
  const [wr1RushAttempts, setwr1RushAttempts] = React.useState();
  const [wr2RushAttempts, setwr2RushAttempts] = React.useState();
  const [wr3RushAttempts, setwr3RushAttempts] = React.useState();
  const [wr4RushAttempts, setwr4RushAttempts] = React.useState();

  const [qb1YardsPerCarry, setQb1YardsPerCarry] = React.useState();
  const [qb2YardsPerCarry, setQb2YardsPerCarry] = React.useState();
  const [qb3YardsPerCarry, setQb3YardsPerCarry] = React.useState();
  const [rb1YardsPerCarry, setRb1YardsPerCarry] = React.useState();
  const [rb2YardsPerCarry, setRb2YardsPerCarry] = React.useState();
  const [rb3YardsPerCarry, setRb3YardsPerCarry] = React.useState();
  const [wr1YardsPerCarry, setWr1YardsPerCarry] = React.useState();
  const [wr2YardsPerCarry, setWr2YardsPerCarry] = React.useState();
  const [wr3YardsPerCarry, setWr3YardsPerCarry] = React.useState();
  const [wr4YardsPerCarry, setWr4YardsPerCarry] = React.useState();

  const [qb1RushTDs, setQb1RushTDs] = React.useState();
  const [qb2RushTDs, setQb2RushTDs] = React.useState();
  const [qb3RushTDs, setQb3RushTDs] = React.useState();
  const [rb1RushTDs, setRb1RushTDs] = React.useState();
  const [rb2RushTDs, setRb2RushTDs] = React.useState();
  const [rb3RushTDs, setRb3RushTDs] = React.useState();
  const [wr1RushTDs, setWr1RushTDs] = React.useState();
  const [wr2RushTDs, setWr2RushTDs] = React.useState();
  const [wr3RushTDs, setWr3RushTDs] = React.useState();
  const [wr4RushTDs, setWr4RushTDs] = React.useState();

  // recieving stats state variables

  const [rb1TargetShare, setRb1TargetShare] = React.useState("");
  const [rb2TargetShare, setRb2TargetShare] = React.useState("");
  const [rb3TargetShare, setRb3TargetShare] = React.useState("");
  const [wr1TargetShare, setWr1TargetShare] = React.useState("");
  const [wr2TargetShare, setWr2TargetShare] = React.useState("");
  const [wr3TargetShare, setWr3TargetShare] = React.useState("");
  const [wr4TargetShare, setWr4TargetShare] = React.useState("");
  const [te1TargetShare, setTe1TargetShare] = React.useState("");
  const [te2TargetShare, setTe2TargetShare] = React.useState("");

  const [rb1Targets, setRb1Targets] = React.useState("");
  const [rb2Targets, setRb2Targets] = React.useState("");
  const [rb3Targets, setRb3Targets] = React.useState("");
  const [wr1Targets, setWr1Targets] = React.useState("");
  const [wr2Targets, setWr2Targets] = React.useState("");
  const [wr3Targets, setWr3Targets] = React.useState("");
  const [wr4Targets, setWr4Targets] = React.useState("");
  const [te1Targets, setTe1Targets] = React.useState("");
  const [te2Targets, setTe2Targets] = React.useState("");

  const [rb1CatchPercentage, setRb1CatchPercentage] = React.useState("");
  const [rb2CatchPercentage, setRb2CatchPercentage] = React.useState("");
  const [rb3CatchPercentage, setRb3CatchPercentage] = React.useState("");
  const [wr1CatchPercentage, setWr1CatchPercentage] = React.useState("");
  const [wr2CatchPercentage, setWr2CatchPercentage] = React.useState("");
  const [wr3CatchPercentage, setWr3CatchPercentage] = React.useState("");
  const [wr4CatchPercentage, setWr4CatchPercentage] = React.useState("");
  const [te1CatchPercentage, setTe1CatchPercentage] = React.useState("");
  const [te2CatchPercentage, setTe2CatchPercentage] = React.useState("");

  const [rb1Receptions, setRb1Receptions] = React.useState();
  const [rb2Receptions, setRb2Receptions] = React.useState();
  const [rb3Receptions, setRb3Receptions] = React.useState();
  const [wr1Receptions, setWr1Receptions] = React.useState();
  const [wr2Receptions, setWr2Receptions] = React.useState();
  const [wr3Receptions, setWr3Receptions] = React.useState();
  const [wr4Receptions, setWr4Receptions] = React.useState();
  const [te1Receptions, setTe1Receptions] = React.useState();
  const [te2Receptions, setTe2Receptions] = React.useState();

  const [rb1RecievingYards, setRb1RecievingYards] = React.useState("");
  const [rb2RecievingYards, setRb2RecievingYards] = React.useState("");
  const [rb3RecievingYards, setRb3RecievingYards] = React.useState("");
  const [wr1RecievingYards, setWr1RecievingYards] = React.useState("");
  const [wr2RecievingYards, setWr2RecievingYards] = React.useState("");
  const [wr3RecievingYards, setWr3RecievingYards] = React.useState("");
  const [wr4RecievingYards, setWr4RecievingYards] = React.useState("");
  const [te1RecievingYards, setTe1RecievingYards] = React.useState("");
  const [te2RecievingYards, setTe2RecievingYards] = React.useState("");

  const [rb1YPR, setrb1YPR] = React.useState("");
  const [rb2YPR, setrb2YPR] = React.useState("");
  const [rb3YPR, setrb3YPR] = React.useState("");
  const [wr1YPR, setwr1YPR] = React.useState("");
  const [wr2YPR, setwr2YPR] = React.useState("");
  const [wr3YPR, setwr3YPR] = React.useState("");
  const [wr4YPR, setwr4YPR] = React.useState("");
  const [te1YPR, setTe1YPR] = React.useState("");
  const [te2YPR, setTe2YPR] = React.useState("");

  const [rb1RecievingTDs, setRb1RecievingTDs] = React.useState("");
  const [rb2RecievingTDs, setRb2RecievingTDs] = React.useState("");
  const [rb3RecievingTDs, setRb3RecievingTDs] = React.useState("");
  const [wr1RecievingTDs, setWr1RecievingTDs] = React.useState("");
  const [wr2RecievingTDs, setWr2RecievingTDs] = React.useState("");
  const [wr3RecievingTDs, setWr3RecievingTDs] = React.useState("");
  const [wr4RecievingTDs, setWr4RecievingTDs] = React.useState("");
  const [te1RecievingTDs, setTe1RecievingTDs] = React.useState("");
  const [te2RecievingTDs, setTe2RecievingTDs] = React.useState("");

  // const [usersAllTeamsList, setUsersAllTeamsList] = React.useState(() => {
  //   const storedValue = window.localStorage.getItem("usersAllTeamsList");
  //   return JSON.parse(storedValue) || allTeamsList;
  // });

  // console.log(sleeperData.JustSleeperNamesTeamsAndPostionsArray);
  const sleeperDataArray = sleeperData.JustSleeperNamesTeamsAndPostionsArray;
  let tempDataTest = dataTest.allPlayerData;

  sleeperDataArray.map((sleeperPlayer) => {
    // console.log(sleeperPlayer.name);
    tempDataTest.map((dataTestPlayer) => {
      if (sleeperPlayer.name === dataTestPlayer.name) {
        if (sleeperPlayer.team === null) {
          // console.log(
          //   dataTestPlayer.name,
          //   sleeperPlayer.team,
          //   dataTestPlayer.team
          // );
          sleeperPlayer.team = dataTestPlayer.team;
        }
      }
    });
  });

  const [usersAllTeamsList, setUsersAllTeamsList] =
    React.useState(allTeamsList);

  React.useEffect(() => {
    const storedValue = window.localStorage.getItem("usersAllTeamsList");

    setUsersAllTeamsList(storedValue ? JSON.parse(storedValue) : allTeamsList);
  }, []);

  React.useEffect(() => {
    console.log("ran");
    !showRBs && teamQB3
      ? setShowRBs(true)
      : !showRBs && teamQB2 && !isTeamQB3
      ? setShowRBs(true)
      : console.log("ran here", showRBs, teamQB2, isTeamQB3);
  }, [teamQB2, teamQB3]);

  //

  React.useEffect(() => {
    setTotalTeamRushingAttemptsToDistribute(
      totalRunPlays -
        totalProjectedQBRushAttempts -
        totalProjectedRBRushAttempts -
        totalProjectedWRRushAttempts
    );
    setIsTotalProjectedRushAttemptsOverLimit(false);
    if (
      totalRunPlays -
        totalProjectedQBRushAttempts -
        totalProjectedRBRushAttempts -
        totalProjectedWRRushAttempts <
      0
    ) {
      setIsTotalProjectedRushAttemptsOverLimit(true);
    }
  }, [
    totalProjectedQBRushAttempts,
    totalProjectedRBRushAttempts,
    totalProjectedWRRushAttempts,
  ]);

  //

  React.useEffect(() => {
    setTeamTotalTargetShare(
      +rb1TargetShare +
        +rb2TargetShare +
        +rb3TargetShare +
        +wr1TargetShare +
        +wr2TargetShare +
        +wr3TargetShare +
        +wr4TargetShare +
        +te1TargetShare +
        +te2TargetShare
    );
  }, [
    rb1TargetShare,
    rb2TargetShare,
    rb3TargetShare,
    wr1TargetShare,
    wr2TargetShare,
    wr3TargetShare,
    wr4TargetShare,
    te1TargetShare,
    te2TargetShare,
  ]);

  //

  React.useEffect(() => {
    let temprb1Receptions = rb1Receptions;
    let temprb2Receptions = rb2Receptions;
    let temprb3Receptions = rb3Receptions;

    let tempwr1Receptions = wr1Receptions;
    let tempwr2Receptions = wr2Receptions;
    let tempwr3Receptions = wr3Receptions;
    let tempwr4Receptions = wr4Receptions;
    let tempte1Receptions = te1Receptions;
    let tempte2Receptions = te2Receptions;

    if (!rb1Receptions) {
      temprb1Receptions = 0;
    }
    if (!rb2Receptions) {
      temprb2Receptions = 0;
    }
    if (!rb3Receptions) {
      temprb3Receptions = 0;
    }
    if (!wr1Receptions) {
      tempwr1Receptions = 0;
    }
    if (!wr2Receptions) {
      tempwr2Receptions = 0;
    }
    if (!wr3Receptions) {
      tempwr3Receptions = 0;
    }
    if (!wr4Receptions) {
      tempwr4Receptions = 0;
    }
    if (!te1Receptions) {
      tempte1Receptions = 0;
    }
    if (!te2Receptions) {
      tempte2Receptions = 0;
    }

    setTotalProjectedReceptions(
      temprb1Receptions +
        temprb2Receptions +
        temprb3Receptions +
        tempwr1Receptions +
        tempwr2Receptions +
        tempwr3Receptions +
        tempwr4Receptions +
        tempte1Receptions +
        tempte2Receptions
    );
  }, [
    rb1Receptions,
    rb2Receptions,
    rb3Receptions,
    wr1Receptions,
    wr2Receptions,
    wr3Receptions,
    wr4Receptions,
    te1Receptions,
    te2Receptions,
  ]);

  React.useEffect(() => {
    let tempqb1Completions = qb1Completions;
    let tempqb2Completions = qb2Completions;
    let tempqb3Completions = qb3Completions;

    if (!qb1Completions) {
      tempqb1Completions = 0;
    }
    if (!qb2Completions) {
      tempqb2Completions = 0;
    }
    if (!qb3Completions) {
      tempqb3Completions = 0;
    }

    setTeamTotalCompletions(qb1Completions + qb2Completions + qb3Completions);
  }, [qb1Completions, qb2Completions, qb3Completions]);

  React.useEffect(() => {
    let temprb1RecievingYards = rb1RecievingYards;
    let temprb2RecievingYards = rb2RecievingYards;
    let temprb3RecievingYards = rb3RecievingYards;

    let tempwr1RecievingYards = wr1RecievingYards;
    let tempwr2RecievingYards = wr2RecievingYards;
    let tempwr3RecievingYards = wr3RecievingYards;
    let tempwr4RecievingYards = wr4RecievingYards;
    let tempte1RecievingYards = te1RecievingYards;
    let tempte2RecievingYards = te2RecievingYards;

    if (!rb1RecievingYards) {
      temprb1RecievingYards = 0;
    }
    if (!rb2RecievingYards) {
      temprb2RecievingYards = 0;
    }
    if (!rb3RecievingYards) {
      temprb3RecievingYards = 0;
    }
    if (!wr1RecievingYards) {
      tempwr1RecievingYards = 0;
    }
    if (!wr2RecievingYards) {
      tempwr2RecievingYards = 0;
    }
    if (!wr3RecievingYards) {
      tempwr3RecievingYards = 0;
    }
    if (!wr4RecievingYards) {
      tempwr4RecievingYards = 0;
    }
    if (!te1RecievingYards) {
      tempte1RecievingYards = 0;
    }
    if (!te2RecievingYards) {
      tempte2RecievingYards = 0;
    }

    setTotalRecievingYards(
      temprb1RecievingYards +
        temprb2RecievingYards +
        temprb3RecievingYards +
        tempwr1RecievingYards +
        tempwr2RecievingYards +
        tempwr3RecievingYards +
        tempwr4RecievingYards +
        tempte1RecievingYards +
        tempte2RecievingYards
    );
  }, [
    rb1RecievingYards,
    rb2RecievingYards,
    rb3RecievingYards,
    wr1RecievingYards,
    wr2RecievingYards,
    wr3RecievingYards,
    wr4RecievingYards,
    te1RecievingYards,
    te2RecievingYards,
  ]);

  // console.log(usersAllTeamsList);

  function saveUsersProjectionData(data, team) {
    // console.log(data);
    usersAllTeamsList[team] = data;
    console.log(usersAllTeamsList);
    setUsersAllTeamsList(usersAllTeamsList);

    // console.log("ran here");
    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
  }

  function clearUsersQBsProjectionData(data, team) {
    // console.log(data);
    data.qb1 = { name: data.qb1.name };
    data.qb2 = { name: data.qb2.name };
    data.qb3 = { name: data.qb2.name };
    usersAllTeamsList[team] = data;
    setUsersAllTeamsList(usersAllTeamsList);

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
    window.location.reload();
  }

  function clearUsersRushingProjectionData(data, team) {
    console.log(data);
    data.qb1 = {
      name: data.qb1.name,
      INTs: data.qb1.INTs,
      PassAtmpts: data.qb1.PassAtmpts,
      passingTDs: data.qb1.passingTDs,
      YPA: data.qb1.YPA,
      YPC: data.qb1.YPC,
      compPercent: data.qb1.compPercent,
      completions: data.qb1.completions,
      gamesPlayed: data.qb1.gamesPlayed,
      percentOfTotalTeamPassAttempts: data.qb1.percentOfTotalTeamPassAttempts,
      passYrds: data.qb1.passYrds,
    };
    data.qb2 = {
      name: data.qb2.name,
      INTs: data.qb2.INTs,
      PassAtmpts: data.qb2.PassAtmpts,
      passingTDs: data.qb2.passingTDs,
      YPA: data.qb2.YPA,
      YPC: data.qb2.YPC,
      compPercent: data.qb2.compPercent,
      completions: data.qb2.completions,
      gamesPlayed: data.qb2.gamesPlayed,
      percentOfTotalTeamPassAttempts: data.qb2.percentOfTotalTeamPassAttempts,
      passYrds: data.qb2.passYrds,
    };
    data.qb3 = {
      name: data.qb3.name,
      INTs: data.qb3.INTs,
      PassAtmpts: data.qb3.PassAtmpts,
      passingTDs: data.qb3.passingTDs,
      YPA: data.qb3.YPA,
      YPC: data.qb3.YPC,
      compPercent: data.qb3.compPercent,
      completions: data.qb3.completions,
      gamesPlayed: data.qb3.gamesPlayed,
      percentOfTotalTeamPassAttempts: data.qb3.percentOfTotalTeamPassAttempts,
      passYrds: data.qb3.passYrds,
    };
    data.rb1 = {
      name: data.rb1.name,
      targetShare: data.rb1.targetShare,
      targets: data.rb1.targets,
      catchPercentage: data.rb1.catchPercentage,
      receptions: data.rb1.receptions,
      recievingYards: data.rb1.recievingYards,
      recievingTDs: data.rb1.recievingTDs,
    };
    data.rb2 = {
      name: data.rb2.name,
      targetShare: data.rb2.targetShare,
      targets: data.rb2.targets,
      catchPercentage: data.rb2.catchPercentage,
      receptions: data.rb2.receptions,
      recievingYards: data.rb2.recievingYards,
      recievingTDs: data.rb2.recievingTDs,
    };
    data.rb3 = {
      name: data.rb3.name,
      targetShare: data.rb3.targetShare,
      targets: data.rb3.targets,
      catchPercentage: data.rb3.catchPercentage,
      receptions: data.rb3.receptions,
      recievingYards: data.rb3.recievingYards,
      recievingTDs: data.rb3.recievingTDs,
    };

    data.wr1 = {
      name: data.wr1.name,
      targetShare: data.wr1.targetShare,
      targets: data.wr1.targets,
      catchPercentage: data.wr1.catchPercentage,
      receptions: data.wr1.receptions,
      recievingYards: data.wr1.recievingYards,
      recievingTDs: data.wr1.recievingTDs,
    };
    data.wr2 = {
      name: data.wr2.name,
      targetShare: data.wr2.targetShare,
      targets: data.wr2.targets,
      catchPercentage: data.wr2.catchPercentage,
      receptions: data.wr2.receptions,
      recievingYards: data.wr2.recievingYards,
      recievingTDs: data.wr2.recievingTDs,
    };
    data.wr3 = {
      name: data.wr3.name,
      targetShare: data.wr3.targetShare,
      targets: data.wr3.targets,
      catchPercentage: data.wr3.catchPercentage,
      receptions: data.wr3.receptions,
      recievingYards: data.wr3.recievingYards,
      recievingTDs: data.wr3.recievingTDs,
    };
    data.wr4 = {
      name: data.wr4.name,
      targetShare: data.wr4.targetShare,
      targets: data.wr4.targets,
      catchPercentage: data.wr4.catchPercentage,
      receptions: data.wr4.receptions,
      recievingYards: data.wr4.recievingYards,
      recievingTDs: data.wr4.recievingTDs,
    };
    data.te1 = {
      name: data.te1.name,
      targetShare: data.te1.targetShare,
      targets: data.te1.targets,
      catchPercentage: data.te1.catchPercentage,
      receptions: data.te1.receptions,
      recievingYards: data.te1.recievingYards,
      recievingTDs: data.te1.recievingTDs,
    };
    data.te2 = {
      name: data.te2.name,
      targetShare: data.te2.targetShare,
      targets: data.te2.targets,
      catchPercentage: data.te2.catchPercentage,
      receptions: data.te2.receptions,
      recievingYards: data.te2.recievingYards,
      recievingTDs: data.te2.recievingTDs,
    };
    usersAllTeamsList[team] = data;
    setUsersAllTeamsList(usersAllTeamsList);

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
    window.location.reload();
  }

  function clearUsersRecievingProjectionData(data, team) {
    // console.log(data);
    data.rb1 = {
      name: data.rb1.name,
      RushingYards: data.rb1.RushingYards,
      TDs: data.rb1.TDs,
      YPCarry: data.rb1.YPCarry,
      rushAttempts: data.rb1.rushAttempts,
    };
    data.rb2 = {
      name: data.rb2.name,
      RushingYards: data.rb2.RushingYards,
      TDs: data.rb2.TDs,
      YPCarry: data.rb2.YPCarry,
      rushAttempts: data.rb2.rushAttempts,
    };
    data.rb3 = {
      name: data.rb3.name,
      RushingYards: data.rb3.RushingYards,
      TDs: data.rb3.TDs,
      YPCarry: data.rb3.YPCarry,
      rushAttempts: data.rb3.rushAttempts,
    };

    data.wr1 = {
      name: data.wr1.name,
      RushingYards: data.wr1.RushingYards,
      TDs: data.wr1.TDs,
      YPCarry: data.wr1.YPCarry,
      rushAttempts: data.wr1.rushAttempts,
    };
    data.wr2 = {
      name: data.wr2.name,
      RushingYards: data.wr2.RushingYards,
      TDs: data.wr2.TDs,
      YPCarry: data.wr2.YPCarry,
      rushAttempts: data.wr2.rushAttempts,
    };
    data.wr3 = {
      name: data.wr3.name,
      RushingYards: data.wr3.RushingYards,
      TDs: data.wr3.TDs,
      YPCarry: data.wr3.YPCarry,
      rushAttempts: data.wr3.rushAttempts,
    };
    data.wr4 = {
      name: data.wr4.name,
      RushingYards: data.wr4.RushingYards,
      TDs: data.wr4.TDs,
      YPCarry: data.wr4.YPCarry,
      rushAttempts: data.wr4.rushAttempts,
    };
    data.te1 = { name: data.te1.name };
    data.te2 = { name: data.te2.name };
    usersAllTeamsList[team] = data;
    setUsersAllTeamsList(usersAllTeamsList);

    window.localStorage.setItem(
      "usersAllTeamsList",
      JSON.stringify(usersAllTeamsList)
    );
    window.location.reload();
  }

  // React.useEffect(() => {
  //   console.log("ran here");
  //   window.localStorage.setItem(
  //     "usersAllTeamsList",
  //     JSON.stringify(usersAllTeamsList)
  //   );
  // }, [usersAllTeamsList]);

  let tempTotalPassPlays = 0;
  let tempTotalRunPlays = 0;

  let qb1Data = {};
  let qb2Data = {};
  let qb3Data = {};

  let rb1Data = {};
  let rb2Data = {};
  let rb3Data = {};

  let wr1Data = {};
  let wr2Data = {};
  let wr3Data = {};
  let wr4Data = {};

  let te1Data = {};
  let te2Data = {};

  let teamTotal = {};

  let totalProjectedPercentOfTeamPassAttempts = 0;

  // function logTeam(teamData) {
  //   console.log(topLeveLTeam);
  // }

  //   if (
  //     qb1PercentOfTeamPassAttempts &&
  //     !qb2PercentOfTeamPassAttempts &&
  //     !qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(qb1PercentOfTeamPassAttempts);
  //   }

  //   if (
  //     qb2PercentOfTeamPassAttempts &&
  //     !qb1PercentOfTeamPassAttempts &&
  //     !qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(qb2PercentOfTeamPassAttempts);
  //   }

  //   if (
  //     qb3PercentOfTeamPassAttempts &&
  //     !qb1PercentOfTeamPassAttempts &&
  //     !qb2PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(qb3PercentOfTeamPassAttempts);
  //   }
  //   if (
  //     qb1PercentOfTeamPassAttempts &&
  //     qb2PercentOfTeamPassAttempts &&
  //     !qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(
  //       qb1PercentOfTeamPassAttempts + qb2PercentOfTeamPassAttempts
  //     );
  //   }

  //   if (
  //     qb1PercentOfTeamPassAttempts &&
  //     !qb2PercentOfTeamPassAttempts &&
  //     qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(
  //       qb1PercentOfTeamPassAttempts + qb3PercentOfTeamPassAttempts
  //     );
  //   }

  //   if (
  //     !qb1PercentOfTeamPassAttempts &&
  //     qb2PercentOfTeamPassAttempts &&
  //     qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(
  //       qb2PercentOfTeamPassAttempts + qb3PercentOfTeamPassAttempts
  //     );
  //   }

  //   if (
  //     qb1PercentOfTeamPassAttempts &&
  //     qb2PercentOfTeamPassAttempts &&
  //     qb3PercentOfTeamPassAttempts
  //   ) {
  //     setTotalProjectedPercentOfTeamPassAttempts(
  //       qb1PercentOfTeamPassAttempts +
  //         qb2PercentOfTeamPassAttempts +
  //         qb3PercentOfTeamPassAttempts
  //     );
  //   }
  // }

  return (
    <div>
      <div className={styles.linkWrapper}>
        <Link
          href={"/toolkit/projectionBuilder/usersProjections"}
          className={styles.projectionsLink}
        >
          view all your projections &rarr;
        </Link>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className={styles.teamSelectWrapper}
      >
        <label htmlFor="team-select" className={styles.teamSelectLabel}>
          Select team to start projections:
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
          <option value={"SELECT"}></option>
          {allTeamsList.map((team) => (
            <option key={team.teamName} value={team.teamName}>
              {team.teamName}
            </option>
          ))}
        </select>
      </form>

      <p className={styles.selectedTeamText}>
        <strong>Selected Team:</strong>
        {"    "}
        {"   "}
        {team}
      </p>

      {usersAllTeamsList.map((topLeveLTeam) => {
        if (team === topLeveLTeam.teamName) {
          // console.log(topLeveLTeam);
          return (
            <div key={topLeveLTeam.teamName}>
              <div
                className={
                  styles.lastYearsTeamDataDisplayAndSelectingTotalProjectedPlaysWrapper
                }
              >
                <div>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();

                      // Do something with `teamTotalProjectedPlays` here
                    }}
                    className={styles.teamProjectedPlaysFormWrapper}
                    key={`${topLeveLTeam.teamName}-form` || "form"}
                  >
                    <label
                      htmlFor="teamTotalProjectedPlays-field"
                      className={styles.teamSelectLabel}
                    >
                      Total projected team plays:
                    </label>
                    <input
                      id="teamTotalProjectedPlays-field"
                      value={topLeveLTeam.teamTotalProjectedPlays}
                      type="number"
                      max={1600}
                      onChange={(event) => {
                        if (
                          event.target.value > -1 &&
                          event.target.value < 1600
                        ) {
                          setTeamTotalProjectedPlays(event.target.value);
                          if (!topLeveLTeam.teamTotalProjectedPlays) {
                            topLeveLTeam.teamTotalProjectedPlays =
                              +event.target.value;
                          }
                          if (
                            topLeveLTeam.teamTotalProjectedPlays &&
                            +event.target.value !==
                              topLeveLTeam.teamTotalProjectedPlays
                          ) {
                            topLeveLTeam.teamTotalProjectedPlays =
                              +event.target.value;
                          }
                        }
                      }}
                      className={styles.teamSelectSelect}
                    />
                  </form>

                  <p className={styles.selectedTeamText}>
                    <strong>Total team plays:</strong>
                    {"    "}{" "}
                    {topLeveLTeam.teamTotalProjectedPlays ||
                      "Enter total plays number"}
                  </p>

                  {topLeveLTeam.teamTotalProjectedPlays > 700 && (
                    <div>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();

                          // Do something with `teamTotalProjectedPlays` here
                        }}
                        className={styles.teamProjectedPlaysFormWrapper}
                      >
                        <label
                          htmlFor="passPercecntage-field"
                          className={styles.teamSelectLabel}
                        >
                          Team projected pass percentage
                        </label>
                        <input
                          id="passPercecntage-field"
                          value={topLeveLTeam.teamPassPercentage}
                          type="number"
                          onChange={(event) => {
                            if (
                              // event.target.value > -5 &&
                              event.target.value < 100
                            ) {
                              setPassPercecntage(event.target.value);
                              topLeveLTeam.teamPassPercentage =
                                +event.target.value;
                              let runPercent = 100 - event.target.value;
                              // console.log(passPercecntage);
                              setRunPercecntage(runPercent);
                              topLeveLTeam.teamRunPercentage = runPercent;

                              // let decimalPassPercent = +passPercecntage / 10;

                              // tempTotalPassPlays =
                              //   +teamTotalProjectedPlays * decimalPassPercent;
                              // setTotalPassPlays(+tempTotalPassPlays);
                              setTotalPassPlays(
                                +(
                                  teamTotalProjectedPlays *
                                  (event.target.value / 100)
                                ).toFixed(0)
                              );
                              topLeveLTeam.totalPassPlays = +(
                                teamTotalProjectedPlays *
                                (event.target.value / 100)
                              ).toFixed(0);
                              setTotalRunPlays(
                                +(
                                  teamTotalProjectedPlays *
                                  ((100 - event.target.value) / 100)
                                ).toFixed(0)
                              );
                              setTotalTeamRushingAttemptsToDistribute(
                                +(
                                  teamTotalProjectedPlays *
                                  ((100 - event.target.value) / 100)
                                ).toFixed(0)
                              );
                              topLeveLTeam.totalRunPlays = +(
                                teamTotalProjectedPlays *
                                ((100 - +event.target.value) / 100)
                              ).toFixed(0);
                            }
                          }}
                          className={styles.teamSelectSelect}
                        />
                      </form>

                      <p className={styles.runAndPassPercentText}>
                        <strong>Projected pass percentage:</strong>
                        {"    "}{" "}
                        {topLeveLTeam.teamPassPercentage ||
                          "Enter Value between 0 and 100"}
                      </p>
                      <p className={styles.runAndPassPercentText}>
                        <strong>Projected run percentage:</strong>
                        {"    "}{" "}
                        {topLeveLTeam.teamRunPercentage ||
                          "Enter projected pass percentage"}
                      </p>

                      {topLeveLTeam.totalPassPlays && (
                        <div>
                          <p className={styles.runAndPassPercentText}>
                            <strong>Total pass plays:</strong>
                            {"    "}{" "}
                            {topLeveLTeam.totalPassPlays ||
                              "Enter projected pass percentage"}
                          </p>
                          <p className={styles.runAndPassPercentText}>
                            <strong>Total run plays:</strong>
                            {"    "}{" "}
                            {topLeveLTeam.totalRunPlays ||
                              "Enter projected pass percentage"}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className={styles.lastYearsTeamInfoOutsideWrapper}>
                  <div className={styles.selectedTeamPreviousYearLabel}>
                    Selected teams previous year team stats
                  </div>

                  <div>
                    <div className={styles.lastYearsTeamInfoInsideWrapper}>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Total Plays</p>
                        <div className={styles.previousYearsTotalPlaysNode}>
                          <strong>{topLeveLTeam.totalPlays}</strong>
                        </div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Total Plays Rank</p>
                        <div>{topLeveLTeam.totalPlaysRank}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Seconds Per Snap</p>
                        <div>{topLeveLTeam.secondsPerSnap}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Seconds Per Snap Rank</p>
                        <div>{topLeveLTeam.secPerSnapRank}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Team pass percentage</p>
                        <div>{topLeveLTeam.passPercecntage}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>Team run percentage</p>
                        <div>{topLeveLTeam.runPercecntage}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>New Head Coach</p>
                        <div>{topLeveLTeam.newHeadCoach}</div>
                      </div>
                      <div className={styles.lastYearsTeamInfoElement}>
                        <p>New Offensive Coordinator</p>
                        <div>{topLeveLTeam.newOffensiveCoordinator}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {sleeperDataArray.map((player) => {
                if (player.team === team) {
                  // console.log(player);
                  //
                  // QB/passing
                  //
                  if (player.position === "QB") {
                    // console.log(player);
                    if (!topLeveLTeam.qb1) {
                      topLeveLTeam.qb1 = {};
                    }
                    if (
                      !topLeveLTeam.qb2 &&
                      player.name !== topLeveLTeam.qb1.name
                    ) {
                      topLeveLTeam.qb2 = {};
                    }
                    if (
                      !topLeveLTeam.qb3 &&
                      player.name !== topLeveLTeam.qb1.name &&
                      player.name !== topLeveLTeam.qb2.name &&
                      topLeveLTeam.qb1.name !== topLeveLTeam.qb2.name
                    ) {
                      topLeveLTeam.qb3 = {};
                    }
                    if (!topLeveLTeam.qb1.name) {
                      topLeveLTeam.qb1.name = player.name;
                      qb1Data.name = player.name;
                    }

                    if (
                      topLeveLTeam.qb1.name &&
                      !topLeveLTeam.qb2.name &&
                      topLeveLTeam.qb1.name !== player.name
                    ) {
                      topLeveLTeam.qb2.name = player.name;

                      qb2Data.name = player.name;
                    }

                    if (
                      topLeveLTeam.qb1.name &&
                      topLeveLTeam.qb2.name &&
                      !topLeveLTeam.qb3.name &&
                      topLeveLTeam.qb1.name !== player.name &&
                      topLeveLTeam.qb2.name !== player.name &&
                      topLeveLTeam.qb1.name !== topLeveLTeam.qb2.name
                    ) {
                      topLeveLTeam.qb3.name = player.name;
                      qb3Data.name = player.name;
                      setIsTeamQB3(true);
                    }
                  }
                  // //
                  if (player.position === "RB") {
                    // console.log(player);
                    if (!topLeveLTeam.rb1) {
                      topLeveLTeam.rb1 = {};
                    }
                    if (
                      !topLeveLTeam.rb2 &&
                      player.name !== topLeveLTeam.rb1.name
                    ) {
                      topLeveLTeam.rb2 = {};
                    }
                    if (
                      !topLeveLTeam.rb3 &&
                      player.name !== topLeveLTeam.rb1.name &&
                      player.name !== topLeveLTeam.rb2.name &&
                      topLeveLTeam.rb1.name !== topLeveLTeam.rb2.name
                    ) {
                      topLeveLTeam.rb3 = {};
                    }
                    if (!topLeveLTeam.rb1.name) {
                      topLeveLTeam.rb1.name = player.name;
                      rb1Data.name = player.name;
                      // console.log(rb1Data);
                    }

                    if (
                      topLeveLTeam.rb1.name &&
                      !topLeveLTeam.rb2.name &&
                      topLeveLTeam.rb1.name !== player.name
                    ) {
                      topLeveLTeam.rb2.name = player.name;

                      rb2Data.name = player.name;
                    }

                    if (
                      topLeveLTeam.rb1.name &&
                      topLeveLTeam.rb2.name &&
                      !topLeveLTeam.rb3.name &&
                      topLeveLTeam.rb1.name !== player.name &&
                      topLeveLTeam.rb2.name !== player.name &&
                      topLeveLTeam.rb1.name !== topLeveLTeam.rb2.name
                    ) {
                      topLeveLTeam.rb3.name = player.name;
                      rb3Data.name = player.name;
                    }
                  }

                  //

                  if (player.position === "WR") {
                    // console.log(player);
                    if (!topLeveLTeam.wr1) {
                      topLeveLTeam.wr1 = {};
                      topLeveLTeam.wr1.name = player.name;
                      wr1Data.name = player.name;
                    }
                    if (
                      !topLeveLTeam.wr2 &&
                      player.name !== topLeveLTeam.wr1.name
                    ) {
                      topLeveLTeam.wr2 = {};
                      topLeveLTeam.wr2.name = player.name;

                      wr2Data.name = player.name;
                    }
                    if (
                      !topLeveLTeam.wr3 &&
                      player.name !== topLeveLTeam.wr1.name &&
                      player.name !== topLeveLTeam.wr2.name &&
                      topLeveLTeam.wr1.name !== topLeveLTeam.wr2.name
                    ) {
                      topLeveLTeam.wr3 = {};
                      topLeveLTeam.wr3.name = player.name;
                      wr3Data.name = player.name;
                    }
                    if (
                      !topLeveLTeam.wr4 &&
                      player.name !== topLeveLTeam.wr1.name &&
                      player.name !== topLeveLTeam.wr2.name &&
                      topLeveLTeam.wr3.name &&
                      player.name !== topLeveLTeam.wr3.name &&
                      topLeveLTeam.wr1.name !== topLeveLTeam.wr2.name &&
                      topLeveLTeam.wr1.name !== topLeveLTeam.wr3.name &&
                      topLeveLTeam.wr2.name !== topLeveLTeam.wr3.name
                    ) {
                      topLeveLTeam.wr4 = {};
                      topLeveLTeam.wr4.name = player.name;
                      wr4Data.name = player.name;
                    }
                    // if (!topLeveLTeam.wr1.name) {
                    //   topLeveLTeam.wr1.name = player.name;
                    //   wr1Data.name = player.name;
                    //   // console.log(rb1Data);
                    // }

                    // if (
                    //   topLeveLTeam.wr1.name &&
                    //   !topLeveLTeam.wr2.name &&
                    //   topLeveLTeam.wr1.name !== player.name
                    // ) {
                    //   topLeveLTeam.wr2.name = player.name;

                    //   wr2Data.name = player.name;
                    // }

                    // if (
                    //   topLeveLTeam.wr1.name &&
                    //   topLeveLTeam.wr2.name &&
                    //   !topLeveLTeam.wr3.name &&
                    //   topLeveLTeam.wr1.name !== player.name &&
                    //   topLeveLTeam.wr2.name !== player.name &&
                    //   topLeveLTeam.wr1.name !== topLeveLTeam.wr2.name
                    // ) {
                    //   topLeveLTeam.wr3.name = player.name;
                    //   wr3Data.name = player.name;
                    // }

                    // if (
                    //   topLeveLTeam.wr1.name &&
                    //   topLeveLTeam.wr2.name &&
                    //   topLeveLTeam.wr3.name &&
                    //   !topLeveLTeam.wr4.name &&
                    //   topLeveLTeam.wr1.name !== player.name &&
                    //   topLeveLTeam.wr2.name !== player.name &&
                    //   topLeveLTeam.wr3.name !== player.name &&
                    //   topLeveLTeam.wr1.name !== topLeveLTeam.wr2.name &&
                    //   topLeveLTeam.wr1.name !== topLeveLTea3.name &&
                    //   topLeveLTeam.wr2.name !== topLeveLTeam.wr3.name
                    // ) {
                    //   topLeveLTeam.wr4.name = player.name;
                    //   wr4Data.name = player.name;
                    // }
                  }

                  if (player.position === "TE") {
                    // console.log(player);
                    if (!topLeveLTeam.te1) {
                      topLeveLTeam.te1 = {};
                      topLeveLTeam.te1.name = player.name;
                      te1Data.name = player.name;
                    }

                    // if (
                    //   !topLeveLTeam.te2 &&
                    //   player.name !== topLeveLTeam.te1.name
                    // ) {
                    //   topLeveLTeam.te2 = {};
                    //   topLeveLTeam.te2.name = player.name;

                    //   te2Data.name = player.name;
                    // }

                    // console.log(topLeveLTeam);
                  }
                }
              })}

              <div>
                <div className={styles.selectPlayersToProjectLabel}>
                  Select players from team to project
                </div>
                <div className={styles.selectTeamsQBsWrapper}>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                    }}
                    className={styles.playerSelectWrapper}
                  >
                    <label
                      htmlFor="player-select"
                      className={styles.teamSelectLabel}
                    >
                      QB1:
                    </label>
                    <select
                      id="player-select"
                      value={teamQB1}
                      onChange={(event) => {
                        topLeveLTeam.qb1 = {};
                        topLeveLTeam.qb1.name = event.target.value;
                        setTeamQB1(topLeveLTeam.qb1.name);
                        setSelectedTeamsUserSelectedPlayersToProjectArray([
                          topLeveLTeam.qb1.name,
                        ]);
                        // console.log(
                        //   topLeveLTeam.qb1.name,
                        //   topLeveLTeam.qb2.name,
                        //   topLeveLTeam.qb3.name
                        // );
                      }}
                      className={styles.teamSelectSelect}
                      placeholder="Select Team"
                    >
                      <option>Select a QB</option>
                      {sleeperDataArray.map((player) => {
                        if (player.team === team) {
                          if (
                            player.position === "QB"
                            // ||
                            // (player.position === "RB") |
                            //   (player.position === "WR") ||
                            // player.position === "TE"
                          ) {
                            return (
                              <option key={player.name} value={player.name}>
                                {player.name}: {player.position}
                              </option>
                            );
                          }
                        }
                      })}
                    </select>
                  </form>

                  {teamQB1 && (
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        QB2:
                      </label>
                      <select
                        id="player-select"
                        value={teamQB2}
                        onChange={(event) => {
                          topLeveLTeam.qb2 = {};
                          topLeveLTeam.qb2.name = event.target.value;
                          setTeamQB2(topLeveLTeam.qb2.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a QB</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "QB"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>
                  )}

                  {teamQB1 && teamQB2 && topLeveLTeam.qb3.name && (
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        QB3:
                      </label>
                      <select
                        id="player-select"
                        value={teamQB3}
                        onChange={(event) => {
                          topLeveLTeam.qb3 = {};
                          topLeveLTeam.qb3.name = event.target.value;
                          setTeamQB3(topLeveLTeam.qb3.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                            topLeveLTeam.qb3.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a QB</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "QB"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>
                  )}
                </div>

                {showRBs && (
                  <div className={styles.selectTeamsQBsWrapper}>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        RB1:
                      </label>
                      <select
                        id="player-select"
                        value={teamRB1}
                        onChange={(event) => {
                          topLeveLTeam.rb1 = {};
                          topLeveLTeam.rb1.name = event.target.value;
                          setTeamRB1(topLeveLTeam.rb1.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                            topLeveLTeam.qb3.name,
                            topLeveLTeam.rb1.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a RB</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "RB"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>

                    {showRBs && teamRB1 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          RB2:
                        </label>
                        <select
                          id="player-select"
                          value={teamRB2}
                          onChange={(event) => {
                            topLeveLTeam.rb2 = {};
                            topLeveLTeam.rb2.name = event.target.value;
                            setTeamRB2(topLeveLTeam.rb2.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a RB</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "RB"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}

                    {showRBs && teamRB2 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          RB3:
                        </label>
                        <select
                          id="player-select"
                          value={teamRB3}
                          onChange={(event) => {
                            topLeveLTeam.rb3 = {};
                            topLeveLTeam.rb3.name = event.target.value;
                            setTeamRB3(topLeveLTeam.rb3.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a RB</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "RB"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                  </div>
                )}

                {teamRB3 && (
                  <div className={styles.selectTeamsQBsWrapper}>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        WR1:
                      </label>
                      <select
                        id="player-select"
                        value={teamWR1}
                        onChange={(event) => {
                          topLeveLTeam.wr1 = {};
                          topLeveLTeam.wr1.name = event.target.value;
                          setTeamWR1(topLeveLTeam.wr1.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                            topLeveLTeam.qb3.name,
                            topLeveLTeam.rb1.name,
                            topLeveLTeam.rb2.name,
                            topLeveLTeam.rb3.name,
                            topLeveLTeam.wr1.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a WR</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "WR"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>

                    {teamWR1 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          WR2:
                        </label>
                        <select
                          id="player-select"
                          value={teamWR2}
                          onChange={(event) => {
                            topLeveLTeam.wr2 = {};
                            topLeveLTeam.wr2.name = event.target.value;
                            setTeamWR2(topLeveLTeam.wr2.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                              topLeveLTeam.wr1.name,
                              topLeveLTeam.wr2.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a WR</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "WR"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                    {teamWR2 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          WR3:
                        </label>
                        <select
                          id="player-select"
                          value={teamWR3}
                          onChange={(event) => {
                            topLeveLTeam.wr3 = {};
                            topLeveLTeam.wr3.name = event.target.value;
                            setTeamWR3(topLeveLTeam.wr3.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                              topLeveLTeam.wr1.name,
                              topLeveLTeam.wr2.name,
                              topLeveLTeam.wr3.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a WR</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "WR"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                    {teamWR3 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          WR4:
                        </label>
                        <select
                          id="player-select"
                          value={teamWR4}
                          onChange={(event) => {
                            topLeveLTeam.wr4 = {};
                            topLeveLTeam.wr4.name = event.target.value;
                            setTeamWR4(topLeveLTeam.wr4.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                              topLeveLTeam.wr1.name,
                              topLeveLTeam.wr2.name,
                              topLeveLTeam.wr3.name,
                              topLeveLTeam.wr4.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a WR</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "WR"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                  </div>
                )}
                {teamWR4 && (
                  <div className={styles.selectTeamsQBsWrapper}>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                      className={styles.playerSelectWrapper}
                    >
                      <label
                        htmlFor="player-select"
                        className={styles.teamSelectLabel}
                      >
                        TE1:
                      </label>
                      <select
                        id="player-select"
                        value={teamTE1}
                        onChange={(event) => {
                          topLeveLTeam.te1 = {};
                          topLeveLTeam.te1.name = event.target.value;
                          setTeamTE1(topLeveLTeam.te1.name);
                          setSelectedTeamsUserSelectedPlayersToProjectArray([
                            topLeveLTeam.qb1.name,
                            topLeveLTeam.qb2.name,
                            topLeveLTeam.qb3.name,
                            topLeveLTeam.rb1.name,
                            topLeveLTeam.rb2.name,
                            topLeveLTeam.rb3.name,
                            topLeveLTeam.wr1.name,
                            topLeveLTeam.wr2.name,
                            topLeveLTeam.wr3.name,
                            topLeveLTeam.wr4.name,
                            topLeveLTeam.te1.name,
                          ]);
                        }}
                        className={styles.teamSelectSelect}
                        placeholder="Select Team"
                      >
                        <option>Select a TE</option>
                        {sleeperDataArray.map((player) => {
                          if (player.team === team) {
                            if (
                              player.position === "TE"
                              // ||
                              // (player.position === "RB") |
                              //   (player.position === "WR") ||
                              // player.position === "TE"
                            ) {
                              return (
                                <option key={player.name} value={player.name}>
                                  {player.name}: {player.position}
                                </option>
                              );
                            }
                          }
                        })}
                      </select>
                    </form>

                    {teamTE1 && (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                        className={styles.playerSelectWrapper}
                      >
                        <label
                          htmlFor="player-select"
                          className={styles.teamSelectLabel}
                        >
                          TE2:
                        </label>
                        <select
                          id="player-select"
                          value={teamTE2}
                          onChange={(event) => {
                            topLeveLTeam.te2 = {};
                            topLeveLTeam.te2.name = event.target.value;
                            setTeamTE2(topLeveLTeam.te2.name);
                            setSelectedTeamsUserSelectedPlayersToProjectArray([
                              topLeveLTeam.qb1.name,
                              topLeveLTeam.qb2.name,
                              topLeveLTeam.qb3.name,
                              topLeveLTeam.rb1.name,
                              topLeveLTeam.rb2.name,
                              topLeveLTeam.rb3.name,
                              topLeveLTeam.wr1.name,
                              topLeveLTeam.wr2.name,
                              topLeveLTeam.wr3.name,
                              topLeveLTeam.wr4.name,
                              topLeveLTeam.te1.name,
                              topLeveLTeam.te2.name,
                            ]);
                          }}
                          className={styles.teamSelectSelect}
                          placeholder="Select Team"
                        >
                          <option>Select a TE</option>
                          {sleeperDataArray.map((player) => {
                            if (player.team === team) {
                              if (
                                player.position === "TE"
                                // ||
                                // (player.position === "RB") |
                                //   (player.position === "WR") ||
                                // player.position === "TE"
                              ) {
                                return (
                                  <option key={player.name} value={player.name}>
                                    {player.name}: {player.position}
                                  </option>
                                );
                              }
                            }
                          })}
                        </select>
                      </form>
                    )}
                  </div>
                )}

                <div className={styles.qbSectionTitle}> Teams QBs</div>
                <div className={styles.amountsLeftToDistributeLabel}>
                  Amounts Left to Distribute
                </div>
                <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
                  <div
                    className={styles.howMuchIsLeftIndividualSectionsWrapper}
                  >
                    <div>Team Pass Attempt %</div>
                    {isTotalProjectedOverLimit ? (
                      <div className={styles.limitExceeded}>
                        {totalPercentOfPassAttemptsLeftToDistribute}
                        <div>Limit Exceeded!</div>
                      </div>
                    ) : (
                      <div>{totalPercentOfPassAttemptsLeftToDistribute}</div>
                    )}
                  </div>
                </div>
                {selectedTeamsUserSelectedPlayersToProjectArray && (
                  <div className={styles.sectionWrapper}>
                    {selectedTeamsUserSelectedPlayersToProjectArray.map(
                      (player) => {
                        // console.log(
                        //   selectedTeamsUserSelectedPlayersToProjectArray
                        // );
                        // console.log(player, teamQB1);
                        if (
                          player === teamQB1 ||
                          player === teamQB2 ||
                          player === teamQB3
                        ) {
                          return (
                            <div
                              key={player}
                              className={styles.teamsQBsWrapper}
                            >
                              {" "}
                              <div className={styles.playerNameLabel}>
                                {player}
                              </div>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="games">Games Played</label>

                                <input
                                  id="games"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1GamesPlayed
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2GamesPlayed
                                      : qb3GamesPlayed
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.gamesPlayed =
                                        +event.target.value;
                                      setQb1GamesPlayed(
                                        +topLeveLTeam.qb1.gamesPlayed
                                      );
                                      if (+event.target.value === 0) {
                                        setQb1GamesPlayed("");
                                      }
                                      qb1Data.name = topLeveLTeam.qb1.name;
                                      qb1Data.gamesPlayed = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      setQb2GamesPlayed(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb2GamesPlayed("");
                                      }
                                      qb2Data.name = topLeveLTeam.qb2.name;
                                      if (
                                        +event.target.value +
                                          topLeveLTeam.qb1.gamesPlayed >
                                        18
                                      ) {
                                        setQb2GamesPlayed("");
                                        alert(
                                          "Total games played should not exceed 18"
                                        );
                                      }
                                      if (
                                        +event.target.value +
                                          topLeveLTeam.qb1.gamesPlayed <=
                                        18
                                      ) {
                                        topLeveLTeam.qb2.gamesPlayed =
                                          +event.target.value;
                                        qb2Data.gamesPlayed =
                                          +event.target.value;
                                      }
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      setQb3GamesPlayed(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb3GamesPlayed("");
                                      }
                                      qb3Data.name = topLeveLTeam.qb3.name;

                                      if (
                                        +event.target.value +
                                          topLeveLTeam.qb1.gamesPlayed +
                                          topLeveLTeam.qb2.gamesPlayed >
                                        18
                                      ) {
                                        setQb3GamesPlayed("");
                                        alert(
                                          "Total games played should not exceed 18"
                                        );
                                      }
                                      if (
                                        +event.target.value +
                                          topLeveLTeam.qb1.gamesPlayed +
                                          topLeveLTeam.qb2.gamesPlayed <=
                                        18
                                      ) {
                                        topLeveLTeam.qb3.gamesPlayed =
                                          +event.target.value;
                                        qb3Data.gamesPlayed =
                                          +event.target.value;
                                      }
                                    }

                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="passAttempts">
                                  % of Tm Atmpts
                                </label>

                                <input
                                  id="passAttempts"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1PercentOfTeamPassAttempts
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2PercentOfTeamPassAttempts
                                      : qb3PercentOfTeamPassAttempts
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={100}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      qb1Data.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      setQb1PercentOfTeamPassAttempts(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setQb1PercentOfTeamPassAttempts("");
                                      }
                                      topLeveLTeam.qb1.PassAtmpts = (
                                        (topLeveLTeam.qb1
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        totalPassPlays
                                      ).toFixed(0);
                                      qb1Data.PassAtmpts = (
                                        (+topLeveLTeam.qb1
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        +totalPassPlays
                                      ).toFixed(0);
                                      setQb1PassAttempts(+qb1Data.PassAtmpts);
                                      // console.log(typeof qb1PassAttempts);

                                      totalProjectedPercentOfTeamPassAttempts =
                                        +event.target.value;

                                      if (qb2PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb2PercentOfTeamPassAttempts;
                                      }

                                      if (qb3PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb3PercentOfTeamPassAttempts;
                                      }

                                      if (
                                        qb2PercentOfTeamPassAttempts &&
                                        qb3PercentOfTeamPassAttempts
                                      ) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb2PercentOfTeamPassAttempts +
                                          +qb3PercentOfTeamPassAttempts;
                                      }
                                      setIsTotalProjectedOverLimit(false);

                                      // console.log(
                                      //   totalProjectedPercentOfTeamPassAttempts
                                      // );

                                      if (
                                        totalProjectedPercentOfTeamPassAttempts >
                                        100
                                      ) {
                                        topLeveLTeam.qb1.percentOfTotalTeamPassAttempts = 0;

                                        qb1Data.PassAtmpts = 0;

                                        setIsTotalProjectedOverLimit(true);

                                        // setQb1PercentOfTeamPassAttempts("");

                                        // alert(
                                        //   // `Total Pass Attempts should not exceed projected team pass attempts of ${totalPassPlays}`
                                        //   `Total percent of team pass attempts should not exceed 100`
                                        // );
                                      }
                                    }

                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      qb2Data.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      setQb2PercentOfTeamPassAttempts(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setQb2PercentOfTeamPassAttempts("");
                                      }
                                      topLeveLTeam.qb2.PassAtmpts = (
                                        (topLeveLTeam.qb2
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        totalPassPlays
                                      ).toFixed(0);
                                      qb2Data.PassAtmpts = (
                                        (+topLeveLTeam.qb2
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        +totalPassPlays
                                      ).toFixed(0);
                                      setQb2PassAttempts(qb2Data.PassAtmpts);

                                      totalProjectedPercentOfTeamPassAttempts =
                                        +event.target.value;

                                      if (qb1PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb1PercentOfTeamPassAttempts;
                                      }

                                      if (qb3PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb3PercentOfTeamPassAttempts;
                                      }

                                      if (
                                        qb1PercentOfTeamPassAttempts &&
                                        qb3PercentOfTeamPassAttempts
                                      ) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb1PercentOfTeamPassAttempts +
                                          +qb3PercentOfTeamPassAttempts;
                                      }

                                      setIsTotalProjectedOverLimit(false);

                                      // console.log(
                                      //   totalProjectedPercentOfTeamPassAttempts
                                      // );

                                      if (
                                        totalProjectedPercentOfTeamPassAttempts >
                                        100
                                      ) {
                                        topLeveLTeam.qb2.percentOfTotalTeamPassAttempts = 0;
                                        qb2Data.PassAtmpts = 0;

                                        setIsTotalProjectedOverLimit(true);

                                        // setQb2PercentOfTeamPassAttempts("");

                                        // alert(
                                        //   `Total percent of team pass attempts should not exceed 100`
                                        // );
                                      }
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      //

                                      topLeveLTeam.qb3.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      qb3Data.percentOfTotalTeamPassAttempts =
                                        +event.target.value;
                                      setQb3PercentOfTeamPassAttempts(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setQb3PercentOfTeamPassAttempts("");
                                      }
                                      topLeveLTeam.qb3.PassAtmpts = (
                                        (topLeveLTeam.qb3
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        totalPassPlays
                                      ).toFixed(0);

                                      qb3Data.PassAtmpts = (
                                        (+topLeveLTeam.qb3
                                          .percentOfTotalTeamPassAttempts /
                                          100) *
                                        +totalPassPlays
                                      ).toFixed(0);
                                      setQb3PassAttempts(
                                        topLeveLTeam.qb3.PassAtmpts
                                      );

                                      totalProjectedPercentOfTeamPassAttempts =
                                        +event.target.value;

                                      if (qb1PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb1PercentOfTeamPassAttempts;
                                      }

                                      if (qb2PercentOfTeamPassAttempts) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb2PercentOfTeamPassAttempts;
                                      }

                                      if (
                                        qb1PercentOfTeamPassAttempts &&
                                        qb2PercentOfTeamPassAttempts
                                      ) {
                                        totalProjectedPercentOfTeamPassAttempts =
                                          +event.target.value +
                                          +qb1PercentOfTeamPassAttempts +
                                          +qb2PercentOfTeamPassAttempts;
                                      }

                                      setIsTotalProjectedOverLimit(false);

                                      if (
                                        totalProjectedPercentOfTeamPassAttempts >
                                        100
                                      ) {
                                        topLeveLTeam.qb3.percentOfTotalTeamPassAttempts = 0;

                                        setIsTotalProjectedOverLimit(true);

                                        // setQb3PercentOfTeamPassAttempts("");
                                        // alert(
                                        //   `Total percent of team pass attempts should not exceed 100`
                                        // );
                                      }
                                    }
                                    setTotalPercentOfPassAttemptsLeftToDistribute(
                                      100 -
                                        totalProjectedPercentOfTeamPassAttempts
                                    );
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="compPercent">
                                  Completion %
                                </label>

                                <input
                                  id="compPercent"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1CompPercent
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2CompPercent
                                      : qb3CompPercent
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={80}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.compPercent =
                                        +event.target.value;
                                      qb1Data.compPercent = +event.target.value;
                                      setQb1CompPercent(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb1CompPercent("");
                                      }
                                      topLeveLTeam.qb1.completions = +(
                                        +(+event.target.value / 100) *
                                        +qb1PassAttempts
                                      ).toFixed(0);
                                      qb1Data.completions = +(
                                        +(+event.target.value / 100) *
                                        +qb1PassAttempts
                                      ).toFixed(0);
                                      setQb1Completions(
                                        topLeveLTeam.qb1.completions
                                      );

                                      // console.log(typeof qb1Data.completions);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.compPercent =
                                        +event.target.value;
                                      qb2Data.compPercent = +event.target.value;
                                      setQb2CompPercent(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb2CompPercent("");
                                      }
                                      topLeveLTeam.qb2.completions = +(
                                        +(+event.target.value / 100) *
                                        +qb2PassAttempts
                                      ).toFixed(0);
                                      qb2Data.completions = +(
                                        +(+event.target.value / 100) *
                                        +qb2PassAttempts
                                      ).toFixed(0);
                                      setQb2Completions(
                                        topLeveLTeam.qb2.completions
                                      );
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.compPercent =
                                        +event.target.value;
                                      qb3Data.compPercent = +event.target.value;
                                      setQb3CompPercent(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb3CompPercent("");
                                      }
                                      topLeveLTeam.qb3.completions = +(
                                        +(+event.target.value / 100) *
                                        +qb3PassAttempts
                                      ).toFixed(0);
                                      qb3Data.completions = +(
                                        +(+event.target.value / 100) *
                                        +qb3PassAttempts
                                      ).toFixed(0);
                                      setQb3Completions(
                                        topLeveLTeam.qb3.completions
                                      );
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="games">Passing Yards</label>

                                <input
                                  id="games"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1PassingYards
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2PassingYards
                                      : qb3PassingYards
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.passYrds =
                                        +event.target.value;
                                      setQb1PassingYards(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb1PassingYards("");
                                      }
                                      qb1Data.name = topLeveLTeam.qb1.name;
                                      qb1Data.passYrds = +event.target.value;

                                      topLeveLTeam.qb1.YPC = +(
                                        +event.target.value / qb1Completions
                                      ).toFixed(1);

                                      // console.log(
                                      //   +event.target.value,
                                      //   qb1Completions,
                                      //   typeof qb1Completions
                                      // );

                                      let temp1YPC =
                                        +event.target.value / qb1Completions;
                                      let temp2YPC = temp1YPC.toFixed(1);

                                      qb1Data.YPC = +temp2YPC;
                                      // console.log(qb1Data.YPC);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.passYrds =
                                        +event.target.value;
                                      setQb2PassingYards(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb2PassingYards("");
                                      }
                                      qb2Data.name = topLeveLTeam.qb2.name;
                                      qb2Data.passYrds = +event.target.value;

                                      topLeveLTeam.qb2.YPC = +(
                                        +event.target.value / qb2Completions
                                      ).toFixed(1);

                                      qb2Data.YPC = +(
                                        +event.target.value / qb2Completions
                                      ).toFixed(1);
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.passYrds =
                                        +event.target.value;
                                      setQb3PassingYards(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb3PassingYards("");
                                      }
                                      qb3Data.name = topLeveLTeam.qb3.name;
                                      qb3Data.passYrds = +event.target.value;

                                      topLeveLTeam.qb3.YPC = +(
                                        +event.target.value / qb3Completions
                                      ).toFixed(1);

                                      qb3Data.YPC = +(
                                        +event.target.value / qb3Completions
                                      ).toFixed(1);
                                    }

                                    if (
                                      !topLeveLTeam.totalTeamProjectedPassingYards ||
                                      topLeveLTeam.totalTeamProjectedPassingYards ===
                                        0
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards = 0;
                                    }

                                    if (
                                      qb1PassingYards &&
                                      !qb2PassingYards &&
                                      !qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb1PassingYards;
                                    }
                                    if (
                                      !qb1PassingYards &&
                                      qb2PassingYards &&
                                      !qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb2PassingYards;
                                    }
                                    if (
                                      !qb1PassingYards &&
                                      !qb2PassingYards &&
                                      qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb3PassingYards;
                                    }

                                    if (
                                      qb1PassingYards &&
                                      qb2PassingYards &&
                                      !qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb1PassingYards + +qb2PassingYards;
                                    }
                                    if (
                                      qb1PassingYards &&
                                      !qb2PassingYards &&
                                      qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb1PassingYards + +qb3PassingYards;
                                    }
                                    if (
                                      !qb1PassingYards &&
                                      qb2PassingYards &&
                                      qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb2PassingYards + +qb3PassingYards;
                                    }
                                    if (
                                      qb1PassingYards &&
                                      qb2PassingYards &&
                                      qb3PassingYards
                                    ) {
                                      topLeveLTeam.totalTeamProjectedPassingYards =
                                        +qb1PassingYards +
                                        +qb2PassingYards +
                                        +qb3PassingYards;
                                    }

                                    setTeamTotalPassingYards(
                                      topLeveLTeam.totalTeamProjectedPassingYards
                                    );
                                  }}
                                />
                              </form>
                              {/* <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="YPA">Yards/Attempt</label>

                                <input
                                  id="YPA"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? topLeveLTeam.qb1.YPA
                                      : topLeveLTeam.qb2.name === player
                                      ? topLeveLTeam.qb2.YPA
                                      : topLeveLTeam.qb3.YPA
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={15}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.YPA =
                                        +event.target.value;
                                      qb1Data.YPA = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.YPA =
                                        +event.target.value;
                                      qb2Data.YPA = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.YPA =
                                        +event.target.value;
                                      qb3Data.YPA = +event.target.value;
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form> */}
                              {/* <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="YPC">Yards/Comp</label>

                                <input
                                  id="YPC"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? topLeveLTeam.qb1.YPC
                                      : topLeveLTeam.qb2.name === player
                                      ? topLeveLTeam.qb2.YPC
                                      : topLeveLTeam.qb3.YPC
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={19.9}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.YPC =
                                        +event.target.value;

                                      qb1Data.YPC = +event.target.value;
                                      topLeveLTeam.qb1.passYrds = +(
                                        +event.target.value *
                                        +qb1Data.completions
                                      ).toFixed(0);
                                      qb1Data.passYrds = +(
                                        +event.target.value *
                                        +qb1Data.completions
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.YPC =
                                        +event.target.value;
                                      qb2Data.YPC = +event.target.value;
                                      topLeveLTeam.qb2.passYrds = +(
                                        +event.target.value *
                                        +qb2Data.completions
                                      ).toFixed(0);
                                      qb2Data.passYrds = +(
                                        +event.target.value *
                                        +qb2Data.completions
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.YPC =
                                        +event.target.value;
                                      qb3Data.YPC = +event.target.value;
                                      topLeveLTeam.qb3.passYrds = +(
                                        +event.target.value *
                                        +qb3Data.completions
                                      ).toFixed(0);
                                      qb3Data.passYrds = +(
                                        +event.target.value *
                                        +qb3Data.completions
                                      ).toFixed(0);
                                    }

                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form> */}
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="passingTDs">Passing TDs</label>

                                <input
                                  id="passingTDs"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1PassTDs
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2PassTDs
                                      : qb3PassTDs
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={60}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.passingTDs =
                                        +event.target.value;
                                      qb1Data.passingTDs = +event.target.value;
                                      // console.log(qb1Data);
                                      setQb1PassTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb1PassTDs("");
                                      }
                                      allQBDataArray.push(qb1Data);
                                      setAllQBDataArray(allQBDataArray);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.passingTDs =
                                        +event.target.value;
                                      qb2Data.passingTDs = +event.target.value;
                                      setQb2PassTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb2PassTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.passingTDs =
                                        +event.target.value;
                                      qb3Data.passingTDs = +event.target.value;
                                      setQb3PassTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb3PassTDs("");
                                      }
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb2);
                                    // console.log(allQBDataArray);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="INTs">Interceptions</label>

                                <input
                                  id="INTs"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1INTs
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2INTs
                                      : qb3INTs
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  max={40}
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.INTs =
                                        +event.target.value;
                                      qb1Data.INTs = +event.target.value;
                                      // console.log(qb1Data);
                                      setQb1INTs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb1INTs("");
                                      }
                                      allQBDataArray.push(qb1Data);
                                      setAllQBDataArray(allQBDataArray);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.INTs =
                                        +event.target.value;
                                      setQb2INTs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb2INTs("");
                                      }
                                      qb2Data.INTs = +event.target.value;
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.INTs =
                                        +event.target.value;
                                      setQb3INTs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb3INTs("");
                                      }
                                      qb3Data.INTs = +event.target.value;
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb2);
                                    // console.log(allQBDataArray);
                                  }}
                                />
                              </form>
                            </div>
                          );
                        }

                        // end QB/passing
                        //
                        // rushing
                        //
                      }
                    )}
                  </div>
                )}
                <div className={styles.saveAndClearBTNsWrapper}>
                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        saveUsersProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Save QB Projections
                    </button>
                  </div>

                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        clearUsersQBsProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Clear Saved QB Projections
                    </button>
                  </div>
                </div>
                <PassingTable
                  qb1Data={topLeveLTeam.qb1}
                  qb2Data={topLeveLTeam.qb2}
                  qb3Data={topLeveLTeam.qb3}
                />
                <div className={styles.qbSectionTitle}> Rushing</div>
                <div className={styles.amountsLeftToDistributeLabel}>
                  Amounts Left to Distribute
                </div>
                <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
                  <div
                    className={styles.howMuchIsLeftIndividualSectionsWrapper}
                  >
                    <div>Team Rush Attempts</div>
                    {isTotalProjectedRushAttemptsOverLimit ? (
                      <div className={styles.limitExceeded}>
                        {totalTeamRushingAttemptsToDistribute}
                        <div>Limit Exceeded!</div>
                      </div>
                    ) : (
                      <div>{totalTeamRushingAttemptsToDistribute}</div>
                    )}
                  </div>
                </div>
                {selectedTeamsUserSelectedPlayersToProjectArray && (
                  <div className={styles.sectionWrapper}>
                    {selectedTeamsUserSelectedPlayersToProjectArray.map(
                      (player) => {
                        // if (player.team === team) {
                        //
                        //
                        if (
                          player === teamQB1 ||
                          player === teamQB2 ||
                          player === teamQB3 ||
                          player === teamRB1 ||
                          player === teamRB2 ||
                          player === teamRB3 ||
                          player === teamWR1 ||
                          player === teamWR2 ||
                          player === teamWR3 ||
                          player === teamWR4
                        ) {
                          return (
                            <div
                              key={`${player}-${player.position}`}
                              className={styles.teamsQBsWrapper}
                            >
                              {" "}
                              <div className={styles.playerNameLabel}>
                                {player}
                              </div>
                              {/* <form
                            onSubmit={(event) => {
                              event.preventDefault();

                              // Do something with `name` here
                            }}
                          >
                            <label htmlFor="games">Games Played</label>

                            <input
                              id="games"
                              value={
                                topLeveLTeam.qb1.name === player.name
                                  ? topLeveLTeam.qb1.gamesPlayed
                                  : topLeveLTeam.qb2.name === player.name
                                  ? topLeveLTeam.qb2.gamesPlayed
                                  : topLeveLTeam.qb3.name === player.name
                                  ? topLeveLTeam.qb3.gamesPlayed
                                  : topLeveLTeam.rb1.name === player.name
                                  ? topLeveLTeam.rb1.gamesPlayed
                                  : topLeveLTeam.rb2.name === player.name
                                  ? topLeveLTeam.rb2.gamesPlayed
                                  : topLeveLTeam.rb3.name === player.name
                                  ? topLeveLTeam.gamesPlayed
                                  : topLeveLTeam.wr1.name === player.name
                                  ? topLeveLTeam.wr1.gamesPlayed
                                  : topLeveLTeam.wr2.name === player.name
                                  ? topLeveLTeam.wr2.gamesPlayed
                                  : topLeveLTeam.wr3.name === player.name
                                  ? topLeveLTeam.wr3.gamesPlayed
                                  : topLeveLTeam.wr4.gamesPlayed
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              max={18}
                              onChange={(event) => {
                                if (topLeveLTeam.qb1.name === player.name) {
                                  topLeveLTeam.qb1.gamesPlayed =
                                    +event.target.value;
                                  qb1Data.name = topLeveLTeam.qb1.name;
                                  qb1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.qb2.name === player.name) {
                                  qb2Data.name = topLeveLTeam.qb2.name;
                                  if (
                                    +event.target.value +
                                      topLeveLTeam.qb1.gamesPlayed >
                                    18
                                  ) {
                                    alert(
                                      "Total games played for QB's should not exceed 18"
                                    );
                                  }
                                  if (
                                    +event.target.value +
                                      topLeveLTeam.qb1.gamesPlayed <=
                                    18
                                  ) {
                                    topLeveLTeam.qb2.gamesPlayed =
                                      +event.target.value;
                                    qb2Data.gamesPlayed = +event.target.value;
                                  }
                                }
                                if (topLeveLTeam.qb3.name === player.name) {
                                  qb3Data.name = topLeveLTeam.qb3.name;

                                  if (
                                    +event.target.value +
                                      topLeveLTeam.qb1.gamesPlayed +
                                      topLeveLTeam.qb2.gamesPlayed >
                                    18
                                  ) {
                                    alert(
                                      "Total games played for QB's should not exceed 18"
                                    );
                                  }
                                  if (
                                    +event.target.value +
                                      topLeveLTeam.qb1.gamesPlayed +
                                      topLeveLTeam.qb2.gamesPlayed <=
                                    18
                                  ) {
                                    topLeveLTeam.qb3.gamesPlayed =
                                      +event.target.value;
                                    qb3Data.gamesPlayed = +event.target.value;
                                  }
                                }

                                if (topLeveLTeam.rb1.name === player.name) {
                                  topLeveLTeam.rb1.gamesPlayed =
                                    +event.target.value;
                                  rb1Data.name = topLeveLTeam.rb1.name;
                                  rb1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.rb2.name === player.name) {
                                  topLeveLTeam.rb2.gamesPlayed =
                                    +event.target.value;
                                  rb2Data.name = topLeveLTeam.rb2.name;
                                  rb2Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.rb3.name === player.name) {
                                  topLeveLTeam.rb3.gamesPlayed =
                                    +event.target.value;
                                  rb3Data.name = topLeveLTeam.rb3.name;
                                  rb3Data.gamesPlayed = +event.target.value;
                                }
                                // console.log(topLeveLTeam);
                                // console.log(topLeveLTeam.qb1);
                                // console.log(topLeveLTeam.qb2);
                              }}
                            />
                          </form> */}
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="rushAttempts">
                                  Rush Atmpts
                                </label>

                                <input
                                  id="rushAttempts"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1RushAttempts
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2RushAttempts
                                      : topLeveLTeam.qb3.name === player
                                      ? qb3RushAttempts
                                      : topLeveLTeam.rb1.name === player
                                      ? rb1RushAttempts
                                      : topLeveLTeam.rb2.name === player
                                      ? rb2RushAttempts
                                      : topLeveLTeam.rb3.name === player
                                      ? rb3RushAttempts
                                      : topLeveLTeam.wr1.name === player
                                      ? wr1RushAttempts
                                      : topLeveLTeam.wr2.name === player
                                      ? wr2RushAttempts
                                      : topLeveLTeam.wr3.name === player
                                      ? wr3RushAttempts
                                      : wr4RushAttempts
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.rushAttempts =
                                        +event.target.value;
                                      qb1Data.name = topLeveLTeam.qb1.name;
                                      qb1Data.rushAttempts =
                                        +event.target.value;
                                      setQb1RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb1RushAttempts("");
                                      }
                                      // setTotalTeamRushingAttemptsToDistribute(
                                      //   totalTeamRushingAttemptsToDistribute -
                                      //     +event.target.value
                                      // );

                                      tempTotalProjectedQBRushAttempts =
                                        +event.target.value;

                                      if (qb2RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb2RushAttempts;
                                      }

                                      if (qb3RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb3RushAttempts;
                                      }

                                      if (qb2RushAttempts && qb3RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb2RushAttempts +
                                          +qb3RushAttempts;
                                      }
                                      setTotalProjectedQBRushAttempts(
                                        tempTotalProjectedQBRushAttempts
                                      );
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      qb2Data.name = topLeveLTeam.qb2.name;
                                      topLeveLTeam.qb2.rushAttempts =
                                        +event.target.value;
                                      qb2Data.rushAttempts =
                                        +event.target.value;
                                      setQb2RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb2RushAttempts("");
                                      }
                                      // setTotalTeamRushingAttemptsToDistribute(
                                      //   totalTeamRushingAttemptsToDistribute -
                                      //     +event.target.value
                                      // );

                                      tempTotalProjectedQBRushAttempts =
                                        +event.target.value;

                                      if (qb1RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb1RushAttempts;
                                      }

                                      if (qb3RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb3RushAttempts;
                                      }

                                      if (qb1RushAttempts && qb3RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb1RushAttempts +
                                          +qb3RushAttempts;
                                      }
                                      setTotalProjectedQBRushAttempts(
                                        tempTotalProjectedQBRushAttempts
                                      );
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      qb3Data.name = topLeveLTeam.qb3.name;

                                      topLeveLTeam.qb3.rushAttempts =
                                        +event.target.value;
                                      qb3Data.rushAttempts =
                                        +event.target.value;
                                      setQb3RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb3RushAttempts("");
                                      }
                                      // setTotalTeamRushingAttemptsToDistribute(
                                      //   totalTeamRushingAttemptsToDistribute -
                                      //     +event.target.value
                                      // );

                                      tempTotalProjectedQBRushAttempts =
                                        +event.target.value;

                                      if (qb1RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb1RushAttempts;
                                      }

                                      if (qb2RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb2RushAttempts;
                                      }

                                      if (qb1RushAttempts && qb2RushAttempts) {
                                        tempTotalProjectedQBRushAttempts =
                                          +event.target.value +
                                          +qb1RushAttempts +
                                          +qb2RushAttempts;
                                      }
                                      setTotalProjectedQBRushAttempts(
                                        tempTotalProjectedQBRushAttempts
                                      );
                                    }

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.rushAttempts =
                                        +event.target.value;
                                      rb1Data.name = topLeveLTeam.rb1.name;
                                      rb1Data.rushAttempts =
                                        +event.target.value;
                                      setrb1RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setrb1RushAttempts("");
                                      }

                                      tempTotalProjectedRBRushAttempts =
                                        +event.target.value;

                                      if (rb2RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb2RushAttempts;
                                      }

                                      if (rb3RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb3RushAttempts;
                                      }

                                      if (rb2RushAttempts && rb3RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb2RushAttempts +
                                          +rb3RushAttempts;
                                      }
                                      setTotalProjectedRBRushAttempts(
                                        tempTotalProjectedRBRushAttempts
                                      );
                                    }

                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.rushAttempts =
                                        +event.target.value;
                                      rb2Data.name = topLeveLTeam.rb2.name;
                                      rb2Data.rushAttempts =
                                        +event.target.value;
                                      setrb2RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setrb2RushAttempts("");
                                      }
                                      tempTotalProjectedRBRushAttempts =
                                        +event.target.value;

                                      if (rb1RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb1RushAttempts;
                                      }

                                      if (rb3RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb3RushAttempts;
                                      }

                                      if (rb1RushAttempts && rb3RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb1RushAttempts +
                                          +rb3RushAttempts;
                                      }
                                      setTotalProjectedRBRushAttempts(
                                        tempTotalProjectedRBRushAttempts
                                      );
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.rushAttempts =
                                        +event.target.value;
                                      rb3Data.name = topLeveLTeam.rb3.name;
                                      rb3Data.rushAttempts =
                                        +event.target.value;
                                      setrb3RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setrb3RushAttempts("");
                                      }
                                      tempTotalProjectedRBRushAttempts =
                                        +event.target.value;

                                      if (rb1RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb1RushAttempts;
                                      }

                                      if (rb2RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb2RushAttempts;
                                      }

                                      if (rb1RushAttempts && rb2RushAttempts) {
                                        tempTotalProjectedRBRushAttempts =
                                          +event.target.value +
                                          +rb1RushAttempts +
                                          +rb2RushAttempts;
                                      }
                                      setTotalProjectedRBRushAttempts(
                                        tempTotalProjectedRBRushAttempts
                                      );
                                    }

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.rushAttempts =
                                        +event.target.value;
                                      wr1Data.name = topLeveLTeam.wr1.name;
                                      wr1Data.rushAttempts =
                                        +event.target.value;
                                      setwr1RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setwr1RushAttempts("");
                                      }
                                      tempTotalProjectedWRRushAttempts =
                                        +event.target.value;

                                      if (wr2RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr2RushAttempts;
                                      }

                                      if (wr3RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr3RushAttempts;
                                      }

                                      if (wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr4RushAttempts;
                                      }

                                      if (wr2RushAttempts && wr3RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr2RushAttempts +
                                          +wr3RushAttempts;
                                      }

                                      if (wr2RushAttempts && wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr2RushAttempts +
                                          +wr4RushAttempts;
                                      }
                                      if (wr3RushAttempts && wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr3RushAttempts +
                                          +wr4RushAttempts;
                                      }

                                      if (
                                        wr2RushAttempts &&
                                        wr3RushAttempts &&
                                        wr4RushAttempts
                                      ) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr2RushAttempts +
                                          +wr3RushAttempts +
                                          +wr4RushAttempts;
                                      }
                                      setTotalProjectedWRRushAttempts(
                                        tempTotalProjectedWRRushAttempts
                                      );
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      wr2Data.name = topLeveLTeam.wr2.name;
                                      topLeveLTeam.wr2.rushAttempts =
                                        +event.target.value;
                                      wr2Data.rushAttempts =
                                        +event.target.value;
                                      setwr2RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setwr2RushAttempts("");
                                      }
                                      tempTotalProjectedWRRushAttempts =
                                        +event.target.value;

                                      if (wr1RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts;
                                      }

                                      if (wr3RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr3RushAttempts;
                                      }

                                      if (wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr4RushAttempts;
                                      }

                                      if (wr1RushAttempts && wr3RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr3RushAttempts;
                                      }

                                      if (wr1RushAttempts && wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr4RushAttempts;
                                      }
                                      if (wr3RushAttempts && wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr3RushAttempts +
                                          +wr4RushAttempts;
                                      }

                                      if (
                                        wr1RushAttempts &&
                                        wr3RushAttempts &&
                                        wr4RushAttempts
                                      ) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr3RushAttempts +
                                          +wr4RushAttempts;
                                      }
                                      setTotalProjectedWRRushAttempts(
                                        tempTotalProjectedWRRushAttempts
                                      );
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      wr3Data.name = topLeveLTeam.wr3.name;

                                      topLeveLTeam.wr3.rushAttempts =
                                        +event.target.value;
                                      wr3Data.rushAttempts =
                                        +event.target.value;
                                      setwr3RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setwr3RushAttempts("");
                                      }
                                      tempTotalProjectedWRRushAttempts =
                                        +event.target.value;

                                      if (wr1RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts;
                                      }

                                      if (wr2RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr2RushAttempts;
                                      }

                                      if (wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr4RushAttempts;
                                      }

                                      if (wr1RushAttempts && wr2RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr2RushAttempts;
                                      }

                                      if (wr1RushAttempts && wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr4RushAttempts;
                                      }
                                      if (wr2RushAttempts && wr4RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr3RushAttempts +
                                          +wr4RushAttempts;
                                      }

                                      if (
                                        wr1RushAttempts &&
                                        wr2RushAttempts &&
                                        wr4RushAttempts
                                      ) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr2RushAttempts +
                                          +wr4RushAttempts;
                                      }
                                      setTotalProjectedWRRushAttempts(
                                        tempTotalProjectedWRRushAttempts
                                      );
                                    }
                                    if (topLeveLTeam.wr4.name === player) {
                                      wr4Data.name = topLeveLTeam.wr4.name;

                                      topLeveLTeam.wr4.rushAttempts =
                                        +event.target.value;
                                      wr4Data.rushAttempts =
                                        +event.target.value;
                                      setwr4RushAttempts(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setwr4RushAttempts("");
                                      }
                                      tempTotalProjectedWRRushAttempts =
                                        +event.target.value;

                                      if (wr1RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts;
                                      }

                                      if (wr2RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr2RushAttempts;
                                      }

                                      if (wr3RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr3RushAttempts;
                                      }

                                      if (wr1RushAttempts && wr2RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr2RushAttempts;
                                      }

                                      if (wr1RushAttempts && wr3RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr3RushAttempts;
                                      }
                                      if (wr2RushAttempts && wr3RushAttempts) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr3RushAttempts +
                                          +wr3RushAttempts;
                                      }

                                      if (
                                        wr1RushAttempts &&
                                        wr2RushAttempts &&
                                        wr3RushAttempts
                                      ) {
                                        tempTotalProjectedWRRushAttempts =
                                          +event.target.value +
                                          +wr1RushAttempts +
                                          +wr2RushAttempts +
                                          +wr3RushAttempts;
                                      }
                                      setTotalProjectedWRRushAttempts(
                                        tempTotalProjectedWRRushAttempts
                                      );
                                    }
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="games">Yards/Carry</label>

                                <input
                                  id="games"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1YardsPerCarry
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2YardsPerCarry
                                      : topLeveLTeam.qb3.name === player
                                      ? qb3YardsPerCarry
                                      : topLeveLTeam.rb1.name === player
                                      ? rb1YardsPerCarry
                                      : topLeveLTeam.rb2.name === player
                                      ? rb2YardsPerCarry
                                      : topLeveLTeam.rb3.name === player
                                      ? rb3YardsPerCarry
                                      : topLeveLTeam.wr1.name === player
                                      ? wr1YardsPerCarry
                                      : topLeveLTeam.wr2.name === player
                                      ? wr2YardsPerCarry
                                      : topLeveLTeam.wr3.name === player
                                      ? wr3YardsPerCarry
                                      : wr4YardsPerCarry
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.YPCarry =
                                        +event.target.value;

                                      qb1Data.YPCarry = +event.target.value;
                                      setQb1YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb1YardsPerCarry("");
                                      }
                                      qb1Data.RushingYards = +(
                                        +event.target.value * qb1RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.qb1.RushingYards = +(
                                        +event.target.value * qb1RushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.YPCarry =
                                        +event.target.value;
                                      qb2Data.YPCarry = +event.target.value;
                                      setQb2YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb2YardsPerCarry("");
                                      }
                                      qb2Data.RushingYards = +(
                                        +event.target.value * qb2RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.qb2.RushingYards = +(
                                        +event.target.value * qb2RushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.YPCarry =
                                        +event.target.value;
                                      qb3Data.YPCarry = +event.target.value;
                                      setQb3YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb3YardsPerCarry("");
                                      }
                                      qb3Data.RushingYards = +(
                                        +event.target.value * qb3RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.qb3.RushingYards = +(
                                        +event.target.value * qb3RushAttempts
                                      ).toFixed(0);
                                    }

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.YPCarry =
                                        +event.target.value;

                                      rb1Data.YPCarry = +event.target.value;
                                      setRb1YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb1YardsPerCarry("");
                                      }
                                      rb1Data.RushingYards = +(
                                        +event.target.value * rb1RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.rb1.RushingYards = +(
                                        +event.target.value * rb1RushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.YPCarry =
                                        +event.target.value;

                                      rb2Data.YPCarry = +event.target.value;
                                      setRb2YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb2YardsPerCarry("");
                                      }
                                      rb2Data.RushingYards = +(
                                        +event.target.value * rb2RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.rb2.RushingYards = +(
                                        +event.target.value * rb2RushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.YPCarry =
                                        +event.target.value;

                                      rb3Data.YPCarry = +event.target.value;
                                      setRb3YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb3YardsPerCarry("");
                                      }
                                      rb3Data.RushingYards = +(
                                        +event.target.value * rb3RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.rb3.RushingYards = +(
                                        +event.target.value * rb3rushAttempts
                                      ).toFixed(0);
                                    }

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.YPCarry =
                                        +event.target.value;

                                      wr1Data.YPCarry = +event.target.value;
                                      setWr1YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr1YardsPerCarry("");
                                      }
                                      wr1Data.RushingYards = +(
                                        +event.target.value * wr1RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.wr1.RushingYards = +(
                                        +event.target.value * wr1RushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.YPCarry =
                                        +event.target.value;
                                      wr2Data.YPCarry = +event.target.value;
                                      setWr2YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr2YardsPerCarry("");
                                      }
                                      wr2Data.RushingYards = +(
                                        +event.target.value * wr2RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.wr2.RushingYards = +(
                                        +event.target.value * wr2RushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.YPCarry =
                                        +event.target.value;
                                      wr3Data.YPCarry = +event.target.value;
                                      setWr3YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr3YardsPerCarry("");
                                      }
                                      wr3Data.RushingYards = +(
                                        +event.target.value * wr3RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.wr3.RushingYards = +(
                                        +event.target.value * wr3RushAttempts
                                      ).toFixed(0);
                                    }
                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.YPCarry =
                                        +event.target.value;
                                      wr4Data.YPCarry = +event.target.value;
                                      setWr4YardsPerCarry(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr4YardsPerCarry("");
                                      }
                                      wr4Data.RushingYards = +(
                                        +event.target.value * wr4RushAttempts
                                      ).toFixed(0);
                                      topLeveLTeam.wr4.RushingYards = +(
                                        +event.target.value * wr4RushAttempts
                                      ).toFixed(0);
                                    }
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="touchdowns">Touchdowns</label>

                                <input
                                  id="touchdowns"
                                  value={
                                    topLeveLTeam.qb1.name === player
                                      ? qb1RushTDs
                                      : topLeveLTeam.qb2.name === player
                                      ? qb2RushTDs
                                      : topLeveLTeam.qb3.name === player
                                      ? qb3RushTDs
                                      : topLeveLTeam.rb1.name === player
                                      ? rb1RushTDs
                                      : topLeveLTeam.rb2.name === player
                                      ? rb2RushTDs
                                      : topLeveLTeam.rb3.name === player
                                      ? rb3RushTDs
                                      : topLeveLTeam.wr1.name === player
                                      ? wr1RushTDs
                                      : topLeveLTeam.wr2.name === player
                                      ? wr2RushTDs
                                      : topLeveLTeam.wr3.name === player
                                      ? wr3RushTDs
                                      : wr4RushTDs
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (topLeveLTeam.qb1.name === player) {
                                      topLeveLTeam.qb1.TDs =
                                        +event.target.value;

                                      qb1Data.TDs = +event.target.value;
                                      setQb1RushTDs(+event.target.value);

                                      if (+event.target.value === 0) {
                                        setQb1RushTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.qb2.name === player) {
                                      topLeveLTeam.qb2.TDs =
                                        +event.target.value;
                                      qb2Data.TDs = +event.target.value;
                                      setQb2RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb2RushTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.qb3.name === player) {
                                      topLeveLTeam.qb3.TDs =
                                        +event.target.value;
                                      qb3Data.TDs = +event.target.value;
                                      setQb3RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setQb3RushTDs("");
                                      }
                                    }

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.TDs =
                                        +event.target.value;

                                      rb1Data.TDs = +event.target.value;
                                      setRb1RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb1RushTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.TDs =
                                        +event.target.value;

                                      rb2Data.TDs = +event.target.value;
                                      setRb2RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb2RushTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.TDs =
                                        +event.target.value;

                                      rb3Data.TDs = +event.target.value;
                                      setRb3RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb3RushTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.TDs =
                                        +event.target.value;

                                      wr1Data.TDs = +event.target.value;
                                      setWr1RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr1RushTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.TDs =
                                        +event.target.value;
                                      wr2Data.TDs = +event.target.value;
                                      setWr2RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr2RushTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.TDs =
                                        +event.target.value;
                                      wr3Data.TDs = +event.target.value;
                                      setWr3RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr3RushTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.TDs =
                                        +event.target.value;
                                      wr4Data.TDs = +event.target.value;
                                      setWr4RushTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr3RushTDs("");
                                      }
                                    }

                                    topLeveLTeam.qb1.fantasyPoints = +(
                                      +(qb1Data.passYrds * 0.04) +
                                      +(qb1Data.passingTDs * 6) -
                                      +(qb1Data.INTs * 2) +
                                      +(qb1Data.RushingYards * 0.1) +
                                      +(qb1Data.TDs * 6)
                                    ).toFixed(1);
                                    topLeveLTeam.qb2.fantasyPoints = +(
                                      +(qb2Data.passYrds * 0.04) +
                                      +(qb2Data.passingTDs * 6) -
                                      +(qb2Data.INTs * 2) +
                                      +qb2Data.RushingYards * 0.1 +
                                      +(qb2Data.TDs * 6)
                                    ).toFixed(1);
                                    topLeveLTeam.qb3.fantasyPoints = +(
                                      +(qb3Data.passYrds * 0.04) +
                                      +(qb3Data.passingTDs * 6) -
                                      +(qb3Data.INTs * 2) +
                                      +qb3Data.RushingYards * 0.1 +
                                      +(qb3Data.TDs * 6)
                                    ).toFixed(1);

                                    // console.log(qb1Data.fantasyPoints);
                                    // console.log(topLeveLTeam);
                                    // console.log(topLeveLTeam.qb1);
                                    // console.log(topLeveLTeam.qb2);
                                  }}
                                />
                              </form>
                            </div>
                          );
                        }
                        // }
                      }
                    )}
                  </div>
                )}
                <div className={styles.saveAndClearBTNsWrapper}>
                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        saveUsersProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Save Rushing Projections
                    </button>
                  </div>

                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        clearUsersRushingProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Clear Saved Rushing Projections
                    </button>
                  </div>
                </div>
                <RushingTable
                  qb1Data={topLeveLTeam.qb1}
                  qb2Data={topLeveLTeam.qb2}
                  qb3Data={topLeveLTeam.qb3}
                  rb1Data={topLeveLTeam.rb1}
                  rb2Data={topLeveLTeam.rb2}
                  rb3Data={topLeveLTeam.rb3}
                  wr1Data={topLeveLTeam.wr1}
                  wr2Data={topLeveLTeam.wr2}
                  wr3Data={topLeveLTeam.wr3}
                  wr4Data={topLeveLTeam.wr4}
                />
                <div className={styles.qbSectionTitle}> Recieving</div>
                <div className={styles.amountsLeftToDistributeLabel}>
                  Amounts Left to Distribute
                </div>
                <div className={styles.howMuchIsLeftToDistributeBarWrapper}>
                  <div
                    className={styles.howMuchIsLeftIndividualSectionsWrapper}
                  >
                    <div>Target share</div>
                    {teamTotalTargetShare > 100 ? (
                      <div className={styles.limitExceeded}>
                        {100 - teamTotalTargetShare}
                        <div>Limit Exceeded!</div>
                      </div>
                    ) : (
                      <div>{100 - teamTotalTargetShare}</div>
                    )}

                    <div>Receptions</div>
                    {+teamTotalCompletions - +totalProjectedReceptions < 0 ? (
                      <div className={styles.limitExceeded}>
                        {+teamTotalCompletions - +totalProjectedReceptions}
                        <div>Limit Exceeded!</div>
                      </div>
                    ) : (
                      <div>
                        {+teamTotalCompletions - +totalProjectedReceptions}
                      </div>
                    )}

                    <div>Recieving Yards</div>
                    {+teamTotalPassingYards - +totalRecievingYards < 0 ? (
                      <div className={styles.limitExceeded}>
                        {+teamTotalPassingYards - +totalRecievingYards}
                        <div>Limit Exceeded!</div>
                      </div>
                    ) : (
                      <div>{+teamTotalPassingYards - +totalRecievingYards}</div>
                    )}
                  </div>
                </div>
                {selectedTeamsUserSelectedPlayersToProjectArray && (
                  <div className={styles.sectionWrapper}>
                    {/* {dataTest.allPlayerData.map((player) => { */}
                    {selectedTeamsUserSelectedPlayersToProjectArray.map(
                      (player) => {
                        // if (player.team === team) {
                        if (
                          player === teamRB1 ||
                          player === teamRB2 ||
                          player === teamRB3 ||
                          player === teamWR1 ||
                          player === teamWR2 ||
                          player === teamWR3 ||
                          player === teamWR4 ||
                          player === teamTE1 ||
                          player === teamTE2
                        ) {
                          return (
                            <div
                              key={`${player}-${player.myValue}}`}
                              className={styles.teamsQBsWrapper}
                            >
                              {" "}
                              <div className={styles.playerNameLabel}>
                                {player}
                              </div>
                              {/* <form
                            onSubmit={(event) => {
                              event.preventDefault();

                              // Do something with `name` here
                            }}
                          >
                            <label htmlFor="games">Games Played</label>

                            <input
                              id="games"
                              value={
                                topLeveLTeam.rb1.name === player.name
                                  ? topLeveLTeam.rb1.gamesPlayed
                                  : topLeveLTeam.rb2.name === player.name
                                  ? topLeveLTeam.rb2.gamesPlayed
                                  : topLeveLTeam.rb3.name === player.name
                                  ? topLeveLTeam.rb3gamesPlayed
                                  : topLeveLTeam.wr1.name === player.name
                                  ? topLeveLTeam.wr1.gamesPlayed
                                  : topLeveLTeam.wr2.name === player.name
                                  ? topLeveLTeam.wr2.gamesPlayed
                                  : topLeveLTeam.wr3.name === player.name
                                  ? topLeveLTeam.wr3.gamesPlayed
                                  : topLeveLTeam.wr4.name === player.name
                                  ? topLeveLTeam.wr4.gamesPlayed
                                  : topLeveLTeam.te1 &&
                                    topLeveLTeam.te1.name === player.name
                                  ? topLeveLTeam.te1.gamesPlayed
                                  : topLeveLTeam.te2 &&
                                    topLeveLTeam.te2.gamesPlayed
                              }
                              className={styles.selectedTeamsPlayerInput}
                              type="number"
                              onChange={(event) => {
                                // RB

                                if (topLeveLTeam.rb1.name === player.name) {
                                  topLeveLTeam.rb1.gamesPlayed =
                                    +event.target.value;
                                  rb1Data.name = topLeveLTeam.rb1.name;
                                  rb1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.rb2.name === player.name) {
                                  topLeveLTeam.rb2.gamesPlayed =
                                    +event.target.value;
                                  rb2Data.name = topLeveLTeam.rb2.name;
                                  rb2Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.rb3.name === player.name) {
                                  topLeveLTeam.rb3.gamesPlayed =
                                    +event.target.value;
                                  rb3Data.name = topLeveLTeam.rb3.name;
                                  rb3Data.gamesPlayed = +event.target.value;
                                }

                                // WR

                                if (topLeveLTeam.wr1.name === player.name) {
                                  topLeveLTeam.wr1.gamesPlayed =
                                    +event.target.value;
                                  wr1Data.name = topLeveLTeam.wr1.name;
                                  wr1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.wr2.name === player.name) {
                                  topLeveLTeam.wr2.gamesPlayed =
                                    +event.target.value;
                                  wr2Data.name = topLeveLTeam.wr2.name;
                                  wr2Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.wr3.name === player.name) {
                                  topLeveLTeam.wr3.gamesPlayed =
                                    +event.target.value;
                                  wr3Data.name = topLeveLTeam.wr3.name;
                                  wr3Data.gamesPlayed = +event.target.value;
                                }

                                if (topLeveLTeam.wr4.name === player.name) {
                                  topLeveLTeam.wr4.gamesPlayed =
                                    +event.target.value;
                                  wr4Data.name = topLeveLTeam.wr4.name;
                                  wr4Data.gamesPlayed = +event.target.value;
                                }

                                // TE

                                if (topLeveLTeam.te1.name === player.name) {
                                  topLeveLTeam.te1.gamesPlayed =
                                    +event.target.value;
                                  te1Data.name = topLeveLTeam.te1.name;
                                  te1Data.gamesPlayed = +event.target.value;
                                }
                                if (topLeveLTeam.te2) {
                                  if (topLeveLTeam.te2.name === player.name) {
                                    topLeveLTeam.te2.gamesPlayed =
                                      +event.target.value;
                                    te2Data.name = topLeveLTeam.te2.name;
                                    te2Data.gamesPlayed = +event.target.value;
                                  }
                                }
                              }}
                            />
                          </form>{" "} */}
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="targetShare">
                                  Targ Share %
                                </label>

                                <input
                                  id="targetShare"
                                  value={
                                    topLeveLTeam.rb1.name === player
                                      ? rb1TargetShare
                                      : topLeveLTeam.rb2.name === player
                                      ? rb2TargetShare
                                      : topLeveLTeam.rb3.name === player
                                      ? rb3TargetShare
                                      : topLeveLTeam.wr1.name === player
                                      ? wr1TargetShare
                                      : topLeveLTeam.wr2.name === player
                                      ? wr2TargetShare
                                      : topLeveLTeam.wr3.name === player
                                      ? wr3TargetShare
                                      : topLeveLTeam.wr4.name === player
                                      ? wr4TargetShare
                                      : topLeveLTeam.te1.name === player
                                      ? te1TargetShare
                                      : te2TargetShare
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  maximum={35}
                                  onChange={(event) => {
                                    //
                                    if (
                                      +event.target.value > -1 &&
                                      +event.target.value < 36
                                    ) {
                                      let currentPlayerTryingToInputTargetShare =
                                        +event.target.value;

                                      // RB

                                      if (topLeveLTeam.rb1.name === player) {
                                        rb1Data.name = topLeveLTeam.rb1.name;
                                        topLeveLTeam.rb1.targetShare =
                                          +event.target.value;

                                        rb1Data.targetShare =
                                          +event.target.value;
                                        setRb1TargetShare(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setRb1TargetShare("");
                                        }

                                        rb1Data.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(rb1Data.targetShare / 100)
                                        ).toFixed(0);
                                        setRb1Targets(rb1Data.targets);
                                        topLeveLTeam.rb1.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(+topLeveLTeam.rb1.targetShare / 100)
                                        ).toFixed(0);
                                      }
                                      if (topLeveLTeam.rb2.name === player) {
                                        rb2Data.name = topLeveLTeam.rb2.name;
                                        topLeveLTeam.rb2.targetShare =
                                          +event.target.value;

                                        rb2Data.targetShare =
                                          +event.target.value;
                                        setRb2TargetShare(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setRb2TargetShare("");
                                        }
                                        rb2Data.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(rb2Data.targetShare / 100)
                                        ).toFixed(0);
                                        setRb2Targets(rb2Data.targets);
                                        topLeveLTeam.rb2.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(rb2Data.targetShare / 100)
                                        ).toFixed(0);
                                      }
                                      if (topLeveLTeam.rb3.name === player) {
                                        rb3Data.name = topLeveLTeam.rb3.name;
                                        topLeveLTeam.rb3.targetShare =
                                          +event.target.value;

                                        rb3Data.targetShare =
                                          +event.target.value;
                                        setRb3TargetShare(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setRb3TargetShare("");
                                        }
                                        rb3Data.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(rb3Data.targetShare / 100)
                                        ).toFixed(0);
                                        setRb3Targets(rb3Data.targets);
                                        topLeveLTeam.rb3.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(rb3Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      // WR

                                      if (topLeveLTeam.wr1.name === player) {
                                        wr1Data.name = topLeveLTeam.wr1.name;
                                        topLeveLTeam.wr1.targetShare =
                                          +event.target.value;

                                        wr1Data.targetShare =
                                          +event.target.value;
                                        setWr1TargetShare(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setWr1TargetShare("");
                                        }
                                        wr1Data.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(wr1Data.targetShare / 100)
                                        ).toFixed(0);
                                        setWr1Targets(wr1Data.targets);
                                        topLeveLTeam.wr1.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(wr1Data.targetShare / 100)
                                        ).toFixed(0);
                                      }
                                      if (topLeveLTeam.wr2.name === player) {
                                        wr2Data.name = topLeveLTeam.wr2.name;
                                        topLeveLTeam.wr2.targetShare =
                                          +event.target.value;

                                        wr2Data.targetShare =
                                          +event.target.value;
                                        setWr2TargetShare(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setWr2TargetShare("");
                                        }
                                        wr2Data.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(wr2Data.targetShare / 100)
                                        ).toFixed(0);
                                        setWr2Targets(wr2Data.targets);
                                        topLeveLTeam.wr2.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(wr2Data.targetShare / 100)
                                        ).toFixed(0);
                                      }
                                      if (topLeveLTeam.wr3.name === player) {
                                        wr3Data.name = topLeveLTeam.wr3.name;
                                        topLeveLTeam.wr3.targetShare =
                                          +event.target.value;

                                        wr3Data.targetShare =
                                          +event.target.value;
                                        setWr3TargetShare(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setWr3TargetShare("");
                                        }
                                        wr3Data.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(wr3Data.targetShare / 100)
                                        ).toFixed(0);
                                        setWr3Targets(wr3Data.targets);
                                        topLeveLTeam.wr3.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(wr3Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      if (topLeveLTeam.wr4.name === player) {
                                        wr4Data.name = topLeveLTeam.wr4.name;
                                        topLeveLTeam.wr4.targetShare =
                                          +event.target.value;

                                        wr4Data.targetShare =
                                          +event.target.value;
                                        setWr4TargetShare(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setWr4TargetShare("");
                                        }
                                        wr4Data.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(wr4Data.targetShare / 100)
                                        ).toFixed(0);
                                        setWr4Targets(wr4Data.targets);
                                        topLeveLTeam.wr4.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(wr4Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      // TE

                                      if (topLeveLTeam.te1.name === player) {
                                        te1Data.name = topLeveLTeam.te1.name;
                                        topLeveLTeam.te1.targetShare =
                                          +event.target.value;

                                        te1Data.targetShare =
                                          +event.target.value;
                                        setTe1TargetShare(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setTe1TargetShare("");
                                        }
                                        te1Data.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(te1Data.targetShare / 100)
                                        ).toFixed(0);
                                        setTe1Targets(te1Data.targets);
                                        topLeveLTeam.te1.targets = +(
                                          topLeveLTeam.totalPassPlays *
                                          +(te1Data.targetShare / 100)
                                        ).toFixed(0);
                                      }

                                      if (teamTE2) {
                                        if (
                                          topLeveLTeam.te2.name === player.name
                                        ) {
                                          te2Data.name = topLeveLTeam.te2.name;
                                          te2Data.targetShare =
                                            +event.target.value;
                                          setTe2TargetShare(
                                            +event.target.value
                                          );
                                          if (+event.target.value === 0) {
                                            setTe2TargetShare("");
                                          }
                                          te2Data.targets = +(
                                            topLeveLTeam.totalPassPlays *
                                            +(te2Data.targetShare / 100)
                                          ).toFixed(0);
                                          setTe2Targets(te2Data.targets);
                                          topLeveLTeam.te2.targets = +(
                                            topLeveLTeam.totalPassPlays *
                                            +(te2Data.targetShare / 100)
                                          ).toFixed(0);
                                        }
                                      }

                                      // }
                                    }
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="catchPercentage">
                                  Catch Percent
                                </label>

                                <input
                                  id="catchPercentage"
                                  value={
                                    topLeveLTeam.rb1.name === player
                                      ? rb1CatchPercentage
                                      : topLeveLTeam.rb2.name === player
                                      ? rb2CatchPercentage
                                      : topLeveLTeam.rb3.name === player
                                      ? rb3CatchPercentage
                                      : topLeveLTeam.wr1.name === player
                                      ? wr1CatchPercentage
                                      : topLeveLTeam.wr2.name === player
                                      ? wr2CatchPercentage
                                      : topLeveLTeam.wr3.name === player
                                      ? wr3CatchPercentage
                                      : topLeveLTeam.wr4.name === player
                                      ? wr4CatchPercentage
                                      : topLeveLTeam.te1.name === player
                                      ? te1CatchPercentage
                                      : te2CatchPercentage
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    //

                                    // RB

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.catchPercentage =
                                        +event.target.value;

                                      rb1Data.catchPercentage =
                                        +event.target.value;

                                      setRb1CatchPercentage(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setRb1CatchPercentage("");
                                      }

                                      rb1Data.receptions = +(
                                        rb1Targets *
                                        (rb1Data.catchPercentage / 100)
                                      ).toFixed(0);

                                      topLeveLTeam.rb1.receptions = +(
                                        rb1Targets *
                                        (rb1Data.catchPercentage / 100)
                                      ).toFixed(0);

                                      setRb1Receptions(
                                        +(
                                          rb1Targets *
                                          (rb1Data.catchPercentage / 100)
                                        ).toFixed(0)
                                      );
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.catchPercentage =
                                        +event.target.value;

                                      rb2Data.catchPercentage =
                                        +event.target.value;

                                      setRb2CatchPercentage(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setRb2CatchPercentage("");
                                      }

                                      rb2Data.receptions = +(
                                        rb2Targets *
                                        +(rb2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.rb2.receptions = +(
                                        rb2Targets *
                                        +(rb2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      setRb2Receptions(
                                        +(
                                          rb2Targets *
                                          (rb2Data.catchPercentage / 100)
                                        ).toFixed(0)
                                      );
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.catchPercentage =
                                        +event.target.value;

                                      rb3Data.catchPercentage =
                                        +event.target.value;

                                      setRb3CatchPercentage(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setRb3CatchPercentage("");
                                      }

                                      rb3Data.receptions = +(
                                        rb3Targets *
                                        +(rb3Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.rb3.receptions = +(
                                        rb3Targets *
                                        +(rb3Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      setRb3Receptions(
                                        +(
                                          rb3Targets *
                                          (rb3Data.catchPercentage / 100)
                                        ).toFixed(0)
                                      );
                                    }

                                    // WR

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.catchPercentage =
                                        +event.target.value;

                                      wr1Data.catchPercentage =
                                        +event.target.value;

                                      setWr1CatchPercentage(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setWr1CatchPercentage("");
                                      }

                                      wr1Data.receptions = +(
                                        wr1Targets *
                                        +(wr1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.wr1.receptions = +(
                                        wr1Targets *
                                        +(wr1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      setWr1Receptions(
                                        +(
                                          wr1Targets *
                                          (wr1Data.catchPercentage / 100)
                                        ).toFixed(0)
                                      );
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.catchPercentage =
                                        +event.target.value;

                                      wr2Data.catchPercentage =
                                        +event.target.value;

                                      setWr2CatchPercentage(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setWr2CatchPercentage("");
                                      }

                                      wr2Data.receptions = +(
                                        wr2Targets *
                                        +(wr2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.wr2.receptions = +(
                                        wr2Targets *
                                        +(wr2Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      setWr2Receptions(
                                        +(
                                          wr2Targets *
                                          (wr2Data.catchPercentage / 100)
                                        ).toFixed(0)
                                      );
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.catchPercentage =
                                        +event.target.value;

                                      wr3Data.catchPercentage =
                                        +event.target.value;

                                      setWr3CatchPercentage(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setWr3CatchPercentage("");
                                      }

                                      wr3Data.receptions = +(
                                        wr3Targets *
                                        +(wr3Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.wr3.receptions = +(
                                        wr3Targets *
                                        +(wr3Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      setWr3Receptions(
                                        +(
                                          wr3Targets *
                                          (wr3Data.catchPercentage / 100)
                                        ).toFixed(0)
                                      );
                                    }

                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.catchPercentage =
                                        +event.target.value;

                                      wr4Data.catchPercentage =
                                        +event.target.value;

                                      setWr4CatchPercentage(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setWr4CatchPercentage("");
                                      }

                                      wr4Data.receptions = +(
                                        wr4Targets *
                                        +(wr4Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.wr4.receptions = +(
                                        wr4Targets *
                                        +(wr4Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      setWr4Receptions(
                                        +(
                                          wr4Targets *
                                          (wr4Data.catchPercentage / 100)
                                        ).toFixed(0)
                                      );
                                    }

                                    // TE

                                    if (topLeveLTeam.te1.name === player) {
                                      topLeveLTeam.te1.catchPercentage =
                                        +event.target.value;

                                      te1Data.catchPercentage =
                                        +event.target.value;

                                      setTe1CatchPercentage(
                                        +event.target.value
                                      );
                                      if (+event.target.value === 0) {
                                        setTe1CatchPercentage("");
                                      }

                                      te1Data.receptions = +(
                                        te1Targets *
                                        +(te1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      topLeveLTeam.te1.receptions = +(
                                        te1Targets *
                                        +(te1Data.catchPercentage / 100)
                                      ).toFixed(0);
                                      setTe1Receptions(
                                        +(
                                          te1Targets *
                                          (te1Data.catchPercentage / 100)
                                        ).toFixed(0)
                                      );
                                    }

                                    if (teamTE2) {
                                      if (topLeveLTeam.te2.name === player) {
                                        te2Data.catchPercentage =
                                          +event.target.value;

                                        setTe2CatchPercentage(
                                          +event.target.value
                                        );
                                        if (+event.target.value === 0) {
                                          setTe2CatchPercentage("");
                                        }

                                        te2Data.receptions = +(
                                          te2Targets *
                                          +(te2Data.catchPercentage / 100)
                                        ).toFixed(0);
                                        topLeveLTeam.te2.receptions = +(
                                          te2Targets *
                                          +(te2Data.catchPercentage / 100)
                                        ).toFixed(0);
                                        setTe2Receptions(
                                          +(
                                            te2Targets *
                                            (te2Data.catchPercentage / 100)
                                          ).toFixed(0)
                                        );
                                      }
                                    }

                                    // }
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="recievingYards">
                                  Yards/Reception
                                </label>

                                <input
                                  id="recievingYards"
                                  value={
                                    topLeveLTeam.rb1.name === player
                                      ? rb1YPR
                                      : topLeveLTeam.rb2.name === player
                                      ? rb2YPR
                                      : topLeveLTeam.rb3.name === player
                                      ? rb3YPR
                                      : topLeveLTeam.wr1.name === player
                                      ? wr1YPR
                                      : topLeveLTeam.wr2.name === player
                                      ? wr2YPR
                                      : topLeveLTeam.wr3.name === player
                                      ? wr3YPR
                                      : topLeveLTeam.wr4.name === player
                                      ? wr4YPR
                                      : topLeveLTeam.te1.name === player
                                      ? te1YPR
                                      : te2YPR
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    if (!rb1Data.recievingYards) {
                                      rb1Data.recievingYards = 0;
                                    }
                                    if (!rb2Data.recievingYards) {
                                      rb2Data.recievingYards = 0;
                                    }
                                    if (!rb3Data.recievingYards) {
                                      rb3Data.recievingYards = 0;
                                    }
                                    if (!wr1Data.recievingYards) {
                                      wr1Data.recievingYards = 0;
                                    }
                                    if (!wr2Data.recievingYards) {
                                      wr2Data.recievingYards = 0;
                                    }
                                    if (!wr3Data.recievingYards) {
                                      wr3Data.recievingYards = 0;
                                    }
                                    if (!wr4Data.recievingYards) {
                                      wr4Data.recievingYards = 0;
                                    }

                                    if (!te1Data.recievingYards) {
                                      te1Data.recievingYards = 0;
                                    }
                                    if (!te2Data.recievingYards) {
                                      te2Data.recievingYards = 0;
                                    }
                                    //

                                    // RB

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.YPR =
                                        +event.target.value;
                                      setrb1YPR(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setrb1YPR("");
                                      }
                                      rb1Data.YPR = +event.target.value;

                                      let temp =
                                        +event.target.value * rb1Receptions;

                                      rb1Data.recievingYards = Math.round(
                                        temp,
                                        1
                                      );

                                      topLeveLTeam.rb1.recievingYards =
                                        Math.round(temp, 1);

                                      setRb1RecievingYards(Math.round(temp, 1));
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.YPR =
                                        +event.target.value;
                                      setrb2YPR(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setrb2YPR("");
                                      }
                                      rb2Data.YPR = +event.target.value;

                                      let temp =
                                        +event.target.value * rb2Receptions;

                                      rb2Data.recievingYards = Math.round(
                                        temp,
                                        1
                                      );

                                      topLeveLTeam.rb2.recievingYards =
                                        Math.round(temp, 1);

                                      setRb2RecievingYards(Math.round(temp, 1));
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.YPR =
                                        +event.target.value;
                                      setrb3YPR(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setrb3YPR("");
                                      }
                                      rb3Data.YPR = +event.target.value;

                                      let temp =
                                        +event.target.value * rb3Receptions;

                                      rb3Data.recievingYards = Math.round(
                                        temp,
                                        1
                                      );

                                      topLeveLTeam.rb3.recievingYards =
                                        Math.round(temp, 1);

                                      setRb3RecievingYards(Math.round(temp, 1));
                                    }

                                    // WR

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.YPR =
                                        +event.target.value;
                                      setwr1YPR(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setwr1YPR("");
                                      }
                                      wr1Data.YPR = +event.target.value;

                                      let temp =
                                        +event.target.value * wr1Receptions;

                                      wr1Data.recievingYards = Math.round(
                                        temp,
                                        1
                                      );

                                      topLeveLTeam.wr1.recievingYards =
                                        Math.round(temp, 1);

                                      setWr1RecievingYards(Math.round(temp, 1));
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.YPR =
                                        +event.target.value;
                                      setwr2YPR(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setwr2YPR("");
                                      }
                                      wr2Data.YPR = +event.target.value;

                                      let temp =
                                        +event.target.value * wr2Receptions;

                                      wr2Data.recievingYards = Math.round(
                                        temp,
                                        1
                                      );

                                      topLeveLTeam.wr2.recievingYards =
                                        Math.round(temp, 1);

                                      setWr2RecievingYards(Math.round(temp, 1));
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.YPR =
                                        +event.target.value;
                                      setwr3YPR(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setwr3YPR("");
                                      }
                                      wr3Data.YPR = +event.target.value;

                                      let temp =
                                        +event.target.value * wr3Receptions;

                                      wr3Data.recievingYards = Math.round(
                                        temp,
                                        1
                                      );

                                      topLeveLTeam.wr3.recievingYards =
                                        Math.round(temp, 1);

                                      setWr3RecievingYards(Math.round(temp, 1));
                                    }

                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.YPR =
                                        +event.target.value;
                                      setwr4YPR(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setwr4YPR("");
                                      }
                                      wr4Data.YPR = +event.target.value;

                                      let temp =
                                        +event.target.value * wr4Receptions;

                                      wr4Data.recievingYards = Math.round(
                                        temp,
                                        1
                                      );

                                      topLeveLTeam.wr4.recievingYards =
                                        Math.round(temp, 1);

                                      setWr4RecievingYards(Math.round(temp, 1));
                                    }

                                    // TE

                                    if (topLeveLTeam.te1.name === player) {
                                      topLeveLTeam.te1.YPR =
                                        +event.target.value;
                                      setTe1YPR(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setTe1YPR("");
                                      }
                                      te1Data.YPR = +event.target.value;

                                      let temp =
                                        +event.target.value * te1Receptions;

                                      te1Data.recievingYards = Math.round(
                                        temp,
                                        1
                                      );

                                      topLeveLTeam.te1.recievingYards =
                                        Math.round(temp, 1);

                                      setTe1RecievingYards(Math.round(temp, 1));
                                    }

                                    if (teamTE2) {
                                      te2Data.YPR = +event.target.value;
                                      if (topLeveLTeam.te2.name === player) {
                                        topLeveLTeam.te2.YPR =
                                          +event.target.value;
                                        setTe2YPR(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setTe2YPR("");
                                        }

                                        let temp =
                                          +event.target.value * te2Receptions;

                                        te2Data.recievingYards = Math.round(
                                          temp,
                                          1
                                        );

                                        topLeveLTeam.te2.recievingYards =
                                          Math.round(temp, 1);

                                        setTe2RecievingYards(
                                          Math.round(temp, 1)
                                        );
                                      }
                                    }

                                    let teamTotalProjectedRecivingYards =
                                      +rb1Data.recievingYards +
                                      +rb2Data.recievingYards +
                                      +rb3Data.recievingYards +
                                      +wr1Data.recievingYards +
                                      +wr2Data.recievingYards +
                                      +wr3Data.recievingYards +
                                      +wr4Data.recievingYards +
                                      +te1Data.recievingYards;

                                    if (teamTE2) {
                                      teamTotalProjectedRecivingYards =
                                        +rb1Data.recievingYards +
                                        +rb2Data.recievingYards +
                                        +rb3Data.recievingYards +
                                        +wr1Data.recievingYards +
                                        +wr2Data.recievingYards +
                                        +wr3Data.recievingYards +
                                        +wr4Data.recievingYards +
                                        +te1Data.recievingYards +
                                        +te2Data.recievingYards;
                                    }
                                    // console.log(teamTotalProjectedRecivingYards);

                                    if (
                                      +teamTotalProjectedRecivingYards >
                                      topLeveLTeam.totalTeamProjectedPassingYards
                                    ) {
                                      alert(
                                        `Team total projected recieving yards should not exceed projected team passing yards of ${topLeveLTeam.totalTeamProjectedPassingYards}`
                                      );
                                    }

                                    // }
                                  }}
                                />
                              </form>
                              <form
                                onSubmit={(event) => {
                                  event.preventDefault();

                                  // Do something with `name` here
                                }}
                                className={styles.playerInputForm}
                              >
                                <label htmlFor="recievingTDs">Touchdowns</label>

                                <input
                                  id="recievingTDs"
                                  value={
                                    topLeveLTeam.rb1.name === player
                                      ? rb1RecievingTDs
                                      : topLeveLTeam.rb2.name === player
                                      ? rb2RecievingTDs
                                      : topLeveLTeam.rb3.name === player
                                      ? rb3RecievingTDs
                                      : topLeveLTeam.wr1.name === player
                                      ? wr1RecievingTDs
                                      : topLeveLTeam.wr2.name === player
                                      ? wr2RecievingTDs
                                      : topLeveLTeam.wr3.name === player
                                      ? wr3RecievingTDs
                                      : topLeveLTeam.wr4.name === player
                                      ? wr4RecievingTDs
                                      : topLeveLTeam.te1.name === player
                                      ? te1RecievingTDs
                                      : te2RecievingTDs
                                  }
                                  className={styles.selectedTeamsPlayerInput}
                                  type="number"
                                  onChange={(event) => {
                                    //

                                    // RB

                                    if (topLeveLTeam.rb1.name === player) {
                                      topLeveLTeam.rb1.recievingTDs =
                                        +event.target.value;

                                      rb1Data.recievingTDs =
                                        +event.target.value;

                                      setRb1RecievingTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb1RecievingTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.rb2.name === player) {
                                      topLeveLTeam.rb2.recievingTDs =
                                        +event.target.value;

                                      rb2Data.recievingTDs =
                                        +event.target.value;

                                      setRb2RecievingTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb2RecievingTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.rb3.name === player) {
                                      topLeveLTeam.rb3.recievingTDs =
                                        +event.target.value;

                                      rb3Data.recievingTDs =
                                        +event.target.value;

                                      setRb3RecievingTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setRb3RecievingTDs("");
                                      }
                                    }

                                    // WR

                                    if (topLeveLTeam.wr1.name === player) {
                                      topLeveLTeam.wr1.recievingTDs =
                                        +event.target.value;

                                      wr1Data.recievingTDs =
                                        +event.target.value;

                                      setWr1RecievingTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr1RecievingTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.wr2.name === player) {
                                      topLeveLTeam.wr2.recievingTDs =
                                        +event.target.value;

                                      wr2Data.recievingTDs =
                                        +event.target.value;

                                      setWr2RecievingTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr2RecievingTDs("");
                                      }
                                    }
                                    if (topLeveLTeam.wr3.name === player) {
                                      topLeveLTeam.wr3.recievingTDs =
                                        +event.target.value;

                                      wr3Data.recievingTDs =
                                        +event.target.value;

                                      setWr3RecievingTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr3RecievingTDs("");
                                      }
                                    }

                                    if (topLeveLTeam.wr4.name === player) {
                                      topLeveLTeam.wr4.recievingTDs =
                                        +event.target.value;

                                      wr4Data.recievingTDs =
                                        +event.target.value;

                                      setWr4RecievingTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setWr4RecievingTDs("");
                                      }
                                    }

                                    // TE

                                    if (topLeveLTeam.te1.name === player) {
                                      topLeveLTeam.te1.recievingTDs =
                                        +event.target.value;

                                      te1Data.recievingTDs =
                                        +event.target.value;
                                      setTe1RecievingTDs(+event.target.value);
                                      if (+event.target.value === 0) {
                                        setTe1RecievingTDs("");
                                      }
                                    }

                                    if (teamTE2) {
                                      if (topLeveLTeam.te2.name === player) {
                                        te2Data.recievingTDs =
                                          +event.target.value;

                                        setTe2RecievingTDs(+event.target.value);
                                        if (+event.target.value === 0) {
                                          setTe2RecievingTDs("");
                                        }
                                      }
                                    }

                                    // }
                                    topLeveLTeam.rb1.fantasyPoints = +(
                                      +(rb1Data.RushingYards * 0.1) +
                                      +(rb1Data.TDs * 6) +
                                      +(rb1Data.receptions * 1) +
                                      +(rb1Data.recievingYards * 0.1) +
                                      +(rb1Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.rb2.fantasyPoints = +(
                                      +(rb2Data.RushingYards * 0.1) +
                                      +(rb2Data.TDs * 6) +
                                      +(rb2Data.receptions * 1) +
                                      +(rb2Data.recievingYards * 0.1) +
                                      +(rb2Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.rb3.fantasyPoints = +(
                                      +(rb3Data.RushingYards * 0.1) +
                                      +(rb3Data.TDs * 6) +
                                      +(rb3Data.receptions * 1) +
                                      +(rb3Data.recievingYards * 0.1) +
                                      +(rb3Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.wr1.fantasyPoints = +(
                                      +(wr1Data.RushingYards * 0.1) +
                                      +(wr1Data.TDs * 6) +
                                      +(wr1Data.receptions * 1) +
                                      +(wr1Data.recievingYards * 0.1) +
                                      +(wr1Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.wr1.fantasyPoints = +(
                                      +(wr2Data.RushingYards * 0.1) +
                                      +(wr2Data.TDs * 6) +
                                      +(wr2Data.receptions * 1) +
                                      +(wr2Data.recievingYards * 0.1) +
                                      +(wr2Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.wr1.fantasyPoints = +(
                                      +(wr3Data.RushingYards * 0.1) +
                                      +(wr3Data.TDs * 6) +
                                      +(wr3Data.receptions * 1) +
                                      +(wr3Data.recievingYards * 0.1) +
                                      +(wr3Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.wr1.fantasyPoints = +(
                                      +(wr4Data.RushingYards * 0.1) +
                                      +(wr4Data.TDs * 6) +
                                      +(wr4Data.receptions * 1) +
                                      +(wr4Data.recievingYards * 0.1) +
                                      +(wr4Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    topLeveLTeam.te1.fantasyPoints = +(
                                      +(te1Data.receptions * 1) +
                                      +(te1Data.recievingYards * 0.1) +
                                      +(te1Data.recievingTDs * 6)
                                    ).toFixed(1);

                                    if (teamTE2) {
                                      topLeveLTeam.te2.fantasyPoints = +(
                                        +(te2Data.receptions * 1) +
                                        +(te2Data.recievingYards * 0.1) +
                                        +(te2Data.recievingTDs * 6)
                                      ).toFixed(1);
                                    }
                                  }}
                                />
                              </form>
                            </div>
                          );
                        }
                      }
                    )}
                  </div>
                )}
                <div className={styles.saveAndClearBTNsWrapper}>
                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        saveUsersProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Save Recieving Projections
                    </button>
                  </div>

                  <div className={styles.saveBTNWrapper}>
                    <button
                      onClick={() =>
                        clearUsersRecievingProjectionData(
                          topLeveLTeam,
                          topLeveLTeam.teamName
                        )
                      }
                      className={styles.saveBTNs}
                    >
                      Clear Saved Recieving Projections
                    </button>
                  </div>
                </div>
                <RecievingTable
                  rb1Data={topLeveLTeam.rb1}
                  rb2Data={topLeveLTeam.rb2}
                  rb3Data={topLeveLTeam.rb3}
                  wr1Data={topLeveLTeam.wr1}
                  wr2Data={topLeveLTeam.wr2}
                  wr3Data={topLeveLTeam.wr3}
                  wr4Data={topLeveLTeam.wr4}
                  te1Data={topLeveLTeam.te1}
                  te2Data={topLeveLTeam.te2}
                />
                <TeamLevelFantasyTable
                  qb1Data={topLeveLTeam.qb1}
                  qb2Data={topLeveLTeam.qb2}
                  qb3Data={topLeveLTeam.qb3}
                  rb1Data={topLeveLTeam.rb1}
                  rb2Data={topLeveLTeam.rb2}
                  rb3Data={topLeveLTeam.rb3}
                  wr1Data={topLeveLTeam.wr1}
                  wr2Data={topLeveLTeam.wr2}
                  wr3Data={topLeveLTeam.wr3}
                  wr4Data={topLeveLTeam.wr4}
                  te1Data={topLeveLTeam.te1}
                  te2Data={topLeveLTeam.te2}
                />
                {/* <button onClick={logTeam}>log team data</button> */}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
