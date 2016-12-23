/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var BattleshipGame = __webpack_require__(1);
	var BattleshipView = __webpack_require__(2);
	
	$(document).ready(function () {
	  console.log("I'm running!");
	  var rootEl = $('.pt-battleship');
	  var game = new BattleshipGame();
	  new BattleshipView(game, rootEl);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = __webpack_require__(4);
	var HumanPlayer = __webpack_require__(6);
	var ComputerPlayer = __webpack_require__(7);
	
	// ships = {
	//   carrier: 5,
	//   battleship: 4,
	//   cruiser: 3,
	//   submarine: 3,
	//   destroyer: 2
	// }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.humanBoard = new Board();
	    this.computerBoard = new Board();
	    this.human = null;
	    this.computer = null;
	    this.humanShipCount = 0;
	    this.computerShipCount = 0;
	    this.currentPlayer = "human";
	  }
	
	  _createClass(Game, [{
	    key: 'registerHumanShip',
	    value: function registerHumanShip(pos) {
	      this.humanBoard.registerShip(pos);
	    }
	  }, {
	    key: 'registerComputerShip',
	    value: function registerComputerShip(pos) {
	      this.computerBoard.registerShip(pos);
	    }
	  }, {
	    key: 'registerHitOnHuman',
	    value: function registerHitOnHuman(pos) {
	      this.humanBoard.registerHit(pos);
	    }
	  }, {
	    key: 'registerHitOnComputer',
	    value: function registerHitOnComputer(pos) {
	      this.computerBoard.registerHit(pos);
	    }
	  }, {
	    key: 'setHumanName',
	    value: function setHumanName() {
	      var humanName = prompt("Please enter your name", "Captain Jack Sparrow");
	      this.human = new HumanPlayer(humanName);
	      return humanName;
	    }
	  }, {
	    key: 'setComputerName',
	    value: function setComputerName() {
	      var computerName = prompt("Please give the computer a name", "Captain Hector Barbossa");
	      this.computer = new ComputerPlayer(computerName);
	      return computerName;
	    }
	  }, {
	    key: 'getHumanName',
	    value: function getHumanName() {
	      return this.human.name;
	    }
	  }, {
	    key: 'getComputerName',
	    value: function getComputerName() {
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
	
	  }]);
	
	  return Game;
	}();
	
	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	$.fn.random = function () {
	  // gets a random element from a selection returned by $(selector)
	  return this.eq(Math.floor(Math.random() * this.length));
	};
	
	var PERIODIC_TABLE_ELEMENTS = ['H', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'He', 'Li', 'Be', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Tc', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Re', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Bh', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Uut', 'Fl', 'Uup', 'Lv', 'Uus', 'Uuo', '-', '-', '-', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', '-', '-', '-', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr'];
	
	var BattleshipView = function () {
	  function BattleshipView(game, $el) {
	    _classCallCheck(this, BattleshipView);
	
	    this.game = game;
	    this.$el = $el;
	
	    this.setupBoard();
	    this.setupEvents();
	  }
	
	  _createClass(BattleshipView, [{
	    key: 'setupEvents',
	    value: function setupEvents() {
	      var _this = this;
	
	      alert("Place ships on 17 different elements of the Periodic Table and then click on a random element to begin battling!");
	
	      var humanName = this.game.getHumanName();
	      humanName = humanName.split(" ").join("-");
	
	      var $periodicTable = this.$el.find('#periodic-table-' + humanName);
	      var $columns = $periodicTable.find('div');
	      var $elements = $columns.find('div');
	
	      var game = this.game;
	
	      $elements.on('click', function (event) {
	        if (game.humanShipCount < 17) {
	          var $element = $(event.currentTarget);
	
	          if ($element.html() === "-" || $element.hasClass('ship-part')) {
	            alert("You must place a ship on an element that has no ship!");
	          } else {
	            $element.addClass('ship-part');
	            $element.attr('style', 'background: black');
	            game.humanShipCount += 1;
	          }
	        } else {
	          $elements.off('click');
	          _this.hideShips();
	          _this.targetComputerTableElement();
	        }
	      });
	    }
	  }, {
	    key: 'hideShips',
	    value: function hideShips() {
	      alert('Let the games begin! During each round, select an element on ' + this.game.getComputerName() + '\'s table to launch a cannonball at it. He/She will do the same. Whomever sinks all of his/her opponent\'s ships first wins!');
	
	      var $periodicTable = this.$el.find('.periodic-table');
	      var $columns = $periodicTable.find('div');
	      var $elements = $columns.find('div');
	
	      $elements.each(function (index, element) {
	        $(element).attr('style', 'background: blue');
	      });
	    }
	  }, {
	    key: 'battle',
	    value: function battle() {
	      if (this.game.humanShipCount > 0 && this.game.computerShipCount > 0) {
	        if (this.game.currentPlayer === "human") {
	          this.targetComputerTableElement();
	        } else if (this.game.currentPlayer === "computer") {
	          this.targetHumanTableElement();
	        }
	      } else if (this.game.humanShipCount === 0) {
	        alert(this.game.getComputerName() + ' wins!');
	      } else if (this.game.computerShipCount === 0) {
	        alert(this.game.getHumanName() + ' wins!');
	      }
	    }
	  }, {
	    key: 'targetComputerTableElement',
	    value: function targetComputerTableElement() {
	      var computerName = this.game.getComputerName();
	      computerName = computerName.split(" ").join("-");
	
	      var $periodicTable = this.$el.find('#periodic-table-' + computerName);
	      var $columns = $periodicTable.find('div');
	      var $elements = $columns.find('div');
	
	      var game = this.game;
	      var battle = this.battle.bind(this);
	
	      $elements.on('click', function (event) {
	        var $element = $(event.currentTarget);
	        var wasAttacked = $element.attr('style') === 'background: green' || $element.attr('style') === 'background: red';
	
	        if ($element.html() === "-" || wasAttacked) {
	          alert("You must target an element that hasn't been targetted before!");
	        } else {
	          if ($element.hasClass('ship-part')) {
	            $element.attr('style', 'background: green');
	            game.computerShipCount -= 1;
	            console.log("You hit a ship!");
	          } else {
	            $element.attr('style', 'background: red');
	            console.log('You missed!');
	          }
	          $elements.off('click');
	          game.currentPlayer = "computer";
	          battle();
	        }
	      });
	    }
	  }, {
	    key: 'targetHumanTableElement',
	    value: function targetHumanTableElement() {
	      var humanName = this.game.getHumanName();
	      humanName = humanName.split(" ").join("-");
	
	      var $periodicTable = this.$el.find('#periodic-table-' + humanName);
	      var $columns = $periodicTable.find('div');
	      var $elements = $columns.find('div');
	
	      var legalTargetFound = false;
	
	      while (!legalTargetFound) {
	        var $randomElement = $elements.random();
	
	        if (!$randomElement.hasClass('targetted') && $randomElement.html() !== "-") {
	          $randomElement.addClass('targetted');
	
	          if ($randomElement.hasClass('ship-part')) {
	            $randomElement.attr('style', 'background: green');
	            this.game.humanShipCount -= 1;
	          } else {
	            $randomElement.attr('style', 'background: red');
	          }
	
	          legalTargetFound = true;
	        }
	      }
	
	      this.game.currentPlayer = "human";
	      this.battle();
	    }
	  }, {
	    key: 'generateComputerShips',
	    value: function generateComputerShips() {
	      var computerName = this.game.getComputerName();
	      computerName = computerName.split(" ").join("-");
	
	      var $periodicTable = this.$el.find('#periodic-table-' + computerName);
	      var $columns = $periodicTable.find('div');
	      var $elements = $columns.find('div');
	
	      while (this.game.computerShipCount < 17) {
	        var $randomElement = $elements.random();
	        if (!$randomElement.hasClass('ship-part') && $randomElement.html() !== "-") {
	          $randomElement.addClass('ship-part');
	          this.game.computerShipCount += 1;
	        }
	      }
	    }
	  }, {
	    key: 'setupPeriodicTable',
	    value: function setupPeriodicTable(name) {
	      this.$el.append('<h2>' + name + '\'s Fleet<h2>');
	      name = name.split(" ").join("-");
	      this.$el.append('<div id="periodic-table-' + name + '" class="periodic-table"></div>');
	      var $periodicTable = this.$el.find('#periodic-table-' + name);
	      $periodicTable.append('<div class="column-0"></div>');
	      $periodicTable.append('<div class="column-1"></div>');
	      $periodicTable.append('<div class="column-2"></div>');
	      $periodicTable.append('<div class="column-3"></div>');
	      $periodicTable.append('<div class="column-4"></div>');
	      $periodicTable.append('<div class="column-5"></div>');
	      $periodicTable.append('<div class="column-6"></div>');
	      $periodicTable.append('<div class="column-7"></div>');
	      $periodicTable.append('<div class="column-8"></div>');
	      $periodicTable.append('<div class="column-9"></div>');
	      $periodicTable.append('<div class="column-10"></div>');
	      $periodicTable.append('<div class="column-11"></div>');
	      $periodicTable.append('<div class="column-12"></div>');
	      $periodicTable.append('<div class="column-13"></div>');
	      $periodicTable.append('<div class="column-14"></div>');
	      $periodicTable.append('<div class="column-15"></div>');
	      $periodicTable.append('<div class="column-16"></div>');
	      $periodicTable.append('<div class="column-17"></div>');
	
	      PERIODIC_TABLE_ELEMENTS.forEach(function (el, idx) {
	        var $column = $periodicTable.find('.column-' + idx % 18);
	        var $element = $('<div>' + el + '</div>');
	        $element.data('pos', [Math.floor(idx / 18), idx % 18]);
	        $column.append($element);
	      });
	    }
	  }, {
	    key: 'setupBoard',
	    value: function setupBoard() {
	      this.setupPeriodicTable(this.game.setHumanName());
	      this.setupPeriodicTable(this.game.setComputerName());
	      this.generateComputerShips();
	    }
	  }]);
	
	  return BattleshipView;
	}();
	
	module.exports = BattleshipView;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ship = __webpack_require__(5);
	
	// ships = {
	//   carrier: 5,
	//   battleship: 4,
	//   cruiser: 3,
	//   submarine: 3,
	//   destroyer: 2
	// }
	
	var SHIP_PART = Symbol('shipPart');
	var EMPTY_SQUARE = Symbol('emptySquare');
	var DAMAGED_PART = Symbol('damagedPart');
	
	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    this.grid = new Array(new Array(18), new Array(18), new Array(18), new Array(18), new Array(18), new Array(18), new Array(18), new Array(18), new Array(18));
	  }
	
	  _createClass(Board, [{
	    key: 'registerShip',
	    value: function registerShip(pos) {
	      this.grid[pos[0]][pos[1]] = SHIP_PART;
	      console.log('Ship registered at ' + pos);
	    }
	  }, {
	    key: 'populateGrid',
	    value: function populateGrid() {
	      for (var xCoord = 0; xCoord < 9; xCoord++) {
	        for (var yCoord = 0; yCoord < 18; yCoord++) {
	          if (this.grid[xCoord][yCoord] !== SHIP_PART) {
	            this.grid[xCoord][yCoord] = EMPTY_SQUARE;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'registerHit',
	    value: function registerHit(pos) {
	      this.grid[pos[0]][pos[1]] = DAMAGED_PART;
	      console.log('Ship part at ' + pos + ' has been hit!');
	    }
	
	    // generateShip(endpoints) { // endpoints is a 2D array of the form [headPos, tailPos]
	    //   return new Ship(endpoints[0], endpoints[1]);
	    // }
	    //
	    // populateGrid(ships) { // ships is an array of ship objects
	    //   for (let xCoord = 0; xCoord < 9; xCoord++) {
	    //     for (let yCoord = 0; yCoord < 18; yCoord++) {
	    //       this.grid[xCoord][yCoord] = EMPTY_SPACE;
	    //     }
	    //   }
	    //
	    //   ships.forEach( (ship) => {
	    //     if (ship.headPos[0] === ship.tailPos[0]) { // if the head and tail are in the same row
	    //       for (let yCoord = ship.headPos[1]; yCoord <= ship.tailPos[1]; yCoord++) { // assumes the y-coordinate of the head is less than that of the tail
	    //         this.grid[ship.headPos[0]][yCoord] = SHIP_PART;
	    //       }
	    //     } else if (ship.headPos[1] === ship.tailPos[1]) { // if the head and tail are in the same column
	    //       for (let xCoord = ship.headPos[0]; xCoord <= ship.tailPPos[0]; xCoord++) { // assumes the x-coordinate of the head is less than that of the tail
	    //         this.grid[xCoord][ship.headPos[1]] = SHIP_PART;
	    //       }
	    //     } else {
	    //       console.log('Invalid ship headPos/tailPos combination provided');
	    //     }
	    //   });
	    // }
	    //
	    // inRange(pos) {
	    //   if (pos[0] > 8 || pos[1] > 17) {
	    //     return false;
	    //   }
	    //
	    //   return true;
	    // }
	
	  }]);
	
	  return Board;
	}();
	
	module.exports = Board;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ship =
	// Create a ship with a head position headPos and a tail pos of tailPos
	function Ship(headPos, tailPos) {
	  _classCallCheck(this, Ship);
	
	  this.headPos = headPos;
	  this.tailPos = tailPos;
	};
	
	module.exports = Ship;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HumanPlayer = function HumanPlayer(name) {
	  _classCallCheck(this, HumanPlayer);
	
	  this.name = name;
	};
	
	module.exports = HumanPlayer;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ComputerPlayer = function ComputerPlayer(name) {
	  _classCallCheck(this, ComputerPlayer);
	
	  this.name = name;
	};
	
	module.exports = ComputerPlayer;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map