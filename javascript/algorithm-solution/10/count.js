/*
Írd ki, hogy egy tetszőlegese elemszámú,
bármilyen típusú elemeket tartalmazó tömb
(feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz)
hányszor tartalmazza a 23-as számot!
*/

function counter(arr, search) {
    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            counter += 1;
        }
    }
    return counter;
}

const arr = [1, 2, 3, 4, 23, 23, 23];
const searchValue = 23;
console.log(counter(arr, 23));