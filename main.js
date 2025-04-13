// New logic for rps game
let computerScore = 0;
let humanScore = 0;
let resultMessage = "";
let round = 0;
let gameBox = document.getElementById("gameBox");

// Human Choice function
function getHumanChoice() {
    // Rock
    document.getElementById("rock").addEventListener('click', e => {
        playRound(e.target.id, getComputerChoice());
    });

    // Paper
    document.getElementById("paper").addEventListener('click', e => {
        playRound(e.target.id, getComputerChoice());
    });

    // Scissors
    document.getElementById("scissors").addEventListener('click', e => {
        playRound(e.target.id, getComputerChoice());
    });
}

// Calling getHumanChoice function 
getHumanChoice();

// Computer choice function
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

// Play round function
function playRound(humanSelection, computerSelection) {
    switch (humanSelection + computerSelection) {
        case "rockrock":
            resultMessage = "We have a tie";
            break;
        case "rockpaper":
            resultMessage = "Paper covers rock. Computer won this round";
            computerScore++;
            break;
        case "rockscissors":
            resultMessage = "Rock crushes scissors. You won this round";
            humanScore++;
            break;
        case "paperrock":
            resultMessage = "Paper covers rock. You won this round";
            humanScore++;
            break;
        case "paperpaper":
            resultMessage = "We have a tie";
            break;
        case "paperscissors":
            resultMessage = "Scissors cuts paper. Computer won this round";
            computerScore++;
            break;
        case "scissorsrock":
            resultMessage = "Rock crushes scissors. Computer won this round";
            computerScore++;
            break;
        case "scissorspaper":
            resultMessage = "Scissors cuts paper. You won this round";
            humanScore++;
            break;
        case "scissorsscissors":
            resultMessage = "We have a tie";
            break;
    }

    round++;

    // Showing results
    let resultDiv = document.getElementById("result");
    if (!resultDiv) {
        resultDiv = document.createElement("div");
        resultDiv.id = "result";
        resultDiv.style.fontSize = "1em";
        gameBox.appendChild(resultDiv);
    }
    resultDiv.textContent = `Round ${round}: ${resultMessage} | Score - You: ${humanScore}, Computer: ${computerScore}`;   

    if (round === 5) {
        declareWinner();
    }
}

// Declare winner
function declareWinner() {
    const finalDiv = document.createElement("div");
    finalDiv.id = "finalResult";
    finalDiv.style.marginTop = "10px";
    finalDiv.style.fontSize = "1.5em";

    if (humanScore > computerScore) {
        finalDiv.textContent = `🎉 You won! Your Score: ${humanScore} | Computer Score: ${computerScore}`;
    } 
    else if (computerScore > humanScore) {
            finalDiv.textContent = `💻 Computer won! Computer Score: ${computerScore} | Your Score: ${humanScore}`;
    } 
    else {
        finalDiv.textContent = "🤝 It's a tie!";
    }

    gameBox.appendChild(finalDiv);
}

// Reset game function 
function resetGame() {
    document.getElementById("reset").addEventListener('click', e => {
        computerScore = 0;
        humanScore = 0;
        round = 0;
        resultMessage = "";

        const resultDiv = document.getElementById("result");
        const finalDiv = document.getElementById("finalResult");

        if (resultDiv) resultDiv.remove();
        if (finalDiv) finalDiv.remove();
    }); 
}

resetGame();