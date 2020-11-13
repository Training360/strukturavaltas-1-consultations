fnDeclaration();
fnExpr();

function fnDeclaration() {
  console.log('fnDec');
}

var fnExpr = () => {
  console.log('fnExp');
};

// fnExpr = '10';

// const a = [1, 2, 3];
// const b = a;
// Object.freeze(a);
// b[0] = 10;
// console.log(a, b);
