
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



const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function() {
    console.log(playRound("Rock" , getComputerChoice()));
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {
    console.log(playRound("Paper", getComputerChoice()));
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function() {
    console.log((playRound("Sissors" , getComputerChoice())));
});