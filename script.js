// Function to simmulate time in milliseconds
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
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
if (answer == "y"){
    playing = 1;
    alert("Alright, lets get started");
    while (playing == 1){
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
        if (choice == "rock" || choice == "Rock" || choice == "ROCK"){
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
        else if (choice == "paper" || choice == "Paper" || choice == "PAPER"){
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
        else if (choice == "scissors" || choice == "Scissors" || choice == "SCISSORS"){
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
        let playAgain = 0;
        while (playAgain == 0){
            answer = prompt("Would you like to keep playing? (y/n)");
            if (answer == "y"){
                playAgain = 1
            }
            else if (answer == "n"){
                playAgain = 2;
                playing = 2;
            }
            else {
                alert('Sorry I must be high. Try again');
            }
        }
    }
}else if (answer == "n"){
    alert("Darn you got my hopes up");
    playing = 2;
}else {
    alert('Sorry I must be high. Try "y" or "n"');
}}
