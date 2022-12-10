console.log(`Main JavaScript Project`);

let text = document.getElementById("display-text");
console.log(text);
const btns = document.querySelectorAll(".btn");
console.log(btns);
let playerSelection;
let computerWins = 0;
let playerWins = 0;

function computerPlay() {
    const selections = [`rock`, `paper`, `scissors`];
    let computerSelection = selections[Math.floor(Math.random() * selections.length)];
    return computerSelection;
}

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const select = e.currentTarget.classList;
        let computerSelection = computerPlay();
        console.log(computerSelection)
        if (select.contains("rock")) {
            playerSelection = "rock";
        } else if (select.contains("paper")) {
            playerSelection = "paper";
        } else {
            playerSelection = "scissors";
        }
        playRound(computerSelection, playerSelection);
        text.innerText = `The computer choose ${computerSelection} 
        and you choose ${playerSelection}.
        The score is computer ${computerWins} and player ${playerWins}.
        Choose again`;
        if (computerWins + playerWins == 5) {
            text.innerText = `The game has finished. 
            The final score is computer ${computerWins} and player ${playerWins}.
            Let's play again.`
            computerWins = 0;
            playerWins = 0;
        }
    })
});

function playRound(computerSelection, playerSelection) {

    console.log(`Player has select ${playerSelection}`);
    // computerSelection = computerPlay();
    console.log(`Computer has select ${computerSelection}`);
    if (playerSelection === computerSelection) {
        console.log("No winner. Try again");
    } else if ((computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")) {
        playerWins++;
        console.log("Player is the winner. Try again");
    } else {
        computerWins++;
    }
}
