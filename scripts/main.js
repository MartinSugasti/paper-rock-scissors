function computerPlay() {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * (3 - 0)) + 0];
}

function playerPlay() {
  let option = prompt('Choose your option:');
  return option.charAt(0).toUpperCase() + option.slice(1).toLowerCase();
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It\'s a tie.';
  } else if (optionOneWins(playerSelection, computerSelection)) {
    return 'You got it!'
  } else {
    return '.. machines will conquer the world?'
  }
}

function optionOneWins(optionOne, optionTwo) {
  return (
    (optionOne === 'Paper' && optionTwo === 'Rock') ||
    (optionOne === 'Rock' && optionTwo === 'Scissors') ||
    (optionOne === 'Scissors' && optionTwo === 'Paper')
  );
}

function game() {
  let userParagraph = document.querySelector('#user-score');
  let computerParagraph = document.querySelector('#computer-score');
  let resultParagraph = document.querySelector('.result');

  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    let result = singleRound(playerSelection, computerSelection);
    console.log(result);

    if (result === 'You got it!') {
      userScore++;
    } else if (result === '.. machines will conquer the world?') {
      computerScore++;
    }

    if (userScore === 3 || computerScore === 3 || i === 4) {
      break;
    }

    alert(result + ` You are ${userScore} to ${computerScore}!` )
  }

  let finalResult = (userScore > computerScore) ?
    'Luckily human kind have specimens like you!' :
    (userScore === computerScore) ?
      'That was close :|' :
      'That\'s it. I\'m getting out of here!';

  userParagraph.textContent = userScore;
  computerParagraph.textContent = computerScore;
  resultParagraph.textContent = finalResult;
}


let myButton = document.querySelector('button');
myButton.onclick = function() {
  game();
}

