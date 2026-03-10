let container = document.querySelector(".container");
let weaponBox = container.querySelector(".weapon-box");
let playerChoicesBox = container.querySelector(".player-choices");
let weapons = weaponBox.querySelectorAll(".weapons div");
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice img");
let resultBox = container.querySelector(".result-box");
let resultTxt = resultBox.querySelector("h3");
let playAgainBtn = resultBox.querySelector("button");
let result = document.querySelector('.container .result');

// define the computer possible choices
let computerChoices = ["rock", "paper", "scissors"];

// define the possible outcomes of the game
let outcomes = {
    rockrock : "Draw",
    rockpaper : "Computer",
    rockscissors : "You",
    paperpaper : "Draw",
    paperscissors : "Computer",
    paperrock : "You",
    scissorsscissors : "Draw",
    scissorsrock : "Computer",
    scissorspaper : "You"
}

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

            let userChoice = e.target.parentElement.className.toLowerCase();
            let outcomeValue = outcomes[userChoice + randomChoice];

            //show the result 
            showResult(outcomeValue);
    }, 3000);
})
}

let showResult = (result) => {

    // show the result box and set container height
    container.style.height = "415px";
    resultBox.style.display = "block";

    if (result === "You"){
        resultTxt.innerHTML = "Congrats, You Won!  &#x1F389;";
    }else if (result === "Computer"){
    resultTxt.innerHTML = "Sorry, You Lost!";
    }else{
    resultTxt.innerHTML = "Match Draw!";
    }
}