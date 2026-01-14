let humanSelection;
let computerSelection;    
let humanScore = 0;
let computerScore = 0;
let tie = 0;
const div = document.querySelector('.results');
const buttons = document.querySelectorAll('.btn');

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
    div.innerHTML = '';
    const p = document.createElement('p');
    div.appendChild(p);
    let winner = '';
    let condition = '';

    if (humanChoice === computerChoice) {
        winner ="It\'s a tie.";
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || computerChoice === 'rock' && humanChoice === 'scissors'){
        winner = humanChoice === 'rock' ? 'You win!' : 'You lose!';
        condition = 'Rock crushes Scissors.';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper' || computerChoice === 'scissors' && humanChoice === 'paper'){
        winner = humanChoice === 'scissors' ? 'You win!' : 'You lose!';
        condition = 'Scissors cuts Paper.';
    } else if (humanChoice === 'paper' && computerChoice === 'rock' || computerChoice === 'paper' && humanChoice === 'rock'){
        winner = humanChoice === 'paper' ? 'You win!' : 'You lose!';
        condition = 'Paper covers Rock.';
    } else if (humanChoice === 'rock' && computerChoice === 'lizard' || computerChoice === 'rock' && humanChoice === 'lizard'){
        winner = humanChoice === 'rock' ? 'You win!' : 'You lose!';
        condition = 'Rock crushes Lizard.';
    } else if (humanChoice === 'lizard' && computerChoice === 'spock' || computerChoice === 'lizard' && humanChoice === 'spock'){
        winner = humanChoice === 'lizard' ? 'You win!' : 'You lose!';
        condition = 'Lizard poisons Spock.';
    } else if (humanChoice === 'spock' && computerChoice === 'scissors' || computerChoice === 'spock' && humanChoice === 'scissors'){
        winner = humanChoice === 'spock' ? 'You win!' : 'You lose!';
        condition = 'Spock smashes Scissors.';
    } else if (humanChoice === 'scissors' && computerChoice === 'lizard' || computerChoice === 'scissors' && humanChoice === 'lizard'){
        winner = humanChoice === 'scissors' ? 'You win!' : 'You lose!';
        condition = 'Scissors decapitates Lizard.';
    } else if (humanChoice === 'lizard' && computerChoice === 'paper' || computerChoice === 'lizard' && humanChoice === 'paper'){
        winner = humanChoice === 'lizard' ? 'You win!' : 'You lose!';
        condition = 'Lizard eats Paper.';
    } else if (humanChoice === 'paper' && computerChoice === 'spock' || computerChoice === 'paper' && humanChoice === 'spock'){
        winner = humanChoice === 'paper' ? 'You win!' : 'You lose!';
        condition = 'Paper disproves Spock.';
    } else if (humanChoice === 'spock' && computerChoice === 'rock' || computerChoice === 'spock' && humanChoice === 'rock'){
        winner = humanChoice === 'spock' ? 'You win!' : 'You lose!';
        condition = 'Spock vaporizes Rock.';
    }

    winner === 'You win!' ? humanScore++ : computerScore++;

    p.innerHTML = `<p>${winner} ${condition}
Your score: ${humanScore}, while Computer's score: ${computerScore}. Tie's: ${tie}</p>
<div id="choice"><button class="${humanChoice}"></button><p id="versus">VS</p><button class="${computerChoice}"></button></div>`;
}

function playGame() {
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
    const div = document.querySelector('.results')
    if (humanScore >= 5) {
        div.innerHTML = `<p>You won the game! Congrats!</p>`;
        humanScore = 0;
        computerScore = 0; 
        tie = 0;
    } else if (computerScore >= 5) {
        div.innerHTML = `<p>Computer won the game! Better luck next time!</p>`;
        humanScore = 0;
        computerScore = 0; 
        tie = 0;
    }
}

playGame();