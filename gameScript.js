function computerPlay () { // Get random item from array list.

    const itemSelect = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * itemSelect.length);

    return randomChoice
}