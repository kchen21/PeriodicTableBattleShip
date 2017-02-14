const Player = require('./player.js');

class Game {
  constructor() {
    this.human = null;
    this.computer = null;
    this.numShips = null;
    this.humanShipCount = 0;
    this.computerShipLocations = [];
    this.currentPlayer = "human";
  }

  setHumanName(humanName) {
    this.human = new Player(humanName);
    return humanName;
  }

  setComputerName(computerName) {
    this.computer = new Player(computerName);
    return computerName;
  }

  setNumShips(n) {
    this.numShips = n;
    return n;
  }

  getHumanName() {
    return this.human.name;
  }

  getComputerName() {
    return this.computer.name;
  }

  computerShipCount() {
    return this.computerShipLocations.length;
  }

  incrementHumanCIGuessCount() {
    this.human.consecutiveIncorrectGuessCount += 1;
  }

  incrementComputerCIGuessCount() {
    this.computer.consecutiveIncorrectGuessCount += 1;
  }

  resetHumanCIGuessCount() {
    this.human.consecutiveIncorrectGuessCount = 0;
  }
}

module.exports = Game;
