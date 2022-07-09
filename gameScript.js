const itemSelect = ["Rock", "Paper", "Scissors"];
const butt = document.querySelectorAll(".optionBtn");
const pBox = document.querySelector("#player");
const cBox = document.querySelector("#computer");
const scoreTitle = document.querySelector("#scoreTitle");
const infoScore = document.querySelector("#infoScore");
const scoreRefArea = document.querySelector(".descArea");
const winnerDiv = document.createElement("h1");
const replayBox = document.createElement("button");
const displayScoreArea = document.querySelector(".scoreArea");


let pScore = 0;
let cScore = 0;


function computerPlay () { // Get random item from array list.

    const randomChoice = Math.floor(Math.random() * itemSelect.length);

    return itemSelect[randomChoice]
}

function playRound(playerInput, computerInput) { // Determines winner by comparing pInput to cInput then sets info to relevent info. When 5 points, display play again button.
    if ((playerInput === "Rock" && computerInput === "Scissors") || (playerInput === "Paper" && computerInput === "Rock") || (playerInput === "Scissors" && computerInput === "Paper")) {
        console.log("Player wins!");
        pScore++;
        pBox.textContent = pScore;
        scoreTitle.textContent = "Player round win!"
        infoScore.textContent = `${playerInput} wins against ${computerInput}`;
        if (pScore === 5) {
            winnerDiv.textContent = "Winner!";
            winnerDiv.classList.add("winnerText");
            scoreRefArea.appendChild(winnerDiv);
            disableButton(true);
            playAgain();
        } else {
            return "more"
        }
        

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
        if (cScore === 5) {
            winnerDiv.textContent = "Loser";
            winnerDiv.classList.add("winnerText");
            scoreRefArea.appendChild(winnerDiv);
            disableButton(true);
            playAgain();
        } else {
            return "more"
        }
    }
}


butt.forEach(element => { //Sends button text to play round as player input.
    element.addEventListener("click", () => {
        playRound(element.textContent, computerPlay());
        element.classList.add("clicker");
    });
});

butt.forEach(element => { //When done animating, remove the css border.
    element.addEventListener("transitionend", () => {
        element.classList.remove("clicker");
    });
});

replayBox.addEventListener("transitionend", (e) => { //When clicked on, remove the button. Done by listening to specific transition.
    if (e.propertyName == "border-left-color") {
        replayBox.classList.remove("clicker");
        replayBox.remove();
    }
});

function disableButton(toggler) {//Determines if buttons should be enabled or disabled.
    butt.forEach(element => {
        if (toggler == true) {
            element.disabled =true;
        } else {
            element.disabled = false;
        }
    });
}

function playAgain() { //Displays play again button.
    replayBox.textContent = "Play again?";
    replayBox.classList.add("againBtn");
    displayScoreArea.appendChild(replayBox);
}

replayBox.addEventListener("click", () => {//Reset the game when play again button is pressed.
    pScore = 0;
    cScore = 0;
    pBox.textContent = pScore;
    cBox.textContent = cScore;
    disableButton(false);
    replayBox.classList.add("clicker");
    winnerDiv.textContent = "";
    scoreTitle.textContent = "Rematch!"
    infoScore.textContent = "Let's go!";
});