import GameBoard from "../src/gameboard";

class Player {
  constructor(_gameboard, type) {
    this.game = _gameboard || new GameBoard();
    this.type = type;
  }
}

export default Player;