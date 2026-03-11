const board = document.getElementById("game-board");
const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("level");

const overlay = document.getElementById("game-overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayScore = document.getElementById("overlay-score");
const overlayLevel = document.getElementById("overlay-level");
const overlayMessage = document.getElementById("overlay-message");
const replayBtn = document.getElementById("replay-btn");
const exitBtn = document.getElementById("exit-btn");

const BOARD_SIZE = 500;
const CELL_SIZE = 25;
const ROWS = BOARD_SIZE / CELL_SIZE;
const COLS = BOARD_SIZE / CELL_SIZE;

let snake = [];
let direction = { x: 1, y: 0 };
let nextDirection = { x: 1, y: 0 };

let food = null;
let walls = [];

let score = 0;
let level = 1;
let speed = 180;
let gameInterval = null;

let isPaused = false;
let isGameOver = false;

function createBoard() {
  board.innerHTML = "";

  for (let i = 0; i < ROWS * COLS; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}

function getCell(x, y) {
  return board.children[y * COLS + x];
}

function updateUI() {
  scoreEl.textContent = score;
  levelEl.textContent = level;
}

function showOverlay(title, message, buttonText) {
  overlayTitle.textContent = title;
  overlayScore.textContent = score;
  overlayLevel.textContent = level;
  overlayMessage.textContent = message;
  exitBtn.textContent = buttonText;
  overlay.classList.remove("hidden");
}

function hideOverlay() {
  overlay.classList.add("hidden");
}

function resetGame() {
  snake = [
    { x: 5, y: 10 },
    { x: 4, y: 10 },
    { x: 3, y: 10 }
  ];

  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };

  food = null;
  walls = [];
  score = 0;
  level = 1;
  speed = 180;
  isPaused = false;
  isGameOver = false;

  updateUI();
  hideOverlay();
  spawnFood();
  render();
  startGameLoop();
}

function spawnFood() {
  while (true) {
    const x = Math.floor(Math.random() * COLS);
    const y = Math.floor(Math.random() * ROWS);

    const onSnake = snake.some(segment => segment.x === x && segment.y === y);
    const onWall = walls.some(wall => wall.x === x && wall.y === y);

    if (!onSnake && !onWall) {
      const isBlueFood = Math.random() < 0.3;
      food = {
        x,
        y,
        type: isBlueFood ? "blue" : "white",
        points: isBlueFood ? 200 : 100
      };
      break;
    }
  }
}

function generateWalls() {
  walls = [];
  const wallCount = 4;

  while (walls.length < wallCount) {
    const x = Math.floor(Math.random() * COLS);
    const y = Math.floor(Math.random() * ROWS);

    const onSnake = snake.some(segment => segment.x === x && segment.y === y);
    const onFood = food && food.x === x && food.y === y;
    const nearStart = x < 8 && y === 10;
    const alreadyWall = walls.some(wall => wall.x === x && wall.y === y);

    if (!onSnake && !onFood && !nearStart && !alreadyWall) {
      walls.push({ x, y });
    }
  }
}

function updateLevel() {
  if (score >= 500 && level === 1) {
    level = 2;
    generateWalls();
  }
}

function clearBoard() {
  for (let i = 0; i < board.children.length; i++) {
    board.children[i].className = "cell";
  }
}

function render() {
  clearBoard();

  snake.forEach((segment, index) => {
    const cell = getCell(segment.x, segment.y);
    if (index === 0) {
      cell.classList.add("snake-head");
    } else {
      cell.classList.add("snake");
    }
  });

  if (food) {
    const foodCell = getCell(food.x, food.y);
    if (food.type === "white") {
      foodCell.classList.add("food");
    } else {
      foodCell.classList.add("big-food");
    }
  }

  walls.forEach(wall => {
    const wallCell = getCell(wall.x, wall.y);
    wallCell.classList.add("wall");
  });
}

function moveSnake() {
  direction = nextDirection;

  const head = snake[0];
  const newHead = {
    x: head.x + direction.x,
    y: head.y + direction.y
  };

  if (
    newHead.x < 0 ||
    newHead.x >= COLS ||
    newHead.y < 0 ||
    newHead.y >= ROWS
  ) {
    endGame();
    return;
  }

  for (let i = 0; i < snake.length - 1; i++) {
    if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
      endGame();
      return;
    }
  }

  if (walls.some(wall => wall.x === newHead.x && wall.y === newHead.y)) {
    endGame();
    return;
  }

  snake.unshift(newHead);

  if (food && newHead.x === food.x && newHead.y === food.y) {
    score += food.points;

    if (speed > 70) {
      speed -= 8;
    }

    updateLevel();
    updateUI();
    spawnFood();
    restartLoopForNewSpeed();
  } else {
    snake.pop();
  }

  render();
}

function gameTick() {
  if (isPaused || isGameOver) return;
  moveSnake();
}

function startGameLoop() {
  clearInterval(gameInterval);
  gameInterval = setInterval(gameTick, speed);
}

function restartLoopForNewSpeed() {
  clearInterval(gameInterval);
  gameInterval = setInterval(gameTick, speed);
}

function togglePause() {
  if (isGameOver) return;

  isPaused = !isPaused;

  if (isPaused) {
    showOverlay("Paused", "Click Replay to restart");
  } else {
    hideOverlay();
  }
}

function endGame() {
  isGameOver = true;
  clearInterval(gameInterval);
  showOverlay("Game Over", "Click Replay to play again", "Exit");
}

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key === " " || e.code === "Space") {
    e.preventDefault();
    togglePause();
    return;
  }

  if (isPaused || isGameOver) return;

  if (key === "ArrowUp" && direction.y !== 1) {
    nextDirection = { x: 0, y: -1 };
  } else if (key === "ArrowDown" && direction.y !== -1) {
    nextDirection = { x: 0, y: 1 };
  } else if (key === "ArrowLeft" && direction.x !== 1) {
    nextDirection = { x: -1, y: 0 };
  } else if (key === "ArrowRight" && direction.x !== -1) {
    nextDirection = { x: 1, y: 0 };
  }
});

replayBtn.addEventListener("click", () => {
  resetGame();
});

exitBtn.addEventListener("click", () => {
  if (isGameOver) {
    window.location.href = "../../games.html";
  } else if (isPaused) {
    togglePause();
  }
});

createBoard();
resetGame();