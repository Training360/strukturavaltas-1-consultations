/*
Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered)
segítségével egy tetszőleges elemszámú, beágyazott tömb,
és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe!
A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe.
Írasd ki a rendezett tömböt!
*/
/*
1. tömb számokkal
2. nem számokkal
3. a szám tömböt sorba rendezem
4. a szám tömböt összefűzöm a nem szám tömbbel
*/

// function customSort(arr) {
//     let numbers = [];
//     const notNumbers = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (typeof arr[i] === 'number') {
//             numbers.push(arr[i]);
//         } else {
//             notNumbers.push(arr[i]);
//         }
//     }
//     numbers = bubbleSort(numbers);
//     return numbers.concat(notNumbers);
// }

function getNumericValues(arr) {
    const numbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i]);
        }
    }
    return numbers;
}

function getNonNumericValues(arr) {
    const notNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'number') {
            notNumbers.push(arr[i]);
        }
    }
    return notNumbers;
}

function customSort(arr) {
    return bubbleSort(getNumericValues(arr)).concat(getNonNumericValues(arr));
}