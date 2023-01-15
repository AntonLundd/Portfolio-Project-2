const playerSelected = document.getElementById('player-selected');
const computerSelected = document.getElementById('computer-selected');
const winnerDisplay = document.getElementById('winner-display');
const scoreGreen = document.getElementById('score-green');
const scoreRed = document.getElementById('score-red');
const buttons = document.getElementsByClassName('action');

const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

// Add event listener to action buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playRound);
}

// Function that will be called when a button is clicked
function playRound(event) {
    let playerChoice = choices[event.target.getAttribute('data-type')];
    playerSelected.innerHTML = 'Player chose: ' + playerChoice;

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    computerSelected.innerHTML = 'Computer chose: ' + computerChoice;

    // Compare choices and update winner display and score
    if (playerChoice === computerChoice) {
        winnerDisplay.innerHTML = "It's a tie!";
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        winnerDisplay.innerHTML = 'The winner is: Computer!';
        computerScore++;
        scoreRed.innerHTML = computerScore;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        winnerDisplay.innerHTML = 'The winner is: Player!';
        playerScore++;
        scoreGreen.innerHTML = playerScore;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        winnerDisplay.innerHTML = 'The winner is: Player!';
        playerScore++;
        scoreGreen.innerHTML = playerScore;
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        winnerDisplay.innerHTML = 'The winner is: Computer!';
        computerScore++;
        scoreRed.innerHTML = computerScore;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        winnerDisplay.innerHTML = 'The winner is: Computer!';
        computerScore++;
        scoreRed.innerHTML = computerScore;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        winnerDisplay.innerHTML = 'The winner is: Player!';
        playerScore++;
        scoreGreen.innerHTML = playerScore;
    }
}

const restartButton = document.getElementById('restart-button');

// Restart button event listener
restartButton.addEventListener('click', restartGame);

// Restart game function
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreGreen.innerHTML = playerScore;
    scoreRed.innerHTML = computerScore;
    winnerDisplay.innerHTML = 'The winner is: ';
    playerSelected.innerHTML = 'Player chose: ';
    computerSelected.innerHTML = 'Computer chose: ';
}