// the game lasts for 5 rounds
function game(){

    let playerScore = 0;
    let computerScore = 0;

    for(i=1; i<2; i++){

        // player makes a choice
        const playerPrompt = prompt("what will it be?");
        let playerSelection = playerPrompt.toLowerCase();
        console.log("player chose: " + playerSelection);

        // computer makes a choice
        function computerPlay(){
            let selection = ["r", "p", "s"];
            let res = selection[Math.floor(Math.random() * selection.length)];
            return res;
        }

        let computerSelection = computerPlay();
        console.log("computer chose: " + computerSelection);

        function playRound(playerSelection, computerSelection){
            // choices are compared
            if(playerSelection === computerSelection){
                console.log("round: " + i + " is a tie");
            } else if(playerSelection === "r" && computerSelection === "s"){
                playerScore++
                console.log("player wins round: " + i);
            } else if(playerSelection === "p" && computerSelection === "r"){
                playerScore++
                console.log("player wins round: " + i);
            } else if(playerSelection === "s" && computerSelection === "p"){
                playerScore++
                console.log("player wins round: " + i);
            } else{
                computerScore++
                console.log("computer wins round: " + i)
            }

        }

        playRound();
    }

    // winner is the best out of 5
    if(playerScore > computerScore){
        console.log("player won");
    } else if(computerScore < playerScore){
        console.log("computer won");
    } else{
        console.log("it's a tie");
    }
}

game();