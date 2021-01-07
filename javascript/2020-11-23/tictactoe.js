const matrix = [
    ['O', 'O', 'X'],
    ['O', null, null],
    ['O', null, null],
];

// console.log(matrix[2][1]);

for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
        console.log(matrix[i][j]);
    }
}

// matrix.filter(item => item > 0)

