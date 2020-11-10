function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === search) {
            return true
        }
        else if (arr[mid] < search)
            start = mid + 1;
        else
            end = mid - 1;
        counter += 1;
    }
    return false;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(numbers, 5));