const games = [
  { 
    title: "Rock Paper Scissors", 
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%239333ea' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='40' text-anchor='middle' fill='white' font-weight='bold'%3E✊✋✌️%3C/text%3E%3C/svg%3E",
    description: "Challenge the computer in this classic strategy game." 
  },
  { 
    title: "Snake Game", 
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23c084fc' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='60' text-anchor='middle' fill='white'%3E🐍%3C/text%3E%3C/svg%3E",
    description: "Eat food, grow longer and avoid crashing." 
  },
  { 
    title: "Tic Tac Toe", 
    image: "./assets/images/tiktaktoe.jpeg",
    description: "Classic X and O battle against a friend or AI." 
  },
];

let currentIndex = 1; // Start with middle card active
const carousel = document.getElementById("gameCarousel");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

function createGameCards() {
  games.forEach((game, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (index === currentIndex) card.classList.add("active");
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>`;
    carousel.appendChild(card);
  });
}

function updateCards() {
  const cards = document.querySelectorAll(".card");
  
  cards.forEach((card, index) => {
    card.classList.remove("active");
    
    // Add active class to current card
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