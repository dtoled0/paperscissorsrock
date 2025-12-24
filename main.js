// Function to get a random choice for the computer
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

// Function to get user choice
function getUserChoice() {
    let userChoice = prompt("Enter Rock, Paper, or Scissors: ");

    console.log(userChoice);
    
}