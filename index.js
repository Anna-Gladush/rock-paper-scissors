let humanSelection;
let computerSelection;    
let humanScore = 0;
let computerScore = 0;
let tie = 0;

playGame(5);

function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice <= 1/3) {
        console.log(`Computer's move: rock`);
        return 'rock';
    } else if (1/3 < computerChoice <= 2/3) {
        console.log(`Computer's move: paper`);
        return 'paper';
    } else if (2/3 < computerChoice <= 1) {
        console.log(`Computer's move: scissors`);
        return 'scissors'
    }
}

function getHumanChoice() {
    const userInput = prompt("Pick rock/paper/scissors: ").toLowerCase();
    console.log(`User's move: ${userInput}`);
    return userInput;
}


function playRound(humanChoice, computerChoice) {
    let result = '';
    
    if (humanChoice === computerChoice) {
        tie ++;
        result = `It\'s a tie. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;

    } else if ((humanChoice === 'rock' & computerChoice === 'scissors') || (humanChoice === 'scissors' & computerChoice === 'paper') || (humanChoice === 'paper' & computerChoice === 'rock')) {
        humanScore ++;
        result = `You win! ${humanChoice} beats ${computerChoice}. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;

    }  else if ((humanChoice === 'scissors' & computerChoice === 'rock') || (humanChoice === 'paper' & computerChoice === 'scissors') || (humanChoice === 'rock' & computerChoice === 'paper')) {
        computerScore ++;
        result = `You lose! ${computerChoice} beats ${humanChoice}. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;

    }
    console.log(result);
}

function playGame(num) {
    for (let i = 0; i < num; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}

