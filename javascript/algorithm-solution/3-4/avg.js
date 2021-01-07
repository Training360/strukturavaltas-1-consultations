/* 
Írasd ki egy tetszőleges elemszámú,
csak egész számokat tartalmazó tömb átlagát!
*/

function getSumFromAnArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i]
    }
    return sum;
}

function getAvarageFromAnArray(arr) {
    return getSumFromAnArray(arr) / arr.length;
}

console.log(getAvarageFromAnArray([1, -10, 2, -100, 3]));