const Player = require('./player.js');

class Game {
  constructor() {
    this.human = null;
    this.computer = null;
    this.humanShipCount = 0;
    this.computerShipCount = 0;
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

  getHumanName() {
    return this.human.name;
  }

  getComputerName() {
    return this.computer.name;
  }
}

module.exports = Game;
