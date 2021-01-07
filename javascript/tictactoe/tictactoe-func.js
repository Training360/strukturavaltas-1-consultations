const rows = 3;
const cols = 3;
let matrix;
let stepCount = 0;
let mark = 'X';

const initState = () => {
  matrix = Array(cols).fill(null).map(() => Array(rows).fill(null));
};

const changeMatrixValue = (element) => {
  const row = parseInt(element.dataset.row, 10);
  const cell = parseInt(element.dataset.cell, 10);
  matrix[row][cell] = element.textContent;
};

const deleteSigns = () => {
  document
    .querySelectorAll('.tictactoe__cell')
    .forEach((element) => {
      element.textContent = '';
    });
};

const increaseCounter = () => {
  stepCount += 1;
};

const modifyCell = (element) => {
  element.textContent = mark;
  element.removeEventListener('click', handleClick);
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
  document.querySelectorAll('.tictactoe__cell')
    .forEach((element) => {
      element.removeEventListener('click', handleClick);
    });
};

const checkValues = (arr) => arr.map((row) => row.every((value) => value === 'X')
    || row.every((value) => value === 'O'))
  .indexOf(true) !== -1;

const checkColumnValues = () => checkValues(matrix.map((arr, i) => arr.map((item, j) => matrix[j][i])));

const checkDiagonalValues = () => checkValues([
  matrix.map((arr, i) => matrix[i][i]),
  matrix.map((arr, i) => matrix[i][matrix[i.length - i]]),
]);

const checkWinner = () => {
  console.log(checkColumnValues(), checkDiagonalValues());
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
