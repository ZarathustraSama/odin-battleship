import Ship from "./ship";

class GameBoard {
  constructor(_board) {
    this.board = _board || [...Array(10)].map(() => Array(10).fill(null));
    this.attacks = [];
  }

  placeShip(coordinates) {
    const ship = new Ship(coordinates.length)
    for (const set of coordinates) {
      this.board[set[0]][set[1]] = ship;
    }
  }

  receiveAttack(coordinates) {
    if (this.attacks.includes(coordinates)) {
      return false;
    }
    else if (this.board[coordinates[0]][coordinates[1]] instanceof Ship) {
      this.board[coordinates[0]][coordinates[1]].hit();
      this.attacks.push(coordinates);
      return true;
    }
    else {
      this.attacks.push(coordinates);
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
}

export default GameBoard;