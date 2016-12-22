const Board = require('./board.js');
const HumanPlayer = require('./human_player.js');

// ships = {
//   carrier: 5,
//   battleship: 4,
//   cruiser: 3,
//   submarine: 3,
//   destroyer: 2
// }

class Game {
  constructor(name1, name2) {
    this.board = new Board();
    this.player1 = new HumanPlayer(name1);
    this.player2 = new HumanPlayer(name2);
  }

  run() {
    const carrierEndpoints = this.player1.promptShipPlacement('carrier'); // returns a 2D array of the form [headPos, tailPos]
    const battleshipEndpoints = this.player1.promptShipPlacement('battleship');
    const cruiserEndpoints = this.player1.promptShipPlacement('cruiser');
    const submarineEndpoints = this.player1.promptShipPlacement('submarine');
    const destroyerEndpoints = this.player1.promptShipPlacement('destroyer');
    this.board.generateShip(carrierEndpoints);
    this.board.generateShip(battleshipEndpoints);
    this.board.generateShip(cruiserEndpoints);
    this.board.generateShip(submarineEndpoints);
    this.board.generateShip(destroyerEndpoints);

  }
}

module.exports = Game;
