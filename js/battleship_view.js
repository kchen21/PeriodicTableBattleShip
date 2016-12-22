const periodicTableElements = [
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
    this.bindEvents();
  }

  bindEvents() {
    const $periodicTable = this.$el.find('.periodic-table');
    const $columns = $periodicTable.find('div');
    const $elements = $columns.find('div');

    $elements.on('click', (event) => {
      if (event.currentTarget.innerHTML === "-") {
        alert("Invalid target");
      } else {
        alert("Valid target");
      }
    });
  }

  makeMove($square) {}

  setupPeriodicTable(name) {
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

    periodicTableElements.forEach( (el, idx) => {
      const $column = $periodicTable.find(`.column-${idx % 18}`);
      $column.append(`<div >${el}</div>`);
    });
  }

  setupBoard() {
    this.setupPeriodicTable("Marvel");
    this.setupPeriodicTable("Capcom");
  }
}

module.exports = BattleshipView;
