import GameBoard from "../src/gameboard";
import Player from "../src/player";

test('Player keeps properties', () => { 
  const player = new Player("Real");

  expect(player.board instanceof GameBoard).toBe(true)
 })