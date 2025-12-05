let humanSelection;
let computerSelection;

let humanScore =0;
let computerScore = 0;
let tie = 0;

playGame(5);

function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice <= 1/3) {
        return 'rock';
    } else if (1/3 < computerChoice <= 2/3) {
        return 'paper';
    } else if (2/3 < computerChoice <= 1) {
        return 'scissors'
    }
}

function getHumanChoice() {
    return prompt("Pick rock/paper/scissors: ").toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    let result = '';
    
    if (humanChoice === computerChoice) {
        tie ++;
        result = 'It\'s a tie.';
        return result;
    } else if ((humanChoice === 'rock' & computerChoice === 'scissors') || (humanChoice === 'scissors' & computerChoice === 'paper') || (humanChoice === 'paper' & computerChoice === 'rock')) {
        humanScore ++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        return result;
    }  else if ((humanChoice === 'scissors' & computerChoice === 'rock') || (humanChoice === 'paper' & computerChoice === 'scissors') || (humanChoice === 'rock' & computerChoice === 'paper')) {
        computerScore ++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        return result;
    }
    console.log(result)
}

function playGame(num) {
    for (let i = 0; i < num; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}
