import Ship from "../src/ship";

test('Ship gets hit', () => { 
  const ship = new Ship(3);

  ship.hit();
  expect(ship.hits).toBe(1);
  ship.hit();
  expect(ship.hits).toBe(2);
 })

 test('Correctly detects when is or is not sunk', () => {
  const ship = new Ship(3);

  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
 })