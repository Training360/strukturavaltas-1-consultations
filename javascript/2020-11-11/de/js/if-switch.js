// HA(feltétel) {
//     utasítások;
// }
// KÜLÖNBEN HA(feltétel) {
//     utasítások;
// }
// KÜLÖNBEN {
//     utasítások;
// }

const firstNumber = 10;
const secondNumber = 20;

if (firstNumber === secondNumber) {
    console.log('Egyenlő');
} else if (firstNumber > secondNumber) {
    console.log('A firstNumber nagyobb');
} else {
    console.log('A secondNumber nagyobb');
}

const grade = 3;
if (grade === 1) {
    console.log('Elégtelen');
} else if (grade === 2) {
    console.log('Elégséges');
} else if (grade === 3) {
    console.log('Közepes');
} else if (grade === 4) {
    console.log('Jó');
} else if (grade === 5) {
    console.log('Jeles');
} else {
    console.log('Ez nem osztályzat');
}

console.log('--------- SWITCH--------');

switch (grade) {
    case 1:
        console.log('Elégtelen');
        break;
    case 2:
        console.log('Elégséges');
        break;
    case 3:
        console.log('Közepes');
        break;
    case 4:
        console.log('Jó');
        break;
    case 5:
        console.log('Jeles');
        break;
    default:
        console.log('Ez nem osztályzat');
}

console.log('----ARR---');

const arr = ['Elégtelen', 'Elégséges', 'Közepes', 'Jó', 'Jeles'];

// grade 1-5
// index: 0-4
console.log(arr[grade - 1]);

console.log('----OBJ---');

const gradeObj = {
    1: 'Elégtelen',
    2: 'Elégséges',
    3: 'Közepes',
    4: 'Jó',
    5: 'Jeles',
};

console.log(gradeObj[grade]);
