let humanSelection;
let computerSelection;    
let humanScore = 0;
let computerScore = 0;
let tie = 0;

function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice <= 1/3) {
        console.log(`Computer's move: rock`);
        return 'rock';
    } else if (1/3 < computerChoice && computerChoice <= 2/3) {
        console.log(`Computer's move: paper`);
        return 'paper';
    } else if (2/3 < computerChoice && computerChoice <= 1) {
        console.log(`Computer's move: scissors`);
        return 'scissors'
    }
}

function playRound(humanChoice, computerChoice) {
    const div = document.querySelector('.results');
    div.innerHTML = '';
    const p = document.createElement('p');
    div.appendChild(p);
    if (humanChoice === computerChoice) {
        tie ++;
        p.innerText = `It\'s a tie. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;

    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'rock')) {
        humanScore ++;
        p.innerText = `You win! ${humanChoice} beats ${computerChoice}. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;

    }  else if ((humanChoice === 'scissors' && computerChoice === 'rock') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'rock' && computerChoice === 'paper')) {
        computerScore ++;
        p.innerText = `You lose! ${computerChoice} beats ${humanChoice}. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;

    }
}

function playGame() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button) => {
        let userChoice;

        button.addEventListener('click', () => {
            if (button.innerHTML === 'Rock') {
                userChoice = 'rock';
            } else if (button.innerHTML === 'Paper') {
                userChoice = 'paper';
            } else if (button.innerHTML === 'Scissors') {
                userChoice = 'scissors';
            }
            const computerChoice = getComputerChoice();
            playRound(userChoice, computerChoice);
        });
    })
}


// function playGame(num = 1) {
//     for (let i = 0; i < num; i++) {
//         humanSelection = getHumanChoice();
//         computerSelection = getComputerChoice();
//         console.log(playRound(humanSelection, computerSelection));
//     }
// }

function gameScore() {

}
playGame();