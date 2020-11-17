// fuction definicion
// 1. function declaration
// 2. function expression

// function functionName([paraméterek]) {
//     függvény törzse
// }


function sum(a, b) {
    // úgy néz ki mint egy tömb, DE NEM AZ!!
    console.log(arguments);
    return a + b;
}

// function invocation
console.log(sum(2, 15));
console.log(sum(676, 150));
const x = 10;
const y = 20;
console.log(sum(x, y)); // sum (10, 20), a = 10, b = 20

function logArray(arr) {
    arr.push('NEW VALUE');
    console.log(arr);
}

logArray([1, 2, 3, 4, 5]);
const numericArray = [1, 2, 3, 4, 5];
logArray(numericArray);
console.log('NumericArray', numericArray);

function closure() {
    let i = 0;
    return function () {
        i += 1;
        console.log(i);
    }
}

const result = closure();
result();
result();
result();
result();
result();

(function (p) {
    console.log('logger is running: ', p);
})('param')