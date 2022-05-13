// logic of game

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
    ronudWnner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerCounter++;
    ronudWnner = "computer";
  }
  if (playerSelection === computerSelection) {
    tie = "tie";
    ronudWnner = "tie";
  }
}

function getRandom() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function isOverGame() {
  return playerCounter === 5 || computerCounter === 5;
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
let endgameModal = document.getElementById("endgamemodal");
let restartMassage = document.getElementById("endgamemag");
let overlay = document.getElementById("overlay");
let buttonRestart = document.getElementById("restartbtn");

playerRock.addEventListener("click", () => handleClick("ROCK"));
playerpaper.addEventListener("click", () => handleClick("PAPER"));
playerScissors.addEventListener("click", () => handleClick("SCISSORS"));
buttonRestart.addEventListener("click", restartGame);
overlay.addEventListener("click", closeMassage);

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

// show the score
function updateScore() {
  if (ronudWnner === "player") {
    result.textContent = "You win 😍";
  }
  if (ronudWnner === "computer") {
    result.textContent = "You lose 🫤";
  }
  if (ronudWnner === "tie") {
    result.textContent = "it's a tie 🫡";
  }

  playerSituation.textContent = `player: ${playerCounter}`;
  computerSituation.textContent = `computer: ${computerCounter}`;
}

function updateMassageScore(ronudWnner, playerSelection, computerSelection) {
  if (ronudWnner === "player") {
    situation.textContent = `${capitalize(computerSelection)} beats by 
    ${capitalize(playerSelection)}`;
  }
  if (ronudWnner === "computer") {
    situation.textContent = `${capitalize(playerSelection)} beats by 
    ${capitalize(computerSelection)}`;
  }
  if (ronudWnner === "tie") {
    situation.textContent = `${capitalize(playerSelection)} ties with
    ${capitalize(computerSelection)}`;
  }
}

// capitalize first word for disply situation
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// over game

function openEndgameModal() {
  endgameModal.style.display = "block";
  overlay.style.display = "block";
  endgameModal.classList.add("active");
  overlay.classList.add("active");
}

function closeMassage() {
  endgameModal.style.display = "none";
  overlay.style.display = "none";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

function setShowMassage() {
  return playerCounter > computerCounter
    ? (restartMassage.textContent = "You win 😍")
    : (restartMassage.textContent = "You lost 🫤");
}

// restart game

function restartGame() {
  endgameModal.style.display = "none";
  overlay.style.display = "none";
  playerCounter = 0;
  computerCounter = 0;
  result.textContent = "Choose!";
  situation.textContent = "First score more points wins the game.";
  playerSituation.textContent = "Player: 0";
  computerSituation.textContent = "Computer: 0";
  playerChoose.textContent = "?";
  computerChoose.textContent = "?";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

// invoke game
function handleClick(playerSelection) {
  if (isOverGame()) {
    openEndgameModal();
    return;
  }
  let computerSelection = getRandom();
  playRound(playerSelection, computerSelection);
  updateValue(playerSelection, computerSelection);
  updateMassageScore(ronudWnner, playerSelection, computerSelection);
  updateScore();

  if (isOverGame()) {
    openEndgameModal();
    setShowMassage();
  }
}
