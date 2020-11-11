'use strict';

function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            return 'igen';
        }
    }
    return 'nem';
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(linearSearch(numbers, 5));