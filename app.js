let playerScore = 0;
let computerScore = 0;
let draws = 0;
let round = 0;
const btn = document.querySelectorAll('.btn');
const gameplay = document.querySelector('.gameplay');
const score = document.querySelector('.score');
const result = document.querySelector('.result');

// Game/round is played when the player makes their selection
btn.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

function getComputerSelection() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
    const playerSelection = playerChoice;
    const computerSelection = getComputerSelection();

    game(playerSelection, computerSelection);
    round++;
    updateScore();
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
    gameplay.innerHTML = `It's a draw! Both players chose ${selection}.`;
    draws++;
}

function playerWinsRound(playerSelection, computerSelection) {
    gameplay.innerHTML = `Player chose ${playerSelection}! Computer chose ${computerSelection}!
    Player wins this round!`;
    playerScore++;
}

function computerWinsRound(playerSelection, computerSelection) {
    gameplay.innerHTML = `Player chose ${playerSelection}! Computer chose ${computerSelection}!
    Computer wins this round!`;
    computerScore++;
}

function updateScore() {
    score.innerHTML = `Round ${round} - 
        You: ${playerScore} -
        Computer: ${computerScore} -
        Draws: ${draws}`;
}

function gameResult() {
    if (playerScore === computerScore) result.innerHTML = `It's a tie!`;
    if (playerScore > computerScore) result.innerHTML = `Player wins!`;
    if (playerScore < computerScore) result.innerHTML = `Computer wins!`;
}