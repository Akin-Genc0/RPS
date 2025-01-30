
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
let computerChoice = Math.floor(Math.random() *3);

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
       message("It's a tie " , "Try Again");
    }else if (humanChoice === "rock" && computerChoice === "paper") {
        humanScore++;
        message("You win " ,humanScore);
    }else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        message("You win ",humanScore)
    }else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        message("You win " ,humanScore);
    }else{
        computerScore++;
        message("You Lose " , computerScore);
    }

}
 
function message (text, score) { // has one pram to store message
    let res = document.getElementById("results"); //getting id of div
    res.innerHTML = text + score; // setting content to text prama and displaying the score
   
    if(humanScore >= 5) { //checks scores displays text and colour
        res.innerHTML = "You Win";
        res.style.color = "green"; 

     } else if(computerScore >= 5) {
        res.innerHTML = "You Lose"; 
        res.style.color = "red"; 
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
