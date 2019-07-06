// See all updated script below this line, Previous script was Garbage
// All praise JS Bin

var wordArray = ['borg', 'transporter', 'dilithium', 'lightsaber', 'force', 'starship', 'enterprise', 'alien', 'android', 'blaster', 'multiverse', 'universe', 'robot', 'spaceship', 'terraforming', 'tardis', 'hyperdrive', 'jedi', 'skywalker', 'federation', 'starfleet'];
var chosenWord
var letterArray = [];
var dashArray = [];
var gameActive = false;
var keyPress;
var chances = 10;
var wins = 0;
var losses = 0;
var guessedLetters = [];
var remainingChances = document.getElementById("chances");
var winTotal = document.getElementById("wins");
var lossesTotal = document.getElementById("losses");
var guesses = document.getElementById("guesses");

var restartGame = function () {
    dashArray = [];
    guessedLetters = [];
    gameActive = false;
    guesses.textContent = "Guessed Letters: " + guessedLetters;
    chances = 10;

}

var updateInfo = function () {
    winTotal.textContent = "Wins: " + wins;
    lossesTotal.textContent = "Losses: " + losses;
    remainingChances.textContent = "Remaining Chances: " + chances;
    guesses.textContent = "Guessed Letters: " + guessedLetters;
}

document.onkeyup = function (event) {
    keyPress = event.key;
    keyCode = event.keyCode;
    console.log(keyCode);


    if (keyPress === "Enter" && gameActive === false) {

        //if there is no game in process it kicks off the startGame function
        //It then changes the gameActive to true to prevent this function running again till the game is finished
        var message = document.getElementById("test");
        message.textContent = "Game Start!";
        updateInfo();
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
                        guesses.textContent = "Guessed Letters: " + guessedLetters.join(" ");
                    }
                }
            } else {
                // if letter is not in the letterArray then it will reduce the remaining chances by one
                chances = chances - 1;
                updateInfo();
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
        restartGame();
        updateInfo();
    }

    else if ((chances === 0) && (gameActive === true)) {
        var message = document.getElementById("test");
        message.textContent = "You LOSE! Press ENTER to try again."
        losses = losses + 1;
        restartGame();
        updateInfo();
    }
    // END PLAY AREA




    //End Functional area
}