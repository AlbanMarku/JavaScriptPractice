function computerPlay () { // Get random item from array list.

    const itemSelect = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * itemSelect.length);

    return itemSelect[randomChoice]
}

function playRound(playerInput, computerInput) { // Determines winner by comparing pInput to cInput.

    if ((playerInput === "Rock" && computerInput === "Scissors") || (playerInput === "Paper" && computerInput === "Rock") || (playerInput === "Scissors" && computerInput === "Paper")) {
        console.log("Player wins!");
        return "win"

    } else if (playerInput === computerInput) {
        console.log("It's a draw. Stand down.")
        return "draw"

    } else {
        console.log("Player loses.")
        return "lose"
    }
}

function game() {

    let pScore = 0;
    let cScore = 0;

    for (let i = 0; i < 5; i++) {
        let results = playRound("Rock", computerPlay());
        
        switch (results) {
            case "win":
                pScore++;
                console.log("Player won that round.")
                break;
            case "lose":
                cScore++;
                console.log("Computer won that round.")
                break;
            case "draw":
                console.log("Nobody won that round.")
                break;
            default:
                console.log("I'm going to honest here, I don't know why I'm here.")
        }
    }
    
}