const options = ["Rock", "Paper", "Scissors"];
let computerSelection;

let playerSelection = prompt("Rock,Paper or Scissors?");
let winCounter = 0,
  lossCounter = 0;
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You Win " + playerSelection + " beats " + computerSelection);
    winCounter += 1;
    console.log("Current wins: " + winCounter);
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log("You lose " + computerSelection + " beats " + playerSelection);
    lossCounter += 1;
    console.log("Current losses: " + lossCounter);
  } else if (playerSelection === computerSelection) {
    console.log("Its a draw");
  } else {
    console.log("What is happening?");
  }
}

function game() {
  while (winCounter !== 5 && lossCounter !== 5) {
    playRound(playerSelection, computerSelection);
  }
  if (winCounter === 5) {
    console.log("You win");
  } else if (lossCounter === 5) {
    console.log("You lose");
  }
}

game();
