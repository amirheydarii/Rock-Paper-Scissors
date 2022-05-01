let item = ['ROCK' , 'PAPER' , 'SCISSORS']

function computerPlay () {
   let ramdom = item[Math.floor((Math.random() * item.length))]
   return ramdom;
}


function playerSelection(params) {
    let playerSelection = prompt("Rock , Paper , Scissors ?") 
    let up = playerSelection.toUpperCase()
    return up;
}



function playRound(playerSelection , computerPlay) {
    if (playerSelection == "ROCK" && computerPlay == "ROCK") {
        return "it's a tie! Rock ties with Rock"
    } 
    else if (playerSelection == "PAPER" && computerPlay == "PAPER"){
        return "it's a tie! paper ties with paper"
    }
    else if (playerSelection == "SCISSORS" && computerPlay == "SCISSORS"){
        return "it's a tie! scissors ties with scissors"
    }
    else if (playerSelection == "ROCK" && computerPlay == "PAPER") {
        lose++
        return "you lose! Paper beats Rock "
    } 
    else if (playerSelection == "PAPER" && computerPlay == "ROCK") {
        win++
        return "you won! Paper beats Rock"
    }
    else if (playerSelection == "SCISSORS" && computerPlay == "ROCK") {
        lose++
        return "you lose! Rock beats Scissors"
    }  
    else if (playerSelection == "ROCK" && computerPlay == "SCISSORS") {
        win++
        return "you won! Rock beats  Scissors"
    }  
    else if (playerSelection == "SCISSORS" && computerPlay == "PAPER") {
        win++
        return "you won! Scissors beats Paper"
    }
    else if (playerSelection == "PAPER" && computerPlay == "SCISSORS") {
        lose++
        return "you lose! Scissors beats Paper"
    }
}

let win = 0;
let lose = 0;

function game() {
    for (let i = 1; i <= 5; i++) {
    
         (playRound(playerSelection() , computerPlay()));
    };

    if (win > lose) {
        return "YOOOO you win"
    } else if (win < lose) {
        return "OOOOPs you lose"
    } else {
        return "tie"
    }   
}

console.log(game());

