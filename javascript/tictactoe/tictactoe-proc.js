const matrix = [];
const rows = 3;
const cols = 3;
let stepCount = 0;
let mark = 'X';

const initState = () => {
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < cols; j += 1) {
      matrix[i][j] = null;
    }
  }
};

const deleteSigns = () => {
  document
    .querySelectorAll('.tictactoe__cell')
    .forEach((element) => {
      element.textContent = '';
    });
};

const changeMatrixValue = (element) => {
  const row = parseInt(element.dataset.row, 10);
  const cell = parseInt(element.dataset.cell, 10);
  matrix[row][cell] = element.textContent;
};

const increaseCounter = () => {
  stepCount += 1;
};

const modifyCell = (element) => {
  element.removeEventListener('click', handleClick);
  element.textContent = mark;
};

const setMark = () => {
  mark = mark === 'X' ? 'O' : 'X';
};

const handleClick = (event) => {
  increaseCounter();
  modifyCell(event.target);
  setMark();
  changeMatrixValue(event.target);
  checkWinner();
};

const addClickListener = () => {
  document
    .querySelectorAll('.tictactoe__cell')
    .forEach((element) => {
      element.addEventListener('click', handleClick);
    });
};

const removeAllClickListener = () => {
  document
    .querySelectorAll('.tictactoe__cell')
    .forEach((element) => {
      element.removeEventListener('click', handleClick);
    });
};

const checkValues = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (
      arr[i].every((value) => value === 'X')
            || arr[i].every((value) => value === 'O')
    ) {
      return true;
    }
  }
  return false;
};

const checkColumnValues = () => {
  const columns = [];
  for (let i = 0; i < matrix.length; i += 1) {
    columns[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      columns[i][j] = matrix[j][i];
    }
  }
  return checkValues(columns);
};

const checkDiagonalValues = () => {
  const firstDiagonal = [];
  const secondDiagonal = [];
  for (let i = 0; i < matrix.length; i += 1) {
    firstDiagonal.push(matrix[i][i]);
    secondDiagonal.push(matrix[i][matrix[i].length - i - 1]);
  }
  return checkValues([firstDiagonal, secondDiagonal]);
};

const checkWinner = () => {
  if (checkValues(matrix) || checkColumnValues() || checkDiagonalValues()) {
    endGame();
  }
};

const setMessage = (message) => {
  document
    .querySelector('.message')
    .textContent = message;
};

const startGame = () => {
  initState();
  addClickListener();
  newGame();
};

const endGame = () => {
  setMessage(`A győztes: ${mark === 'X' ? 'O' : 'X'}`);
  removeAllClickListener();
};

const newGame = () => {
  document
    .querySelector('.new-game')
    .addEventListener('click', () => {
      initState();
      addClickListener();
      deleteSigns();
      setMessage('');
      setMark();
    });
};

startGame();
