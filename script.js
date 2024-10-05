// Function to simmulate time in milliseconds
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
        }
    }
}

// Function to generate random number
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Introduction "Would you like to play"
let answer = prompt("Hello! would you like to play rock, paper, scissors?");
// Option to play the game
if (answer = "y"){
    console.log("Alright, lets get started");
    let choice = prompt("Your choice: ");
    sleep(1000);
    console.log("Ready...")
    sleep(1000);
    console.log("Rock...")
    sleep(1000);
    console.log("Paper...")
    sleep(1000);
    console.log("Scissors...")
    sleep(1000);
    console.log("shoot...")
    let ran = getRandomInt(0, 2); // Generates the outcome
    if (choice = "rock" || "Rock" || "ROCK"){
        paper = 2;
        rock = 1;
        scissors = 0;
        if (ran == 0){
            alert();
        }
        else if (ran == 1){
            alert();
        }
        else if (ran == 2){
            alert();
        }
    }
    else if (choice = "paper" || "Paper" || "PAPER"){
        scissors = 2;
        paper = 1;
        rock = 0;
        if (ran == 0){
            alert();
        }
        else if (ran == 1){
            alert();
        }
        else if (ran == 2){
            alert();
        }
    }
    else if (choice = "scissors" || "Scissors" || "SCISSORS"){
        rock = 2;
        scissors = 1;
        paper = 0;
        if (ran == 0){
            alert();
        }
        else if (ran == 1){
            alert();
        }
        else if (ran == 2){
            alert();
        }
    }
}else if (answer = "n"){
    console.log("Darn you got my hopes up");
}else {
    console.log('Sorry I must be high. Try "y" or "n"');
}