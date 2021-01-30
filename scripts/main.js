function playGame(e) {
  e.target.style.display = 'none';
  buttons.forEach((button) => button.style.display = 'block');
}

function playRound(e) {
  let playerSelection = e.target.textContent;
  let computerSelection = computerPlay();
  let result = singleRound(playerSelection, computerSelection);

  if (
    playerCount === 3 ||
    computerCount === 3 ||
    (rounds === 4 && Math.abs(playerCount - computerCount) > 1) ||
    rounds === 5
  ) {
    finishGame();
  } else {
    printParcialResult(result);
  }
}

function computerPlay() {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * (3 - 0)) + 0];
}

function singleRound(playerSelection, computerSelection) {
  rounds++;

  if (playerSelection === computerSelection) {
    return 'It\'s a tie.';
  } else if (optionOneWins(playerSelection, computerSelection)) {
    playerCount++;
    return 'You got it!'
  } else {
    computerCount++;
    return 'Machines will conquer the world?'
  }
}

function optionOneWins(optionOne, optionTwo) {
  return (
    (optionOne === 'Paper' && optionTwo === 'Rock') ||
    (optionOne === 'Rock' && optionTwo === 'Scissors') ||
    (optionOne === 'Scissors' && optionTwo === 'Paper')
  );
}

function finishGame() {
  let div = document.querySelector('#result');
  rounds = 0;
  playerCount = 0;
  computerCount = 0;

  let finalResult = (playerCount > computerCount) ?
  ' Luckily human kind have specimens like you!' :
  (playerCount === computerCount) ?
    ' That was close :|' :
    ' That\'s it. I\'m getting out of here!';

  div.textContent = ` The final score is ${playerCount} to ${computerCount}!` + finalResult;

  toggleButtons();
}

function printParcialResult(result) {
  let div = document.querySelector('#result');
  div.textContent = result + ` The score is ${playerCount} to ${computerCount}! Let's go for the round ${rounds + 1}`;
}

function toggleButtons() {
  let button = document.querySelector('#play');
  button.style.display = 'block';

  let buttons = document.querySelectorAll('.option-button');
  buttons.forEach((button) => button.style.display = 'none');
}

let rounds = 0;
let playerCount = 0;
let computerCount = 0;

let button = document.querySelector('#play');
button.addEventListener('click', playGame);

let buttons = document.querySelectorAll('.option-button');
buttons.forEach((button) => button.addEventListener('click', playRound));
