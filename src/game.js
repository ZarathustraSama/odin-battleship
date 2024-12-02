import "./style.css";

import Player from "./player";
import initializeBoard from "./initialize-board";
import drawBoard from "./draw-board";

function game() {
  const player = new Player("Real");
  const cpu = new Player("CPU");

  initializeBoard(player);
  initializeBoard(cpu);

  drawBoard(player.board)
}

game();