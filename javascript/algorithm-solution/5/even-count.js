/*
Írasd ki egy tetszőleges elemszámú,
csak egész számokat tartalmazó tömb páros elemeinek a számát!
*/

function evenCounter(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            count += 1;
        }
    }
    return count;
}

console.log(evenCounter([1, 2, 3, 4, 5]));