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
	
	// ships = {
	//   carrier: 5,
	//   battleship: 4,
	//   cruiser: 3,
	//   submarine: 3,
	//   destroyer: 2
	// }
	
	var Game = function () {
	  function Game(name1, name2) {
	    _classCallCheck(this, Game);
	
	    this.board = new Board();
	    this.player1 = new HumanPlayer(name1);
	    this.player2 = new HumanPlayer(name2);
	  }
	
	  _createClass(Game, [{
	    key: 'registerShip',
	    value: function registerShip(pos) {
	      this.board.registerShip(pos);
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      var p1CarrierEndpoints = this.player1.promptShipPlacement('carrier'); // returns a 2D array of the form [headPos, tailPos]
	      var p1BattleshipEndpoints = this.player1.promptShipPlacement('battleship');
	      var p1CruiserEndpoints = this.player1.promptShipPlacement('cruiser');
	      var p1SubmarineEndpoints = this.player1.promptShipPlacement('submarine');
	      var p1DestroyerEndpoints = this.player1.promptShipPlacement('destroyer');
	      this.board.generateShip(p1CarrierEndpoints);
	      this.board.generateShip(p1BattleshipEndpoints);
	      this.board.generateShip(p1CruiserEndpoints);
	      this.board.generateShip(p1SubmarineEndpoints);
	      this.board.generateShip(p1DestroyerEndpoints);
	    }
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
	
	      var $periodicTable = this.$el.find('.periodic-table');
	      var $columns = $periodicTable.find('div');
	      var $elements = $columns.find('div');
	
	      $elements.on('click', function (event) {
	        var $element = $(event.currentTarget);
	        $element.addClass('ship-part');
	        $element.attr('style', 'background: black');
	        _this.game.registerShip($element.data('pos'));
	      });
	    }
	  }, {
	    key: 'gameEvents',
	    value: function gameEvents() {
	      var $periodicTable = this.$el.find('.periodic-table');
	      var $columns = $periodicTable.find('div');
	      var $elements = $columns.find('div');
	
	      $elements.on('click', function (event) {
	        if (event.currentTarget.innerHTML === "-") {
	          alert("Invalid target");
	        } else {
	          alert("Valid target");
	        }
	      });
	    }
	  }, {
	    key: 'makeMove',
	    value: function makeMove($square) {}
	  }, {
	    key: 'setupPeriodicTable',
	    value: function setupPeriodicTable(name) {
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
	      this.setupPeriodicTable("Marvel");
	      this.setupPeriodicTable("Capcom");
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
	
	var SHIP_PART = Symbol('part');
	var EMPTY_SPACE = Symbol('space');
	
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
	    key: 'generateShip',
	    value: function generateShip(endpoints) {
	      // endpoints is a 2D array of the form [headPos, tailPos]
	      return new Ship(endpoints[0], endpoints[1]);
	    }
	  }, {
	    key: 'populateGrid',
	    value: function populateGrid(ships) {
	      var _this = this;
	
	      // ships is an array of ship objects
	      for (var xCoord = 0; xCoord < 9; xCoord++) {
	        for (var yCoord = 0; yCoord < 18; yCoord++) {
	          this.grid[xCoord][yCoord] = EMPTY_SPACE;
	        }
	      }
	
	      ships.forEach(function (ship) {
	        if (ship.headPos[0] === ship.tailPos[0]) {
	          // if the head and tail are in the same row
	          for (var _yCoord = ship.headPos[1]; _yCoord <= ship.tailPos[1]; _yCoord++) {
	            // assumes the y-coordinate of the head is less than that of the tail
	            _this.grid[ship.headPos[0]][_yCoord] = SHIP_PART;
	          }
	        } else if (ship.headPos[1] === ship.tailPos[1]) {
	          // if the head and tail are in the same column
	          for (var _xCoord = ship.headPos[0]; _xCoord <= ship.tailPPos[0]; _xCoord++) {
	            // assumes the x-coordinate of the head is less than that of the tail
	            _this.grid[_xCoord][ship.headPos[1]] = SHIP_PART;
	          }
	        } else {
	          console.log('Invalid ship headPos/tailPos combination provided');
	        }
	      });
	    }
	  }, {
	    key: 'inRange',
	    value: function inRange(pos) {
	      if (pos[0] > 8 || pos[1] > 17) {
	        return false;
	      }
	
	      return true;
	    }
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = __webpack_require__(4);
	
	var HumanPlayer = function HumanPlayer(name) {
	  _classCallCheck(this, HumanPlayer);
	
	  this.name = name;
	};
	
	module.exports = HumanPlayer;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map