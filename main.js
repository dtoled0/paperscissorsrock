/* 
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
    let choice = parseInt(prompt("Enter a number: \n1.Rock \n2.Paper \n3.Scissors")); 
    
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

//Score and round tracking variables
let humanScore = 0;
let computerScore = 0;
let round = 0;

alert("You have 5 rounds to beat the computer at the Rock, Paper and Scissors game");

//Function to play one round
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

function getInput() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

// Function to end game and declare winner
function declareWinner() {
    if (humanScore > computerScore) {
        alert(`You beat the Computer! \nYour score is ${humanScore}`);
    }
    else if (computerScore > humanScore) {
        alert(`The computer beat you! \nThe computer score is ${computerScore}`);
    }
    else {
        alert(`Its a tie! \nYour score: ${humanScore} \nComputer score: ${computerScore}`);
    }
}

// Buttons for each selection (rock, paper, scissors)
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

// Event listeners for playRound function





playGame();
*/

// New JS logic for rps-ui
// Reference to divs
const gameBox = document.querySelector('.gameBox');

// Button elements
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const playAgain = document.createElement('button');

// Append buttons to .gameBox div 
gameBox.appendChild(rock);
rock.textContent = "ROCK";

gameBox.appendChild(paper);
paper.textContent = "PAPER";

gameBox.appendChild(scissors);
scissors.textContent = "SCISSORS";

gameBox.appendChild(playAgain);
playAgain.textContent = "Play Again";