import "./style.css";

import Player from "./player";
import initializeBoard from "./initialize-board";
import drawBoard from "./draw-board";

const player = new Player("Real");
const cpu = new Player("CPU");

function game() {

  initializeBoard(player);
  initializeBoard(cpu);

  drawBoard(player);
  drawBoard(cpu);

  document.getElementById("randomizer").addEventListener("click", randomizePlayerBoard);
}

function cpuAttack() {
  const attackCoordinates = cpu.attack();
  const playerCell = document.getElementById(`${attackCoordinates[0]}${attackCoordinates[1]}`);
  playerCell.click();
}

function randomizePlayerBoard() {
  player = new Player("Real");
  cpu = new Player("CPU");

  initializeBoard(player);
  initializeBoard(cpu);

  drawBoard(player);
  drawBoard(cpu);
}

game();

export { cpu, cpuAttack };