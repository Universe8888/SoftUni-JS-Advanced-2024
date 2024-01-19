function spiralMatrix(rows, cols) {
    let matrix = [];
    let counter = 1;
    let startCol = 0;
    let endCol = cols - 1;
    let startRow = 0;
    let endRow = rows - 1;

    const createMatrix = () => {
        for (let i = 0; i < rows; i++) {
            matrix.push([]);
        }
    };

    const fillMatrix = () => {
        while (startCol <= endCol && startRow <= endRow) {
            for (let i = startCol; i <= endCol; i++) {
                matrix[startRow][i] = counter++;
            }

            startRow++;

            for (let i = startRow; i <= endRow; i++) {
                matrix[i][endCol] = counter++;
            }

            endCol--;

            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = counter++;
            }

            endRow--;

            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = counter++;
            }

            startCol++;
        }
    };

    const printMatrix = () => {
        for (let i = 0; i < rows; i++) {
            console.log(matrix[i].join(' '));
        }
    };

    createMatrix();
    fillMatrix();
    printMatrix();
}

spiralMatrix(5, 5);
console.log('----------------');
spiralMatrix(3, 3);

// 100/100