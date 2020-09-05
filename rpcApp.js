fightButton = document.getElementById("button-fight");
playButton = document.getElementById("button-playagain");

fightButton.addEventListener("click", playRPC);
playButton.addEventListener("click", playAgain);

let pickRock = document.getElementById("rock");
let pickPaper = document.getElementById("paper");
let pickScissors = document.getElementById("scissors");
let displayPick = document.getElementById("displayPick");
let radioForm = document.getElementsByClassName("radioForm");
let pickYourWeapon = document.getElementById("pickYourWeapon");
//  radioForm.classList.add("okay_disappear");
let fontGrow = "135px";
let fontBack = "100px";
let playerChoice;
let computerChoice;
let showChoice;
let showBotMoves = document.getElementById("playerbot");

let displayScore = document.getElementsByClassName("show_score");
let say_winner = document.getElementById("say_winner");

let say_scoreboard = document.getElementById("say_scoreboard");

let playerWinnings = 0;
let computerWinnings = 0;

// Player is Choosing.
function playerPicking() {
  pickPaper = document.getElementById("paper");
  pickScissors = document.getElementById("scissors");
  let pickRock = document.getElementById("rock");

  pickRock.addEventListener("click", function () {
    displayPick.innerHTML = "🗿";
    pickRock.style.fontSize = fontGrow;
    //Going Back
    pickPaper.style.fontSize = fontBack;
    pickScissors.style.fontSize = fontBack;
    playerChoice = "rock";
  });

  pickScissors.addEventListener("click", function () {
    displayPick.innerHTML = "✂️";
    pickScissors.style.fontSize = fontGrow;
    //Going Back
    pickRock.style.fontSize = fontBack;
    pickPaper.style.fontSize = fontBack;
    playerChoice = "scissors";
  });

  pickPaper.addEventListener("click", function () {
    displayPick.innerHTML = "🧻";
    pickPaper.style.fontSize = fontGrow;
    //Going Back
    pickRock.style.fontSize = fontBack;
    pickScissors.style.fontSize = fontBack;
    playerChoice = "paper";
  });
}

playerPicking();

//Toggle the Animation. the computer does not make a choice until player click on the fight button.
function showBotThink() {
  showBotMoves.classList.toggle("playerbot_think");
}

function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function playRPC() {
  console.log("Hey It's Working!");
  //removeElement("input-method");
  showChoice = computerMove();
  botShow(showChoice);

  if (playerChoice == computerChoice) {
    say_winner.innerHTML = "❌ It Was a Tie. ❌";
  } else if (playerChoice == undefined) {
    say_winner.innerHTML = "🛸 Not a Move, Try Again. 🛸";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    say_winner.innerHTML = "🦾 Computer Wins! 🦾";
    ++computerWinnings;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    say_winner.innerHTML = "🦾 Computer Wins! 🦾";
    ++computerWinnings;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    say_winner.innerHTML = "🦾 Computer Wins! 🦾";
    ++computerWinnings;
  } else {
    say_winner.innerHTML = "🎉 You Won! 🎉";
    ++playerWinnings;
  }

  console.log(playerChoice + " VS " + computerChoice);
  showBotThink();
  fightButton.classList.add("display-none");
  playButton.classList.toggle("display-none");
  console.log("Computer Score:" + computerWinnings);
  console.log("Player Score:" + playerWinnings);
  say_scoreboard.innerHTML =
    "Player: " + playerWinnings + " - " + "Computer: " + computerWinnings + " ";

  pickYourWeapon.innerHTML = "";
  removeElement("rock");
  removeElement("paper");
  removeElement("scissors");
}

function computerMove() {
  computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    default:
      console.log("something went wrong?!");
  }
}

function botShow(showChoice) {
  if (computerChoice == "paper") {
    showBotMoves.innerHTML = "🧻";
  } else if (computerChoice == "scissors") {
    showBotMoves.innerHTML = "✂️";
  } else if (computerChoice == "rock") {
    showBotMoves.innerHTML = "🗿";
  } else {
    showBotMoves.innerHTML = "❓";
  }
}

function playAgain() {
  showBotThink();
  playerChoice = undefined;
  say_winner.innerHTML = "";
  displayPick.innerHTML = "❓";
  showBotMoves.innerHTML = "";
  fightButton.classList.toggle("display-none");
  playButton.classList.toggle("display-none");
  pickYourWeapon.innerHTML = "Pick Your Weapon:";
  rpcChoiceRemake();
}

//to get back the animtion.
let playBoard = document.getElementById("playboard");

function rpcChoiceRemake() {
  var btn1 = document.createElement("h4");
  btn1.innerHTML = "✂️";
  btn1.setAttribute("id", "scissors");
  playBoard.appendChild(btn1);
  //
  var btn2 = document.createElement("h4");
  btn2.innerHTML = "🗿";
  btn2.setAttribute("id", "rock");
  playBoard.appendChild(btn2);
  //
  var btn3 = document.createElement("h4");
  btn3.innerHTML = "🧻";
  btn3.setAttribute("id", "paper");
  playBoard.appendChild(btn3);

  playerPicking();
}
