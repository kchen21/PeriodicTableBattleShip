const Ship = require('./ship.js');

// ships = {
//   carrier: 5,
//   battleship: 4,
//   cruiser: 3,
//   submarine: 3,
//   destroyer: 2
// }

const SHIP_PART = Symbol('part');
const EMPTY_SPACE = Symbol('space');

class Board {
  constructor() {
    this.grid = new Array(
      new Array(18),
      new Array(18),
      new Array(18),
      new Array(18),
      new Array(18),
      new Array(18),
      new Array(18),
      new Array(18),
      new Array(18)
    );
  }

  generateShip(endpoints) { // endpoints is a 2D array of the form [headPos, tailPos]
    return new Ship(endpoints[0], endpoints[1]);
  }

  populateGrid(ships) { // ships is an array of ship objects
    for (let xCoord = 0; xCoord < 9; xCoord++) {
      for (let yCoord = 0; yCoord < 18; yCoord++) {
        this.grid[xCoord][yCoord] = EMPTY_SPACE;
      }
    }

    ships.forEach( (ship) => {
      if (ship.headPos[0] === ship.tailPos[0]) { // if the head and tail are in the same row
        for (let yCoord = ship.headPos[1]; yCoord <= ship.tailPos[1]; yCoord++) { // assumes the y-coordinate of the head is less than that of the tail
          this.grid[ship.headPos[0]][yCoord] = SHIP_PART;
        }
      } else if (ship.headPos[1] === ship.tailPos[1]) { // if the head and tail are in the same column
        for (let xCoord = ship.headPos[0]; xCoord <= ship.tailPPos[0]; xCoord++) { // assumes the x-coordinate of the head is less than that of the tail
          this.grid[xCoord][ship.headPos[1]] = SHIP_PART;
        }
      } else {
        console.log('Invalid ship headPos/tailPos combination provided');
      }
    });
  }

  inRange(pos) {
    if (pos[0] > 8 || pos[1] > 17) {
      return false;
    }

    return true;
  }
}

module.exports = Board;
