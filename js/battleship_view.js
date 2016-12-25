const ElementInfo = require('./element_info.js');

$.fn.random = function() { // gets a random element from a selection returned by $(selector)
  return this.eq(Math.floor(Math.random() * this.length));
};

const PERIODIC_TABLE_ELEMENTS = [
  'H','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','He',
  'Li','Be','-','-','-','-','-','-','-','-','-','-','B','C','N','O','F','Ne',
  'Na','Mg','-','-','-','-','-','-','-','-','-','-','Al','Si','P','S','Cl','Ar',
  'K','Ca','Sc','Ti','V','Cr','Mn','Tc','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr',
  'Rb','Sr','Y','Zr','Nb','Mo','Tc','Re','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I', 'Xe',
  'Cs','Ba','Lu','Hf','Ta','W','Re','Bh','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn',
  'Fr','Ra','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Uut','Fl','Uup','Lv','Uus','Uuo',
  '-','-','-','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu',
  '-','-','-', 'Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr'
];

class BattleshipView {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.setupEvents();
  }

  setupEvents() {
    alert("Place ships on 17 different elements of the Periodic Table and then click on a random element to begin battling!");

    const humanName = this.game.getHumanName();
    const dashedHumanName = humanName.split(" ").join("-");

    const $periodicTable = this.$el.find(`#periodic-table-${dashedHumanName}`);
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('.element-square');
    const $selectedElementInfo = this.$el.find(`.selected-element-info-${dashedHumanName}`);

    const game = this.game;

    $elements.on('click', (event) => {
      if (game.humanShipCount < 17) {
        const $element = $(event.currentTarget);
        const elementSymbol = $element.data('sym');

        if ($element.hasClass('ship-part')) {
          alert("You must place a ship on an element that has no ship!");
        } else {
          $element.addClass('ship-part');
          $element.attr('style', 'background: black');
          game.humanShipCount += 1;
          $selectedElementInfo.empty();
          $selectedElementInfo.html(`<section class="action">${humanName} placed a ship on ${elementSymbol}.</section> ${ElementInfo[elementSymbol]}`);
        }
      } else {
        $selectedElementInfo.empty();
        $elements.off('click');
        this.hideShips();
        this.targetComputerTableElement();
      }
    });
  }

  hideShips() {
    alert(`Let the games begin! During each round, select an element on ${this.game.getComputerName()}'s table to launch a missile at it. He/She will do the same. Whomever sinks all of his/her opponent's ships first wins!`);

    const $periodicTable = this.$el.find('.periodic-table');
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('.element-square');

    $elements.each( (index, element) => {
      $(element).attr('style', 'background: blue');
    });
  }

  battle() {
    if (this.game.humanShipCount > 0 && this.game.computerShipCount > 0) {
      if (this.game.currentPlayer === "human") {
        this.targetComputerTableElement();
      } else if (this.game.currentPlayer === "computer") {
        this.targetHumanTableElement();
      }
    } else if (this.game.humanShipCount === 0) {
      alert(`${this.game.getComputerName()} wins!`);
    } else if (this.game.computerShipCount === 0) {
      alert(`${this.game.getHumanName()} wins!`);
    }
  }

  targetComputerTableElement() {
    const humanName = this.game.getHumanName();
    const computerName = this.game.getComputerName();
    const dashedComputerName = computerName.split(" ").join("-");

    const $periodicTable = this.$el.find(`#periodic-table-${dashedComputerName}`);
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('.element-square');
    const $selectedElementInfo = this.$el.find(`.selected-element-info-${dashedComputerName}`);

    const game = this.game;
    const battle = this.battle.bind(this);

    $elements.on('click', (event) => {
      const $element = $(event.currentTarget);
      const elementSymbol = $element.data('sym');
      const wasAttacked = ($element.attr('style') === 'background: green') || ($element.attr('style') === 'background: red');

      if (wasAttacked) {
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

        $selectedElementInfo.empty();
        $selectedElementInfo.html(`<section class="action">${humanName} launched a missile at ${elementSymbol}.</section> ${ElementInfo[elementSymbol]}`);
        $elements.off('click');
        game.currentPlayer = "computer";
        battle();
      }
    });
  }

  targetHumanTableElement() {
    const humanName = this.game.getHumanName();
    const computerName = this.game.getComputerName();
    const dashedHumanName = humanName.split(" ").join("-");

    const $periodicTable = this.$el.find(`#periodic-table-${dashedHumanName}`);
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('.element-square');
    const $selectedElementInfo = this.$el.find(`.selected-element-info-${dashedHumanName}`);

    let legalTargetFound = false;

    while (!legalTargetFound) {
      const $randomElement = $elements.random();

      if (!$randomElement.hasClass('targetted')) {
        const randomElementSymbol = $randomElement.data('sym');

        $randomElement.addClass('targetted');

        if ($randomElement.hasClass('ship-part')) {
          $randomElement.attr('style', 'background: green');
          this.game.humanShipCount -= 1;
        } else {
          $randomElement.attr('style', 'background: red');
        }

        $selectedElementInfo.empty();
        $selectedElementInfo.html(`<section class="action">${computerName} launched a missile at ${randomElementSymbol}.</section> ${ElementInfo[randomElementSymbol]}`);
        legalTargetFound = true;
      }
    }

    this.game.currentPlayer = "human";
    this.battle();
  }

  generateComputerShips() {
    const computerName = this.game.getComputerName();
    const dashedComputerName = computerName.split(" ").join("-");

    const $periodicTable = this.$el.find(`#periodic-table-${dashedComputerName}`);
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('.element-square');

    while (this.game.computerShipCount < 17) {
      const $randomElement = $elements.random();
      if (!$randomElement.hasClass('ship-part')) {
        $randomElement.addClass('ship-part');
        this.game.computerShipCount += 1;
      }
    }
  }

  setupPeriodicTable(name) {
    this.$el.append(`<h2 class="periodic-table-header">${name}'s Fleet<h2>`);
    const dashedName = name.split(" ").join("-");
    this.$el.append(`<div id="periodic-table-${dashedName}" class="periodic-table"></div>`);
    const $periodicTable = this.$el.find(`#periodic-table-${dashedName}`);
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

    PERIODIC_TABLE_ELEMENTS.forEach( (el, idx) => {
      const $column = $periodicTable.find(`.column-${idx % 18}`);
      let $element = $(`<div>${el}</div>`);
      $element.data('pos', [Math.floor(idx / 18), (idx % 18)]);
      $element.data('sym', el);

      if (el === "-") {
        $element.addClass('non-element-square');
      } else {
        $element.addClass('element-square');
      }

      $column.append($element);
    });

    this.$el.append(`<p class="selected-element-info-${dashedName}"></p>`);
  }

  setupBoard() {
    this.setupPeriodicTable(this.game.setHumanName());
    this.setupPeriodicTable(this.game.setComputerName());
    this.generateComputerShips();
  }
}

module.exports = BattleshipView;
