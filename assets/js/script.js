const playerSelected = document.getElementById('player-selected');
const computerSelected = document.getElementById('computer-selected');
const winnerDisplay = document.getElementById('winner-display');
const scoreGreen = document.getElementById('score-green');
const scoreRed = document.getElementById('score-red');
const buttons = document.getElementsByClassName('action');

const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

// Add event listener to buttons
for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playRound);
}

// Function that will be called when a button is clicked
function playRound(event) {
    
}