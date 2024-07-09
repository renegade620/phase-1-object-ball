// a function that contains and RETURNS an object
console.log("DISPLAY OF OBJECT"); 
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
console.log("NAME OF HOME TEAM")
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

console.log(teamNames(), "\n"); // outputs team names

// a function that takes in the team's name as an argument and RETURNS the team's jersey numbers
console.log("JERSEY NUMBERS");
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
console.log(playerNumbers("Brooklyn Nets"), "\n");

// a function that takes in player's name as argument and RETURNS players stats as an object
console.log("PLAYER STATS")
function playerStats(playerName) {
    const game = gameObject(); // call function to get game data
  
    for (const team in game) { // loop that iterates through the game object
      for (const playerNameSpec in game[team].players) { // loop that iterates through the team players
        if (playerNameSpec === playerName) { // checks whether player passed as argument exists in the object
          const player = game[team].players[playerNameSpec];
          console.log(playerName,":", player, "\n");
          return;
        }
        debugger;
      }
    }
  
    console.log("Player", playerName, "not found.\n"); // outputs if player not found
  }  

playerStats("Jeff Adrien"); // calls function that outputs the stats of the specific player

// a function that returns the rebounds of the player with the biggest shoe size
console.log("SHOE SIZE, REBOUNDS")
function bigShoeRounds() {
    const game = gameObject();
    let maxHomeSize = 0, maxAwaySize = 0; // maximum size of home and away players' shoes are initialized at 0
    const homeTeam = game.home.players, awayTeam = game.away.players;
    let bigShoePlayerHome, bigShoePlayerAway;

    // loops through home team players
    for (let player in homeTeam) {
        const playerStats = homeTeam[player]; // accesses player stats
        let shoeSize = playerStats.shoe; // assigns players' shoe sizes
        
        if (shoeSize > maxHomeSize) {// checks if the current player's shoe size is greater than the set maximum size
            maxHomeSize = shoeSize; // if it is, the current shoe size updates the maximum shoe size
            bigShoePlayerHome = player; // takes in account of the player with the max shoes
        } 
    }

    // loops through away team players
    for (let player in awayTeam) {
        const playerStats = awayTeam[player];
        let shoeSize = playerStats.shoe;

        if (shoeSize > maxAwaySize) {
            maxAwaySize = shoeSize; // updates max size if the player's shoe size is bigger than the previous max size
            playerWithBigShoeAway = player; // updates player with the max sized shoes
        }   
    }

    let maxShoeSize = Math.max(maxHomeSize, maxAwaySize);
    let bigShoePlayer;

    if (maxShoeSize === maxHomeSize)
        bigShoePlayer = bigShoePlayerHome;
    else
        bigShoePlayer = bigShoePlayerAway;

    const rebounds = game.home.players[bigShoePlayer]?.rebounds || game.away.players[bigShoePlayer]?.rebounds; // uses optional chaining to access the rebounds for the max-sized shoes player
 

    console.log("PLAYER:", bigShoePlayer, "\n", "MAX SHOE SIZE:", maxShoeSize, "\n", "REBOUNDS:", rebounds); // returns the player with the max-sized shoes, and the size of the shoes
    return;
}

bigShoeRounds();

