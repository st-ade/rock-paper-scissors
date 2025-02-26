let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
    let randomNum = Math.floor((Math.random() * 100));
        if (randomNum % 5 === 0)
            {computerChoice = "Rock"}
        else if (randomNum % 2 === 0)
            {computerChoice = "Paper"} 
        else 
            {computerChoice = "Scissors"}

    return computerChoice
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt("Choose rock, paper or scissors");
    
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
        
}