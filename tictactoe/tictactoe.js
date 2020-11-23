// maga a mátrix, egyelőre csak egy üres tömb
const matrix = [];
// sorok és oszlopok száma, hátha nem nágyzetes
const rows = 3;
const cols = 3;
// lépések száma
let stepCount = 0;
// az aktuális jel
let mark = 'X'

// csak feltöltöm a mátrixot (valjában opcionális lépés is lehet)
const initState = () => {
    // ehelyett a fill metódussal szebb lenne
    for (let i = 0; i < rows; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < cols; j += 1) {
            matrix[i][j] = null;
        }
    }
}

// a mátrix egy elemének értéket adok, az adott elem data attrinutumait 
// felhasználva nyerem ki az értéket
const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
}

// kattintáskor mi történjen, érdemes lenne több függvényre bontani
const handleClick = (event) => {
    stepCount += 1;
    event.target.removeEventListener('click', handleClick);
    event.target.textContent = mark;
    mark = mark === 'X' ? 'O' : 'X';
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
const checkRowValues = () => {
    const values = matrix.map(row =>
        row.every((value) => value === 'X') ||
        row.every((value) => value === 'O'))
    return values.indexOf(true) !== -1 ? true : false;
}

// Megnézem hogy van e olyan oszlop, ahol minden elem ugyanaz
// TODO: Meg kell írnod, boolean adjon vissza
const checkColumnValues = () => { }

// Megnézem hogy van e olyan oszlop, ahol minden elem ugyanaz
// TODO: Meg kell írnod, boolean adjon vissza
const checkDiagonalValues = () => { }


// TODO: Meg kell írnod, nincs befejezve
const checkWinner = () => {
    // Akár a checkRowValues, checkColumnValues, checkDiagonalValues true, akkor van győztes
    // Csak azért van itt a log hogy lássátok hogy true akkor lesz ha van olyan sor ahol minden elem ugyanaz
    console.log(checkRowValues());
}

initState();
addListener();