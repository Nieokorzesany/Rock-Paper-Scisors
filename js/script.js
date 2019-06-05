var playerPick = 0;
var computerPick = 0;
var playerCount = 0;
var computerCount = 0;
var roundNumber = 0;
var message = document.getElementById("message");
var playerscore = document.querySelector(".playerscore");
var computerscore = document.querySelector(".computerscore");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var reset = document.getElementById("reset");
var play = document.getElementById("play");
var start = document.querySelector(".start");
var game = document.querySelector(".game");
var whowins = document.querySelector(".whowins");
var resetBox = document.getElementById("reset-div");

play.addEventListener("click", function() {
  var rounds = prompt("Please enter the number of rounds");
  var roundsInt = parseInt(rounds);
  roundNumber = roundsInt;
  numberCheck();
  start.style.display = "none";
  game.style.display = "block";
  resetBox.style.display = "none";
});

function numberCheck() {
  while (true) {
    if (roundNumber <= 1) {
      rounds = prompt("Please enter positive number bigger than 1");
      roundsInt = parseInt(rounds);
      roundNumber = roundsInt;
    } else return;
  }
}

playerscore.innerHTML = playerCount;
computerscore.innerHTML = computerCount;

rock.addEventListener("click", function() {
  playerMove(1);
});
paper.addEventListener("click", function() {
  playerMove(2);
});
scissors.addEventListener("click", function() {
  playerMove(3);
});
reset.addEventListener("click", function() {
  playerCount = 0;
  playerscore.innerHTML = playerCount;
  computerCount = 0;
  computerscore.innerHTML = computerCount;
  start.style.display = "flex";
  resetBox.style.display = "none";
  game.style.display = "none";
});

//rock=1, paper=2, scissors=3
function whoWinsRound() {
  if (playerPick == computerPick) {
    message.innerHTML = "Tie";
  } else if ((playerPick - computerPick + 3) % 3 == 1) {
    playerCount++;
    playerscore.innerHTML = playerCount;
    message.innerHTML = "Player wins round";
  } else {
    computerCount++;
    computerscore.innerHTML = computerCount;
    message.innerHTML = "Computer wins round";
  }
}

function whoWinsGame() {
  if (playerCount >= roundNumber) {
    game.style.display = "none";
    resetBox.style.display = "block";
    start.style.display = "none";
    whowins.innerHTML = "Player wins";
  } else if (computerCount >= roundNumber) {
    game.style.display = "none";
    resetBox.style.display = "block";
    start.style.display = "none";
    whowins.innerHTML = "Computer wins";
  }
}

function playerMove(move) {
  playerPick = move;
  computerPick = Math.floor(Math.random() * 3 + 1);
  whoWinsRound();
  whoWinsGame();
}
