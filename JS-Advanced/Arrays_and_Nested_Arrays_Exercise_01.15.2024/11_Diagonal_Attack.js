function diagonalAttack(input) {
    let matrix = [];
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input.length - 1;

    for (let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][firstIndex++];
        secondDiagonal += matrix[i][secondIndex--];
    }

    if (firstDiagonal === secondDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (i !== j && i !== input.length - 1 - j) {
                    matrix[i][j] = firstDiagonal;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

diagonalAttack([ '5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1' ]);
console.log('----------------');
diagonalAttack([ '1 1 1', '1 1 1', '1 1 0' ]);

// 100/100