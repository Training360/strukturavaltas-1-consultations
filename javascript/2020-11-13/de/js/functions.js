const arr = [3453, 568, 35, 6, 35, 5, 345, 54];
function compareNumbers(a, b) {
    return a - b;
}
const arr = [3453, 568, 35, 6, 35, 5, 345, 54];
console.log(arr.sort((a, b) => a - b));

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function higherOrderFunction(fn1, fn2, x, y) {
    return fn1(x, y) + fn2(x, y);
}

console.log(higherOrderFunction(sum, sub, 20, 10));
