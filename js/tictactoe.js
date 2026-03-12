let boxes = [...document.querySelectorAll('.cell')];
let modeSelect = document.getElementById('mode-selection');
let gameArea = document.getElementById('game-area');
let menuBtn = document.getElementById('menu');
let resetBtn = document.getElementById('reset-btn');
let xScoreDisplay = document.getElementById('x-score');
let oScoreDisplay = document.getElementById('o-score');
let dScoreDisplay = document.getElementById('d-score');
let xLabel = document.getElementById('x-label');
let oLabel = document.getElementById('o-label');

let turnO = true;
let singlePlayer = false;
let score = { X: 0, O: 0, D: 0 };
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// mode selection
document.getElementById('single-player-btn').addEventListener('click', function () {
    singlePlayer = true;
    launchGame();
});

document.getElementById('two-player-btn').addEventListener('click', function () {
    singlePlayer = false;
    launchGame();
});

function launchGame() {
    modeSelect.style.display = 'none';
    gameArea.style.display = 'block';

    xLabel.textContent = 'Player X';
    oLabel.textContent = singlePlayer ? 'Computer' : 'Player O';

    score = { X: 0, O: 0, D: 0 };
    updateScoreboard();
    resetGame();
}

function backToMenu() {
    gameArea.style.display = 'none';
    modeSelect.style.display = 'block';
}

// cell click handler
boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        if (box.innerText !== "" || gameOver) return;
        if (singlePlayer && !turnO) return;

        if (turnO) {
            box.innerText = 'X';
            box.classList.add('taken', 'x');
            turnO = false;
        } else {
            box.innerText = 'O';
            box.classList.add('taken', 'o');
            turnO = true;
        }

        if (checkWinner()) return;

        if (singlePlayer) {
            setTimeout(function () {
                computerMove();
                checkWinner(); 
            }, 400);
        }
    });
});

// computer AI
function computerMove() {
    if (gameOver) return; 

    let emptyBoxes = [];
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerText === "") emptyBoxes.push(i);
    }
    if (emptyBoxes.length === 0) return;

    // tries to win, then blocks
    let move = findWinningMove('O');
    if (move === -1) move = findWinningMove('X');
    if (move === -1) move = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];

    boxes[move].innerText = 'O';
    boxes[move].classList.add('taken', 'o');
    turnO = true;
}

function findWinningMove(player) {
    for (let pattern of winPatterns) {
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;

        if (a === player && b === player && c === "") return pattern[2];
        if (a === player && c === player && b === "") return pattern[1];
        if (b === player && c === player && a === "") return pattern[0];
    }
    return -1;
}

function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            pattern.forEach(function (i) { boxes[i].classList.add('win'); });

            if (pos1Val === 'X') {
                score.X++;
            } else {
                score.O++;
            }
            
            updateScoreboard();
            gameOver = true;
            return true;
        }
    }

    // draw check
    let allFilled = boxes.every(function (box) { return box.innerText !== ""; });
    if (allFilled) {
        score.D++;
        updateScoreboard();
        gameOver = true;
        return true;
    }

    return false;
}

function resetGame() {
    turnO = true;
    gameOver = false;
    for (let box of boxes) {
        box.innerText = "";
        box.classList.remove('taken', 'x', 'o', 'win');
    }
}

function updateScoreboard() {
    xScoreDisplay.textContent = score.X;
    oScoreDisplay.textContent = score.O;
    dScoreDisplay.textContent = score.D;
}

menuBtn.addEventListener('click', backToMenu);
resetBtn.addEventListener('click', resetGame);