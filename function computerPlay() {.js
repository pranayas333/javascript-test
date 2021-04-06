function computerPlay() {
  let rcp = ['rock', 'paper', 'scissors'];
  randomElement = rcp[Math.floor(Math.random()*rcp.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
  return "You win, rock wins scissors";
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
  return "You lose, scissors wins paper";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
  return "draw";
  }
  else if (playerSelection == 'rock' && computerSelection == 'rock') {
  return "draw";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
  return "You lose, rock wins scissors";
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
  return "You win, paper wins rock";
  }
  else if (playerSelection == 'paper' && computerSelection == 'paper') {
  return "draw";
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
  return "You lose, paper wins rock";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
  return "You win, scissors win paper";
  }
}

function game() {
  
  for (i= 1; i <= 6; i++) {
      userSelection = prompt("Rock, paper or scissors?");
      console.log(playRound(userSelection, computerPlay()));
  }
 }

game();
