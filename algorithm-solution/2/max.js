/*
Írasd ki egy tetszőleges elemszámú,
csak egész számokat tartalmazó tömb legnagyobb elemét!
*/

function getMaxElementFromAnArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxElementFromAnArray([1, -10, 2, -100, 3]));
console.log(getMaxElementFromAnArray([1, 2, 3, 4, 5, 6, -1]));