function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
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
    return false;
}
