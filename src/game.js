import Player from "./player";
import initializeBoard from "./initialize-board";

const boardLength = 10;
const shipsLenght = [5, 5, 4, 3, 2, 2];
const directions = ["Horizontal", "Vertical"]

function game() {
  const player = new Player(_, "Real");
  const cpu = new Player(_, "CPU");

  initializeBoard(player);
  initializeBoard(cpu);
}

