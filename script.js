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
let playing = 0;
while (playing == 0){let answer = prompt("Hello! would you like to play rock, paper, scissors?");
// Allows for score keeping
let usrScore = 0;
let comScore = 0;
// Option to play the game
if (answer = "y"){
    playing = 1;
    console.log("Alright, lets get started");
    while (playing = 1){
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
            if (ran == 0){
                console.log("Rock v Scissors ---- You Win");
                usrScore++
            }
            else if (ran == 1){
                console.log("Rock v Rock ---- Tie");
            }
            else if (ran == 2){
                console.log("Rock v Paper ---- You lose");
                comScore++
            }
        }
        else if (choice = "paper" || "Paper" || "PAPER"){
            if (ran == 0){
                console.log("Paper v Rock ---- You Win");
                usrScore++
            }
            else if (ran == 1){
                console.log("Paper v Paper ---- Tie");
            }
            else if (ran == 2){
                console.log("Paper v Scissors ---- You Lose");
                comScore++
            }
        }
        else if (choice = "scissors" || "Scissors" || "SCISSORS"){
            if (ran == 0){
                console.log("Scissors v Paper ---- You Win");
                usrScore++
            }
            else if (ran == 1){
                console.log("Scissors v Scissors ---- Tie");
            }
            else if (ran == 2){
                console.log("Scissors v Rock ---- You Lose");
                comScore++
            }
        }
        alert("The score is now " + usrScore + " user score " + comScore + " computer score.")
        let playAgain = 0;
        while (playAgain == 0){
            answer = prompt("Would you like to keep playing? (y/n)");
            if (answer = "y"){
                playAgain = 1
            }
            else if (answer = "n"){
                playAgain = 2;
                playing = 2;
            }
            else {
                console.log('Sorry I must be high. Try again');
            }
        }
    }
}else if (answer = "n"){
    console.log("Darn you got my hopes up");
    playing = 2;
}else {
    console.log('Sorry I must be high. Try "y" or "n"');
}}
