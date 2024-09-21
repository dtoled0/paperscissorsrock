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

//Play game function for 5 rounds
function playGame() {
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

    while (round < 5) {
        getInput();
        round++;
    } 

    if (round = 5) {
        declareWinner();
    }

    function getInput() {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    //Function to end game and declare winner
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
}

playGame();