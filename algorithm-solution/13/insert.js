/*
Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb.
A tömb elemeit rendezzük növekvő sorrendbe.
Ezután a felhasználótól kérjünk be egy számot
(addig kérjünk be értéket, míg valóban egy véges egész számot ad meg).
A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
Írasd ki a rendezett tömböt!
*/

// 1. rendezzük a tömböt
// 2. bekérünk egy számot
// 3. beszúrjuk a számot 
// - ciklus,
// - kiszedem a kisebbeket,
// - kiszedem a nagyobbakat,
// - a kisebbekhez hozzáadom a számot,
// - összefűzöm a nagyobbakkal.


function inputNumericData() {
    let number;
    do {
        number = parseInt(prompt('Adj meg egy számot'), 10);
    }
    while (Number.isNaN(number) || number === Number.POSITIVE_INFINITY || number === Number.NEGATIVE_INFINITY)
    return number;
}

function insertionSort(arr) {
    const sortedArr = bubbleSort(arr);
    const number = inputNumericData();
    for (let i = 0; i < sortedArr.length; i += 1) {
        if (sortedArr[i] > number) {
            sortedArr.splice(i, 0, number);
            return sortedArr;
        }
    }
}
