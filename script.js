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
// Allows for score keeping
let usrScore = 0;
let comScore = 0;
// Option to play the game
if (answer = "y"){
    alert("Alright, lets get started");
    let choice = prompt("Your choice: ");
    sleep(1000);
    alert("Ready...")
    sleep(1000);
    alert("Rock...")
    sleep(1000);
    alert("Paper...")
    sleep(1000);
    alert("Scissors...")
    sleep(1000);
    alert("shoot...")
    let ran = getRandomInt(0, 2); // Generates the outcome
    if (choice = "rock" || "Rock" || "ROCK"){
        if (ran == 0){
            alert("Rock v Scissors ---- You Win");
            usrScore++
        }
        else if (ran == 1){
            alert("Rock v Rock ---- Tie");
        }
        else if (ran == 2){
            alert("Rock v Paper ---- You lose");
            comScore++
        }
    }
    else if (choice = "paper" || "Paper" || "PAPER"){
        if (ran == 0){
            alert("Paper v Rock ---- You Win");
            usrScore++
        }
        else if (ran == 1){
            alert("Paper v Paper ---- Tie");
        }
        else if (ran == 2){
            alert("Paper v Scissors ---- You Lose");
            comScore++
        }
    }
    else if (choice = "scissors" || "Scissors" || "SCISSORS"){
        if (ran == 0){
            alert("Scissors v Paper ---- You Win");
            usrScore++
        }
        else if (ran == 1){
            alert("Scissors v Scissors ---- Tie");
        }
        else if (ran == 2){
            alert("Scissors v Rock ---- You Lose");
            comScore++
        }
    }
    alert("The score is now " + usrScore + " user score " + comScore + " computer score.")
}else if (answer = "n"){
    alert("Darn you got my hopes up");
}else {
    alert('Sorry I must be high. Try "y" or "n"');
}