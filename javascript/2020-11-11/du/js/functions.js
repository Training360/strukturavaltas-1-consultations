fnDeclaration();
fnExpr(); // TyprError

function fnDeclaration() {
    console.log('fnDec');
}

const fnExpr = () => {
    console.log('fnExp');
};
const arr = [34, 65, 78, 99, 212, 1001];
// fnExpr = '10';

// const a = [1, 2, 3];
// const b = a;
// Object.freeze(a);
// b[0] = 10;
// console.log(a, b);
