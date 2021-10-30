let COM_CHICE;
let PLAYER_CHICE;
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

function setComputerChoice() {
  let choices = ['rock', 'paper', 'scissor'];
  let num = Math.floor(Math.random() * 3);
  COM_CHICE = choices[num];

  document.getElementById("computer_choice").innerHTML = `
    Computer choose <strong>${COM_CHICE.toUpperCase()}</strong>
  `;
}

function setUserChoice(e) {
  PLAYER_CHICE = e.target.value;

  document.getElementById("user_choice").innerHTML = `
    You choose <strong>${PLAYER_CHICE.toUpperCase()}</strong>
  `;
}

function handleWeaponClick(e) {
  setUserChoice(e);
  setComputerChoice();
  calcWinner();
  drawScore();
}

function calcWinner() {
  const resultDiv = document.querySelector("#result");
  const weaponsObject = {
    'rock': {
      'paper': 'lose',
      'rock': 'draw',
      'scissor': 'win',
    },
    'scissor': {
      'paper': 'win',
      'rock': 'lose',
      'scissor': 'draw',
    },
    'paper': {
      'paper': 'draw',
      'rock': 'win',
      'scissor': 'lose',
    },
  };

  resultDiv.removeAttribute("class");
  switch (weaponsObject[PLAYER_CHICE][COM_CHICE]) {
    case 'win':
      resultDiv.innerHTML = "YOU WIN!";
      PLAYER_SCORE++;
      resultDiv.classList.add("win")
      break;

    case 'lose':
      resultDiv.innerHTML = "YOU LOSE!";
      COMPUTER_SCORE++;
      resultDiv.classList.add("lose")
      break;

    default:
      resultDiv.innerHTML = "DRAW GAME!";
      resultDiv.classList.add("draw")
      break;
  }
}

function drawScore() {
  const playerScore = document.querySelector("#user_score");
  const comScore = document.querySelector("#computer_score");

  playerScore.innerHTML = PLAYER_SCORE;
  comScore.innerHTML = COMPUTER_SCORE;

}

function init() {
  let buttons = document.querySelectorAll(".weapons button");

  buttons.forEach(button => {
    button.addEventListener('click', handleWeaponClick);
  })

}

init();