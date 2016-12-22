const Board = require('./board.js');
const HumanPlayer = require('./human_player.js');
const ComputerPlayer = require('./computer_player.js');

// ships = {
//   carrier: 5,
//   battleship: 4,
//   cruiser: 3,
//   submarine: 3,
//   destroyer: 2
// }

class Game {
  constructor() {
    this.board = new Board();
    this.human = null;
    this.computer = null;
    this.humanShipCount = 0;
    this.computerShipCount = 0;
  }

  registerShip(pos) {
    this.board.registerShip(pos);
  }

  registerHit(pos) {
    this.board.registerHit(pos);
  }

  setHumanName() {
    const humanName = prompt("Please enter your name", "Captain Jack Sparrow");
    this.human = new HumanPlayer(humanName);
    return humanName;
  }

  setComputerName() {
    const computerName = prompt("Please give the computer a name", "Captain Hector Barbossa");
    this.computer = new ComputerPlayer(computerName);
    return computerName;
  }

  getHumanName() {
    return this.human.name;
  }

  getComputerName() {
    return this.computer.name;
  }

  // run() {
  //   const p1CarrierEndpoints = this.player1.promptShipPlacement('carrier'); // returns a 2D array of the form [headPos, tailPos]
  //   const p1BattleshipEndpoints = this.player1.promptShipPlacement('battleship');
  //   const p1CruiserEndpoints = this.player1.promptShipPlacement('cruiser');
  //   const p1SubmarineEndpoints = this.player1.promptShipPlacement('submarine');
  //   const p1DestroyerEndpoints = this.player1.promptShipPlacement('destroyer');
  //   this.board.generateShip(p1CarrierEndpoints);
  //   this.board.generateShip(p1BattleshipEndpoints);
  //   this.board.generateShip(p1CruiserEndpoints);
  //   this.board.generateShip(p1SubmarineEndpoints);
  //   this.board.generateShip(p1DestroyerEndpoints);
  //
  // }
}

module.exports = Game;
