 class Ship {
  constructor(length, hits=0, sunk=false) {
    this.length = length
    this.hits = hits
    this.sunk = sunk
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    this.sunk = ((this.length - this.hits) == 0)
  }
 }

 export default Ship;