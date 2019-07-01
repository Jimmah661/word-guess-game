# word-guess-game

When the user starts the game it's going to choose from a list of possible words. 

Once that list has been chosen it will display a number of dashes that correspond with the number of letters in the word.

The player will then need to enter a letter. It will check to ensure that there is only one letter entered and that the letter has not been used before.
If the letter is in the word it will replace the dash with the corresponding letter
If the letter is not in the word it will add to the negative tally. 

if word contains

after a number of incorrect guesses the game will end. 
If the word is correctly guessed the game will play a tune and add a point to the wind counter. 

It needs:
A start button
A win/loss counter
Number of guesses remaining
Letters already guessed

I would like it to have:
A space theme
a diverse list of words
a good look



Thoughts:
All words will need to be included in an array
    var wordArray = ['borg','transporter','Dilithium','lightsaber','force', 'starship', 'enterprise'];

When a word is randomly chosen at the start of the game it needs to pick a word and separate the letters into an array.
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];
    var letterArray = Array.from(word);

The number of dashes will probably be decided by a .length check
This means that the dashes will be decided by a function that is called after the word is chosen
    var dashNum = word.length



When the player enters a letter it runs an indexOf on the array of letters and if the value does NOT equal -1 it keeps running