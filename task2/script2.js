let board = ["", "", "", "", "", "", "", "", ""];
let human = "X";
let ai = "O";
let gameActive = true;

const boardElement = document.getElementById("board");
const statusText = document.getElementById("status");

// Create board
function createBoard() {
    boardElement.innerHTML = "";
    board.forEach((cell, index2) => {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.innerText = cell;
        div.addEventListener("click", () => handleMove(index2));
        boardElement.appendChild(div);
    });
}

function handleMove(index2) {
    if (board[index2] !== "" || !gameActive) return;

    board[index2] = human;
    createBoard();

    if (checkWinner(board, human)) {
        statusText.innerText = "You Win!";
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusText.innerText = "Draw!";
        return;
    }

    let bestMove = minimax(board, ai).index2;
    board[bestMove] = ai;

    createBoard();

    if (checkWinner(board, ai)) {
        statusText.innerText = "AI Wins!";
        gameActive = false;
    }
}

// Check Winner
function checkWinner(b, player) {
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    return winPatterns.some(pattern =>
        pattern.every(i => b[i] === player)
    );
}

// Minimax Algorithm
function minimax(newBoard, player) {
    let emptySpots = newBoard.map((v, i) => v === "" ? i : null).filter(v => v !== null);

    if (checkWinner(newBoard, human)) return { score: -10 };
    if (checkWinner(newBoard, ai)) return { score: 10 };
    if (emptySpots.length === 0) return { score: 0 };

    let moves = [];

    for (let i = 0; i < emptySpots.length; i++) {
        let move = {};
        move.index2 = emptySpots[i];

        newBoard[emptySpots[i]] = player;

        if (player === ai) {
            let result = minimax(newBoard, human);
            move.score = result.score;
        } else {
            let result = minimax(newBoard, ai);
            move.score = result.score;
        }

        newBoard[emptySpots[i]] = "";
        moves.push(move);
    }

    let bestMove;

    if (player === ai) {
        let bestScore = -Infinity;
        moves.forEach((m, i) => {
            if (m.score > bestScore) {
                bestScore = m.score;
                bestMove = i;
            }
        });
    } else {
        let bestScore = Infinity;
        moves.forEach((m, i) => {
            if (m.score < bestScore) {
                bestScore = m.score;
                bestMove = i;
            }
        });
    }

    return moves[bestMove];
}

// Restart
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusText.innerText = "";
    createBoard();
}

// Start game
createBoard();
