const games = [
  { 
    title: "Rock Paper Scissors", 
    image: "./assets/images/rockPaperScissor.jpg",
    description: "Challenge the computer and test your luck.",
    link: "games/rock_paper_scissors/rock_paper_scissors.html"
  },
  { 
    title: "Snake Game", 
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23c084fc' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='60' text-anchor='middle' fill='white'%3E🐍%3C/text%3E%3C/svg%3E",
    description: "Eat food, grow longer and avoid crashing.",
    link: "./games.html"
  },
  { 
    title: "Tic Tac Toe", 
    image: "./assets/images/tiktaktoe.jpeg",
    description: "Classic X and O battle against a friend or AI.",
    link: "games/tictactoe.html"
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