
var letters = ["a", "b", "c"];

//our guesses
var guessedLetters = [];

//randdom computer generated guess
var letterToGuess = null;

// countdown how many guess left
var guessesLeft = 9;

// win loss counter
var wins = 0;
var losses = 0;

// three functions to updateGuesses, updateGuessesLeft, and UpdateGuessesSoFar
var updateGuessesLeft = function() {
  
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// Function will be called when we reset everything
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// start on page start
updateLetterToGuess();
updateGuessesLeft();

// for keyboard clicks
document.onkeydown = function(event) {
  // It's going to reduce the guesses by one
  guessesLeft--;

  // Lowercase key input
  var letter = String.fromCharCode(event.which).toLowerCase();

  // add to guessed letters
  guessedLetters.push(letter);

  // Then its going to run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();


 
  if (letter === letterToGuess) {

    // if match update to win ++ is +1
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    // reset
    reset();
  }

  // if out of guesses
  if (guessesLeft === 0) {

    
    losses++;
    document.querySelector("#losses").innerHTML = losses;

    
    reset();
  }
};