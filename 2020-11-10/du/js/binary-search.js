'use strict';

// Big O notation

function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;
    // let counter = 0;
    while (start <= end) {
        // counter += 1;
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === search) {
            return true;
        }
        else if (arr[mid] < search) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    // console.log('futások száma:', counter);
    return false;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const float = [1.23, 2.34, 3.23234234, 4.43535];

console.log(binarySearch(numbers, 5));