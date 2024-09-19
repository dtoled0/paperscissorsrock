
//global variables to track score
let humanScore = 0;
let computerScore = 0;

//Computer choice for rock, paper or scissors 
function getComputerChoice() {
    //Random number to equal string
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 1) {
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//Human choice
function getHumanChoice() {
    let choice = Number(prompt("Enter a number: \n1.Rock \n2.Paper \n3.Scissors"));
    
    if (choice === 1) {
        return "Rock";
    }
    else if (choice === 2) {
        return "Paper";
    }
    else if (choice === 3){
        return "Scissors";
    }
}

//Play round function for a single round play
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You won! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You won! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You won! Scissors beats Paper");
        humanScore++;
    }
    else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        console.log("Computer won! Rock beats Scissors");
        computerScore++;
    }
    else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log("Computer won! Paper beats Rock");
        computerScore++;
    }
    else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        console.log("Computer won! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice === computerChoice) {
        console.log("Its a tie!");
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);