// Working to load all JS into a single object

var game = {
    wordArray: ['borg', 'transporter', 'dilithium', 'lightsaber', 'force', 'starship', 'enterprise', 'alien', 'android', 'blaster', 'multiverse', 'universe', 'robot', 'spaceship', 'terraforming', 'tardis', 'hyperdrive', 'jedi', 'skywalker', 'federation', 'starfleet'],
    chosenWord,
    letterArray: [],
    dashArray: [],
    guessedLetters: [],
    gameActive: false,
    chances: 10,
    wins: 0,
    losses: 0,
    restart: function () {
        game.dashArray = [];
        game.dashArray = [];
        gameActive = false;
        document.getElementById('guesses').textContent = "Guessed Letters: " + guessedLetters;
        chances = 10;
    },

    update: function () {
        document.getElementById('wins') = 'Wins: ' + game.wins;
        document.getElementById('losses') = 'Losses: ' + game.losses;
        document.getElementById('chances') = 'Remaining Chances: ' + game.chances;
        document.getElementById('guesses') = 'Guessed Letters: ' + guessedLetters;
    }
}

var remainingChances = document.getElementById("chances");
var winTotal = document.getElementById("wins");
var lossesTotal = document.getElementById("losses");
var guesses = document.getElementById("guesses");

document.onkeyup = function (event) {
    keyPress = event.key;
    keyCode = event.keyCode;
    console.log(keyCode);


    if (keyPress === "Enter" && gameActive === false) {

        //if there is no game in process it kicks off the startGame function
        //It then changes the gameActive to true to prevent this function running again till the game is finished
        var message = document.getElementById("test");
        message.textContent = "Game Start!";
        game.update();
        gameActive = true;

        // Choose a word from the array of possible choices
        chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];

        // Then we take the chosenWord and convert to an array of all letters
        letterArray = Array.from(chosenWord);

        // convert the letter array to an array of dashes
        for (i = 0; i < letterArray.length; i++) {
            dashArray.push("_");
        }

        // display those dashes
        dashes.textContent = dashArray.join(' ');
    }


    // PLAY AREA
    //Game Playing
    if (event.keyCode > 64 && event.keyCode < 91 && gameActive === true) {
        if (guessedLetters.indexOf(keyPress.toUpperCase()) === -1) {
            if (letterArray.indexOf(keyPress.toLowerCase()) !== -1) {
                // check the letterArray to see if the letter is in the array
                for (i = 0; i < letterArray.length; i++) {
                    if (letterArray[i] === keyPress.toLowerCase()) {
                        dashArray[i] = keyPress.toUpperCase();
                        dashes.textContent = dashArray.join(' ');
                        guessedLetters.push(keyPress.toUpperCase());
                        game.update;
                    }
                }
            } else {
                // if letter is not in the letterArray then it will reduce the remaining chances by one
                chances = chances - 1;
                game.update();
                guessedLetters.push(keyPress.toUpperCase());

                guesses.textContent = "Guessed Letters: " + guessedLetters.join(" ");
            }
        }
    }

    // Win/Loss scenarios
    if ((dashArray.indexOf("_") === -1) && (gameActive === true)) {
        var message = document.getElementById("test");
        message.textContent = "You Win! Press ENTER to start again!"
        wins = wins + 1;
        game.restart();
        game.update();
    }

    else if ((chances === 0) && (gameActive === true)) {
        var message = document.getElementById("test");
        message.textContent = "You LOSE! Press ENTER to try again."
        losses = losses + 1;
        game.restart();
        game.update();
    }
    // END PLAY AREA




    //End Functional area
}