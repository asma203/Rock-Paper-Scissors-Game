
let choice;
let computerSelection;  
let playerScore=0;
let computerScore=0;
let tieScore=0;

const win="You Win this round!\n -------";
const loose="You Lose this round!\n -------";
const tie= "This round is a tie!\n -------";
playerSelection = prompt ("What is your play?").toLowerCase();

function getComputerChoice(choice){
   let choices = [
    'rock',
    'paper',
    'scissors'
   ]
   choice = choices[Math.floor(Math.random()*choices.length)]; 
   return choice;

}
function playRound(playerSelection, computerSelection) {
    // your code here!
     computerSelection = getComputerChoice();  
     //playerSelection = prompt ("What is your play?").toLowerCase();
   
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return loose;
    }
    if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return loose;
    }
    if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return loose;
    }
    if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return win;
        
    }
    if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return win;
       
    }
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return win;
        

    }
    if(playerSelection== computerSelection){
        tieScore++;
        return tie;
       

    }
    else{
        return "you must input rock, paper or scissors";

    }
}
//console.log(playRound(playerSelection, computerSelection));  

function game(){
    for (let i = 0; i < 4; i++) {
        computerSelection = getComputerChoice();  
        playerSelection = prompt ("What is your play?").toLowerCase();
        playRound(playerSelection, computerSelection);
     }
     if (playerScore>computerScore){
        return "You Win this game.\n -------";
      }
     if (playerScore==computerScore){
          return "This game is a tie.\n -------";
        }
     else{
        return "You Lose this game.\n -------";
      }
     
   }
console.log(game());
score=playerScore+computerScore+tieScore;
console.log("You played this game " +score +" times.\n -------\nGame over.");

 


  