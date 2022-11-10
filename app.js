// function to store the gameboard as an array inside of a Gameboard object
const Gameboard = (function () {
  let _gameboardArr = ["", "", "", "", "", "", "", "", ""];
  const getGameboard = () => {
    console.log(_gameboardArr);
  };
  return { getGameboard };
})();

// funtion to store each player inside of an object & all players inside of an array
const Player = (function (name) {
  name = this.name;
  console.log(name);
})();
