const sample = [435, 567, 8, true, NaN, 'hello', 33, 'szia', 346, 67.10, 678, false, 235, 225];
const sample2 = [435, 567, 8, 435, 345, 677];

// Hogyan lehetne a bubbleSortAsc és bubbleSortDesc függvényeket
// egybevonni? (Paraéterként megadni, hog milyen sorendbe rendezzük)
function bubbleSortAsc(arr) {
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

function bubbleSortDesc(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] < arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// A két filter függvényt hogyan vonhatnánk egybe?
function filterByNumbers(arr) {
  const numbers = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    }
  }
  return numbers;
}

function filterByNotNumbers(arr) {
  const notNumbers = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') {
      notNumbers.push(arr[i]);
    }
  }
  return notNumbers;
}

function customSorting(arr) {
  const numbers = filterByNumbers(arr);
  const notNumbers = filterByNotNumbers(arr);
  const sortedArr = bubbleSortDesc(numbers);
  return sortedArr.concat(notNumbers);
}

function customSorting2(arr) {
  const numbers = [];
  const notNumbers = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number' || Number.isNaN(arr[i])) {
      notNumbers.push(arr[i]);
    } else {
      numbers.push(arr[i]);
    }
  }
  const sortedArray = bubbleSortDesc(numbers);
  return sortedArray.concat(notNumbers);
}

console.log(customSorting(sample));
console.log(customSorting2(sample));

function custom13(arr) {
  const inputNumber = parseInt(prompt('Adj meg egy számot'), 10);
  arr.push(inputNumber);
  const sortedArray = bubbleSortAsc(arr);
  return sortedArray;
}

function getIndex(arr, value) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > value) {
      return i;
    }
  }
}

function custom13v2(arr) {
  const sortedArray = bubbleSortAsc(arr);
  const inputNumber = parseInt(prompt('Adj meg egy számot'), 10);
  if (!Number.isNaN(inputNumber)) {
    const index = getIndex(sortedArray, inputNumber);
    sortedArray.splice(index, 0, inputNumber);
  }
  return sortedArray;
}

console.log(custom13(sample2));
console.log(custom13v2(sample2));
