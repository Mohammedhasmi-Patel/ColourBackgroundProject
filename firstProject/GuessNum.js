const randomNum = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector(".lowOrHigh");
let startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.nodeValue);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // -ve value and more than  value not possible
}

function checkGuess(guess) {
  // check value which is greater ,lower or equal
}

function displayGuess(guess) {}

function displayMessage(message) {
  // interact with DOM
}

// function for start our game
function newGame() {}

// function for end game

function endGame() {}
