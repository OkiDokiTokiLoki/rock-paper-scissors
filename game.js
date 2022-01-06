const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
// const endResult = document.querySelector('.endResult');

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice) {
        case 0:
        return 'rock'
        case 1:
        return 'paper'
        case 2:
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    const playerPick = document.querySelector('#player');
    const computerPick = document.querySelector('#computer');

    if(playerSelection == computerSelection){
        roundWinner = 'tie';
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        roundWinner = 'player';
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        roundWinner = 'player';
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        roundWinner = 'player';
    } else{
        computerScore++
        roundWinner = 'computer';
    }

    playerPick.textContent = playerSelection;
    computerPick.textContent = computerSelection;
}

function updateScore(){
    const scoreInfo = document.querySelector('#scoreInfo');
    const pTally = document.querySelector('.pScore');
    const cTally = document.querySelector('.cScore');

    if (roundWinner === 'tie'){
        scoreInfo.style.color = 'whitesmoke';
        scoreInfo.textContent = `= it's a tie =`;
    } else if (roundWinner === 'player'){
        scoreInfo.style.color = 'var(--orange)';
        scoreInfo.textContent = `+ you win this round! +`;
    } else if (roundWinner === 'computer'){
        scoreInfo.style.color = 'var(--pink)';
        scoreInfo.textContent = `- you lose this round -`;
    }

    pTally.textContent = `${playerScore}`;
    cTally.textContent = `${computerScore}`;
}

function handleClick(playerSelection){
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore()
}