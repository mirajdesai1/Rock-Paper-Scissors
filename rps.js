
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"]
    let move = Math.floor(Math.random() * 3);
    return choices[move];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "Tie!";
                case "paper":
                    return "You Lose! Paper beats Rock";
                case "scissors":
                    return "You Win! Rock beats Scissors";
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You Win! Paper beats Rock";
                case "paper":
                    return "Tie!";
                case "scissors":
                    return "You Lose! Scissors beats Paper";
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You Lose! Rock beats Scissors";
                case "paper":
                    return "You Win! Scissors beats Paper";
                case "scissors":
                    return "Tie!";
            }
    }
}

function game() {
    let playerMove, computerMove;

    for (let i = 0; i < 5; i++) {
        playerMove = prompt("Play a move: Rock Paper Scissors");
        computerMove = computerPlay();

        alert(playRound(playerMove, computerMove));
    }
}

game();