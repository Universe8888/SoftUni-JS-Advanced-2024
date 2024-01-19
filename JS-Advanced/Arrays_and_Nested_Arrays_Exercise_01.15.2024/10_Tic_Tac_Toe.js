function ticTacToe(arr) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let player = 'X';
    let winner = false;
    let moves = 0;

    for (let i = 0; i < arr.length; i++) {
        moves++;
        let [row, col] = arr[i].split(' ').map(Number);
        if (dashboard[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            moves--;
            continue;
        }
        dashboard[row][col] = player;
        if (checkWinner(dashboard, player)) {
            winner = true;
            break;
        }
        player = player === 'X' ? 'O' : 'X';
    }

    if (winner) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }
    console.log(dashboard.map(row => row.join('\t')).join('\n'));

    function checkWinner(dashboard, player) {
        // check rows
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i].every(x => x === player)) {
                return true;
            }
        }
        // check columns
        for (let i = 0; i < dashboard.length; i++) {
            let col = dashboard.map(x => x[i]);
            if (col.every(x => x === player)) {
                return true;
            }
        }
        // check diagonals
        let mainDiagonal = [];
        let secondaryDiagonal = [];
        for (let i = 0; i < dashboard.length; i++) {
            mainDiagonal.push(dashboard[i][i]);
            secondaryDiagonal.push(dashboard[i][dashboard.length - 1 - i]);
        }
        if (mainDiagonal.every(x => x === player) || secondaryDiagonal.every(x => x === player)) {
            return true;
        }
        return false;
    }
    return;
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0" ]); // Player 0 wins!
console.log('-----');
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1" ]); // This place is already taken. Please choose another! Player X wins!
console.log('-----');
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0" ]); // The game ended! Nobody wins :(

// judge: 90/100