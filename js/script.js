var playerPick = 0;
var computerPick = 0;
var playerCount = 0;
var computerCount = 0;
var roundNumber = 0;
var message = document.getElementById("message");
var output = document.getElementById("score");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var reset = document.getElementById("reset");
var play = document.getElementById("play");
var start = document.querySelector(".start");
var game = document.querySelector(".game");
var whowins = document.querySelector(".whowins");

play.addEventListener("click", function() {
  var rounds = prompt("Please enter the number of rounds");
  var roundsInt = parseInt(rounds);
  roundNumber = roundsInt;
  start.style.display = "none";
});

output.innerHTML =
  "Player score: " + playerCount + " Computer score: " + computerCount;

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
  computerCount = 0;
  output.innerHTML =
    "Player score: " + playerCount + " Computer score: " + computerCount;
  message.innerHTML = "";
});

//rock=1, paper=2, scissors=3
function whoWinsRound() {
  if (playerPick == computerPick) {
    message.innerHTML = "tie";
  } else if ((playerPick - computerPick + 3) % 3 == 1) {
    playerCount++;
    message.innerHTML = "Player wins";
  } else {
    computerCount++;
    message.innerHTML = "Computer wins";
  }
}

function whoWinsGame() {
  if (playerCount >= roundNumber) {
    alert("Player wins the game");
  } else if (computerCount >= roundNumber) {
    alert("computer wins the game");
  }
}

function playerMove(move) {
  playerPick = move;
  computerPick = Math.floor(Math.random() * 3 + 1);
  whoWinsRound();
  output.innerHTML =
    "Player score: " + playerCount + " Computer score: " + computerCount;
  whoWinsGame();
}
