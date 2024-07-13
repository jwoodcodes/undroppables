"use client";
import React from "react";
import { useActionState } from "react";
import styles from "@/app/toolkit/projectionBuilder/projectionsBuilder.module.css";
import Link from "next/link";
import allTeamsList from "./data/allTeamsList";

import SelectPlayersToProject from "./projectionsSections/selectPlayersToProject/SelectPlayersToProject";

import teamPreviousSeasonPaceAndRatios from "./data/teamPreviousSeasonPaceAndRatios";
import TeamTotalPlaysAndSplits from "./projectionsSections/teamTotalPlaysAndSplits/TeamTotalPlaysAndSplits";
import PlayerRushAttempts from "./projectionsSections/playerRushAttempts/PlayerRushAttempts";
import YardsPerCarry from "./projectionsSections/yardsPerCarry/YardsPerCarry";
import RushTDs from "./projectionsSections/rushTDs/RushTDs";
import Targets from "./projectionsSections/targets/Targets";
import CatchPercentage from "./projectionsSections/catchPercentage/CatchPercentage";
import YardsPerReceptionAndRecYards from "./projectionsSections/yardsPerRec/YardsPerRecAndRecYards";
import RecTDs from "./projectionsSections/recTDs/RecTDs";
import PassAttempts from "./projectionsSections/passAttempts/PassAttempts";
import QbCompletions from "./projectionsSections/QbCompletions/QbCompletions";
import PassingYards from "./projectionsSections/passingYards/PassingYards";
import PassTDs from "./projectionsSections/passTDs/PassTDs";
import INTs from "./projectionsSections/INTs/INTs";

import AgTeamTable from "../components/agGridTeamTable/AgTeamTable";

import PassingTable from "./passingTable/PassingTable";
import RushingTable from "./rushingTable/RushingTable";
import RecievingTable from "./recievingTable/RecievingTable";
import TeamLevelFantasyTable from "./teamLevelFantasyTable/teamLevelFantasyTable";

export default function BuildTeamProjections({ dataTest, sleeperData }) {
  //
  //
  //
  //
  ///////////////////////////// data structure notes //////////////////////////////////
  //
  //
  // utilmatly usersAllTeamsList will be the top level data structure. usersAllTeamsList will be an array of objects, one object for each team that will hold all information and projections for that team. the first thing with each team will be to map the sleeper data to arbitratry variables of QB1, QB2, etc. that don't really matter as the user will never see these labels, they will just be used to assign a player (and their name) to some variable that can be used as an assesor to that players object within the team object. as you go through each players object will be upsdated with the data from that section that the user projects AND AT THE END OF EACH SECTION WHEN THE USER HITS THE SUBMIT BUTTON IT UPADATES THE TEAM LEVEL OBEJCT AND PUSHES THE UPDATED TEAM LEVEL OBJECT TO LOCAL STORAGE!!!! IT DOES THIS ON EVERY SUBMIT BUTTON IN EVERY SECTION AS THE USER GOES ALONG!!!!!!!

  //
  //

  //
  //
  ////////// Getting & formatting initial data and mapping data to team on team select ////////////////////
  //
  //
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

  const [team, setTeam] = React.useState("");

  React.useEffect(() => {
    const storedValue = window.localStorage.getItem("usersAllTeamsList");

    setUsersAllTeamsList(storedValue ? JSON.parse(storedValue) : allTeamsList);

    const userSelectedPlayersArrayStoredValue = window.localStorage.getItem(
      `userSelectedPlayersToProjectArray${team}`
    );

    if (userSelectedPlayersArrayStoredValue) {
      setUserSelectedPlayersToProjectArray(
        JSON.parse(userSelectedPlayersArrayStoredValue)
      );
    }

    setIsPlayerRushAttemtpsSectionVisible(false);
    setIsYardsPerRushAttemptSectionVisible(false);
    setIsRushTDsSectionVisible(false);
    setIsTargetsSectionVisble(false);

    // if (storedValue && userSelectedPlayersToProjectArray) {
    //   console.log(userSelectedPlayersToProjectArray);
    // }
  }, [team]);

  //
  //
  //

  //
  ///////////////////////////// state variables ////////////////////////////////////
  //

  const [selectedTeamObject, setSelectedTeamObject] = React.useState({});
  const [
    userSelectedPlayersToProjectArray,
    setUserSelectedPlayersToProjectArray,
  ] = React.useState([]);

  const [isUsersSelectedPlayerArrayReady, setIsUsersSelectedPlayerArrayReady] =
    React.useState(false);

  const [isStoredValue, setIsStoredValue] = React.useState(false);
  const [teamTotalProjectedPlays, setTeamTotalProjectedPlays] =
    React.useState();
  const [totalPassPlays, setTotalPassPlays] = React.useState();
  const [totalRunPlays, setTotalRunPlays] = React.useState();
  const [totalProjectedTeamRushYards, setTotalProjectedTeamRushYards] =
    React.useState(0);
  const [totalProjectedTeamPassingYards, setTotalProjectedTeamPassingYards] =
    React.useState(0);

  const [
    isPlayerRushAttemtpsSectionVisible,
    setIsPlayerRushAttemtpsSectionVisible,
  ] = React.useState(false);
  const [
    isYardsPerRushAttemptSectionVisible,
    setIsYardsPerRushAttemptSectionVisible,
  ] = React.useState(false);
  const [teamTotalReceptions, setTeamTotalReceptions] = React.useState();

  const [isRushTDsSectionVisible, setIsRushTDsSectionVisible] =
    React.useState(false);
  const [isTargetsSectionVisble, setIsTargetsSectionVisble] =
    React.useState(false);
  const [isCatchPercentageSectionVisible, setIsCatchPercentageSectionVisible] =
    React.useState(false);
  const [isYardsPerReceptionVisable, setIsYardsPerReceptionVisable] =
    React.useState(false);
  const [isRecTDsSectionVisible, setIsRecTDsSectionVisible] =
    React.useState(false);
  const [isPassAttemptsSectionVisible, setIsPassAttemptsSectionVisible] =
    React.useState(false);
  const [isQBCompletionsSectionVisible, setIsQBCompletionsSectionVisible] =
    React.useState(false);
  const [isPassingTDsSectionVisible, setIsPassingTDsSectionVisible] =
    React.useState(false);
  const [isINTSectionVisable, setIsINTSectionVisible] = React.useState(false);
  const [isPassingYardsSectionVisible, setIsPassingYardsSectionVisible] =
    React.useState(false);
  ///
  ////
  /////
  //////                    use Effects            ////////////////
  ////
  ///
  //

  React.useEffect(() => {
    sleeperDataArray.map((player) => {
      if (player.team === team) {
        // console.log(player);
        usersAllTeamsList.map((teamObject) => {
          //
          //   console.log(teamObject);
          //
          if (teamObject.teamName === team) {
            // console.log(teamObject);

            //
            // QBs
            //
            // assign QB1
            //
            if (player.position === "QB") {
              if (!teamObject.qb1) {
                teamObject.qb1 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign QB2
              //
              if (
                teamObject.qb1 &&
                !teamObject.qb2 &&
                player.name !== teamObject.qb1.name
              ) {
                // console.log(player);
                teamObject.qb2 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign QB3
              //

              if (
                teamObject.qb1 &&
                teamObject.qb2 &&
                !teamObject.qb3 &&
                player.name !== teamObject.qb1.name &&
                player.name !== teamObject.qb2.name
              ) {
                teamObject.qb3 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign QB4
              //
              if (
                teamObject.qb1 &&
                teamObject.qb2 &&
                teamObject.qb3 &&
                !teamObject.qb4 &&
                player.name !== teamObject.qb1.name &&
                player.name !== teamObject.qb2.name &&
                player.name !== teamObject.qb3.name
              ) {
                teamObject.qb4 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign QB5
              //
              if (
                teamObject.qb1 &&
                teamObject.qb2 &&
                teamObject.qb3 &&
                teamObject.qb4 &&
                !teamObject.qb5 &&
                player.name !== teamObject.qb1.name &&
                player.name !== teamObject.qb2.name &&
                player.name !== teamObject.qb3.name &&
                player.name !== teamObject.qb4.name
              ) {
                teamObject.qb5 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign QB6
              //
              if (
                teamObject.qb1 &&
                teamObject.qb2 &&
                teamObject.qb3 &&
                teamObject.qb4 &&
                teamObject.qb5 &&
                !teamObject.qb6 &&
                player.name !== teamObject.qb1.name &&
                player.name !== teamObject.qb2.name &&
                player.name !== teamObject.qb3.name &&
                player.name !== teamObject.qb4.name &&
                player.name !== teamObject.qb5.name
              ) {
                teamObject.qb6 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign QB7
              //
              if (
                teamObject.qb1 &&
                teamObject.qb2 &&
                teamObject.qb3 &&
                teamObject.qb4 &&
                teamObject.qb5 &&
                teamObject.qb6 &&
                !teamObject.qb7 &&
                player.name !== teamObject.qb1.name &&
                player.name !== teamObject.qb2.name &&
                player.name !== teamObject.qb3.name &&
                player.name !== teamObject.qb4.name &&
                player.name !== teamObject.qb5.name &&
                player.name !== teamObject.qb6.name
              ) {
                teamObject.qb7 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign QB8
              //
              if (
                teamObject.qb1 &&
                teamObject.qb2 &&
                teamObject.qb3 &&
                teamObject.qb4 &&
                teamObject.qb5 &&
                teamObject.qb6 &&
                teamObject.qb7 &&
                !teamObject.qb8 &&
                player.name !== teamObject.qb1.name &&
                player.name !== teamObject.qb2.name &&
                player.name !== teamObject.qb3.name &&
                player.name !== teamObject.qb4.name &&
                player.name !== teamObject.qb5.name &&
                player.name !== teamObject.qb6.name &&
                player.name !== teamObject.qb7.name
              ) {
                teamObject.qb8 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
            } // end if (player.position === "QB")

            //
            // RBs
            //
            // assign RB1
            //
            if (player.position === "RB") {
              if (!teamObject.rb1) {
                teamObject.rb1 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB2
              //
              if (
                teamObject.rb1 &&
                !teamObject.rb2 &&
                player.name !== teamObject.rb1.name
              ) {
                // console.log(player);
                teamObject.rb2 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB3
              //

              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                !teamObject.rb3 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name
              ) {
                teamObject.rb3 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB4
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                !teamObject.rb4 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name
              ) {
                teamObject.rb4 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB5
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                !teamObject.rb5 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name
              ) {
                teamObject.rb5 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB6
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                !teamObject.rb6 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name
              ) {
                teamObject.rb6 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB7
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                !teamObject.rb7 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name
              ) {
                teamObject.rb7 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB8
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                teamObject.rb7 &&
                !teamObject.rb8 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name &&
                player.name !== teamObject.rb7.name
              ) {
                teamObject.rb8 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB9
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                teamObject.rb7 &&
                teamObject.rb8 &&
                !teamObject.rb9 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name &&
                player.name !== teamObject.rb7.name &&
                player.name !== teamObject.rb8.name
              ) {
                teamObject.rb9 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB10
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                teamObject.rb7 &&
                teamObject.rb8 &&
                teamObject.rb9 &&
                !teamObject.rb10 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name &&
                player.name !== teamObject.rb7.name &&
                player.name !== teamObject.rb8.name &&
                player.name !== teamObject.rb9.name
              ) {
                teamObject.rb10 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB11
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                teamObject.rb7 &&
                teamObject.rb8 &&
                teamObject.rb9 &&
                teamObject.rb10 &&
                !teamObject.rb11 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name &&
                player.name !== teamObject.rb7.name &&
                player.name !== teamObject.rb8.name &&
                player.name !== teamObject.rb9.name &&
                player.name !== teamObject.rb10.name
              ) {
                teamObject.rb11 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB12
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                teamObject.rb7 &&
                teamObject.rb8 &&
                teamObject.rb9 &&
                teamObject.rb10 &&
                teamObject.rb11 &&
                !teamObject.rb12 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name &&
                player.name !== teamObject.rb7.name &&
                player.name !== teamObject.rb8.name &&
                player.name !== teamObject.rb9.name &&
                player.name !== teamObject.rb10.name &&
                player.name !== teamObject.rb11.name
              ) {
                teamObject.rb12 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB13
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                teamObject.rb7 &&
                teamObject.rb8 &&
                teamObject.rb9 &&
                teamObject.rb10 &&
                teamObject.rb11 &&
                teamObject.rb12 &&
                !teamObject.rb13 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name &&
                player.name !== teamObject.rb7.name &&
                player.name !== teamObject.rb8.name &&
                player.name !== teamObject.rb9.name &&
                player.name !== teamObject.rb10.name &&
                player.name !== teamObject.rb11.name &&
                player.name !== teamObject.rb12.name
              ) {
                teamObject.rb13 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB14
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                teamObject.rb7 &&
                teamObject.rb8 &&
                teamObject.rb9 &&
                teamObject.rb10 &&
                teamObject.rb11 &&
                teamObject.rb12 &&
                teamObject.rb13 &&
                !teamObject.rb14 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name &&
                player.name !== teamObject.rb7.name &&
                player.name !== teamObject.rb8.name &&
                player.name !== teamObject.rb9.name &&
                player.name !== teamObject.rb10.name &&
                player.name !== teamObject.rb11.name &&
                player.name !== teamObject.rb12.name &&
                player.name !== teamObject.rb13.name
              ) {
                teamObject.rb14 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign RB15
              //
              if (
                teamObject.rb1 &&
                teamObject.rb2 &&
                teamObject.rb3 &&
                teamObject.rb4 &&
                teamObject.rb5 &&
                teamObject.rb6 &&
                teamObject.rb7 &&
                teamObject.rb8 &&
                teamObject.rb9 &&
                teamObject.rb10 &&
                teamObject.rb11 &&
                teamObject.rb12 &&
                teamObject.rb13 &&
                teamObject.rb14 &&
                !teamObject.rb15 &&
                player.name !== teamObject.rb1.name &&
                player.name !== teamObject.rb2.name &&
                player.name !== teamObject.rb3.name &&
                player.name !== teamObject.rb4.name &&
                player.name !== teamObject.rb5.name &&
                player.name !== teamObject.rb6.name &&
                player.name !== teamObject.rb7.name &&
                player.name !== teamObject.rb8.name &&
                player.name !== teamObject.rb9.name &&
                player.name !== teamObject.rb10.name &&
                player.name !== teamObject.rb11.name &&
                player.name !== teamObject.rb12.name &&
                player.name !== teamObject.rb13.name &&
                player.name !== teamObject.rb14.name
              ) {
                teamObject.rb15 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
            } // end if (player.position === "RB")

            //
            // WRs
            //
            // assign WR1
            //
            if (player.position === "WR") {
              if (!teamObject.wr1) {
                teamObject.wr1 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR2
              //
              if (
                teamObject.wr1 &&
                !teamObject.wr2 &&
                player.name !== teamObject.wr1.name
              ) {
                // console.log(player);
                teamObject.wr2 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR3
              //

              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                !teamObject.wr3 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name
              ) {
                teamObject.wr3 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR4
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                !teamObject.wr4 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name
              ) {
                teamObject.wr4 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR5
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                !teamObject.wr5 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name
              ) {
                teamObject.wr5 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR6
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                !teamObject.wr6 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name
              ) {
                teamObject.wr6 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR7
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                !teamObject.wr7 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name
              ) {
                teamObject.wr7 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR8
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                !teamObject.wr8 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name
              ) {
                teamObject.wr8 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR9
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                !teamObject.wr9 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name
              ) {
                teamObject.wr9 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR10
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                !teamObject.wr10 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name
              ) {
                teamObject.wr10 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR11
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                teamObject.wr10 &&
                !teamObject.wr11 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name &&
                player.name !== teamObject.wr10.name
              ) {
                teamObject.wr11 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR12
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                teamObject.wr10 &&
                teamObject.wr11 &&
                !teamObject.wr12 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name &&
                player.name !== teamObject.wr10.name &&
                player.name !== teamObject.wr11.name
              ) {
                teamObject.wr12 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR13
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                teamObject.wr10 &&
                teamObject.wr11 &&
                teamObject.wr12 &&
                !teamObject.wr13 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name &&
                player.name !== teamObject.wr10.name &&
                player.name !== teamObject.wr11.name &&
                player.name !== teamObject.wr12.name
              ) {
                teamObject.wr13 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR14
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                teamObject.wr10 &&
                teamObject.wr11 &&
                teamObject.wr12 &&
                teamObject.wr13 &&
                !teamObject.wr14 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name &&
                player.name !== teamObject.wr10.name &&
                player.name !== teamObject.wr11.name &&
                player.name !== teamObject.wr12.name &&
                player.name !== teamObject.wr13.name
              ) {
                teamObject.wr14 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR15
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                teamObject.wr10 &&
                teamObject.wr11 &&
                teamObject.wr12 &&
                teamObject.wr13 &&
                teamObject.wr14 &&
                !teamObject.wr15 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name &&
                player.name !== teamObject.wr10.name &&
                player.name !== teamObject.wr11.name &&
                player.name !== teamObject.wr12.name &&
                player.name !== teamObject.wr13.name &&
                player.name !== teamObject.wr14.name
              ) {
                teamObject.wr15 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR16
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                teamObject.wr10 &&
                teamObject.wr11 &&
                teamObject.wr12 &&
                teamObject.wr13 &&
                teamObject.wr14 &&
                teamObject.wr15 &&
                !teamObject.wr16 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name &&
                player.name !== teamObject.wr10.name &&
                player.name !== teamObject.wr11.name &&
                player.name !== teamObject.wr12.name &&
                player.name !== teamObject.wr13.name &&
                player.name !== teamObject.wr14.name &&
                player.name !== teamObject.wr15.name
              ) {
                teamObject.wr16 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR17
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                teamObject.wr10 &&
                teamObject.wr11 &&
                teamObject.wr12 &&
                teamObject.wr13 &&
                teamObject.wr14 &&
                teamObject.wr15 &&
                teamObject.wr16 &&
                !teamObject.wr17 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name &&
                player.name !== teamObject.wr10.name &&
                player.name !== teamObject.wr11.name &&
                player.name !== teamObject.wr12.name &&
                player.name !== teamObject.wr13.name &&
                player.name !== teamObject.wr14.name &&
                player.name !== teamObject.wr15.name &&
                player.name !== teamObject.wr16.name
              ) {
                teamObject.wr17 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign WR18
              //
              if (
                teamObject.wr1 &&
                teamObject.wr2 &&
                teamObject.wr3 &&
                teamObject.wr4 &&
                teamObject.wr5 &&
                teamObject.wr6 &&
                teamObject.wr7 &&
                teamObject.wr8 &&
                teamObject.wr9 &&
                teamObject.wr10 &&
                teamObject.wr11 &&
                teamObject.wr12 &&
                teamObject.wr13 &&
                teamObject.wr14 &&
                teamObject.wr15 &&
                teamObject.wr16 &&
                teamObject.wr17 &&
                !teamObject.wr18 &&
                player.name !== teamObject.wr1.name &&
                player.name !== teamObject.wr2.name &&
                player.name !== teamObject.wr3.name &&
                player.name !== teamObject.wr4.name &&
                player.name !== teamObject.wr5.name &&
                player.name !== teamObject.wr6.name &&
                player.name !== teamObject.wr7.name &&
                player.name !== teamObject.wr8.name &&
                player.name !== teamObject.wr9.name &&
                player.name !== teamObject.wr10.name &&
                player.name !== teamObject.wr11.name &&
                player.name !== teamObject.wr12.name &&
                player.name !== teamObject.wr13.name &&
                player.name !== teamObject.wr14.name &&
                player.name !== teamObject.wr15.name &&
                player.name !== teamObject.wr16.name &&
                player.name !== teamObject.wr17.name
              ) {
                teamObject.wr18 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
            } // end if (player.position === "WR")

            //
            // TEs
            //
            // assign TE1
            //
            if (player.position === "TE") {
              if (!teamObject.te1) {
                teamObject.te1 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign TE2
              //
              if (
                teamObject.te1 &&
                !teamObject.te2 &&
                player.name !== teamObject.te1.name
              ) {
                // console.log(player);
                teamObject.te2 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign TE3
              //

              if (
                teamObject.te1 &&
                teamObject.te2 &&
                !teamObject.te3 &&
                player.name !== teamObject.te1.name &&
                player.name !== teamObject.te2.name
              ) {
                teamObject.te3 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign TE4
              //
              if (
                teamObject.te1 &&
                teamObject.te2 &&
                teamObject.te3 &&
                !teamObject.te4 &&
                player.name !== teamObject.te1.name &&
                player.name !== teamObject.te2.name &&
                player.name !== teamObject.te3.name
              ) {
                teamObject.te4 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign TE5
              //
              if (
                teamObject.te1 &&
                teamObject.te2 &&
                teamObject.te3 &&
                teamObject.te4 &&
                !teamObject.te5 &&
                player.name !== teamObject.te1.name &&
                player.name !== teamObject.te2.name &&
                player.name !== teamObject.te3.name &&
                player.name !== teamObject.te4.name
              ) {
                teamObject.te5 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign TE6
              //
              if (
                teamObject.te1 &&
                teamObject.te2 &&
                teamObject.te3 &&
                teamObject.te4 &&
                teamObject.te5 &&
                !teamObject.te6 &&
                player.name !== teamObject.te1.name &&
                player.name !== teamObject.te2.name &&
                player.name !== teamObject.te3.name &&
                player.name !== teamObject.te4.name &&
                player.name !== teamObject.te5.name
              ) {
                teamObject.te6 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign TE7
              //
              if (
                teamObject.te1 &&
                teamObject.te2 &&
                teamObject.te3 &&
                teamObject.te4 &&
                teamObject.te5 &&
                teamObject.te6 &&
                !teamObject.te7 &&
                player.name !== teamObject.te1.name &&
                player.name !== teamObject.te2.name &&
                player.name !== teamObject.te3.name &&
                player.name !== teamObject.te4.name &&
                player.name !== teamObject.te5.name &&
                player.name !== teamObject.te6.name
              ) {
                teamObject.te7 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign TE8
              //
              if (
                teamObject.te1 &&
                teamObject.te2 &&
                teamObject.te3 &&
                teamObject.te4 &&
                teamObject.te5 &&
                teamObject.te6 &&
                teamObject.te7 &&
                !teamObject.te8 &&
                player.name !== teamObject.te1.name &&
                player.name !== teamObject.te2.name &&
                player.name !== teamObject.te3.name &&
                player.name !== teamObject.te4.name &&
                player.name !== teamObject.te5.name &&
                player.name !== teamObject.te6.name &&
                player.name !== teamObject.te7.name
              ) {
                teamObject.te8 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
              //
              // assign TE9
              //
              if (
                teamObject.te1 &&
                teamObject.te2 &&
                teamObject.te3 &&
                teamObject.te4 &&
                teamObject.te5 &&
                teamObject.te6 &&
                teamObject.te7 &&
                teamObject.te8 &&
                !teamObject.te9 &&
                player.name !== teamObject.te1.name &&
                player.name !== teamObject.te2.name &&
                player.name !== teamObject.te3.name &&
                player.name !== teamObject.te4.name &&
                player.name !== teamObject.te5.name &&
                player.name !== teamObject.te6.name &&
                player.name !== teamObject.te7.name &&
                player.name !== teamObject.te8.name
              ) {
                teamObject.te9 = {
                  name: player.name,
                  team: player.team,
                  position: player.position,
                };
              }
            } // end if (player.position === "TE")
            // console.log(teamObject);
            setSelectedTeamObject(teamObject);
          } // end if (teamObject.teamName === team) {
        }); // end usersAllTeamsList.map((teamObject) => {
      }
    });
  }, [team]);

  React.useEffect(() => {
    if (!isStoredValue) {
      setIsUsersSelectedPlayerArrayReady(false);
    }
    if (isStoredValue) {
      setIsUsersSelectedPlayerArrayReady(true);
    }
  }, [userSelectedPlayersToProjectArray, isStoredValue]);

  // React.useEffect(() => {
  //   if (isYardsPerRushAttemptSectionVisible) {
  //     console.log(userSelectedPlayersToProjectArray, usersAllTeamsList);
  //   }
  // }, [isYardsPerRushAttemptSectionVisible]);

  //
  //
  ///
  ///////////////////////// UI //////////////////////////////////////////////
  ///
  //
  //

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
      {team && (
        <>
          <SelectPlayersToProject
            selectedTeamObject={selectedTeamObject}
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            team={team}
            setIsStoredValue={setIsStoredValue}
            isStoredValue={isStoredValue}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isUsersSelectedPlayerArrayReady && (
        <>
          <TeamTotalPlaysAndSplits
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            teamTotalProjectedPlays={teamTotalProjectedPlays}
            setTeamTotalProjectedPlays={setTeamTotalProjectedPlays}
            totalPassPlays={totalPassPlays}
            setTotalPassPlays={setTotalPassPlays}
            totalRunPlays={totalRunPlays}
            setTotalRunPlays={setTotalRunPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setIsPlayerRushAttemtpsSectionVisible={
              setIsPlayerRushAttemtpsSectionVisible
            }
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isUsersSelectedPlayerArrayReady &&
        totalRunPlays &&
        isPlayerRushAttemtpsSectionVisible &&
        userSelectedPlayersToProjectArray && (
          <>
            <PlayerRushAttempts
              userSelectedPlayersToProjectArray={
                userSelectedPlayersToProjectArray
              }
              team={team}
              totalRunPlays={totalRunPlays}
              usersAllTeamsList={usersAllTeamsList}
              setUsersAllTeamsList={setUsersAllTeamsList}
              setUserSelectedPlayersToProjectArray={
                setUserSelectedPlayersToProjectArray
              }
              setIsYardsPerRushAttemptSectionVisible={
                setIsYardsPerRushAttemptSectionVisible
              }
            />
            <div className={styles.sectionDividerWrapper}>
              <div className={styles.sectionDivider}></div>
            </div>
          </>
        )}
      {isUsersSelectedPlayerArrayReady &&
        isYardsPerRushAttemptSectionVisible &&
        isPlayerRushAttemtpsSectionVisible &&
        userSelectedPlayersToProjectArray && (
          <>
            <YardsPerCarry
              userSelectedPlayersToProjectArray={
                userSelectedPlayersToProjectArray
              }
              team={team}
              totalRunPlays={totalRunPlays}
              usersAllTeamsList={usersAllTeamsList}
              setUsersAllTeamsList={setUsersAllTeamsList}
              setUserSelectedPlayersToProjectArray={
                setUserSelectedPlayersToProjectArray
              }
              setIsRushTDsSectionVisible={setIsRushTDsSectionVisible}
              setTotalProjectedTeamRushYards={setTotalProjectedTeamRushYards}
            />
            <div className={styles.sectionDividerWrapper}>
              <div className={styles.sectionDivider}></div>
            </div>
          </>
        )}
      {isRushTDsSectionVisible && (
        <>
          <RushTDs
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsTargetsSectionVisble={setIsTargetsSectionVisble}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isTargetsSectionVisble && (
        <>
          <Targets
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            totalPassPlays={totalPassPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsCatchPercentageSectionVisible={
              setIsCatchPercentageSectionVisible
            }
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isCatchPercentageSectionVisible && (
        <>
          <CatchPercentage
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            totalPassPlays={totalPassPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsYardsPerReceptionVisable={setIsYardsPerReceptionVisable}
            setTeamTotalReceptions={setTeamTotalReceptions}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isYardsPerReceptionVisable && (
        <>
          <YardsPerReceptionAndRecYards
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            totalPassPlays={totalPassPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsRecTDsSectionVisible={setIsRecTDsSectionVisible}
            setTotalProjectedTeamPassingYards={
              setTotalProjectedTeamPassingYards
            }
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isRecTDsSectionVisible && (
        <>
          <RecTDs
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsPassAttemptsSectionVisible={setIsPassAttemptsSectionVisible}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isPassAttemptsSectionVisible && (
        <>
          <PassAttempts
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            totalPassPlays={totalPassPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsQBCompletionsSectionVisible={setIsQBCompletionsSectionVisible}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isQBCompletionsSectionVisible && (
        <>
          <QbCompletions
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            totalPassPlays={totalPassPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsPassingYardsSectionVisible={setIsPassingYardsSectionVisible}
            teamTotalReceptions={teamTotalReceptions}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isPassingYardsSectionVisible && (
        <>
          <PassingYards
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            totalPassPlays={totalPassPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsPassingTDsSectionVisible={setIsPassingTDsSectionVisible}
            totalProjectedTeamPassingYards={totalProjectedTeamPassingYards}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isPassingTDsSectionVisible && (
        <>
          <PassTDs
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            totalPassPlays={totalPassPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsINTSectionVisible={setIsINTSectionVisible}
            teamTotalReceptions={teamTotalReceptions}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}
      {isINTSectionVisable && (
        <>
          <INTs
            userSelectedPlayersToProjectArray={
              userSelectedPlayersToProjectArray
            }
            team={team}
            totalPassPlays={totalPassPlays}
            usersAllTeamsList={usersAllTeamsList}
            setUsersAllTeamsList={setUsersAllTeamsList}
            setUserSelectedPlayersToProjectArray={
              setUserSelectedPlayersToProjectArray
            }
            setIsINTSectionVisible={setIsINTSectionVisible}
            teamTotalReceptions={teamTotalReceptions}
          />
          <div className={styles.sectionDividerWrapper}>
            <div className={styles.sectionDivider}></div>
          </div>
        </>
      )}

      {team &&
        userSelectedPlayersToProjectArray &&
        isUsersSelectedPlayerArrayReady &&
        isPlayerRushAttemtpsSectionVisible && (
          <AgPassingTable usersAllTeamsList={usersAllTeamsList} team={team} />
        )}
    </div> // end main outside div
  ); // end main return
}
