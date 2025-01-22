
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
let computerChoice = Math.floor(Math.random() *2);

if (computerChoice === 0){
    return "rock";
} else if (computerChoice === 1){
    return "paper";
}else {
    return "scissor";
}

}


console.log(getComputerChoice());

function getHumanChoice() {

    let userInput = prompt("Let's play Rock Paper Scissors").toLowerCase();
  
        if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
            return userInput;
        }
    
    alert("Invalid input. Please enter Rock, Paper, or Scissors.");
    return null;

}

console.log(getComputerChoice());


function playRound(humanChoice, computerChoice) {

    
    humanChoice = humanChoice.toLowerCase();
  

    if (humanChoice === computerChoice){
        alert("Its a tie");
    }else if (humanChoice === "rock" && computerChoice === "paper") {
        humanScore++;
        alert(`You win! Your score: ${humanScore}`);
    }else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        alert(`You win! Your score: ${humanScore}`);
    }else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        alert(`You win! Your score: ${humanScore}`);
    }else{
        computerScore++;
        alert(`You lose! Computer score: ${computerScore}`);
    }

}



for (let round = 1; round <= 4; round++) {
    alert(`Round ${round}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}
