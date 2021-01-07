function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

function getNthMinElement(arr, nth) {
  const sortedArr = bubbleSort(arr);
  if (nth > arr.length) {
    return arr[arr.length - 1];
  }
  return sortedArr[nth - 1];
}

const sampleArray = [235, 546, 23, 5245, 52, 6345, 82];

console.log(getNthMinElement(sampleArray, 10));
