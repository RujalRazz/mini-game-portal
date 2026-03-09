let container = document.querySelector(".container");
let weaponBox = container.querySelector(".weapon-box");
let playerChoicesBox = container.querySelector(".player-choices");
let weapons = weaponBox.querySelectorAll(".weapons div");

//Add event listeners to each weapon choice
for (let i = 0; i < weapons.length; i++){
    weapons[i].addEventListener("click", (e)=>{
        weaponBox.style.display = "none";
        playerChoicesBox.style.display = "block";
    })
}