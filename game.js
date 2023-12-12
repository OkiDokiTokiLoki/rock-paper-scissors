const CHOICES = ['rock', 'paper', 'scissors'];
const gameRules = {
    'rock': { beats: 'scissors' },
    'paper': { beats: 'rock' },
    'scissors': { beats: 'paper' }
};

const elements = {
    rockBtn: document.querySelector('#rockBtn'),
    paperBtn: document.querySelector('#paperBtn'),
    scissorsBtn: document.querySelector('#scissorsBtn'),
    playerPick: document.querySelector('#player'),
    computerPick: document.querySelector('#computer'),
    restartBtn: document.querySelector('#restart'),
    popupModal: document.querySelector('#popupModal'),
    scoreInfo: document.querySelector('#scoreInfo'),
    pTally: document.querySelector('.pScore'),
    cTally: document.querySelector('.cScore')
};

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

elements.rockBtn.addEventListener('click', () => handleClick('rock'));
elements.paperBtn.addEventListener('click', () => handleClick('paper'));
elements.scissorsBtn.addEventListener('click', () => handleClick('scissors'));
elements.restartBtn.addEventListener('click', restart);

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    } else if (gameRules[playerSelection].beats === computerSelection) {
        playerScore++;
        roundWinner = 'player';
    } else {
        computerScore++;
        roundWinner = 'computer';
    }
}

function updateChoices(playerSelection, computerSelection) {
    elements.playerPick.textContent = getHandEmoji(playerSelection);
    elements.computerPick.textContent = getHandEmoji(computerSelection);
}

function getHandEmoji(choice) {
    switch (choice) {
        case 'rock':
            return '✊';
        case 'paper':
            return '✋';
        case 'scissors':
            return '✌️';
        default:
            return '';
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        updateScoreInfo('whitesmoke', '= it\'s a tie =');
    } else if (roundWinner === 'player') {
        updateScoreInfo('var(--orange)', `+ you win this round! +`);
    } else if (roundWinner === 'computer') {
        updateScoreInfo('var(--pink)', `- you lose this round -`);
    }
    elements.pTally.textContent = `${playerScore}`;
    elements.cTally.textContent = `${computerScore}`;
}

function updateScoreInfo(color, text) {
    elements.scoreInfo.style.color = color;
    elements.scoreInfo.textContent = text;
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function endGame() {
    elements.popupModal.classList.add('show');
    const resultText = (playerScore > computerScore) ? 'Yay! You won the game' : 'Ah you lose, better luck next time';
    elements.scoreInfo.textContent = resultText;
}

function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (isGameOver()) {
        endGame();
        return;
    }
}

function restart() {
    location.reload();
}