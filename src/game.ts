const CHOICES: string[] = ['rock', 'paper', 'scissors'];

interface GameRules {
    [key: string]: { beats: string };
}

const gameRules: GameRules = {
    'rock': { beats: 'scissors' },
    'paper': { beats: 'rock' },
    'scissors': { beats: 'paper' }
};

interface Elements {
    rockBtn: Element | null;
    paperBtn: Element | null;
    scissorsBtn: Element | null;
    playerPick: Element | null;
    computerPick: Element | null;
    restartBtn: Element | null;
    popupModal: Element | null;
    scoreInfo: Element | null;
    pTally: Element | null;
    cTally: Element | null;
}

const elements: Elements = {
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

let playerScore: number = 0;
let computerScore: number = 0;
let roundWinner: string = '';

if (elements.rockBtn) {
    elements.rockBtn.addEventListener('click', () => handleClick('rock'));
}

if (elements.paperBtn) {
    elements.paperBtn.addEventListener('click', () => handleClick('paper'));
}

if (elements.scissorsBtn) {
    elements.scissorsBtn.addEventListener('click', () => handleClick('scissors'));
}

if (elements.restartBtn) {
    elements.restartBtn.addEventListener('click', restart);
}

function getComputerChoice(): string {
    let computerChoice: number = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[computerChoice];
}

function playRound(playerSelection: string, computerSelection: string): void {
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

function updateChoices(playerSelection: string, computerSelection: string): void {
    if (elements.playerPick) {
        elements.playerPick.textContent = getHandEmoji(playerSelection);
    }

    if (elements.computerPick) {
        elements.computerPick.textContent = getHandEmoji(computerSelection);
    }
}

function getHandEmoji(choice: string): string {
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

function updateScore(): void {
    if (roundWinner === 'tie') {
        updateScoreInfo('whitesmoke', '= it\'s a tie =');
    } else if (roundWinner === 'player') {
        updateScoreInfo('var(--orange)', `+ you win this round! +`);
    } else if (roundWinner === 'computer') {
        updateScoreInfo('var(--pink)', `- you lose this round -`);
    }

    if (elements.pTally) {
        elements.pTally.textContent = `${playerScore}`;
    }

    if (elements.cTally) {
        elements.cTally.textContent = `${computerScore}`;
    }
}

function updateScoreInfo(color: string, text: string): void {
    if (elements.scoreInfo) {
        (elements.scoreInfo as HTMLElement).style.color = color;
        elements.scoreInfo.textContent = text;
    }
}

function isGameOver(): boolean {
    return playerScore === 5 || computerScore === 5;
}

function endGame(): void {
    if (elements.popupModal) {
        elements.popupModal.classList.add('show');
        const resultText: string = (playerScore > computerScore) ? 'Yay! You won the game' : 'Ah you lose, better luck next time';
        
        if (elements.scoreInfo) {
            elements.scoreInfo.textContent = resultText;
        }
    }
}

function handleClick(playerSelection: string): void {
    const computerSelection: string = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (isGameOver()) {
        endGame();
        return;
    }
}

function restart(): void {
    location.reload();
}
