function computerPlay () { // Get random item from array list.

    const itemSelect = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * itemSelect.length);

    return itemSelect[randomChoice]
}

function playRound(playerInput, computerInput) {

    if ((playerInput === "Rock" && computerInput === "Scissors") || (playerInput === "Paper" && computerInput === "Rock") || (playerInput === "Scissors" && computerInput === "Paper")) {
        console.log("Player wins!");
        console.log(playerInput, computerInput);
        return "win"
    } else if (playerInput === computerInput) {
        console.log("It's a draw. Stand down.")
        console.log(playerInput, computerInput);
        return "draw"
    } else {
        console.log("Player loses.")
        console.log(playerInput, computerInput);
        return "lose"
    }
}

playRound("Paper", computerPlay());