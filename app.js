// factory function to create new players
const Player = (name, sign) => {
  return { name, sign };
};

// function to store the gameboard as an array inside of a Gameboard object
const gameboard = (function () {
  let _board = ["x", "o", "x", "x", "x", "o", "o", "", ""];
  let getGameboard = () => {
    return _board;
  };
  return { getGameboard };
})();

// function to store all gameplay relevant functions & variables
const gamePlay = (function () {
  // SELECTING BOARD CELLS
  const cells = document.querySelectorAll(".cell");
  // CREATING A VARIABLE TO KEEP TRACK OF THE TURNS
  let switchTurn;
  // LOOPING OVER BOARD CELLS & ADDING (ONE-TIME) EVENT LISTENERS TO EACH CELL
  cells.forEach((cell) => {
    cell.addEventListener("click", makeMove, { once: true });
  });
  // CREATING FUNCTION TO MAKE A MOVE EACH TIME A CELL IS CLICKED
  function makeMove(e) {
    let cell = e.target;
    let currentPlayer = switchTurn ? true : false;
    console.log("clicked");
    // SET MARK
    // CHECK FOR WIN
    // CHECK FOR TIE
    // SWITCH TURNS
  }

  // function to loop over gameboard arr & render the arr content to the webpage
  const displayBoard = () => {
    let _board = gameboard.getGameboard();
    for (let i = 0; i <= cells.length; i++) {
      let cellValue = _board[i];
      if (cellValue != "") {
        cells[i].classList.add(cellValue);
      }
    }
  };

  return { displayBoard };
})();
