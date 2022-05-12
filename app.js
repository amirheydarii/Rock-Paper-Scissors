// logic of game

let item = ["ROCK", "PAPER", "SCISSORS"];

function getRandom() {
  let ramdom = item[Math.floor(Math.random() * item.length)];
  return ramdom;
}

let playerCounter = 0;
let computerCounter = 0;

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerCounter++;
    result.textContent = "You win";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerCounter++;
    result.textContent = "You lose";
  }
  if (playerSelection === computerSelection) {
    tie = "tie";
    result.textContent = "Tie";
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

function handleClick(playerSelection) {
  let computerSelection = getRandom();
  playRound(playerSelection, computerSelection);
  updateValue(playerSelection, computerSelection);
}
