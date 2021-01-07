const intArr = [3254, 546, 23426, 3476, 234, 256365, 23, 4];

function getMinElementFromAnArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}

getMinElementFromAnArray(intArr);
getMinElementFromAnArray([345, 546, 234, 47]);