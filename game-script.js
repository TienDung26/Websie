let gameBoardArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X'; // 'X' bắt đầu trước
let gameOver = false;

// Tạo bảng cờ
const gameBoard = document.getElementById("game-board");
const statusDisplay = document.getElementById("status");
const newGameButton = document.getElementById("new-game");

createGameBoard();

function createGameBoard() {
    gameBoard.innerHTML = ''; // Reset bảng cờ
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const cell = document.createElement('div');
            cell.classList.add('game-cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', handleCellClick);
            gameBoard.appendChild(cell);
        }
    }
}

// Xử lý khi người chơi click vào ô
function handleCellClick(event) {
    if (gameOver) return; // Nếu game đã kết thúc thì không cho click

    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (gameBoardArray[row][col] === '') {
        gameBoardArray[row][col] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWinner(currentPlayer)) {
            statusDisplay.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (isBoardFull()) {
            statusDisplay.textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            statusDisplay.textContent = `${currentPlayer}'s turn`;
        }
    }
}

// Kiểm tra người thắng
function checkWinner(player) {
    // Kiểm tra hàng
    for (let row = 0; row < 3; row++) {
        if (gameBoardArray[row][0] === player && gameBoardArray[row][1] === player && gameBoardArray[row][2] === player) {
            return true;
        }
    }

    // Kiểm tra cột
    for (let col = 0; col < 3; col++) {
        if (gameBoardArray[0][col] === player && gameBoardArray[1][col] === player && gameBoardArray[2][col] === player) {
            return true;
        }
    }

    // Kiểm tra đường chéo
    if (gameBoardArray[0][0] === player && gameBoardArray[1][1] === player && gameBoardArray[2][2] === player) {
        return true;
    }

    if (gameBoardArray[0][2] === player && gameBoardArray[1][1] === player && gameBoardArray[2][0] === player) {
        return true;
    }

    return false;
}

// Kiểm tra nếu bảng đã đầy
function isBoardFull() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (gameBoardArray[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

// Bắt đầu trò chơi mới
newGameButton.addEventListener('click', function() {
    gameOver = false;
    currentPlayer = 'X'; // Reset người chơi
    gameBoardArray = [['', '', ''], ['', '', ''], ['', '', '']];
    statusDisplay.textContent = `${currentPlayer}'s turn`;
    createGameBoard(); // Tạo lại bảng cờ
});
