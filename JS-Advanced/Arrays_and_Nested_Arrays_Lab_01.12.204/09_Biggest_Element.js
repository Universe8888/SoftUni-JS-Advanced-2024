function biggestEl(matrix) {
    let matrixRows = matrix.length;
    let matrixCols = matrix[0].length;
    let biggestElement = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrixRows; row++) {
        for (let col = 0; col < matrixCols; col++) {
            if (matrix[row][col] > biggestElement) {
                biggestElement = matrix[row][col];
            }
        }
    }

    console.log(biggestElement);
}

biggestEl([[20, 50, 10],[8, 33, 145]]);
console.log('-------------------');
biggestEl([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]);