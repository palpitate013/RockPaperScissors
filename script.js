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
    let outcomes = ["rock", "paper", "scissors"];
    let ran = getRandomInt(0, 2);
    let comChoice = outcomes[ran];
    
    let resultText = {
        rock: { rock: "Tie", paper: "You Lose", scissors: "You Win" },
        paper: { rock: "You Win", paper: "Tie", scissors: "You Lose" },
        scissors: { rock: "You Lose", paper: "You Win", scissors: "Tie" },
    };
    
    let result = resultText[choice][comChoice];
    changeText(`${choice} v ${comChoice} ---- ${result}. Would you like to play again?`);
    
    if (result === "You Win") {
        gameState.usrScore++;
    } else if (result === "You Lose") {
        gameState.comScore++;
    }
    
    document.getElementById("userScore").textContent = gameState.usrScore;
    document.getElementById("comScore").textContent = gameState.comScore;
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