let humanSelection;
let computerSelection;    
let humanScore = 0;
let computerScore = 0;
let tie = 0;

function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice <= 1/5) {
        console.log(`Computer's move: rock`);
        return 'rock';
    } else if (1/5 < computerChoice && computerChoice <= 2/5) {
        console.log(`Computer's move: paper`);
        return 'paper';
    } else if (2/5 < computerChoice && computerChoice <= 3/5) {
        console.log(`Computer's move: scissors`);
        return 'scissors'
    } else if (3/5 < computerChoice && computerChoice <= 4/5) {
        console.log(`Computer's move: lizard`);
        return 'lizard'
    } else if (4/5 < computerChoice && computerChoice <= 1) {
        console.log(`Computer's move: Spock`);
        return 'spock'
    }
}

function playRound(humanChoice, computerChoice) {
    const div = document.querySelector('.results');
    div.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('winner')
    div.appendChild(p);
    if (humanChoice === computerChoice) {
        tie ++;
        p.innerText = `It\'s a tie. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;

    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore ++;
        p.innerText = `You win! Rock crushes Scissors. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore ++;
        p.innerText = `You lose! Rock crushes Scissors. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore ++;
        p.innerText = `You win! Scissors cuts Paper. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore ++;
        p.innerText = `You lose! Scissors cuts Paper. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }   else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore ++;
        p.innerText = `You win! Paper covers Rock. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore ++;
        p.innerText = `You lose! Paper covers Rock.
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (humanChoice === 'rock' && computerChoice === 'lizard') {
        humanScore ++;
        p.innerText = `You win! Rock crushes Lizard. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'rock' && humanChoice === 'lizard') {
        computerScore ++;
        p.innerText = `You lose! Rock crushes Lizard. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (humanChoice === 'lizard' && computerChoice === 'spock') {
        humanScore ++;
        p.innerText = `You win! Lizard poisons Spock. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'lizard' && humanChoice === 'spock') {
        computerScore ++;
        p.innerText = `You lose! Lizard poisons Spock. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (humanChoice === 'spock' && computerChoice === 'scissors') {
        humanScore ++;
        p.innerText = `You win! Spock smashes Scissors. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'spock' && humanChoice === 'scissors') {
        computerScore ++;
        p.innerText = `You lose! Spock smashes Scissors. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (humanChoice === 'scissors' && computerChoice === 'lizard') {
        humanScore ++;
        p.innerText = `You win! Scissors decapitates Lizard. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'scissors' && humanChoice === 'lizard') {
        computerScore ++;
        p.innerText = `You lose! Scissors decapitates Lizard. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (humanChoice === 'lizard' && computerChoice === 'paper') {
        humanScore ++;
        p.innerText = `You win! Lizard eats Paper. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'lizard' && humanChoice === 'paper') {
        computerScore ++;
        p.innerText = `You lose! Lizard eats Paper. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (humanChoice === 'paper' && computerChoice === 'spock') {
        humanScore ++;
        p.innerText = `You win! Paper disproves Spock. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'paper' && humanChoice === 'spock') {
        computerScore ++;
        p.innerText = `You lose! Paper disproves Spock. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (humanChoice === 'spock' && computerChoice === 'rock') {
        humanScore ++;
        p.innerText = `You win! Spock vaporizes Rock. 
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}`;
    }  else if (computerChoice === 'spock' && humanChoice === 'rock') {
        computerScore ++;
        p.innerText = `You lose! Spock vaporizes Rock. 
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
            } else if (button.innerHTML === 'Lizard') {
                userChoice = 'lizard';
            } else if (button.innerHTML === 'Spock') {
                userChoice = 'spock';
            }
            const computerChoice = getComputerChoice();
            playRound(userChoice, computerChoice);
            gameScore();
        });
    })
}

function gameScore() {
    const p = document.querySelector('.winner')
    if (humanScore === 5) {
        p.innerText = 'You won the game! Congrats!';
        humanScore = 0;
        computerScore = 0; 
        tie = 0;
    } else if (computerScore === 5) {
        p.innerText = 'Computer won the game! Better luck next time!';
        humanScore = 0;
        computerScore = 0; 
        tie = 0;
    }
}

playGame();