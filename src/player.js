import GameBoard from "../src/gameboard";

class Player {
  constructor(type) {
    this.type = type;
    this.board = new GameBoard();
    this.plausibleAttacks = []; // CPU
    this.attacks = []; // CPU
  }

  // CPU attack logic
  attack() {
    if (this.plausibleAttacks.length > 0) {
      return this.smartAttack();
    }
    else {
      return this.randomAttack();
    }
  }

  randomAttack() {
    // This board's lenght is 10
    const randomCoordinates = [this.getRandomInt(10), this.getRandomInt(10)];
    if (this.alreadyAttacked(randomCoordinates)) {
      return this.randomAttack();
    }
    this.attacks.push(`${randomCoordinates[0]}${randomCoordinates[1]}`);
  
    return randomCoordinates; 
  }

  smartAttack() {
    const plausibleCoordinates = this.plausibleAttacks.pop();
    if (this.alreadyAttacked(plausibleCoordinates)) {
      return this.attack();
    }
    this.attacks.push(`${plausibleCoordinates[0]}${plausibleCoordinates[1]}`);

    return plausibleCoordinates
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  alreadyAttacked(coordinates) {
    return this.attacks.includes(`${coordinates[0]}${coordinates[1]}`);
  }

  addPlausibleAttacks(randomCoordinates) {
    const a = randomCoordinates[0];
    const b = randomCoordinates[1];

    if ((a + 1) < 10) {
      this.plausibleAttacks.push([a + 1, b]);
    }
    if ((a - 1) > 0) {
      this.plausibleAttacks.push([a - 1, b]);
    }
    if ((b + 1) < 10) {
      this.plausibleAttacks.push([a, b + 1]);
    }
    if ((b - 1) > 0) {
      this.plausibleAttacks.push([a, b - 1]);
    }
  }
}

export default Player;