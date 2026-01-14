// Variables
let round = 0;

// Function to get a random choice for the computer
function getComputerChoice() {
     const options = ["rock", "paper", "scissors"];
     return options[Math.floor(Math.random() * 3)];
}

// Function to get user choice
function getUserChoice() {
    let userChoice = prompt("Enter Rock, Paper, or Scissors: ");

    console.log(`User chose: ${userChoice}`);
    return userChoice.toLowerCase();
}

function playGame() {
    // Score variables
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        switch(humanChoice + computerChoice) {
        case "rockrock":
            console.log("Rocking around the christmas tree 🎶... and it's a tie.");
            break;
        case "rockpaper":
            console.log("Paper covers Rock. Computer wins!");
            computerScore++;
            break;
        case "rockscissors":
            console.log("Rock beats Scissors. You win!");
            humanScore++;
            break;
        case "paperrock":
            console.log("Paper covers Rock. You win!");
            humanScore++;
            break;
        case "paperscissors":
            console.log("Scissors cut Paper. Computer wins!");
            computerScore++;
            break;
        case "paperpaper":
            console.log("Paper and ... Paper? This is a tie!");
            break;
        case "scissorsrock":
            console.log("Scissors can't cut Rocks. Computer wins!");
            computerScore++;
            break;
        case "scissorspaper":
            console.log("Scissors cut Paper. You win!");
            humanScore++;
            break;
        case "scissorsscissors":
            console.log("Scissors Scissors Scissors. We've got a tie lads!");
            break;
        }   
    }

    while(round < 5) {
        let humanSelection = getUserChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        round++;
    }

    if(round = 5) {
        if(humanScore > computerScore) {
            console.log(`User Score: ${humanScore} \nComputer Score: ${computerScore} \nYou won!`);
        }
        else if(computerScore > humanScore) {
            console.log(`User Score: ${humanScore} \nComputer Score: ${computerScore} \nThe robot won!`);
        }
        else {
            console.log(`Your Score: ${humanScore} | Computer Score ${computerScore} \nYou are equally great at this! \n\nOr totally suck at it 🤔`)
        }
    }
}

playGame();