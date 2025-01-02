// Variables
const gameState = {
    isPlaying: 0,
    usrScore: 0,
    comScore: 0,
};

// Function to simmulate time in milliseconds
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

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

// Introduction "Would you like to play"
document.addEventListener('DOMContentLoaded', () => {
    changeText('Hello, would you like to play Rock, Paper, Scissors?');
    showDiv('playYN');
});
document.getElementById("yesButton").addEventListener("click", async () => {
    hideDiv("playYN");
    changeText("Select your Option");
    showDiv("options");
    let choice = "";
})
document.getElementById("rockButton").addEventListener("click", async () => {
    choice = "rock";
    playing();
})
document.getElementById("paperButton").addEventListener("click", async () => {
    choice = "paper";
    playing();
})
document.getElementById("scissorsButton").addEventListener("click", async () => {
    choice = "scissors";
    playing();
})
document.getElementById("noButton").addEventListener("click", async () =>{
    darn();
})
document.getElementById("playAgainButton").addEventListener("click", async () => {
    hideDiv("playAgainOrQuit");
})
document.getElementById("quitButton").addEventListener("click", async () => {
    darn();
})