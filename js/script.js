var params = {
  playerPick: 0,
  computerPick: 0,
  playerCount: 0,
  computerCount: 0,
  roundNumber: 0,
  message: document.getElementById("message"),
  playerscore: document.querySelector(".playerscore"),
  computerscore: document.querySelector(".computerscore"),
  reset: document.getElementById("reset"),
  play: document.getElementById("play"),
  start: document.querySelector(".start"),
  game: document.querySelector(".game"),
  whowins: document.querySelector(".whowins"),
  resetBox: document.querySelector(".bg-modal"),
  buttonList: document.querySelectorAll(".player-move"),
  progress: [],
  numberOfRounds: 0,
  table: document.querySelector(".table").getElementsByTagName("tbody")[0]
};

params.play.addEventListener("click", function() {
  while (!rounds) {
    var rounds = prompt("Please enter the number of rounds");
  }
  var roundsInt = parseInt(rounds);
  params.roundNumber = roundsInt;
  numberCheck();
  params.start.style.display = "none";
  params.game.style.display = "block";
  params.resetBox.style.display = "none";
});

function numberCheck() {
  while (true) {
    if (params.roundNumber <= 1) {
      rounds = prompt("Please enter positive number bigger than 1");
      roundsInt = parseInt(rounds);
      params.roundNumber = roundsInt;
    } else return;
  }
}

params.playerscore.innerHTML = params.playerCount;
params.computerscore.innerHTML = params.computerCount;

var player;

params.buttonList.forEach(button => {
  button.addEventListener("click", function() {
    let choice = parseInt(button.getAttribute("data-move"));
    playerMove(choice);
  });
});
params.reset.addEventListener("click", function() {
  params.playerCount = 0;
  params.playerscore.innerHTML = params.playerCount;
  params.computerCount = 0;
  params.computerscore.innerHTML = params.computerCount;
  params.start.style.display = "flex";
  params.resetBox.style.display = "none";
  params.game.style.display = "none";
});

params.progress.forEach(element => {
  let tableRow = table.insertRow(table.rows.length);
  element.forEach(data => {
    let newCell = tableRow.insertCell(element.length);
    newCell.append(data);
  });
});

//rock=1, paper=2, scissors=3
function whoWinsRound() {
  if (params.playerPick == params.computerPick) {
    params.message.innerHTML = "Tie";
  } else if ((params.playerPick - params.computerPick + 3) % 3 == 1) {
    params.playerCount++;
    params.playerscore.innerHTML = params.playerCount;
    params.message.innerHTML = "Player wins round";
  } else {
    params.computerCount++;
    params.computerscore.innerHTML = params.computerCount;
    params.message.innerHTML = "Computer wins round";
  }
}

function whoWinsGame() {
  if (params.playerCount >= params.roundNumber) {
    params.game.style.display = "none";
    params.resetBox.style.display = "block";
    params.start.style.display = "none";
    params.whowins.innerHTML = "Player wins";
    params.numberOfRounds = 0;
    params.progress = [];
  } else if (params.computerCount >= params.roundNumber) {
    params.game.style.display = "none";
    params.resetBox.style.display = "block";
    params.start.style.display = "none";
    params.whowins.innerHTML = "Computer wins";
    params.numberOfRounds = 0;
    params.progress = [];
  }
}

function playerMove(move) {
  params.playerPick = move;
  params.computerPick = Math.floor(Math.random() * 3 + 1);
  params.numberOfRounds++;
  whoWinsRound();
  params.progress.push([
    params.numberOfRounds,
    params.playerPick,
    params.computerPick,
    params.message.innerHTML,
    `${params.playerCount} - ${params.computerCount}`
  ]);
  whoWinsGame();
}
