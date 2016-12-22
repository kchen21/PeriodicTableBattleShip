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

  registerShip(pos) {
    this.board.registerShip(pos);
  }

  run() {
    const p1CarrierEndpoints = this.player1.promptShipPlacement('carrier'); // returns a 2D array of the form [headPos, tailPos]
    const p1BattleshipEndpoints = this.player1.promptShipPlacement('battleship');
    const p1CruiserEndpoints = this.player1.promptShipPlacement('cruiser');
    const p1SubmarineEndpoints = this.player1.promptShipPlacement('submarine');
    const p1DestroyerEndpoints = this.player1.promptShipPlacement('destroyer');
    this.board.generateShip(p1CarrierEndpoints);
    this.board.generateShip(p1BattleshipEndpoints);
    this.board.generateShip(p1CruiserEndpoints);
    this.board.generateShip(p1SubmarineEndpoints);
    this.board.generateShip(p1DestroyerEndpoints);

  }
}

module.exports = Game;
