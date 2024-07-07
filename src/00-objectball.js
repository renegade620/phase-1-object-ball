// a function that contains and RETURNS an object 
function gameObject() {
    const obj = {
        home: { // home team object
            teamName: "Brooklyn Nets", // points string of team name
            colors: ["Black", "White"], // points to array of strings that are team colours
            players: { // points to object of players whose names(as strings) are keys to objects containing their stats
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: { // away team object
            teamName: "Charlotte Hornets", // points string of team name
            colors: ["Turquoise", "Purple"], // points to array of strings that are team colours
            players: {  // points to object of players whose names(as strings) are keys to objects containing their stats
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }

    return obj;
}

// outputs return value of the function gameObject()
console.log(gameObject(), "\n\n");

// function RETURNS the name of the home team
function homeTeam() {
    return gameObject()["home"]["teamName"]; //calling of function that contains the object we want to access
}

// outputs return value of function homeTeam()
console.log(homeTeam(), "\n\n");

// a function that takes in an argument of a player's name and returns the number of points scored for that player
function numPointsScored(playerName) {
    game = gameObject(); //call function containing object to allow access

    //checks if the name passed as argument exists in the object
    if (playerName in game.home.players)
        return `${playerName}'s Points is: ${game.home.players[playerName].points}`;
    else if (playerName in game.away.players)
        return `${playerName}'s Points is: ${game.away.players[playerName].points}`;
    debugger;
}

// outputs points scored by the specific player named
console.log(numPointsScored("Jeff Adrien"));

// a function that takes in an argument of a player's name and returns the player's shoe size
function shoeSize(playerName) {
    game = gameObject(); //call function containing object to allow access

    //checks if the name passed as argument exists in the object
    if (playerName in game.home.players)
        return `${playerName}'s Shoe Size is: ${game.home.players[playerName].shoe}`;
    else if (playerName in game.away.players)
        return `${playerName}'s Shoe Size is: ${game.away.players[playerName].shoe}`;
    debugger;
}

// outputs shoe size of mentioned player
console.log(shoeSize("Jeff Adrien"));

// a function that takes in an argument of a team's name and returns the team's colours
function teamColors(teamName) {
    const game = gameObject(); //call function containing object to allow access

    for (let teamSide of ["home", "away"]) { //for...of to iterate through the different team sides
        if (game[teamSide].teamName === teamName) //checks if argument exists in the object. if it exists it returns the colours
            return `${teamName}'s colours are: ${game[teamSide].colors}`;
    }
    debugger;
    return `${teamName}'s not playing today!`; //returns if argument is non-existent in the object
}

// outputs colour of mentioned team
console.log(teamColors("Charlotte Hornets"));

// a function that returns an array of the team names
function teamNames() {
    const game = gameObject(); // calls object function for access
    let arr = [game.home.teamName, game.away.teamName]; //array that holds the team names
    debugger;
    return arr;

}

console.log(teamNames()); // outputs team names

// // a function that takes in the team's name as an argument and RETURNS the team's jersey numbers
// function playerNumbers(teamName) {
//     const game = gameObject();

//     if (teamName === game.home.teamName) {
//         return game.home.players.number;
//     } else if (teamName === game.away.teamName) {
//         return game.away.players.number;
//     }
//     debugger;
//     return 0;
// }

// function playerNumbers(teamName) {
//     const game = gameObject();
//     if (teamName === game.home.teamName) {
//       return Object.values(game.home.players).map(player => player.number);
//     } else if (teamName === game.away.teamName) {
//       return Object.values(game.away.players).map(player => player.number);
//     } else {
//       return `${teamName} not found in game data`; // Error handling
//     }
//   }
function playerNumbers(teamName) {
    const game = gameObject(); // Call function to get game data
    let team; // variable to store the team sides i.e home or away
    const jerseys = []; // array to store jersey numbers
    
    // checks whether argument passed is among the teams playing
    if (teamName === game.home.teamName)
        team = game.home;
    else if (teamName === game.away.teamName)
        team = game.away;

    // loop to iterate through the jersey numbers
    for (playerName in team.players) {
        jerseys.push(team.players[playerName].number); //appends the jersey numbers into the array
    }

    return jerseys; // Return the array of jersey numbers
}

//outputs the array of jersey numbers
console.log(playerNumbers("Brooklyn Nets"));
