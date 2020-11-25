// maga a mátrix, egyelőre csak egy üres tömb
const matrix = [];
// sorok és oszlopok száma, hátha nem nágyzetes
const rows = 3;
const cols = 3;
// lépések száma
let stepCount = 0;
// az aktuális jel
let mark = 'X';

// csak feltöltöm a mátrixot (valjában opcionális lépés is lehet)
const initState = () => {
    // ehelyett a fill metódussal szebb lenne
    for (let i = 0; i < rows; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < cols; j += 1) {
            matrix[i][j] = null;
        }
    }
    // [
    //     [null, null, null],
    //     [null, null, null],
    //     [null, null, null],
    // ]
}

// a mátrix egy elemének értéket adok, az adott elem data attributumait 
// felhasználva nyerem ki az értéket
const changeMatrixValue = (element) => {
    // element.dataset.cell = element.getAttribute('data-cell'))
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
}

const increaseCounter = () => {
    stepCount += 1;
}

const modifyCell = (element) => {
    element.removeEventListener('click', handleClick);
    element.textContent = mark;
}

const setMark = () => {
    mark = mark === 'X' ? 'O' : 'X';
}

// kattintáskor mi történjen, érdemes lenne több függvényre bontani
const handleClick = (event) => {
    increaseCounter();
    modifyCell(event.target);
    setMark();
    changeMatrixValue(event.target);
    checkWinner();
}

// minden elemhez hozzáadom az eseményfigyelőt
const addListener = () => {
    document.querySelectorAll('.tictactoe__cell').forEach(element => {
        element.addEventListener('click', handleClick)
    });
}

// ha van győrztes minden elemről eltávolítom az eseményfigyelőt
const removeListener = () => {
    document.querySelectorAll('.tictactoe__cell').forEach(element => {
        element.removeListener('click', handleClick)
    });
}

// Megnézem hogy van e olyan sor, ahol minden elem ugyanaz
const checkRowValues = (arr) => {
    const values = arr.map(row =>
        row.every((value) => value === 'X') ||
        row.every((value) => value === 'O'))
    return values.indexOf(true) !== -1;
}

// Megnézem hogy van e olyan oszlop, ahol minden elem ugyanaz
// TODO: Meg kell írnod, boolean adjon vissza
const checkColumnValues = () => {
    const columns = [];
    for (let i = 0; i < matrix.length; i += 1) {
        columns[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            columns[i][j] = matrix[j][i];
        }
    }
    return checkRowValues(columns);
}

// Megnézem hogy van e olyan oszlop, ahol minden elem ugyanaz
// TODO: Meg kell írnod, boolean adjon vissza
const checkDiagonalValues = () => { }


// TODO: Meg kell írnod, nincs befejezve
const checkWinner = () => {
    // Akár a checkRowValues, checkColumnValues, checkDiagonalValues true, akkor van győztes
    // Csak azért van itt a log hogy lássátok hogy true akkor lesz ha van olyan sor ahol minden elem ugyanaz
    console.log(checkRowValues(matrix));
    console.log(checkColumnValues());
}

initState();
addListener();