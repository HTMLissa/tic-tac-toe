// factory function to create new players
const Player = (name, sign) => {
  return { name, sign };
};

// function to store the gameboard as an array inside of a Gameboard object
const gameboard = (function () {
  let _board = ["", "", "", "", "", "", "", "", ""];
  let getGameboard = () => {
    return _board;
  };
  return { getGameboard };
})();

// function to store all gameplay relevant functions & variables
const gamePlay = (function () {
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
  let currentPlayer = "x";

  // LOOPING OVER BOARD CELLS & ADDING (ONE-TIME) EVENT LISTENERS TO EACH CELL
  cells.forEach((cell) => {
    cell.addEventListener("click", makeMove, { once: true });
  });

  // function to make a move each time a cell is clicked
  function makeMove(e) {
    let cell = e.target;
    let index = cell.dataset.index;
    // SET MARK
    cell.classList.add(currentPlayer);
    // SET CORRESPONDING BOARD-ARR VALUE;
    _board[index] = currentPlayer;
    // CHECK FOR WIN
    checkWinner();
    // CHECK FOR TIE
    // SWITCH TURNS
    switchTurns();
  }

  // function to switch turns each time a player sets their mark
  const switchTurns = () => {
    if (currentPlayer === "x") {
      currentPlayer = "o";
    } else if (currentPlayer === "o") {
      currentPlayer = "x";
    }
  };

  // function to look for a winner
  let isWinner = false;
  let winningScreen = document.querySelector(".winning-screen");
  let winningMsg = document.querySelector(".winning-message");

  const checkWinner = () => {
    winningAxes.forEach((item) => {
      if (
        _board[item[0]] === currentPlayer &&
        _board[item[1]] === currentPlayer &&
        _board[item[2]] === currentPlayer
      ) {
        isWinner = true;
        winningScreen.classList.add("show");
        winningMsg.textContent = currentPlayer + " wins!";
      }
    });
  };

  // function to loop over gameboard arr & render the arr content to the webpage
  const displayBoard = () => {
    for (let i = 0; i <= cells.length; i++) {
      let cellValue = _board[i];
      if (cellValue != "") {
        cells[i].classList.add(cellValue);
      }
    }
  };

  return { displayBoard };
})();
