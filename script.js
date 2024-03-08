let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(row, col) {
    if (gameOver || board[row][col] !== '') {
        return;
    }

    board[row][col] = currentPlayer;
    document.getElementById(`cell${row}${col}`).innerText = currentPlayer;

    if (checkWin(currentPlayer)) {
        document.getElementById('message').innerText = "Level cleared! Here is your code1: HAPPY IT'S TEJUU A 1 ";
        gameOver = true;
        return;
    }

    if (checkTie()) {
        document.getElementById('message').innerText = "It's a tie!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player) {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }
    return false;
}

function checkTie() {
    // Check if the board is full
    for (let row of board) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('message').innerText = '';
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
