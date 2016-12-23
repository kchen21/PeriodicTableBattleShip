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
    alert("Place 17 ships onto the field and then click on a random element to begin!");

    let humanName = this.game.getHumanName();
    humanName = humanName.split(" ").join("-");

    const $periodicTable = this.$el.find(`#periodic-table-${humanName}`);
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('div');

    const game = this.game;

    $elements.on('click', (event) => {
      if (game.humanShipCount < 17) {
        const $element = $(event.currentTarget);

        if ($element.html() === "-" || $element.hasClass('ship-part')) {
          alert("You must place a ship on an element that has no ship!");
        } else {
          $element.addClass('ship-part');
          $element.attr('style', 'background: black');
          game.humanShipCount += 1;
        }
      } else {
        $elements.off('click');
        this.hideShips();
        this.targetComputerElement();
      }
    });
  }

  targetComputerTableElement() { // target an element from the computer's table
    let computerName = this.game.getComputerName();
    computerName = computerName.split(" ").join("-");

    const $periodicTable = this.$el.find(`#periodic-table-${computerName}`);
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('div');

    $elements.on('click', (event) => {
      const $element = $(event.currentTarget);
      const wasAttacked = ($element.attr('style') === 'background: green') || ($element.attr('style') === 'background: red');
      if ($element.html() === "-" || wasAttacked) {
        alert("You must target an element that hasn't been targetted before!");
      } else {
        if ($element.hasClass('ship-part')) {
          $element.attr('style', 'background: green');
        } else {
          $element.attr('style', 'background: red');
          console.log('You missed!');
        }
      }
    });
  }

  targetHumanTableElement() { // target an element from the human's table
    let humanName = this.game.getHumanName();
    humanName = humanName.split(" ").join("-");

    const $periodicTable = this.$el.find(`#periodic-table-${humanName}`);
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('div');

    let legalTargetFound = false;

    while (!legalTargetFound) {
      const $randomElement = $elements.random();

      if (!$randomElement.hasClass('targetted') && $randomElement.html() !== "-") {
        $randomElement.addClass('targetted');

        if ($randomElement.hasClass('ship-part')) {
          $randomElement.attr('style', 'background: green');
        } else {
          $randomElement.attr('style', 'background: red');
        }

        legalTargetFound = true;
      }
    }
  }

  hideShips() {
    alert("Let the games begin!");

    const $periodicTable = this.$el.find('.periodic-table');
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('div');

    $elements.each( (index, element) => {
      $(element).attr('style', 'background: blue');
    });
  }

  generateComputerShips() {
    let computerName = this.game.getComputerName();
    computerName = computerName.split(" ").join("-");

    const $periodicTable = this.$el.find(`#periodic-table-${computerName}`);
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('div');

    while (this.game.computerShipCount < 17) {
      const $randomElement = $elements.random();
      if (!$randomElement.hasClass('ship-part') && $randomElement.html() !== "-") {
        $randomElement.addClass('ship-part');
        this.game.computerShipCount += 1;
      }
    }
  }

  setupPeriodicTable(name) {
    this.$el.append(`<h2>${name}'s Fleet<h2>`);
    name = name.split(" ").join("-");
    this.$el.append(`<div id="periodic-table-${name}" class="periodic-table"></div>`);
    const $periodicTable = this.$el.find(`#periodic-table-${name}`);
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
      $column.append($element);
    });
  }

  setupBoard() {
    this.setupPeriodicTable(this.game.setHumanName());
    this.setupPeriodicTable(this.game.setComputerName());
    this.generateComputerShips();
  }
}

module.exports = BattleshipView;
