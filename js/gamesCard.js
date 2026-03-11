const games = [
  { 
    title: "Rock Paper Scissors", 
    image: "./assets/images/rockPaperScissor.jpg",
    description: "Challenge the computer in this classic strategy game.",
    link: "./games.html"
  },
  { 
    title: "Snake Game", 
    image: "./assets/images/snake.gif",
    description: "Eat food, grow longer and avoid crashing.",
    link: "./games/snake_game/snake_game.html"
  },
  { 
    title: "Tic Tac Toe", 
    image: "./assets/images/tiktaktoe.jpeg",
    description: "Classic X and O battle against a friend or AI.",
    link: "./games.html"
  },
];

let currentIndex = 1; 
const carousel = document.getElementById("gameCarousel");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

function createGameCards() {
  games.forEach((game, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (index === currentIndex){
      card.classList.add("active");
    }
    
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <a href="${game.link}" class="play">Play Now</a>`;
    carousel.appendChild(card);
  });
}

function updateCards() {
  const cards = document.querySelectorAll(".card");
  
  cards.forEach((card, index) => {
    card.classList.remove("active");
    if (index === currentIndex) {
      card.classList.add("active");
    }
  });
  
  updateArrows();
}

function updateArrows() {
  leftArrow.disabled = (currentIndex === 0);
  rightArrow.disabled = (currentIndex === games.length - 1);
}

rightArrow.onclick = () => {
  if (currentIndex < games.length - 1) {
    currentIndex++;
    updateCards();
  }
};

leftArrow.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCards();
  }
};

createGameCards();
updateCards();