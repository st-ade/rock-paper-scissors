let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
    let randomNum = Math.floor(Math.random() * 3);
        if (randomNum === 0)
            {computerChoice = "rock"}
        else if (randomNum === 1)
            {computerChoice = "paper"} 
        else 
            {computerChoice = "scissors"}

    return computerChoice
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt("Choose rock, paper or scissors")

    return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice)
        {console.log(`Computer played ${computerChoice}. It's a tie!`)}
        else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "scissors"))
        {console.log(`Computer played ${computerChoice}. You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore = computerScore + 1;}
        else if ((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper"))
            {console.log(`Computer played ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);
            humanScore = humanScore + 1;}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore)
console.log(computerScore)