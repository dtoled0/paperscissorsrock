

//Computer choice for rock, paper or scissors 
function getComputerChoice() {
    //Random number to equal string
    let choiceNumber = Math.floor(Math.random() * 3);

    if (choiceNumber === 1) {
        return "Rock";
    }
    else if (choiceNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//Human choice
function getHumanChoice() {
    let humanChoice = Number(prompt("Enter a number: \n1.Rock \n2.Paper \n3.Scissors"));
    
    if (humanChoice === 1) {
        return "Rock";
    }
    else if (humanChoice === 2) {
        return "Paper";
    }
    else if (humanChoice === 3){
        return "Scissors";
    }
}