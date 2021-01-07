/*
Írasd ki egy tetszőleges elemszámú,
csak egész számokat tartalmazó tömb második legkisebb elemét!
*/

// 1. legkisebb elem kiválasztása
// 2. Hol van a tömbben
// 3. kitöröljük a tömbből
// 4. újból kiválasztom a legkisebb elemet

// function getSecondSmallestElementFromAnArray(arr) {
//     let min = getMinElementFromAnArray(arr);
//     const index = arr.indexOf(min);
//     arr.splice(index, 1);
//     min = getMinElementFromAnArray(arr);
//     return min;
// }

const arr = [1, 2, 3, 4, 5];
// console.log(getSecondSmallestElementFromAnArray(arr));

function getNthLargestElementFromAnArray(arr, nth) {
    // const sortedArray = bubbleSort(arr);
    return bubbleSort(arr)[nth - 1];
}

console.log(getNthLargestElementFromAnArray(arr, 2));