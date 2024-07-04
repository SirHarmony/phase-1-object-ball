function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// console.log(gameObject());

///////////////////////////////////////////
function numPointsScored(playerName) {
  const object = gameObject();
  let points;

  if (object.home.players[playerName]) {
    points = object.home.players[playerName].points;
  } else if (object.away.players[playerName]) {
    points = object.away.players[playerName].points;
  }
  // console.log(points);
  return points;
}

numPointsScored("Brendan Haywood");

///////////////////////////////////////////
function shoeSize(playerName) {
  const object = gameObject();
  let size;

  if (object.home.players[playerName]) {
    size = object.home.players[playerName].shoe;
  } else if (object.away.players[playerName]) {
    size = object.away.players[playerName].shoe;
  }
  // console.log(size);
  return size;
}

shoeSize("Reggie Evans");

///////////////////////////////////////////
function teamColors(teamName) {
  const object = gameObject();
  let colorsArray;

  if (object.home.teamName === teamName) {
    colorsArray = object.home.colors;
  } else if (object.away.teamName === teamName) {
    colorsArray = object.away.colors;
  }
  // console.log(colorsArray);
}

teamColors("Charlotte Hornets");

///////////////////////////////////////////
function teamNames() {
  const object = gameObject();

  const teamNameArray = [object.home.teamName, object.away.teamName];
  // console.log(teamNameArray);
  return teamNameArray;
}

teamNames();

///////////////////////////////////////////
function playerNumbers(team) {
  const object = gameObject();
  let playersObject;
  let jerseyNumbersArray = [];

  if (object.home.teamName === team) {
    playersObject = object.home.players;
  } else if (object.away.teamName === team) {
    playersObject = object.away.players;
  }
  // console.log(playersObject);

  for (player in playersObject) {
    // console.log(playersObject[player].number);
    jerseyNumbersArray.push(playersObject[player].number);
  }
  // console.log(jerseyNumbersArray);
}

playerNumbers("Brooklyn Nets");

///////////////////////////////////////////
function playerStats(playerName) {
  const object = gameObject();
  let playerStats;

  for (const team in object) {
    playerStats = object[team].players[playerName];
  }
  console.log(playerStats);
  return playerStats;
}

playerStats("Brook Lopez");
