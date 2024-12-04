import "./style.css";

import Player from "./player";
import initializeBoard from "./initialize-board";
import { drawBoard, drawAttackFail, drawAttackSuccess } from "./draw-board";

function game() {
  const player = new Player("Real");
  const cpu = new Player("CPU");

  initializeBoard(player);
  initializeBoard(cpu);

  drawBoard(player);
  drawBoard(cpu);

  document.getElementById("randomizer").addEventListener("click", randomizePlayerBoard);

  const cpuCells = document.querySelectorAll("#player-2 div .cell");
  for (const [_, cell] of Object.entries(cpuCells)) {
    cell.addEventListener("click", () => { cpu.attack() }, { once: true });
  }
}

function randomizePlayerBoard() {
  const player = new Player("Real");
  initializeBoard(player);
  drawBoard(player);
}

game();