import Ship from "./ship";

class GameBoard {
  constructor() {
    this.board = [...Array(10)].map(() => Array(10).fill(null));
    this.attacks = [];
  }

  placeShip(shipCoordinates) {
    const ship = new Ship(shipCoordinates.length)
    if (this.isLegal(shipCoordinates)) {
      for (const set of shipCoordinates) {
        this.board[set[0]][set[1]] = ship;
      }
      return true;
    }
    else {
      return false;
    }
  }

  receiveAttack(coordinates) {
    if (this.outOfBounds(coordinates) || this.attacks.includes(`${coordinates[0]}${coordinates[1]}`)) {
      return null;
    }
    else if (this.isShip(coordinates)) {
      this.board[coordinates[0]][coordinates[1]].hit();
      this.attacks.push(`${coordinates[0]}${coordinates[1]}`);
      return true;
    }
    else {
      this.attacks.push(`${coordinates[0]}${coordinates[1]}`);
      return false;
    }
  }

  allShipSunk() {
    const allShips = this.board.flat().filter(item => item instanceof Ship);
    for (const ship of allShips) {
      if (!ship.isSunk()) {
        return false;
      }
    }

    return true;
  }

  isLegal(shipCoordinates) {
    for (const coordinates of shipCoordinates) {
      if (this.outOfBounds(coordinates) || this.isShip(coordinates)) {
        return false;
      }
    }
    return true;
  }

  isShip(coordinates) {
    return this.board[coordinates[0]][coordinates[1]] instanceof Ship;
  }

  outOfBounds(coordinates) {
    return (coordinates[0] >= this.board.length) || (coordinates[1] >= this.board.length) || (coordinates[0] < 0) || (coordinates[1] < 0);
  }
}

export default GameBoard;