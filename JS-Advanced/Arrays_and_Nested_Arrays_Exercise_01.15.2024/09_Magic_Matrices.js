function magicMatrix(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((a, b) => a + b, 0);
        let colSum = matrix.map((x) => x[i]).reduce((a, b) => a + b, 0);
        if (rowSum !== sum || colSum !== sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]); // true
console.log('-----');
magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]); // false
console.log('-----');
magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]); // true

// judge 100/100