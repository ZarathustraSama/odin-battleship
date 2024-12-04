const boardLength = 10;
const shipsLenght = [5, 5, 4, 3, 2, 2];
const directions = ["Horizontal", "Vertical"];

function initializeBoard(player, sL = null) {
  if (sL == null) {
    sL = shipsLenght;
  }

  while (sL.length > 0) {
    const initialCoordinates = [getRandomInt(boardLength), getRandomInt(boardLength)];
    const direction = directions[getRandomInt(directions.length)];
    const coordinates = shipCoordinates(initialCoordinates, direction, sL[0]);

    if (player.board.placeShip(coordinates)) {
      sL.shift();
    }
    else {
      initializeBoard(player, sL);
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shipCoordinates(initialCoordinates, direction, shipLength) {
  const coordinates = [];

  for (let i = 0; i < shipLength; i++) {
    if (direction == "Horizontal") {
      coordinates.push([initialCoordinates[0], initialCoordinates[1] + i]);
    }
    else if (direction == "Vertical") {
      coordinates.push([initialCoordinates[0] + i, initialCoordinates[1]]);
    }
  }

  return coordinates;
}

export default initializeBoard;