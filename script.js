// Variables
const gameState = {
    isPlaying: 0,
    usrScore: 0,
    comScore: 0,
};

// Function to change text
function changeText(txt){
    document.getElementById("instruction").textContent = txt;
}

// Shows the div
function showDiv(div){
    document.getElementById(div).style.display = "block";
}
// hides the div
function hideDiv(div) {
    document.getElementById(div).style.display = "none";
}

// Function to generate random number
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function darn(){
    hideDiv("playAgainOrQuit");
    hideDiv("options");
    changeText('Hello, would you like to play Rock, Paper, Scissors?');
    showDiv("playYN");
    return
}

function playAgain(){
    hideDiv("options");
    showDiv("playAgainOrQuit");
    document.getElementById("playAgainButton").addEventListener("click", async () => {
        hideDiv("playAgainOrQuit");
        showDiv("options");
        playing();
    })
    document.getElementById("quitButton").addEventListener("click", async () => {
        darn();
    })
}

// Game is playing
function playing(){
    changeText("Select your Option");
    document.getElementById("rockButton").addEventListener("click", async () => {
        choice = "rock";
        evaluateOutcome();
    })
    document.getElementById("paperButton").addEventListener("click", async () => {
        choice = "paper";
        evaluateOutcome();
    })
    document.getElementById("scissorsButton").addEventListener("click", async () => {
        choice = "scissors";
        evaluateOutcome();
    })

}

// Function to evaluate the outcome
function evaluateOutcome() {
    const ran = getRandomInt(0, 2); // Generates the outcome
    if (choice === "rock") {
        if (ran === 0) {
            changeText("Rock v Scissors ---- You Win. Would you like to play again");
            gameState.usrScore++;
        } else if (ran === 1) {
            changeText("Rock v Rock ---- Tie. Would you like to play again");
        } else if (ran === 2) {
            changeText("Rock v Paper ---- You Lose. Would you like to play again");
            gameState.comScore++;
        }
    } else if (choice === "paper") {
        if (ran === 0) {
            changeText("Paper v Rock ---- You Win. Would you like to play again");
            gameState.usrScore++;
        } else if (ran === 1) {
            changeText("Paper v Paper ---- Tie. Would you like to play again");
        } else if (ran === 2) {
            changeText("Paper v Scissors ---- You Lose. Would you like to play again");
            gameState.comScore++;
        }
    } else if (choice === "scissors") {
        if (ran === 0) {
            changeText("Scissors v Paper ---- You Win. Would you like to play again");
            gameState.usrScore++;
        } else if (ran === 1) {
            changeText("Scissors v Scissors ---- Tie. Would you like to play again");
        } else if (ran === 2) {
            changeText("Scissors v Rock ---- You Lose. Would you like to play again");
            gameState.comScore++;
        }
    }
    playAgain();
}

let choice = ""; // Declaring choice globally
// Introduction "Would you like to play"
document.addEventListener('DOMContentLoaded', () => {
    changeText('Hello, would you like to play Rock, Paper, Scissors?');
    showDiv('playYN');
});
document.getElementById("yesButton").addEventListener("click", async () => {
    hideDiv("playYN");
    showDiv("options");
    playing();
})
    document.getElementById("noButton").addEventListener("click", async () =>{
        darn();
    })