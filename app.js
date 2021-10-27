//this file will probably be removed soon - dont look at this code, it's full of sauce being spagetti and all

let playerScore = 0;
let pcScore = 0;

// let gameChoice = ["rock", "paper", "scissors"];
let gameChoice = ["a", "b"]; // for testing purposes

//here

function game(){

    for (i=1; i < 6; i++){
        const playerPrompt = prompt("what will it be?");
        let playerSelection = playerPrompt.toLowerCase();
        console.log('playerChoice: ' + playerSelection);

        function computerPlay(){
            let result = gameChoice[Math.floor(Math.random() * gameChoice.length)];
            console.log("computerSelection: " + result);
            return result;
        }
        
        let computerSelection = computerPlay();

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection){
                console.log('player won round: ' + i);
                playerScore++;
            } else {
                console.log('pc won round: ' + i);
                pcScore++;
            }
        }
        // console.log("round: " + i);
        playRound();
    }

    

    if(playerScore > pcScore){
        console.log("player won");
    } else{
        console.log("PC won");
    }
}

game(); 

// console.log(playRound(playerSelection, computerSelection));

