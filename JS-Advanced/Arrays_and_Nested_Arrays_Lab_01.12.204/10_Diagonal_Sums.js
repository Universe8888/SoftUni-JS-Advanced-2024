function diagnoalSums(matrix) {
    const matrixRows = matrix.length;
    const matrixCols = matrix[0].length;
    let result = [];
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let row = 0;
    let col = 0;

    while (row < matrixRows && col < matrixCols) {
        primaryDiagonalSum += matrix[row][col];
        row++;
        col++;
    }

    row = 0;
    col = matrixCols - 1;

    while (row < matrixRows && col >= 0) {
        secondaryDiagonalSum += matrix[row][col];
        row++;
        col--;
    }

    result.push(primaryDiagonalSum);
    result.push(secondaryDiagonalSum);

    console.log(result.join(' '));
}

diagnoalSums([[20, 40],[10, 60]]);// 80 50
console.log('-------------------');
diagnoalSums([[3, 5, 17],[-1, 7, 14],[1, -8, 89]]);// 99 25