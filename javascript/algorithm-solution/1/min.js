/* 
Írasd ki egy tetszőleges elemszámú,
csak egész számokat tartalmazó tömb legkisebb elemét!
*/

function getMinElementFromAnArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(getMinElementFromAnArray([1, -10, 2, -100, 3]));
console.log(getMinElementFromAnArray([1, 2, 3, 4, 5, 6, -1]));