let round = 1;
let playerScore = 0;
let computerScore = 0;
let endGame = false;

function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
}

function showMessage(message) {
  document.querySelector('#message').innerHTML = message;
}

function nextRound() {

  if (round >= 5) {
    endGame = true;
  } else {
    round ++;
  }

  updateUI();
}

function showWinner() {
  if (playerScore > computerScore) {
    showMessage('Final result: You Win!');
  } else if (playerScore < computerScore) {
    showMessage('Final result: You Lose!');
  } else {
    showMessage('Final result: Equality!');
  }
}

function restartGame() {
  document.querySelector('#buttons').style.display = 'block';
  document.querySelector('#restart').style.display = 'none';

  round = 1;
  playerScore = 0;
  computerScore = 0;
  endGame = false;

  showMessage('');
  updateUI();
}

function updateUI() {
  document.querySelector('#round').innerHTML = round;
  document.querySelector('#player-score').innerHTML = playerScore;
  document.querySelector('#computer-score').innerHTML = computerScore;

  if (endGame) {
    document.querySelector('#buttons').style.display = 'none';
    document.querySelector('#restart').style.display = 'block';
    showWinner();
  }
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  // Equality
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    showMessage('Equality!');
  }
  // Rock
  else if (playerSelection.toLowerCase() == 'rock') {
    // Win
    if (computerSelection.toLowerCase() == 'scissors') {
      showMessage('You Win! Rock beats Scissors');
      playerScore ++;
    }
    // Lose
    else if (computerSelection.toLowerCase() == 'paper') {
      showMessage('You Lose! Paper beats Rock');
      computerScore ++;
    }
  }
  // Paper
  else if (playerSelection.toLowerCase() == 'paper') {
    // Win
    if (computerSelection.toLowerCase() == 'rock') {
      showMessage('You Win! Paper beats Rock');
      playerScore ++;
    }
    // Lose
    else if (computerSelection.toLowerCase() == 'scissors') {
      showMessage('You Lose! Scissors beats Paper');
      computerScore ++;
    }
  }
  // Scissors
  else if (playerSelection.toLowerCase() == 'scissors') {
    // Win
    if (computerSelection.toLowerCase() == 'paper') {
      showMessage('You Win! Scissors beats Paper');
      playerScore ++;
    }
    // Lose
    else if (computerSelection.toLowerCase() == 'rock') {
      showMessage('You Lose! Rock beats Scissors');
      computerScore ++;
    }
  }

  // Next round
  nextRound();
}
