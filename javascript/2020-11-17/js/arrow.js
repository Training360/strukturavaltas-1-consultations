const functionExpression = function (param) {
    console.log(arguments);
    console.log('function expression ', param);
}

const functionExpressionWArrow = (param) => {
    // Az arrow function nem hoz létre arguments object
    // console.log(arguments);
    console.log('function expression ', param);
}

const PI = 3.14;

functionExpression('parameter value');
functionExpressionWArrow('arrow param');

const fnExprReturnValue = function (param) {
    return 'param value: ' + param;
}

const fnExprReturnValueWArrow = (param) => 'param value: ' + param;


console.log(fnExprReturnValue(10));
console.log(fnExprReturnValueWArrow(10));