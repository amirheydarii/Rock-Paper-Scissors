let player1Counter = 0;
let player2Counter = 0;

let item = ["ROCK"];

function getRandom() {
  let ramdom = item[Math.floor(Math.random() * item.length)];
  return ramdom;
}

function playRound(player1Selection, player2Selection) {
  if (
    (player1Selection === "ROCK" && player2Selection === "SCISSORS") ||
    (player1Selection === "SCISSORS" && player2Selection === "PAPER") ||
    (player1Selection === "PAPER" && player2Selection === "ROCK")
  ) {
    player1Counter++;
    console.log("player1 win");
  }
  if (
    (player2Selection === "ROCK" && player1Selection === "SCISSORS") ||
    (player2Selection === "SCISSORS" && player1Selection === "PAPER") ||
    (player2Selection === "PAPER" && player1Selection === "ROCK")
  ) {
    player2Counter++;
    console.log("player1 lose");
  }
  if (player1Selection === player2Selection) {
    tie = "tie";
    console.log("tie");
  }
}

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

function handleClick(player1Selection) {
  let player2Selection = getRandom();
  playRound(player1Selection, player2Selection);
}
