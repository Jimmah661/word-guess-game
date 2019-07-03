// See all updated script below this line, Previous script was Garbage
// All praise JS Bin

var wordArray = ['borg', 'transporter', 'dilithium', 'lightsaber', 'force', 'starship', 'enterprise'];
var chosenWord
var letterArray = [];
var dashArray = [];
var gameState = false;
var keyPress;
var chances = 10;
var remainingChances = document.getElementById("chances");
var wins = 0;
var winTotal = document.getElementById("wins");
var losses = 0;
var lossesTotal = document.getElementById("losses");
var guessedLetters = [];

document.onkeyup = function (event) {
    keyPress = event.key;
    keyCode = event.keyCode;
    console.log(keyCode);


    if (keyPress === "Enter" && gameState === false) {

        //if there is no game in process it kicks off the startGame function
        //It then changes the gameState to true to prevent this function running again till the game is finished
        var message = document.getElementById("test");
        message.textContent = "Game Start!";
        remainingChances.textContent = "Remaining Chances: " + chances;
        winTotal.textContent = "Wins: " + wins;
        lossesTotal.textContent = "Losses: " + losses;
        gameState = true;

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
    if (event.keyCode > 64 && event.keyCode < 91 && gameState === true) {
        if (letterArray.indexOf(keyPress.toLowerCase()) !== -1) {
            // check the letterArray to see if the letter is in the array
            for (i = 0; i < letterArray.length; i++) {
                if (letterArray[i] === keyPress.toLowerCase()) {
                    dashArray[i] = keyPress.toUpperCase();
                    dashes.textContent = dashArray.join(' ');
                    guessedLetters.push(keyPress.toUpperCase());
                    var guesses = document.getElementById("guesses");
                    guesses.textContent = guessedLetters.join(" ");
                }
            }
        } else {
            // if letter is not in the letterArray then it will reduce the remaining chances by one
            chances = chances - 1;
            remainingChances.textContent = "Remaining Chances: " + chances;
            guessedLetters.push(keyPress.toUpperCase());
            var guesses = document.getElementById("guesses");
            guesses.textContent = guessedLetters.join(" ");
        }
    }

    // Win/Loss scenarios
    if ((dashArray.indexOf("_") === -1) && (gameState === true)) {
        var message = document.getElementById("test");
        alert("You Win!");
        wins = wins + 1;
        winTotal.textContent = "Wins: " + wins;
        gameState = false;
        dashArray = [];
        chances = 10;
    }

    else if ((chances === 0) && (gameState === true)) {
        var message = document.getElementById("test");
        alert("You Lose :(");
        losses = losses + 1;
        lossesTotal.textContent = "Losses: " + losses;
        gameState = false;
        dashArray = [];
        chances = 10;
    }
    // END PLAY AREA




    //End Functional area
}