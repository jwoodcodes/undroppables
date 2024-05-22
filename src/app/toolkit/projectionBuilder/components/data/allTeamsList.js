const allTeamsList = [
  {
    teamName: "ARI",
    totalPlays: 1026,
    totalPlaysRank: 17,
    secondsPerSnap: 25.7,
    secPerSnapRank: 7,
    passPercecntage: 54,
    runPercecntage: 46,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "ATL",
    totalPlays: 1052,
    totalPlaysRank: 11,
    secondsPerSnap: 25.5,
    secPerSnapRank: 4,
    passPercecntage: 50,
    runPercecntage: 40,
    newHeadCoach: "Yes",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "BAL",
    totalPlays: 1035,
    totalPlaysRank: 15,
    secondsPerSnap: 27.4,
    secPerSnapRank: 27,
    passPercecntage: 48,
    runPercecntage: 52,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "BUF",
    totalPlays: 1091,
    totalPlaysRank: 3,
    secondsPerSnap: 27.5,
    secPerSnapRank: 28,
    passPercecntage: 53,
    runPercecntage: 47,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "CAR",
    totalPlays: 1031,
    totalPlaysRank: 16,
    secondsPerSnap: 26.4,
    secPerSnapRank: 14,
    passPercecntage: 57,
    runPercecntage: 43,
    newHeadCoach: "Yes",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "CHI",
    totalPlays: 1047,
    totalPlaysRank: 13,
    secondsPerSnap: 27.8,
    secPerSnapRank: 30,
    passPercecntage: 51,
    runPercecntage: 49,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "CIN",
    totalPlays: 998,
    totalPlaysRank: 22,
    secondsPerSnap: 28,
    secPerSnapRank: 31,
    passPercecntage: 62,
    runPercecntage: 38,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "CLE",
    totalPlays: 1142,
    totalPlaysRank: 1,
    secondsPerSnap: 25.7,
    secPerSnapRank: 6,
    passPercecntage: 55,
    runPercecntage: 45,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "DAL",
    totalPlays: 1082,
    totalPlaysRank: 5,
    secondsPerSnap: 26.7,
    secPerSnapRank: 18,
    passPercecntage: 57,
    runPercecntage: 43,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "DEN",
    totalPlays: 964,
    totalPlaysRank: 30,
    secondsPerSnap: 27.2,
    secPerSnapRank: 25,
    passPercecntage: 53,
    runPercecntage: 47,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "DET",
    totalPlays: 1106,
    totalPlaysRank: 2,
    secondsPerSnap: 26.5,
    secPerSnapRank: 16,
    passPercecntage: 55,
    runPercecntage: 45,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "GB",
    totalPlays: 1022,
    totalPlaysRank: 20,
    secondsPerSnap: 26.7,
    secPerSnapRank: 20,
    passPercecntage: 57,
    runPercecntage: 43,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "HOU",
    totalPlays: 1036,
    totalPlaysRank: 14,
    secondsPerSnap: 25.8,
    secPerSnapRank: 9,
    passPercecntage: 57,
    runPercecntage: 43,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "IND",
    totalPlays: 1053,
    totalPlaysRank: 10,
    secondsPerSnap: 25.5,
    secPerSnapRank: 3,
    passPercecntage: 55,
    runPercecntage: 45,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "JAX",
    totalPlays: 1073,
    totalPlaysRank: 7,
    secondsPerSnap: 26.2,
    secPerSnapRank: 11,
    passPercecntage: 58,
    runPercecntage: 42,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "KC",
    totalPlays: 1052,
    totalPlaysRank: 12,
    secondsPerSnap: 26.7,
    secPerSnapRank: 19,
    passPercecntage: 60,
    runPercecntage: 40,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "LV",
    totalPlays: 970,
    totalPlaysRank: 29,
    secondsPerSnap: 26.9,
    secPerSnapRank: 22,
    passPercecntage: 57,
    runPercecntage: 43,
    newHeadCoach: "Yes",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "LAC",
    totalPlays: 1063,
    totalPlaysRank: 8,
    secondsPerSnap: 24.7,
    secPerSnapRank: 1,
    passPercecntage: 60,
    runPercecntage: 40,
    newHeadCoach: "Yes",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "LAR",
    totalPlays: 1060,
    totalPlaysRank: 9,
    secondsPerSnap: 26.8,
    secPerSnapRank: 21,
    passPercecntage: 55,
    runPercecntage: 45,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "MIA",
    totalPlays: 1022,
    totalPlaysRank: 19,
    secondsPerSnap: 27.2,
    secPerSnapRank: 24,
    passPercecntage: 55,
    runPercecntage: 45,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "MIN",
    totalPlays: 1024,
    totalPlaysRank: 18,
    secondsPerSnap: 25.6,
    secPerSnapRank: 5,
    passPercecntage: 62,
    runPercecntage: 38,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "NE",
    totalPlays: 972,
    totalPlaysRank: 28,
    secondsPerSnap: 26.1,
    secPerSnapRank: 10,
    passPercecntage: 57,
    runPercecntage: 43,
    newHeadCoach: "Yes",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "NO",
    totalPlays: 1086,
    totalPlaysRank: 4,
    secondsPerSnap: 26.6,
    secPerSnapRank: 17,
    passPercecntage: 56,
    runPercecntage: 44,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "NYG",
    totalPlays: 972,
    totalPlaysRank: 27,
    secondsPerSnap: 26.2,
    secPerSnapRank: 12,
    passPercecntage: 53,
    runPercecntage: 47,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "NYJ",
    totalPlays: 989,
    totalPlaysRank: 26,
    secondsPerSnap: 25.7,
    secPerSnapRank: 8,
    passPercecntage: 60,
    runPercecntage: 40,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "PHI",
    totalPlays: 1073,
    totalPlaysRank: 6,
    secondsPerSnap: 27,
    secPerSnapRank: 23,
    passPercecntage: 53,
    runPercecntage: 47,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "PIT",
    totalPlays: 993,
    totalPlaysRank: 24,
    secondsPerSnap: 27.3,
    secPerSnapRank: 25,
    passPercecntage: 51,
    runPercecntage: 49,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "SF",
    totalPlays: 990,
    totalPlaysRank: 25,
    secondsPerSnap: 28.9,
    secPerSnapRank: 32,
    passPercecntage: 50,
    runPercecntage: 50,
    newHeadCoach: "No",
    newOffensiveCoordinator: "No",
  },
  {
    teamName: "SEA",
    totalPlays: 957,
    totalPlaysRank: 31,
    secondsPerSnap: 25.4,
    secPerSnapRank: 32,
    passPercecntage: 60,
    runPercecntage: 40,
    newHeadCoach: "Yes",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "TB",
    totalPlays: 1007,
    totalPlaysRank: 21,
    secondsPerSnap: 26.3,
    secPerSnapRank: 13,
    passPercecntage: 56,
    runPercecntage: 44,
    newHeadCoach: "No",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "TEN",
    totalPlays: 938,
    totalPlaysRank: 32,
    secondsPerSnap: 27.5,
    secPerSnapRank: 29,
    passPercecntage: 53,
    runPercecntage: 47,
    newHeadCoach: "Yes",
    newOffensiveCoordinator: "Yes",
  },
  {
    teamName: "WAS",
    totalPlays: 995,
    totalPlaysRank: 23,
    secondsPerSnap: 26.4,
    secPerSnapRank: 15,
    passPercecntage: 64,
    runPercecntage: 36,
    newHeadCoach: "Yes",
    newOffensiveCoordinator: "Yes",
  },
];

export default allTeamsList;
