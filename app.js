// factory function to create new players
const Player = (name, sign) => {
  return { name, sign };
};

// function to store the gameboard
const gameboard = (function () {
  let _board = ["", "", "", "", "", "", "", "", ""];
  let getGameboard = () => {
    return _board;
  };
  return { getGameboard };
})();

// function to store all gameplay relevant functions & variables
const gamePlay = (function () {
  // CREATING PLAYERS
  let player1 = Player("Player 1", "x");
  let player2 = Player("Player 2", "o");

  // CREATING PLAYERS WHEN PERSONALIZE-BTN IS CLICKED
  const personalizeBtn = document.querySelector("#personalize-btn");
  const playerFormScreen = document.querySelector(".player-form-wrapper");
  const openPlayerForm = () => {
    playerFormScreen.classList.add("show");
  };
  personalizeBtn.addEventListener("click", openPlayerForm);

  // GETTING PLAYER NAMES FROM FORM
  const startBtn = document.querySelector("#lets-play-btn");
  const personalizePlayers = () => {
    let player1Name = document.querySelector("#player1").value;
    let player2Name = document.querySelector("#player2").value;
    if (player1Name != "") {
      player1.name = player1Name;
    }
    if (player2Name != "") {
      player2.name = player2Name;
    }
  };

  startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    personalizePlayers();
    playerFormScreen.classList.remove("show");
  });

  // GETTING THE CURRENT BOARD ARR
  let _board = gameboard.getGameboard();

  // DEFINING WINNING AXES
  const winningAxes = [
    [0, 1, 2],
    [3, 4, 5],
    [5, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // SELECTING BOARD CELLS
  const cells = document.querySelectorAll(".cell");

  // CREATING A VARIABLE TO KEEP TRACK OF THE TURNS
  let currentPlayer = player1;

  // LOOPING OVER BOARD CELLS & ADDING (ONE-TIME) EVENT LISTENERS TO EACH CELL
  cells.forEach((cell) => {
    cell.addEventListener("click", makeMove, { once: true });
  });

  // function to make a move each time a cell is clicked
  function makeMove(e) {
    let cell = e.target;
    let index = cell.dataset.index;
    // SET MARK
    cell.classList.add(currentPlayer.sign);
    // SET CORRESPONDING BOARD-ARR VALUE;
    _board[index] = currentPlayer.sign;
    // CHECK FOR WIN
    checkWinner();
    // CHECK FOR TIE
    checkTie();
    // SWITCH TURNS
    switchTurns();
  }

  // function to switch turns each time a player sets their mark
  let turnCounter = 1;
  const boardContainer = document.querySelector(".board");

  const switchTurns = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
      boardContainer.classList.remove("player1-turn");
      boardContainer.classList.add("player2-turn");
    } else if (currentPlayer === player2) {
      currentPlayer = player1;
      boardContainer.classList.remove("player2-turn");
      boardContainer.classList.add("player1-turn");
    }
    turnCounter++;
  };

  // function to look for a winner & display winner
  let isWinner = false;
  let winningScreen = document.querySelector(".winning-screen");
  let winningMsg = document.querySelector(".winning-message");

  const checkWinner = () => {
    winningAxes.forEach((item) => {
      if (
        _board[item[0]] === currentPlayer.sign &&
        _board[item[1]] === currentPlayer.sign &&
        _board[item[2]] === currentPlayer.sign
      ) {
        isWinner = true;
        winningScreen.classList.add("show");
        winningMsg.textContent = currentPlayer.name + " wins!";
      }
    });
  };

  // function to check for a tie & display tie-msg
  const checkTie = () => {
    if (isWinner === false && turnCounter >= 9) {
      winningMsg.textContent = "It's a tie!";
      winningScreen.classList.add("show");
    }
  };

  //function to restart the game
  const restartBtn = document.querySelector(".restart-btn");

  const restartGame = () => {
    location.reload();
  };

  restartBtn.addEventListener("click", restartGame);

  return {};
})();
