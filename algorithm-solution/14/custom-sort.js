/*
Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz
véletlenszerű sorrendben.
Rendezzük úgy a tömböt, hogy minden szám után egy string következzen!
Írasd ki a rendezett tömböt!
*/

// function getStringFromAnArray(arr) {
//     const strings = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (typeof arr[i] === 'string') {
//             strings.push(arr[i])
//         }
//     }
//     return strings;
// }

// function getNumberFromAnArray(arr) {
//     const numbers = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (typeof arr[i] === 'number') {
//             numbers.push(arr[i])
//         }
//     }
//     return numbers;
// }

function getElementsByType(arr, type) {
    const elements = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === type) {
            elements.push(arr[i])
        }
    }
    return elements;
}

function manualSort(arr) {
    const strings = getElementsByType(arr, 'string');
    const numbers = getElementsByType(arr, 'number');
    const sortedArr = [];
    for (let i = 0; i < strings.length; i += 1) {
        sortedArr.push(numbers[i], strings[i]);
    }
    return sortedArr;
}

