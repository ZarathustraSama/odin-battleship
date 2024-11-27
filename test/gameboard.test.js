import GameBoard from "../src/gameboard";
import Ship from "../src/ship";

test('Gameboard puts ship in the right squares', () => { 
   const gameboard = new GameBoard();
   
   gameboard.placeShip([[1, 2], [2, 2], [3, 2]]);

   expect(gameboard.board[1][2] instanceof Ship).toBe(true);
   expect(gameboard.board[2][2] instanceof Ship).toBe(true);
   expect(gameboard.board[3][2] instanceof Ship).toBe(true);
   expect(gameboard.board[0][0] instanceof Ship).toBe(false);
})

test('Gameboard triggers hit on ship', () => {
  const gameboard = new GameBoard();

  gameboard.placeShip([[0, 0], [0, 1]]);

  expect(gameboard.receiveAttack([0, 0])).toBe(true);
  expect(gameboard.receiveAttack([1, 1])).toBe(false);
})

test('Ship attacked is indeed the same ship and not a ship copied into three squares', () => {
  const gameboard = new GameBoard();

  gameboard.placeShip([[2, 2], [2, 3], [2, 4], [2, 5]]);
  gameboard.receiveAttack([2, 2]);

  expect(gameboard.board[2][3].hits).toBe(1);
})

test('Checks if all ships sunk', () => { 
  const gameboard = new GameBoard();

  gameboard.placeShip([[0, 0], [0, 1]]);
  gameboard.placeShip([[2, 3], [3, 3], [4, 3]]);

  expect(gameboard.allShipSunk()).toBe(false);

  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([0, 1]);
  gameboard.receiveAttack([2, 3]);

  expect(gameboard.allShipSunk()).toBe(false);

  gameboard.receiveAttack([3, 3]);
  gameboard.receiveAttack([4, 3]);

  expect(gameboard.allShipSunk()).toBe(true);
 })

