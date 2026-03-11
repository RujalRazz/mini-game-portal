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
let wonValueTxt = document.querySelector(".score-box .won h3 span");
let lostValueTxt = document.querySelector(".score-box .lost h3 span");
let drawValueTxt = document.querySelector(".score-box .draw h3 span");

//initialize the scores 
let won = 0, lost = 0, draw = 0;

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

        //set the revealing hand to rock (initial orientation)
        player.src = "../../assets/images/RPS/rock.png";
        player.className = "rock";                     // give the <img> a weapon class
        computer.src = `../../assets/images/RPS/rock.png`;
        computer.className = "rock";


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
            let userChoice = e.target.parentElement.className.toLowerCase();        // rock/paper/scissors
            player.src = e.target.src;
            player.className = userChoice;                                         // update class for CSS rules

            let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(randomChoice);
            computer.src = `../../assets/images/RPS/${randomChoice}.png`;
            computer.className = randomChoice;

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

    //updated the result text and scores based on the outcome of the game
    if (result === "You"){
        resultTxt.innerHTML = "Congrats, You Won!  &#x1F389;";
        won++;
        wonValueTxt.innerHTML = won;
    }else if (result === "Computer"){
        resultTxt.innerHTML = "Sorry, You Lost!";
        lost++;
        lostValueTxt.innerHTML = lost;
    }else{
        resultTxt.innerHTML = "Match Draw!";
        draw++;
        drawValueTxt.innerHTML = draw;
    }
}

// add event listener to the play again button
playAgainBtn.addEventListener("click", ()=>{
    //resume the game state
    playerChoicesBox.classList.remove("active");
    container.style.height = "380px";
    resultBox.style.display = "none";
    weaponBox.style.display = "block";
    playerChoicesBox.style.display = "none";

    //Resume the animations on the revealing hands when player choice his weapon
    let playerChoices = playerChoicesBox.querySelectorAll("div");
    for(let i = 0; i< playerChoices.length; i++){
        playerChoices[i].style.animationPlayState = "running";
    }
})

