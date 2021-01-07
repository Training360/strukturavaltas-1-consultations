// function functionName(paramterek) {
//     utasítások;
//     return visszatérésiÉrték;
// }

function sum(a, b) {
    return a + b;
}

// const sum = (a, b) => a + b;

function log(value) {
    // const value = sum(10, 20);
    console.log(value);
}

// const value = sum(10, 20);
// log(value);
log(sum(10, 20));

const numbers = [1, 2, 3];

// Hozzáad egy elemet
const appendElement = (arr, value) => arr.push(value);
// Eltávolít egy elemet
const removeElement = (arr, index) => arr.splice(index, 1);
// adott elem keresése (index, vagy -1)
const getElement = (arr, value) => arr.indexOf(value);
// Tömb ürítése
const clearArray = (arr) => {
    arr = [];
    return arr;
};

console.log(appendElement(numbers, 10));
removeElement(numbers, 1);
console.log(numbers);
console.log(getElement(numbers, 3));
console.log(clearArray(numbers));

const integerNumber = [1, 2, 3, 4, 5, 6];

function getEvenElements(arr) {
    const even = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }
    return even;
}

console.log(getEvenElements(integerNumber));

const ints2 = [35435, 5647, 35, 567, 3258, 4];
console.log(getEvenElements(ints2));

const evenFilter = (item) => item % 2 === 0;
const everyThirdElementFilter = (item, index) => (index + 1) % 3 === 0;
const result = integerNumber.filter(evenFilter);

console.log('functional:', result);
console.log(integerNumber.filter(everyThirdElementFilter));


function sample(a) {
    // if (a % 2 === 0) {
    //     return 'Páros';
    // } else {
    //     return 'Páratlan'
    // }
    return a % 2 === 0 ? 'Páros' : 'Páratlan';
}

function sample2(a) {
    return {
        original: a,
        doubled: a * 2,
        tripled: a * 3
    }
}

// const result2 = sample2(10);
const { doubled, tripled } = sample2(10);
console.log(doubled, tripled);

function sample3({ firstName, lastName }) {
    console.log(firstName, lastName);
}

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20
};
sample3(user);