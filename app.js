// logic of game

// let item = ["ROCK", "PAPER", "SCISSORS"];

function getRandom() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "ROCK"
    case 1:
      return  "PAPER" 
    case 2:
      return "SCISSORS"
  }
}

let playerCounter = 0;
let computerCounter = 0;
let ronudWnner = "";

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerCounter++;
    ronudWnner = "player"
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerCounter++;
    ronudWnner = "computer"
  }
  if (playerSelection === computerSelection) {
    tie = "tie";
    ronudWnner = "tie"
  }
}

// DOM and UI
let result = document.querySelector(".section-p1");
let situation = document.querySelector(".section-p2");
let playerChoose = document.querySelector(".player-choose");
let playerSituation = document.querySelector(".player-situation");
let computerChoose = document.querySelector(".computer-choose");
let computerSituation = document.querySelector(".computer-situation");
let playerRock = document.querySelector(".btn-rock");
let playerpaper = document.querySelector(".btn-paper");
let playerScissors = document.querySelector(".btn-scissors");

playerRock.addEventListener("click", () => handleClick("ROCK"));
playerpaper.addEventListener("click", () => handleClick("PAPER"));
playerScissors.addEventListener("click", () => handleClick("SCISSORS"));

// show selection of player and computer.

function updateValue(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "ROCK":
      playerChoose.textContent = "👊";
      break;
    case "PAPER":
      playerChoose.textContent = "✋";
      break;
    case "SCISSORS":
      playerChoose.textContent = "✌️";
      break;
  }

  switch (computerSelection) {
    case "ROCK":
      computerChoose.textContent = "👊";
      break;
    case "PAPER":
      computerChoose.textContent = "✋";
      break;
    case "SCISSORS":
      computerChoose.textContent = "✌️";
      break;
  }
}


// set point for each player
function setPoint(playerSituation ,computerSituation) {
  playerSituation.textContent = `player: ${playerCounter}`
  computerSituation.textContent = `computer: ${computerCounter}`
}

// show the score
function updateScore() {
  if (ronudWnner === "player") {
    result.textContent = "You win 😍"
  } 
  if (ronudWnner === "computer") {
    result.textContent = "You lose 🫤"
  } 
  if (ronudWnner === "tie") {
    result.textContent = "it's a tie 🫡"
  }
}


function updateMassageScore(ronudWnner , playerSelection , computerSelection) {
  if (ronudWnner === "player") {
    situation.textContent = `${capitalize(computerSelection)} beats by 
    ${capitalize(playerSelection)}`
  } 
  if (ronudWnner === "computer") {
    situation.textContent = `${capitalize(playerSelection)} beats by 
    ${capitalize(computerSelection)}`
  }
  if (ronudWnner === "tie") {
    situation.textContent = `${capitalize(playerSelection)} ties with
    ${capitalize(computerSelection)}`
  }
}





// capitalize first word for disply situation 
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() 
}



// invoke game
function handleClick(playerSelection) {
  let computerSelection = getRandom();
  playRound(playerSelection, computerSelection);
  updateValue(playerSelection, computerSelection);
  setPoint(playerSituation, computerSituation);
  updateScore();
  updateMassageScore(ronudWnner , playerSelection , computerSelection)
}

