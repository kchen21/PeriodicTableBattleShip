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
	var BattleshipView = __webpack_require__(3);
	
	$(document).ready(function () {
	  var rootEl = $('.pt-battleship');
	  var game = new BattleshipGame();
	  new BattleshipView(game, rootEl);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Player = __webpack_require__(2);
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.human = null;
	    this.computer = null;
	    this.numShips = null;
	    this.humanShipCount = 0;
	    this.computerShipLocations = [];
	    this.currentPlayer = "human";
	  }
	
	  _createClass(Game, [{
	    key: "setHumanName",
	    value: function setHumanName(humanName) {
	      this.human = new Player(humanName);
	      return humanName;
	    }
	  }, {
	    key: "setComputerName",
	    value: function setComputerName(computerName) {
	      this.computer = new Player(computerName);
	      return computerName;
	    }
	  }, {
	    key: "setNumShips",
	    value: function setNumShips(n) {
	      this.numShips = n;
	      return n;
	    }
	  }, {
	    key: "getHumanName",
	    value: function getHumanName() {
	      return this.human.name;
	    }
	  }, {
	    key: "getComputerName",
	    value: function getComputerName() {
	      return this.computer.name;
	    }
	  }, {
	    key: "computerShipCount",
	    value: function computerShipCount() {
	      return this.computerShipLocations.length;
	    }
	  }, {
	    key: "incrementHumanCIGuessCount",
	    value: function incrementHumanCIGuessCount() {
	      this.human.consecutiveIncorrectGuessCount += 1;
	    }
	  }, {
	    key: "incrementComputerCIGuessCount",
	    value: function incrementComputerCIGuessCount() {
	      this.computer.consecutiveIncorrectGuessCount += 1;
	    }
	  }, {
	    key: "resetHumanCIGuessCount",
	    value: function resetHumanCIGuessCount() {
	      this.human.consecutiveIncorrectGuessCount = 0;
	    }
	  }, {
	    key: "resetComputerCIGuessCount",
	    value: function resetComputerCIGuessCount() {
	      this.computer.consecutiveIncorrectGuessCount = 0;
	    }
	  }, {
	    key: "humanCIGuessCount",
	    value: function humanCIGuessCount() {
	      return this.human.consecutiveIncorrectGuessCount;
	    }
	  }]);
	
	  return Game;
	}();
	
	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Player = function Player(name) {
	  _classCallCheck(this, Player);
	
	  this.name = name;
	  this.consecutiveIncorrectGuessCount = 0;
	};
	
	module.exports = Player;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ElementInfo = __webpack_require__(4);
	
	var remove = function remove(el, arr) {
	  var idx = arr.indexOf(el);
	
	  if (idx > -1) {
	    arr.splice(idx, 1);
	  }
	
	  return el;
	};
	
	$.fn.random = function () {
	  // gets a random element from a selection returned by $(selector)
	  return this.eq(Math.floor(Math.random() * this.length));
	};
	
	var PERIODIC_TABLE_ELEMENTS = ['H', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'He', 'Li', 'Be', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', '-', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', '-', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og', '-', '-', '-', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', '-', '-', '-', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr'];
	
	var BattleshipView = function () {
	  function BattleshipView(game, $el) {
	    _classCallCheck(this, BattleshipView);
	
	    this.game = game;
	    this.$el = $el;
	
	    this.toggleInstructions();
	    this.setupForm();
	  }
	
	  _createClass(BattleshipView, [{
	    key: 'toggleInstructions',
	    value: function toggleInstructions() {
	      $('.instructions-toggler > input').click(function (event) {
	        event.preventDefault();
	        $('.instructions').toggle();
	      });
	    }
	  }, {
	    key: 'setupForm',
	    value: function setupForm() {
	      this.$el.append('<form class="setup-form"></form>');
	
	      var $setupForm = this.$el.find(".setup-form");
	
	      $setupForm.append('<p>Enter values for the following:</p>');
	      $setupForm.append('<label for="human-name">Human Player Name</label>');
	      $setupForm.append('<input id="human-name" type="text" value="Jack" />');
	      $setupForm.append('<label for="computer-name">Computer Player Name</label>');
	      $setupForm.append('<input id="computer-name" type="text" value="Hector" />');
	      $setupForm.append('<label for="num-ships">Number of Ships</label>');
	      $setupForm.append('<input id="num-ships" type="text" value="20" />');
	      $setupForm.append('<input class="submit-button" type="submit" value="Submit" />');
	
	      var self = this;
	
	      $setupForm.submit(function (event) {
	        event.preventDefault();
	        self.game.setHumanName($("#human-name")[0].value);
	        self.game.setComputerName($("#computer-name")[0].value);
	        self.game.setNumShips(parseInt($("#num-ships")[0].value));
	        self.removeForm();
	        self.setupBoard();
	        self.setupEvents();
	      });
	    }
	  }, {
	    key: 'removeForm',
	    value: function removeForm() {
	      $('.setup-form').remove();
	    }
	  }, {
	    key: 'setupBoard',
	    value: function setupBoard() {
	      this.setupLegend();
	      this.setupPeriodicTable(this.game.getHumanName());
	      this.$el.append('<section class="messages"></section>');
	      this.setupPeriodicTable(this.game.getComputerName());
	      this.generateComputerShips();
	    }
	  }, {
	    key: 'setupLegend',
	    value: function setupLegend() {
	      this.$el.append('<section class="legend"></section>');
	      $('.legend').append('<label for="legend-icons">Legend:</label>');
	      $('.legend').append('<ul id="legend-icons"></ul>');
	      $('#legend-icons').append('<li class="hit-icon">Hit</li>');
	      $('#legend-icons').append('<li class="miss-icon">Miss</li>');
	    }
	  }, {
	    key: 'setupPeriodicTable',
	    value: function setupPeriodicTable(name) {
	      this.$el.append('<h2 class="periodic-table-header">' + name + '\'s Fleet</h2>');
	      var dashedName = name.split(" ").join("-");
	      this.$el.append('<div id="periodic-table-' + dashedName + '" class="periodic-table"></div>');
	      var $periodicTable = this.$el.find('#periodic-table-' + dashedName);
	
	      for (var i = 0; i <= 17; i++) {
	        $periodicTable.append('<div class="column-' + i + '"></div>');
	      }
	
	      PERIODIC_TABLE_ELEMENTS.forEach(function (el, idx) {
	        var $column = $periodicTable.find('.column-' + idx % 18);
	        var $element = $('<div>' + el + '</div>');
	        $element.data('sym', el);
	
	        if (el === "-") {
	          $element.addClass('non-element-square');
	        } else {
	          $element.addClass('element-square');
	        }
	
	        $column.append($element);
	      });
	
	      this.$el.append('<section class="select-messages-' + dashedName + '"></section>');
	      $('.select-messages-' + dashedName).append('<p class="errors-' + dashedName + '"></p>');
	      $('.select-messages-' + dashedName).append('<p class="selected-element-info-' + dashedName + '"></p>');
	      this.$el.append('<section class="ship-location-' + dashedName + '"></section>');
	    }
	  }, {
	    key: 'generateComputerShips',
	    value: function generateComputerShips() {
	      var computerName = this.game.getComputerName();
	      var dashedComputerName = computerName.split(" ").join("-");
	
	      var $periodicTable = $('#periodic-table-' + dashedComputerName);
	      var $elements = $periodicTable.find('.element-square');
	
	      while (this.game.computerShipCount() < this.game.numShips) {
	        var $randomElement = $elements.random();
	        if (!$randomElement.hasClass('ship')) {
	          $randomElement.addClass('ship');
	          this.game.computerShipLocations.push($randomElement.data('sym'));
	        }
	      }
	    }
	  }, {
	    key: 'setupEvents',
	    value: function setupEvents() {
	      var _this = this;
	
	      var humanName = this.game.getHumanName();
	      var dashedHumanName = humanName.split(" ").join("-");
	
	      var $periodicTable = $('#periodic-table-' + dashedHumanName);
	      var $elements = $periodicTable.find('.element-square');
	      var $errors = $('.errors-' + dashedHumanName);
	      var $selectedElementInfo = $('.selected-element-info-' + dashedHumanName);
	
	      var game = this.game;
	
	      $elements.on('click', function (event) {
	        if (game.humanShipCount < game.numShips) {
	          var $element = $(event.currentTarget);
	          var elementSymbol = $element.data('sym');
	
	          if ($element.hasClass('ship')) {
	            $selectedElementInfo.empty();
	            $errors.html('<section class="ship-placement-error">You must place a ship on an element that has no ship!</section>');
	          } else {
	            $errors.empty();
	            $element.addClass('ship');
	            $element.attr('style', 'background: black');
	            game.humanShipCount += 1;
	            $selectedElementInfo.empty();
	            $selectedElementInfo.html('<section class="action">' + humanName + ' placed a ship on ' + elementSymbol + '.</section> ' + ElementInfo[elementSymbol]);
	          }
	        } else {
	          $selectedElementInfo.empty();
	          $elements.off('click');
	          _this.hideShips();
	          $('.messages').html('<p>Let the battle for control of the elements begin! Fire the first missile!</p>');
	          _this.targetComputerTableElement();
	        }
	      });
	    }
	  }, {
	    key: 'hideShips',
	    value: function hideShips() {
	      var $elements = $('.element-square');
	
	      $elements.each(function (index, element) {
	        $(element).attr('style', 'background: blue');
	      });
	    }
	  }, {
	    key: 'targetComputerTableElement',
	    value: function targetComputerTableElement() {
	      var humanName = this.game.getHumanName();
	      var computerName = this.game.getComputerName();
	      var dashedComputerName = computerName.split(" ").join("-");
	
	      var $periodicTable = $('#periodic-table-' + dashedComputerName);
	      var $elements = $periodicTable.find('.element-square');
	      var $errors = $('.errors-' + dashedComputerName);
	      var $selectedElementInfo = $('.selected-element-info-' + dashedComputerName);
	
	      var game = this.game;
	      var renderHint = this.renderHint.bind(this);
	      var battle = this.battle.bind(this);
	
	      $elements.on('click', function (event) {
	        var $element = $(event.currentTarget);
	        var elementSymbol = $element.data('sym');
	        var wasTargetted = $element.attr('style') === 'background: green' || $element.attr('style') === 'background: red';
	
	        $('.messages').empty();
	
	        if (wasTargetted) {
	          $selectedElementInfo.empty();
	          $errors.html('<section class="targetting-error">You must target an element that hasn\'t been targetted before.</section>');
	        } else {
	          $errors.empty();
	          if ($element.hasClass('ship')) {
	            $element.attr('style', 'background: green');
	            remove($element.data('sym'), game.computerShipLocations);
	            game.resetHumanCIGuessCount();
	          } else {
	            $element.attr('style', 'background: red');
	            game.incrementHumanCIGuessCount();
	          }
	
	          $selectedElementInfo.empty();
	          $('.ship-location-' + dashedComputerName).empty();
	          $selectedElementInfo.html('<section class="action">' + humanName + ' launched a missile at ' + elementSymbol + '.</section> ' + ElementInfo[elementSymbol]);
	
	          if (game.humanCIGuessCount() > 2) {
	            renderHint(dashedComputerName);
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
	      var computerName = this.game.getComputerName();
	      var dashedHumanName = humanName.split(" ").join("-");
	
	      var $periodicTable = $('#periodic-table-' + dashedHumanName);
	      var $elements = $periodicTable.find('.element-square');
	      var $selectedElementInfo = $('.selected-element-info-' + dashedHumanName);
	
	      var legalTargetFound = false;
	
	      while (!legalTargetFound) {
	        var $randomElement = $elements.random();
	
	        if (!$randomElement.hasClass('targetted')) {
	          var randomElementSymbol = $randomElement.data('sym');
	
	          $randomElement.addClass('targetted');
	
	          if ($randomElement.hasClass('ship')) {
	            $randomElement.attr('style', 'background: green');
	            this.game.humanShipCount -= 1;
	            this.game.resetComputerCIGuessCount();
	          } else {
	            $randomElement.attr('style', 'background: red');
	            this.game.incrementComputerCIGuessCount();
	          }
	
	          $selectedElementInfo.empty();
	          $selectedElementInfo.html('<section class="action">' + computerName + ' launched a missile at ' + randomElementSymbol + '.</section> ' + ElementInfo[randomElementSymbol]);
	          legalTargetFound = true;
	        }
	      }
	
	      this.game.currentPlayer = "human";
	      this.battle();
	    }
	  }, {
	    key: 'battle',
	    value: function battle() {
	      if (this.game.humanShipCount > 0 && this.game.computerShipCount() > 0) {
	        if (this.game.currentPlayer === "human") {
	          this.targetComputerTableElement();
	        } else if (this.game.currentPlayer === "computer") {
	          this.targetHumanTableElement();
	        }
	      } else if (this.game.humanShipCount === 0) {
	        $('.messages').html('<p>' + this.game.getComputerName() + ' wins!</p>');
	      } else if (this.game.computerShipCount() === 0) {
	        $('.messages').html('<p>' + this.game.getHumanName() + ' wins!</p>');
	      }
	    }
	  }, {
	    key: 'hintMessage',
	    value: function hintMessage(elementInfo) {
	      var words = elementInfo.split(/-| /);
	      var capitalizedElementName = words[0];
	      var elementName = capitalizedElementName.toLowerCase();
	
	      var hintMessageWords = [];
	
	      for (var i = 0; i < words.length; i++) {
	        var word = words[i];
	
	        if (word === capitalizedElementName || word === elementName) {
	          hintMessageWords.push("-".repeat(word.length));
	        } else if (i === 1) {
	          hintMessageWords.push("(?)");
	        } else {
	          hintMessageWords.push(word);
	        }
	      }
	
	      return hintMessageWords.join(" ");
	    }
	  }, {
	    key: 'createHint',
	    value: function createHint(elements) {
	      var randomElement = elements[Math.floor(Math.random() * elements.length)];
	      var elementInfo = ElementInfo[randomElement];
	
	      return this.hintMessage(elementInfo);
	    }
	  }, {
	    key: 'renderHint',
	    value: function renderHint(dashedComputerName) {
	      var $hintSection = $('.ship-location-' + dashedComputerName);
	
	      $hintSection.html('<p>You\'ve missed ' + this.game.humanCIGuessCount() + ' times in a row so far! Here\'s a hint! One of ' + this.game.getComputerName() + '\'s ships is located at the following element:</p>\n      <p>' + this.createHint(this.game.computerShipLocations) + '</p>');
	    }
	  }]);
	
	  return BattleshipView;
	}();
	
	module.exports = BattleshipView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  H: "Hydrogen (H) is a colorless, highly flammable gaseous element, the lightest of all gases and the most abundant element in the universe. Used in the production of synthetic ammonia and methanol, in petroleum refining, in the hydrogenation of organic materials, as a reducing atmosphere, in oxy-hydrogen torches, and in rocket fuels.   The most common uses of Hydrogen are in Hydrogen Peroxide, H Bomb, Fuel Cells, Fuel, Hydrogen Generators, Hydrogen Powered Cars. A Hydrogen Reaction involves a process in which Hydrogen is mixed with another substance which react to form something else.",
	  He: "Helium (He) is a colorless, odorless, inert gaseous element constituting approximately one percent of Earth's atmosphere, from which it is commercially obtained by fractionation for use in electric light bulbs, fluorescent tubes, and radio vacuum tubes and as an inert gas shield in arc welding.",
	  Li: "Lithium (Li) is a soft, silvery, highly reactive metallic element that is used as a heat transfer medium, in thermo-nuclear weapons, and in various alloys, ceramics, and optical forms of glass.",
	  Be: "Beryllium (Be) is a high-melting, lightweight, corrosion-resistant, rigid, steel-gray metallic element used as an aerospace structural material, as a moderator and reflector in nuclear reactors, and in a copper alloy used for springs, electrical contacts, and non-sparking tools.",
	  B: "Boron (B) is a soft, brown, amorphous or crystalline nonmetallic element, extracted chiefly from kernite and borax and used in flares, propellant mixtures, nuclear reactor control elements, abrasives, and hard metallic alloys.  The most common uses of Boron are in heat resistant alloys.",
	  C: "Carbon (C) is a naturally abundant non-metallic element that occurs in many inorganic and in all organic compounds, exists freely as graphite and diamond and as a constituent of coal, limestone, and petroleum, and is capable of chemical self-bonding to form an enormous number of chemically, biologically, and commercially important molecules. One of the hardest (diamond) substances known to man. The most common uses of Carbon are in Fossil fuels - methane gas, Diamonds, Crude oil (petroleum), Radiocarbon dating, Smoke detectors, Graphite carbon used as charcoal for cooking & artwork, Gasoline, Kerosene, Carbon monoxide - dioxide and Carbon Fiber. A Carbon Reaction involves a process in which Carbon is mixed with another substance which react to form something else.",
	  N: "Nitrogen (N) is a non-metallic element that constitutes nearly four-fifths of the air by volume, occurring as a colorless, odorless, almost inert diatomic gas, N2, in various minerals and in all proteins and used in a wide variety of important manufactures, including ammonia, nitric acid, TNT, and fertilizers. A Nitrogen Reaction involves a process in which Nitrogen is mixed with another substance which react to form something else.",
	  O: "Oxygen (O) is a colorless tasteless odourless gaseous element that constitutes 21 percent of the atmosphere and is found in water, in most rocks and minerals, and in numerous organic compounds, that is capable of combining with all elements except the inert gases, that is active in physiological processes, and that is involved especially in combustion processes.  The most common uses of Oxygen are in Oxidizer, Rocket propulsion, Medicine, Welding, Sensors, Mask and Concentrators.",
	  F: "Fluorine (F) is a pale-yellow, highly corrosive, poisonous, gaseous halogen element, the most electronegative and most reactive of all the elements, used in a wide variety of industrially important compounds. The most common uses of Fluorine are in the Production of uranium, Air conditioning, Refrigeration, Insecticide, Toothpaste, Added to municipal water supplies and Teflon.",
	  Ne: "Neon (Ne) is a rare, inert gaseous element occurring in the atmosphere to the extent of 18 parts per million and obtained by fractional distillation of liquid air. It is colorless but glows reddish orange in an electric discharge and is used in displays and indicators.",
	  Na: "Sodium (Na) is a soft, light, extremely malleable silver-white metallic element that reacts explosively with water, is naturally abundant in combined forms, especially in common salt, and is used in the production of a wide variety of industrially important compounds. A Sodium Reaction involves a process in which Sodium is mixed with another substance which react to form something else.",
	  Mg: "Magnesium (Mg) is a light, silvery-white, moderately hard metallic element that in ribbon or powder form burns with a brilliant white flame. It is used in structural alloys, pyrotechnics, flash photography, and incendiary bombs. A Magnesium Reaction involves a process in which Magnesium is mixed with another substance which react to form something else.",
	  Al: "Aluminum (Al) is a silvery-white, ductile metallic element, the most abundant in the earth's crust but found only in combination, chiefly in bauxite. Having good conductive and thermal properties, it is used to form many hard, light, corrosion-resistant alloys. An Aluminum Reaction involves a process in which Aluminum is mixed with another substance which react to form something else.",
	  Si: "Silicon (Si) is a non-metallic element occurring extensively in the earth's crust in silica and silicates, having both an amorphous and a crystalline allotrope, and used doped or in combination with other materials in glass, semi-conducting devices, concrete, brick, refractories, pottery, and silicones.",
	  P: "Phosphorus (P) is a highly reactive, poisonous, non-metallic element occurring naturally in phosphates, especially apatite, and existing in three allotropic forms, white (or sometimes yellow), red, violet and black. An essential constituent of protoplasm, it is used in safety matches, pyrotechnics, incendiary shells, and fertilizers and to protect metal surfaces from corrosion.",
	  S: "Sulfur (S) is a pale yellow non-metallic element occurring widely in nature in several free and combined allotropic forms. It is used in black gunpowder, rubber vulcanization, the manufacture of insecticides and pharmaceuticals, and in the preparation of sulfur compounds such as hydrogen sulfide and sulfuric acid. The IUPAC has adopted the spelling 'sulfur', as has the Royal Society of Chemistry Nomenclature Committee.",
	  Cl: "Chlorine (Cl) is a highly irritating, greenish-yellow gaseous halogen, capable of combining with nearly all other elements, produced principally by electrolysis of sodium chloride and used widely to purify water, as a disinfectant and bleaching agent, and in the manufacture of many important compounds including chloroform and carbon tetrachloride. The most common uses of Chlorine are in Bleaches, Mustard gas, Water purification, Production of chlorates, Paper production, Antiseptic, Insecticides, Paint, Plastics and Medicines.",
	  Ar: "Argon (Ar) is a colorless, odorless, inert gaseous element constituting approximately one percent of Earth's atmosphere, from which it is commercially obtained by fractionation for use in electric light bulbs, fluorescent tubes, and radio vacuum tubes and as an inert gas shield in arc welding.",
	  K: "Potassium (K) is a soft, silver-white, highly or explosively reactive metallic element that occurs in nature only in compounds. It is obtained by electrolysis of its common hydroxide and found in, or converted to, a wide variety of salts used especially in fertilizers and soaps. A Potassium Reaction involves a process in which Potassium is mixed with another substance which react to form something else.",
	  Ca: "Calcium (Ca) is a silvery, moderately hard metallic element that constitutes approximately 3.5% of the earth's crust and is a basic component of most animals and plants. It occurs naturally in limestone, gypsum, and fluorite, and its compounds are used to make plaster, quicklime, Portland cement, and metallurgic and electronic materials.  The most common uses of Calcium are in Dairy products ( deficiency can affect bone and teeth formation - Vitamin D is needed to absorb calcium ), Reducing agent and an Alloying agent used in the production of alloys. A Calcium Reaction involves a process in which Calcium is mixed with another substance which react to form something else.",
	  Sc: "Scandium (Sc) is a silvery-white metallic element found in various rare minerals and separated as a by-product in the processing of certain uranium ores. An artificially produced radioactive isotope is used as a tracer in studies of oil wells and pipelines.",
	  Ti: "Titanium (Ti) is a strong, low-density, highly corrosion-resistant, lustrous white metallic element that occurs widely in igneous rocks and is used to alloy aircraft metals for low weight, strength, and high-temperature stability.",
	  V: "Vanadium (V) is a bright white, soft, ductile metallic element found in several minerals, notably vanadinite and carnotite, having good structural strength and used in rust-resistant high-speed tools, as a carbon stabilizer in some steels, as a titanium-steel bonding agent, and as a catalyst.",
	  Cr: "Chromium (Cr) is a lustrous, hard, steel-gray metallic element, resistant to tarnish and corrosion and found primarily in chromite. It is used in the hardening of steel alloys and the production of stainless steels, in corrosion-resistant decorative platings, and as a pigment in glass. The most common uses of Chromium are in Dyes and paints, Stainless steel, Metallurgy, Chrome plating, Green rouge metal polish and Magnetic tape.",
	  Mn: "Manganese (Mn) is a gray-white or silvery brittle metallic element, occurring in several allotropic forms, found worldwide, especially in the ores pyrolusite and rhodochrosite and in nodules on the ocean floor. It is alloyed with steel to increase strength, hardness, wear resistance, and other properties and with other metals to form highly ferromagnetic materials.",
	  Fe: "Iron (Fe) is a heavy malleable ductile magnetic silver-white metallic element that readily rusts in moist air, occurs native in meteorites and combined in most igneous rocks, is the most used of metals, and is vital to biological processes as in transport of oxygen in the body. An Iron Reaction involves a process in which Iron is mixed with another substance which react to form something else.",
	  Co: "Cobalt (Co) is a hard, brittle metallic element, found associated with nickel, silver, lead, copper, and iron ores and resembling nickel and iron in appearance. It is used chiefly for magnetic alloys, high-temperature alloys, and in the form of its salts for blue glass and ceramic pigments. The most common uses of Cobalt are in Magnets, Ceramics, Magnetic alloys, Cobalt boats, Glassware, Catalysts for the petroleum and chemical industries, Steel-belted radial tires and it is also used in radiotherapy.",
	  Ni: "Nickel (Ni) is a silvery, hard, ductile, ferromagnetic metallic element used in alloys, in corrosion-resistant surfaces and batteries, and for electroplating.",
	  Cu: "Copper (Cu) is a ductile, malleable, reddish-brown metallic element that is an excellent conductor of heat and electricity and is widely used for electrical wiring, water piping, and corrosion-resistant parts, either pure or in alloys such as brass and bronze. The most common uses of Copper are in Copper sulfate, Hammered copper, Tubing, pipes - Plumbing, Wire, Electromagnets, Statues, Watt's steam engine, Vacuum tubes, Musical instruments, Component of coins, Cookware and Cutlery. A Copper Reaction involves a process in which Copper is mixed with another substance which react to form something else.",
	  Zn: "Zinc (Zn) is a bluish-white, lustrous metallic element that is brittle at room temperature but malleable with heating. It is used to form a wide variety of alloys including brass, bronze, various solders, and nickel silver, in galvanizing iron and other metals, for electric fuses, anodes, and meter cases, and in roofing, gutters, and various household objects. A Zinc Reaction involves a process in which Zinc is mixed with another substance which react to form something else.",
	  Ga: "Gallium (Ga) is a rare metallic element that is liquid near room temperature, expands on solidifying, and is found as a trace element in coal, bauxite, and other minerals. It is used in semiconductor technology and as a component of various low-melting alloys.",
	  Ge: "Germanium (Ge) is a brittle, crystalline, gray-white metalloid element, widely used as a semiconductor, as an alloying agent and catalyst, and in certain optical glasses. The most common uses of Germanium are in Electric guitar amplifiers, Semi-conductors, an alloying agent, Infra-red spectroscopes and optical equipment, Camera and microscope lenses and for Medical purposes.",
	  As: "Arsenic (As) is a highly poisonous metallic element having three allotropic forms, yellow, black, and gray, of which the brittle, crystalline gray is the most common. Arsenic and its compounds are used in insecticides, weed killers, solid-state doping agents, and various alloys.",
	  Se: "Selenium is a non-metallic element, red in powder form, black in vitreous form, and metallic gray in crystalline form, resembling sulfur and obtained primarily as a by-product of electrolytic copper refining. It is widely used in rectifiers, as a semiconductor, and in xerography. Its photovoltaic and photoconductive actions make it useful in photocells, photographic exposure meters, and solar cells.",
	  Br: "Bromine (Br) is a heavy, volatile, corrosive, reddish-brown, nonmetallic liquid element, having a highly irritating vapor. It is used in producing gasoline antiknock mixtures, fumigants, dyes, and photographic chemicals.   The most common uses of Bromine are in Gasoline anti-knock mixtures, Fumigants, Poisons, Dyes, Photographic chemicals, Medicines and Brominated vegetable oil.",
	  Kr: "Krypton (Kr) is a whitish, largely inert gaseous element used chiefly in gas discharge lamps and fluorescent lamps. It is also the element that Superman's home planet is named after.",
	  Rb: "Rubidium (Rb) is a soft silvery-white metallic element of the alkali group that ignites spontaneously in air and reacts violently with water, used in photocells and in the manufacture of vacuum tubes.",
	  Sr: "Strontium (Sr) is a soft, silvery, easily oxidized metallic element that ignites spontaneously in air when finely divided. Strontium is used in pyrotechnic compounds and various alloys.",
	  Y: "Yttrium (Y) is a silvery metallic element, not a rare earth but occurring in nearly all rare-earth minerals, used in various metallurgical applications, notably to increase the strength of magnesium and aluminium alloys.",
	  Zr: "Zirconium (Zr) is a lustrous, greyish-white, strong, ductile metallic element obtained primarily from zircon and used chiefly in ceramic and refractory compounds, as an alloying agent, and in nuclear reactors as a highly corrosion-resistant alloy.",
	  Nb: "Niobium (Nb) is a silvery, soft, ductile metallic element that occurs chiefly in columbite-tantalite and is used in steel alloys, arc welding, and superconductivity research. This element is still widely referred to by its original name - Columbium.",
	  Mo: "Molybdenum (Mo) is a hard, silvery-white metallic element used to toughen alloy steels and soften tungsten alloy. An essential trace element in plant nutrition, it is used in fertilizers, dyes, enamels, and reagents.",
	  Tc: "Technetium (Tc) is a radioactive metal, the first synthetically produced element, used as a tracer and to inhibit corrosion in steel.",
	  Ru: "Ruthenium (Ru) is a hard white acid-resistant metallic element that is found in platinum ores and is used to harden platinum and palladium for jewelry and in alloys for nonmagnetic wear-resistant instrument pivots and electrical contacts.",
	  Rh: "Rhodium (Rh) is a hard, durable, silvery-white metallic element that is used to form high-temperature alloys with platinum and is plated on other metals to produce a durable corrosion-resistant coating.",
	  Pd: "Palladium (Pd) is a soft, ductile, steel-white, tarnish-resistant, metallic element occurring naturally with platinum, especially in gold, nickel, and copper ores. Because it can absorb large amounts of hydrogen, it is used as a purification filter for hydrogen and a catalyst in hydrogenation. It is alloyed for use in electric contacts, jewelry, nonmagnetic watch parts, and surgical instruments. The element played an essential role in the Fleischmann-Pons experiment, also known as cold fusion.",
	  Ag: "Silver (Ag) is a lustrous white, ductile, malleable metallic element, occurring both uncombined and in ores such as argentite, having the highest thermal and electrical conductivity of the metals. It is highly valued for jewelry, tableware, and other ornamental use and is widely used in coinage, photography, dental and soldering alloys, electrical contacts, and printed circuits.",
	  Cd: "Cadmium (Cd) is a soft, bluish-white metallic element occurring primarily in zinc, copper, and lead ores, that is easily cut with a knife and is used in low-friction, fatigue-resistant alloys, solders, dental amalgams, nickel-cadmium storage batteries, nuclear reactor shields, and in rustproof electroplating. The most common uses of Cadmium are in Batteries - Nickel Cadmium, Pigments, Coating and plating, Barrier to control nuclear fission, Televisions and Nickel cadmium batteries.",
	  In: "Indium (In) is a soft, malleable, silvery-white metallic element found primarily in ores of zinc and tin, used as a plating over silver in making mirrors, in plating aircraft bearings, and in compounds for making transistors.",
	  Sn: "Tin (Sn) is a malleable, silvery metallic element obtained chiefly from cassiterite. It is used to coat other metals to prevent corrosion and is a part of numerous alloys, such as soft solder, pewter, type metal, and bronze.",
	  Sb: "Antimony (Sb) is a metallic element having four allotropic forms, the most common of which is a hard, extremely brittle, lustrous, silver-white, crystalline material. It is used in a wide variety of alloys, especially with lead in battery plates, and in the manufacture of flame-proofing compounds, paint, semiconductor devices, and ceramic products.",
	  Te: "Tellurium (Te) is a brittle, silvery-white metallic element usually found in combination with gold and other metals, produced commercially as a byproduct of the electrolytic refining of copper and used to alloy stainless steel and lead, in ceramics, and, in the form of bismuth telluride, in thermoelectric devices.",
	  I: "Iodine (I) is a lustrous, violet-black, corrosive, poisonous halogen element having radioactive isotopes, especially I 131, used as a medical tracer and in thyroid disease diagnosis and therapy. Iodine compounds are used as germicides, antiseptics, and dyes.",
	  Xe: "Xenon (Xe) is a colorless, odorless, highly unreactive gaseous element found in minute quantities in the atmosphere, extracted commercially from liquefied air and used in stroboscopic, bactericidal, and laser-pumping lamps.",
	  Cs: "Cesium (Cs) is a soft, silvery-white ductile metal, liquid at room temperature, the most electropositive and alkaline of the elements, used in photoelectric cells and to catalyze hydrogenation of some organic compounds. The most common uses of Cesium are in Atomic clocks, Removing air traces in vacuum tubes, Ion propulsion systems, Medical, Photoelectric cells, Cesium vapor and the Magnetometer.",
	  Ba: "Barium (Ba) is a soft, silvery-white alkaline-earth metal, used to deoxidize copper and in various alloys.",
	  La: "Lanthanum (La) is a soft, silvery-white, malleable, ductile, metallic rare-earth element, obtained chiefly from monazite and bastnaesite and used in glass manufacture and with other rare earths in carbon lights for movie and television studio lighting.",
	  Ce: "Cerium (Ce) is a lustrous, iron-gray, malleable metallic rare-earth element that occurs chiefly in the minerals monazite and bastnaesite, exists in four allotropic states, is a constituent of lighter flint alloys, and is used in various metallurgical and nuclear applications. The most common uses of Cerium are in Making aluminium alloys, Cigarette lighters, Incandescent gas mantles, Petroleum refining and Arc lighting.",
	  Pr: "Praseodymium (Pr) is a soft, silvery, malleable, ductile rare-earth element that develops a characteristic green tarnish in air. It occurs naturally with other rare earths in monazite and is used to color glass and ceramics yellow, as a core material for carbon arcs, and in metallic alloys.",
	  Nd: "Neodymium (Nd) is a bright, silvery rare-earth metal element, found in monazite and bastnaesite and used for coloring glass and for doping some glass lasers.",
	  Pm: "Promethium (Pm) is a radioactive metallic element of the rare-earth group obtained as a fission product of uranium or from neutron-irradiated neodymium.",
	  Sm: "Samarium (Sm) is a silvery or pale gray metallic rare-earth element found in monazite and bastnaesite and used as a dopant for laser materials, in infrared absorbing glass, and as a neutron absorber in certain nuclear reactors.",
	  Eu: "Europium (Eu) is a silvery-white, soft, rare-earth element occurring in monazite and bastnaesite and used to dope lasers and to absorb neutrons in research.  The most common uses of Europium are in Color televisions.",
	  Gd: "Gadolinium (Gm) is a silvery-white, malleable, ductile, metallic rare-earth element obtained from monazite and bastnaesite and used in improving high-temperature characteristics of iron, chromium, and related alloys. The most common uses of Gadolinium are in Gadolinium yttrium garnets, Phosphors for colour TV tubes, Compact discs and Computer memory.",
	  Tb: "Terbium (Tb) is a soft, silvery-gray metallic rare-earth element, used in x-ray and color television tubes.",
	  Dy: "Dysprosium (Dy) is a soft, silvery rare-earth element used in nuclear research. The most common uses of Dysprosium are in Nuclear research / reactors.",
	  Ho: "Holmium (Ho) is a relatively soft, malleable, stable rare-earth element occurring in gadolinite, monazite, and other rare-earth minerals.  The most common uses of Holmium are in Nuclear reactors.",
	  Er: "Erbium (Er) is a soft, malleable, silvery rare-earth element, used in metallurgy and nuclear research and to color glass and porcelain. The most common uses of Erbium are in metallurgy, Nuclear research, Color glass, Color porcelain and Photographic filters.",
	  Tm: "Thulium (Tm) is a bright, silvery rare-earth element obtained commercially from monazite, having an x-ray emitting isotope that is used in small portable medical x-ray units.",
	  Yb: "Ytterbium (Yb) is a soft, bright, silvery rare-earth element occurring in two allotropic forms and used as an x-ray source for portable irradiation devices, in some laser materials, and in some special alloys.",
	  Lu: "Lutetium (Lu) is a silvery-white rare-earth element that is exceptionally difficult to separate from the other rare-earth elements, used in nuclear technology.",
	  Hf: "Hafnium (Hf) is a brilliant, silvery, metallic element separated from ores of zirconium and used in nuclear reactor control rods, as a getter for oxygen and nitrogen, and in the manufacture of tungsten filaments. The most common uses of Hafnium are in Nuclear reactors, Hafnium reactor, the Hafnium bomb, used in incandescent lamps and Tungsten filaments.",
	  Ta: "Tantalum (Ta) is a very hard, heavy, gray metallic element that is exceptionally resistant to chemical attack below 150°C. It is used to make light-bulb filaments, electrolytic capacitors, lightning arresters, nuclear reactor parts, and some surgical instruments. The element has a melting point exceeded only by tungsten and rhenium. Tantalum has the most capacitance per volume of any substance.",
	  W: "Tungsten (W) is a hard, brittle, corrosion-resistant, gray to white metallic element extracted from wolframite, scheelite, and other minerals, having the highest melting point and lowest vapor pressure of any metal. Tungsten and its alloys are used in high-temperature structural materials; in electrical elements, notably lamp filaments; and in instruments requiring thermally compatible glass-to-metal seals.",
	  Re: "Rhenium (Re) is a rare, dense, silvery-white metallic element with a very high melting point used for electrical contacts and with tungsten for high-temperature thermocouples.",
	  Os: "Osmium (Os) is a bluish-white, hard metallic element, found in small amounts in osmiridium, nickel, and platinum ores. It is used as a platinum hardener and in making pen points, phonograph needles, and instrument pivots.",
	  Ir: "Iridium (Ir) is a very hard and brittle, exceptionally corrosion-resistant, whitish-yellow metallic element occurring in platinum ores and used principally to harden platinum and in high-temperature materials, electrical contacts, and wear-resistant bearings.",
	  Pt: "Platinum (Pt) is a silver-white metallic element occurring worldwide, usually mixed with other metals such as iridium, osmium, or nickel. It is ductile and malleable, does not oxidize in air, and is used as a catalyst and in electrical components, jewelry, dentistry, and electroplating.",
	  Au: "Gold (Au) is a soft, yellow, corrosion-resistant element, the most malleable and ductile metal, occurring in veins and alluvial deposits and recovered by mining or by panning or sluicing. A good thermal and electrical conductor, gold is generally alloyed to increase its strength, and it is used as an international monetary standard, in jewelry, for decoration, and as a plated coating on a wide variety of electrical and mechanical components. The most common uses of Gold are in Currency, Coinage, Jewellery, Tableware, Dental alloys and Electronics.",
	  Hg: "Mercury (Hg) is a silvery-white poisonous metallic element, liquid at room temperature and used in thermometers, barometers, vapor lamps, and batteries and in the preparation of chemical pesticides.",
	  Tl: "Thallium (Tl) is a soft, malleable, highly toxic metallic element, used in photocells, infrared detectors, low-melting glass, and formerly in rodent and ant poisons.",
	  Pb: "Lead (Pb) is a soft, malleable, ductile, bluish-white, dense metallic element, extracted chiefly from galena and used in containers and pipes for corrosives, solder and type metal, bullets, radiation shielding, paints, and antiknock compounds.",
	  Bi: "Bismuth (Bi) is a white, crystalline, brittle, highly diamagnetic metallic element used in alloys to form sharp castings for objects sensitive to high temperatures and in various low-melting alloys for fire-safety devices. The most common uses of Interesting are in Pharmaceuticals, Fuses, Fire detection, Magnets and Bismuth oxychloride.",
	  Po: "Polonium (Po) is a radioactive metallic element that is similar chemically to tellurium and bismuth, occurs especially in pitchblende and radium-lead residues, and emits an alpha particle to form an isotope of lead. Also called Radium F.",
	  At: "Astatine (At) is a highly unstable radioactive element, the heaviest of the halogen series, that resembles iodine in solution.",
	  Rn: "Radon (Rn) is a colorless, radioactive, inert gaseous element formed by the radioactive decay of radium. It is used as a radiation source in radiotherapy and to produce neutrons for research.",
	  Fr: "Francium (Fr) is an extremely unstable radioactive element of the alkali metals, produced artificially from actinum or thorium, having approximately 19 isotopes, the most stable of which is Fr 223 with a half-life of 21 minutes.",
	  Ra: "Radium (Ra) is a rare, brilliant white, luminescent, highly radioactive metallic element found in very small amounts in uranium ores, having 13 isotopes with mass numbers between 213 and 230, of which radium 226 with a half-life of 1,622 years is the most common. It is used in cancer radiotherapy, as a neutron source for some research purposes, and as a constituent of luminescent paints.",
	  Ac: "Actinium (Ac) is a radioactive element found in uranium ores, used in equilibrium with its decay products as a source of alpha rays.",
	  Th: "Thorium (Th) is a radioactive metallic element that occurs combined in minerals and is usually associated with rare earths.",
	  Pa: "Protactinium (Pa) is a short-lived radioactive metallic element formed from uranium and disintegrating into actinium and then into lead.",
	  U: "Uranium (U) is a heavy toxic silvery-white radioactive metallic element; occurs in many isotopes; used for nuclear fuels and nuclear weapons.",
	  Np: "Neptunium (Np) is a radioactive metallic element that is chemically similar to uranium and is obtained in nuclear reactors as a by-product in the production of plutonium.",
	  Pu: "Plutonium (Pu) is a radioactive metallic element similar chemically to uranium that is formed as the isotope 239 by decay of neptunium and found in minute quantities in pitchblende, that undergoes slow disintegration with the emission of an alpha particle to form uranium 235, and that is fissionable with slow neutrons to yield atomic energy.",
	  Am: "Americium (Am) is a radioactive metallic element produced by bombardment of plutonium with high-energy neutrons.",
	  Cm: "Curium (Cm) is a radioactive transuranic metallic element produced by bombarding plutonium with helium nuclei. The most common uses of Curium are in Pacemakers, Remote navigational buoys and in Space missions.",
	  Bk: "Berkelium (Bk) is a radioactive transuranic metallic element. The major isotope of berkelium, Bk-249, is synthesized in dedicated high-flux nuclear reactors, while the production of the second-most important isotope, Bk-247, involves the irradiation of the rare isotope Cm-244 with high-energy alpha particles.",
	  Cf: "Californium (Cf) is a synthetic element produced in trace quantities by helium isotope bombardment of curium. All isotopes are radioactive, chiefly by emission of alpha particles. The most common uses of Californium are in Neutron moisture gauges and Portable neutron source in gold and silver prospecting.",
	  Es: "Einsteinium (Es) is a synthetic transuranic element first produced by neutron irradiation of uranium in a thermonuclear explosion and now usually produced in the laboratory by irradiating plutonium and other elements.",
	  Fm: "Fermium (Fm) is a radioactive metallic element artificially produced, as by bombardment of plutonium with neutrons. The most common use of Fermium is for research.",
	  Md: "Mendelevium (Md) is a radioactive transuranic element synthesized by bombarding einsteinium with alpha particles.",
	  No: "Nobelium (No) is a radioactive metallic transuranic element, belonging to the actinoids. It is also known as unnilbium.",
	  Lr: "Lawrencium (Lr) is a radioactive transuranic element synthesized from californium.",
	  Rf: "Rutherfordium (Rf) is an artificially produced radioactive element with atomic number 104 whose most long-lived isotopes have mass numbers of 253, 255, 257, and 259 with half-lives of 1.8, 1.6, 4.7, and 3.4 seconds, respectively.",
	  Db: "Dubnium (Db) is an artificially produced radioactive element with atomic number 105 whose most long-lived isotopes have mass numbers of 258, 261, 262, and 263 with half-lives of 4.2, 1.8. 34, and 30 seconds, respectively.",
	  Sg: "Seaborgium (Sg) is a short-lived radioactive element that is artificially produced. Its chemistry resembles that of tungsten. It has an alternate name: Unnilhexium (Unh).",
	  Bh: "Bohrium (Bh) is a short-lived radioactive element that is artificially produced.",
	  Hs: "Hassium (Hs) is an artificially produced radioactive element with atomic number 108 whose most long-lived isotopes have mass numbers of 264 and 265 with half-lives of 0.08 milliseconds and 2 milliseconds, respectively. Other Names: Unniloctium (Uno), Hahnium (Hn).",
	  Mt: "Meitnerium (Mt) is a short-lived radioactive element that is artificially produced. It has an alternate name - Unnilennium (Une).",
	  Ds: "Darmstadtium (Ds) is a synthetic element that decays in milliseconds. Due to its presence in Group 10, it is believed to likely be metallic and solid.",
	  Rg: "Roentgenium (Rg) is a synthetic element whose only known isotope has a half-life of around 15 milliseconds before it decays into meitnerium. Due to its presence in Grop 11, it is a transition metal and, thus, probably metallic and solid.",
	  Cn: "Copernicium (Cn) is a synthetic element whose most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds.",
	  Nh: "Nihonium (Nh) is a synthetic element whose most stable known isotope, nihonium-286, has a half-life of 20 seconds.",
	  Fl: "Flerovium (Fl) is a synthetic element discovered in Dubna, Russia in 1998. Its most stable known isotope, flerovium-289, has a half-life of around 2.6 seconds.",
	  Mc: "Moscovium (Mc) is a synthetic element whose most stable known isotope, moscovium-290, has a half-life of only 0.8 seconds. About 100 atoms of moscovium have been observed to date, all of which have been shown to have mass numbers from 287 to 290.",
	  Lv: "Livermorium (Lv) is a synthetic element. Four isotopes of livermorium are known, with mass numbers between 290 and 293 inclusive; the longest-lived among them is livermorium-293 with a half-life of about 60 milliseconds.",
	  Ts: "Tennessine (Ts) is a synthetic element. Its discovery was announced in Dubna, Russia, by a Russian-American collaboration in 2010. Synthesized tennessine atoms have lasted tens and hundreds of milliseconds.",
	  Og: "Oganesson (Og) is a synthetic element. It has the highest atomic number and atomic mass of all known elements. The radioactive oganesson atom is very unstable, and since 2005, only four atoms of the isotope oganesson-294 have been detected."
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map