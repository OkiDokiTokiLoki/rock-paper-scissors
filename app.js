const playerPrompt = prompt("what will it be?");
const playerSelection = playerPrompt.toLowerCase();

let playerScore = 0;
let pcScore = 0;

// let gameChoice = ["rock", "paper", "scissors"];
let gameChoice = ["a", "b"];


function computerPlay(){
    let result = gameChoice[Math.floor(Math.random()*gameChoice.length)];
    return result;
}

const computerSelection = computerPlay();


function game(){

    for (i=0; i < 6; i++){

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection){
                playerScore++;
                console.log('yay');
            } else {
                pcScore++;
            }
        }
    }

    if(playerScore > pcScore){
        alert("player won");
    } else{
        alert("PC won");
    }
}

game(); // the problem

console.log(playRound(playerSelection, computerSelection));

