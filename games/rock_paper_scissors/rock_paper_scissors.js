let container = document.querySelector(".container");
let weaponBox = container.querySelector(".weapon-box");
let playerChoicesBox = container.querySelector(".player-choices");
let weapons = weaponBox.querySelectorAll(".weapons div");
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice img");

// define the computer possible choices
let computerChoices = ["rock", "paper", "scissors"];

//Add event listeners to each weapon choice
for (let i = 0; i < weapons.length; i++){
    weapons[i].addEventListener("click", (e)=>{

        //Hide the weapon box and show the player choices
        weaponBox.style.display = "none";
        playerChoicesBox.style.display = "block";

        // Add a delay before showing the player choices
        setTimeout(() => {
            playerChoicesBox.classList.add("active");
        }, 1000);

        setTimeout(() => {
            let playerChoices = playerChoicesBox.querySelectorAll("div");
            for(let i = 0; i< playerChoices.length; i++){
                playerChoices[i].style.animationPlayState = "paused";
            } 

            // set the player choice to the selected weapon
            player.src = e.target.src;

            let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(randomChoice);
            computer.src = `../../assets/images/RPS/${randomChoice}.png`;
    }, 3000);
})
}