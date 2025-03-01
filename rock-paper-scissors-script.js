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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice)
        {console.log(`Round ${i+1}: Computer played ${computerChoice}. It's a tie!`)}
        else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "scissors"))
        {console.log(`Round ${i+1}: Computer played ${computerChoice}. You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore = computerScore + 1;}
        else if ((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper"))
        {console.log(`Round ${i+1}: Computer played ${computerChoice}. You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore = humanScore + 1;}
        else if (humanChoice != ("rock" || "paper" || "scissors"))
        {console.log("I'm sorry, Hal. I can't read that.")}
        }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore)
    {console.log(`Well done! You beat the computer ${humanScore} to ${computerScore}.\nRefresh to play again.`)}
    else if (humanScore < computerScore)
    {console.log(`Sorry, the computer won this time, ${computerScore} to ${humanScore}!\nRefresh to play again.`)}
    else {console.log(`Weird! You managed a tie!\nRefresh to play again.`)}
}

playGame ();