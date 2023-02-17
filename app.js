let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

console.log("Let's play Rock Paper Sciossors!");

for (let i = 0; i < 5; i++) {
    playRound();
}

gameResult();

function getComputerSelection() {
    let number = Math.floor(Math.random() * 3) + 1;
    switch (number) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getPlayerSelection() {
    let input = prompt("Enter Rock, Paper or Scissors: ");
    return input;
}

function playRound() {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerSelection();

    game(playerSelection, computerSelection);
}

function game(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draw(playerSelection);
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerWinsRound(playerSelection, computerSelection);
    }

    if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        computerWinsRound(playerSelection, computerSelection);
    }
}

function draw(selection) {
    roundWinner = 'draw';
    console.log(`It's a draw! Both players chose ${selection}.`);
}

function playerWinsRound(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}! Computer chose ${computerSelection}!`);
    console.log(`Player wins this round!`);
    roundWinner = 'player';
    playerScore++;
}

function computerWinsRound(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}! Computer chose ${computerSelection}!`);
    console.log(`Computer wins this round!`);
    roundWinner = 'computer';
    computerScore++;
}

function gameResult() {
    console.log(`Game over.`);
    console.log(`FINAL SCORE - Player: ${playerScore} - Computer: ${computerScore}`);
    
    if (playerScore === computerScore) console.log(`It's a tie!`);
    if (playerScore > computerScore) console.log(`Player wins!`);
    if (playerScore < computerScore) console.log(`Computer wins!`);
}