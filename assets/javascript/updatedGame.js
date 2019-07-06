// Working to load all JS into a single object

var game = {
    wordArray: ['borg', 'transporter', 'dilithium', 'lightsaber', 'force', 'starship', 'enterprise', 'alien', 'android', 'blaster', 'multiverse', 'universe', 'robot', 'spaceship', 'terraforming', 'tardis', 'hyperdrive', 'jedi', 'skywalker', 'federation', 'starfleet'],
    chosenWord: "",
    letterArray: [],
    dashArray: [],
    guessedLetters: [],
    active: false,
    chances: 10,
    wins: 0,
    losses: 0,

    chooseWord: function () {
        game.dashArray = [];
        game.chosenWord = game.wordArray[Math.floor(Math.random() * game.wordArray.length)];
        game.letterArray = Array.from(game.chosenWord);
        for (i = 0; i < game.letterArray.length; i++) {
            game.dashArray.push("_");
        };
        document.getElementById('dashes').textContent = game.dashArray.join(' ');
        game.active = true;
    },

    restart: function () {
        game.guessedLetters = [];
        game.active = false;
        document.getElementById('guesses').textContent = "Guessed Letters: " + game.guessedLetters;
        chances = 10;
    },

    update: function () {
        document.getElementById('wins').textContent = 'Wins: ' + game.wins;
        document.getElementById('losses').textContent = 'Losses: ' + game.losses;
        document.getElementById('chances').textContent = 'Remaining Chances: ' + game.chances;
        document.getElementById('guesses').textContent = 'Guessed Letters: ' + game.guessedLetters;
        document.getElementById('dashes').textContent = game.dashArray.join(' ');
    }
}



document.onkeyup = function (event) {
    var keyPress = event.key;
    var keyCode = event.keyCode;

    // If game.active is false (eg: no current game in progress) then we will
    // Update our document banner to display the Game start message
    // Update the main display sections to current scores and blank arrays
    // choose a word and push that to the dash array
    if (keyPress === "Enter" && game.active === false) {
        document.getElementById('bannerMessage').textContent = "Game Start!";
        game.update();
        game.chooseWord();
    }


    // PLAY AREA
    //Game Playing
    if (event.keyCode > 64 && event.keyCode < 91 && game.active === true) {

        if (game.guessedLetters.indexOf(keyPress.toUpperCase()) === -1) {

            if (game.letterArray.indexOf(keyPress.toLowerCase()) !== -1) {
                // check the letterArray to see if the letter is in the array
                for (i = 0; i < game.letterArray.length; i++) {
                    if (game.letterArray[i] === keyPress.toLowerCase()) {
                        game.dashArray[i] = keyPress.toUpperCase();
                        dashes.textContent = game.dashArray.join(' ');
                        game.guessedLetters.push(keyPress.toUpperCase());
                        game.update();
                    }
                }
            } else {
                // if letter is not in the letterArray then it will reduce the remaining chances by one
                game.chances = game.chances - 1;
                game.update();
                game.guessedLetters.push(keyPress.toUpperCase());

                guesses.textContent = "Guessed Letters: " + game.guessedLetters.join(" ");
            }
        }
    }

    // Win/Loss scenarios
    if ((game.dashArray.indexOf("_") === -1) && (game.active === true)) {
        document.getElementById("bannerMessage").textContent = "You Win! Press ENTER to start again!";
        game.wins = game.wins + 1;
        game.restart();
        game.update();
    }

    else if ((game.chances === 0) && (game.active === true)) {
        document.getElementById("bannerMessage").textContent = "You LOSE! Press ENTER to try again.";
        game.losses = game.losses + 1;
        game.restart();
        game.update();
    }
    // END PLAY AREA




    //End Functional area
}