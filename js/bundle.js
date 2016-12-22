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
/***/ function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function Game() {
	  _classCallCheck(this, Game);
	};
	
	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var periodicTableElements = ['H', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'He', 'Li', 'Be', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Tc', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Re', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Bh', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Uut', 'Fl', 'Uup', 'Lv', 'Uus', 'Uuo', '-', '-', '-', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', '-', '-', '-', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr'];
	
	var BattleshipView = function () {
	  function BattleshipView(game, $el) {
	    _classCallCheck(this, BattleshipView);
	
	    this.game = game;
	    this.$el = $el;
	
	    this.setupBoard();
	    this.bindEvents();
	  }
	
	  _createClass(BattleshipView, [{
	    key: 'bindEvents',
	    value: function bindEvents() {
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
	
	      periodicTableElements.forEach(function (el, idx) {
	        var $column = $periodicTable.find('.column-' + idx % 18);
	        $column.append('<div >' + el + '</div>');
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map