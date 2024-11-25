import Ship from "../src/ship";

test('Ship gets hit', () => { 
  const ship = new Ship(3);

  ship.hit();
  expect(ship.hits).toBe(1);
  ship.hit()
  expect(ship.hits).toBe(2);
 })