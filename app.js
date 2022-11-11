// factory function to create new players
const Player = (name, sign) => {
  return { name, sign };
};

// function to store the gameboard as an array inside of a Gameboard object
const gameboard = (function () {
  let _board = ["X", "O", "X", "X", "", "", "", "", ""];
  let getGameboard = () => {
    console.log(_board);
  };
  return { getGameboard };
})();

// function to store all gameplay relevant functions & variables
const gamePlay = (function () {
  // SELECTING BOARD CELLS
  const cells = document.querySelectorAll(".cell");
  // LOOPING OVER BOARD CELLS & ADDING EVENT LISTENERS TO EACH CELL
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      console.log("you clicked me");
    });
  });

  // function to loop over gameboard arr & render the arr content to the webpage
  const displayBoard = () => {
    let _board = gameBoard.getGameboard();
    for (let cell of cells) {
      //
    }
  };

  return { displayBoard };
})();
