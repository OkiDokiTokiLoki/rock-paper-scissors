function game(){

    let playerScore = 0;
    let computerScore = 0;

    // the game lasts for 5 rounds
    for(i=1; i<6; i++){

        // player makes a choice
        const playerPrompt = prompt("what will it be?");
        let playerSelection = playerPrompt.toLowerCase();
        console.log("%cplayer chose: " + playerSelection, "color: green");

        // computer makes a choice
        function computerPlay(){
            const selection = ["r", "p", "s"];
            let res = selection[Math.floor(Math.random() * selection.length)];
            return res;
        }

        let computerSelection = computerPlay();
        console.log("%ccomputer chose: " + computerSelection, "color: green");

        function playRound(playerSelection, computerSelection){
            // choices are compared
            if(playerSelection == computerSelection){
                console.log("%cround: " + i + " is a tie", "color: orange");
            } else if(playerSelection === "r" && computerSelection === "s"){
                playerScore++
                console.log("PLAYER: " + playerScore);
                console.log("%cplayer wins round: " + i, "color: purple");
            } else if(playerSelection === "p" && computerSelection === "r"){
                playerScore++
                console.log("PLAYER: " + playerScore);
                console.log("%cplayer wins round: " + i, "color: purple");
            } else if(playerSelection === "s" && computerSelection === "p"){
                playerScore++
                console.log("PLAYER: " + playerScore);
                console.log("%cplayer wins round: " + i, "color: purple");
            } else{
                computerScore++
                console.log("COMPUTER: " + computerScore);
                console.log("%ccomputer wins round: " + i, "color: violet")
            }
        }

        playRound(playerSelection, computerSelection);
    }

    console.log("%cplayer total score: " + playerScore, "color: crimson");
    console.log("%ccomputer total score " + computerScore, "color: crimson");

    // winner is the best out of 5
    if(playerScore > computerScore){
        alert("player wins the game");
    } else if (computerScore > playerScore){
        alert("computer wins the game");
    } else{
        alert("it's a tie");
    }
}

game();