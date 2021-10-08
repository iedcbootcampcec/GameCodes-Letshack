const TIC_CLASS = "tic";
const TAC_CLASS = "tac";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const board = document.querySelector('#board');
const winMessage = document.querySelector('.winning-message');
let ticTurn;
let cellElements = document.querySelectorAll('[data-cell]');


function endGame(hasWin) {
  if (hasWin) {
    winMessage.querySelector('[data-winning-message-text]').innerHTML = `${ticTurn ? "X's" : "O's"} wins!`;
  } else {
    winMessage.querySelector('[data-winning-message-text]').innerHTML = `Draw Game!`;
  }

  winMessage.classList.add('show');
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function setBoardHoverClass() {
  board.classList.remove(TIC_CLASS);
  board.classList.remove(TAC_CLASS);
  board.classList.add(ticTurn ? TIC_CLASS : TAC_CLASS);
};

function checkForWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(TIC_CLASS) || cell.classList.contains(TAC_CLASS);
  });
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = ticTurn ? TIC_CLASS : TAC_CLASS;
  // placeMark
  placeMark(cell, currentClass);
  // check for win
  if (checkForWin(currentClass)) {
    endGame(true);
    return;
  } else if (isDraw()) {
    endGame(false);
    return;
  }

  ticTurn = !ticTurn;
  setBoardHoverClass();
}

function start() {
  ticTurn = ticTurn ? false : true;
  winMessage.classList.remove('show');
  cellElements.forEach(cell => {
    cell.classList.remove(TIC_CLASS);
    cell.classList.remove(TAC_CLASS);
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
}


start();
document.querySelector("#restartGame").addEventListener('click', start);
