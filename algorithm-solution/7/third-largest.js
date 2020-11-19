/*
Írasd ki egy tetszőleges elemszámú,
csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!
*/

const arr = [1, 2, 3, 4, 5];

function getNthLargestElementFromAnArray(arr, nth) {
    return bubbleSort(arr)[arr.length - nth];
}

console.log(getNthLargestElementFromAnArray(arr, 3));