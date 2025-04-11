// New logic for rps game
let computerScore = 0;
let humanScore = 0;
let round = 0;

// Human Choice function
function getHumanChoice() {
    // Rock
    document.getElementById("rock").addEventListener('click', e => {
        console.log(e.target.id);
    });

    // Paper
    document.getElementById("paper").addEventListener('click', e => {
        console.log(e.target.id);
    });

    // Scissors
    document.getElementById("scissors").addEventListener('click', e => {
        console.log(e.target.id);
    });
}

// Calling getHumanChoice function 
getHumanChoice();

// Computer choice function
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Calling getComputerChoice function
getComputerChoice();

// Play round function
function playRound(humanSelection, computerSelection) {
    switch (humanSelection + computerSelection) {
        case "rockrock":
            
    }
}

// Reset game function 
function resetGame() {
    document.getElementById("reset").addEventListener('click', e => {
        computerScore = 0;
        humanScore = 0;
        round = 0;
        console.clear();
    }); 
}

resetGame();