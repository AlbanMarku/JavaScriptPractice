const itemSelect = ["Rock", "Paper", "Scissors"];
const butt = document.querySelectorAll(".optionBtn");
const pBox = document.querySelector("#player");
const cBox = document.querySelector("#computer");
const scoreTitle = document.querySelector("#scoreTitle");
const infoScore = document.querySelector("#infoScore");
const scoreRefArea = document.querySelector(".descArea");
const winnerDiv = document.createElement("h1");

let pScore = 0;
let cScore = 0;


function computerPlay () { // Get random item from array list.

    const randomChoice = Math.floor(Math.random() * itemSelect.length);

    return itemSelect[randomChoice]
}

function playRound(playerInput, computerInput) { // Determines winner by comparing pInput to cInput.
    if ((playerInput === "Rock" && computerInput === "Scissors") || (playerInput === "Paper" && computerInput === "Rock") || (playerInput === "Scissors" && computerInput === "Paper")) {
        console.log("Player wins!");
        pScore++;
        pBox.textContent = pScore;
        scoreTitle.textContent = "Player round win!"
        infoScore.textContent = `${playerInput} wins against ${computerInput}`;
        return "win"

    } else if (playerInput === computerInput) {
        console.log("It's a draw. Stand down.");
        scoreTitle.textContent = "Draw round."
        infoScore.textContent = `${computerInput} was chosen by both players`;
        return "draw"

    } else {
        console.log("Player loses.");
        cScore++;
        cBox.textContent = cScore;
        scoreTitle.textContent = "Computer round win!"
        infoScore.textContent = `${playerInput} is beaten by ${computerInput}`;
        return "lose"
    }
}

function resultDisplay(player, computer) { // Compares passed score and shows winner.
    
    if (player > computer) {
        console.log("ggs to player.")

    } else if (computer > player) {
        console.log("ggs to computer.")

    } else {
        console.log("It's a draw. Stand down.")
    }
}

butt.forEach(element => { //Returns button name.
    element.addEventListener("click", () => {
        playRound(element.textContent, computerPlay());
        element.classList.add("clicker");
    });
});

butt.forEach(element => {
    element.addEventListener("transitionend", () => {
        element.classList.remove("clicker");
    });
});

// game();

winnerDiv.textContent = "winner";
winnerDiv.classList.add("winnerText");
scoreRefArea.appendChild(winnerDiv);