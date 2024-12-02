import GameBoard from "../src/gameboard";

class Player {
  constructor(type) {
    this.type = type;
    this.board = new GameBoard();
  }
}

export default Player;