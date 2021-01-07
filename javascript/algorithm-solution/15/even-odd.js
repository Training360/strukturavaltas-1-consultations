/*
Adott egy tetszőleges pozitív egész számokat tartalmazó tömb.
Válogassuk szét külön egy even (páros), és odd (páratlan)
nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!
*/

// function evenOdd(arr) {
//     const even = [];
//     const odd = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i]);
//         } else {
//             odd.push(arr[i]);
//         }
//     }
//     console.log(even);
//     console.log(odd);
// }

// function getEvenElements(arr) {
//     const even = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i]);
//         }
//     }
//     return even;
// }

// function getOddElements(arr) {
//     const odd = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] % 2 === 1) {
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// }

function getEvenOrOddElements(arr, evenOrOdd) {
    const number = evenOrOdd === 'even' ? 0 : 1;
    const elements = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === number) {
            elements.push(arr[i]);
        }
    }
    return elements;
}