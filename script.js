// Introduction "Would you like to play"
let answer = prompt("Hello! would you like to play rock, paper, scissors?");
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
}else if (answer = "n"){
    console.log("Darn you got my hopes up");
}else {
    console.log('Sorry I must be high. Try "y" or "n"');
}
