import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

// Constants to reference the different html elements that will be used
const playerScoreEl = document.getElementById("playerScore");
const playerChioceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScore = 0;
let computerScore = 0;
let computerChoice = '';

// Reset all selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

// Reset Score and playerChoice/computerChoice
function resetAll() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  playerChioceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}

// passing our select functiom into our window object
// In order for it to be accessible globally
window.resetAll = resetAll;

// Get computer random choice
function getComputerRandomChoice() {
  const computerRandomNumber = Math.random();
  if (computerRandomNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerRandomNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerRandomNumber <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerRandomNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

// Add selected styling and update computer choice
function computerSelect() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '--- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = '--- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = '--- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = '--- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = '--- Spock';
      break;
    default:
      break;
  }
}

// check result, update score and display result
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = 'It\'s a tie!';
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      playerScore++;
      playerScoreEl.textContent = playerScore;
      resultText.textContent = 'You Won!';
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      resultText.textContent = 'You lost!';
    }
  }
}

// check result of game
function checkResult(playerChoice) {
  resetSelected();
  // Get computer choice
  getComputerRandomChoice();
  // Computer select
  computerSelect();
  updateScore(playerChoice);
}

// Passing in player selection value and styling Icon
function select(playerChoice) {
  checkResult(playerChoice);
  // Add selected styling and update player choice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChioceEl.textContent = '--- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChioceEl.textContent = '--- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChioceEl.textContent = '--- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChioceEl.textContent = '--- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChioceEl.textContent = '--- Spock';
      break;
    default:
      break;
  }
}

// passing our select functiom into our window object
// In order for it to be accessible globally
window.select = select;

// On startup set initial values
resetAll();

