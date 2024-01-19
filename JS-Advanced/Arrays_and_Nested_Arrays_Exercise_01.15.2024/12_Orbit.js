function orbit(input) {
    let matrix = [];
    let rows = input[0];
    let cols = input[1];
    let x = input[2];
    let y = input[3];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }
}

orbit([4, 4, 0, 0]);
console.log('----------------');
orbit([5, 5, 2, 2]);
console.log('----------------');
orbit([3, 3, 2, 2]);

// 100/100