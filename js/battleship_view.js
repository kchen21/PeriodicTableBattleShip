const ElementInfo = require('./element_info.js');

const remove = function(el, arr) {
  const idx = arr.indexOf(el);

  if (idx > -1) {
    arr.splice(idx, 1);
  }

  return el;
};

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
  'Fr','Ra','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og',
  '-','-','-','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu',
  '-','-','-', 'Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr'
];

class BattleshipView {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.toggleInstructions();
    this.setupForm();
  }

  toggleInstructions() {
    $('.instructions-toggler > input').click((event) => {
      event.preventDefault();
      $('.instructions').toggle();
    });
  }

  setupForm() {
    this.$el.append('<form class="setup-form"></form>');

    const $setupForm = this.$el.find(".setup-form");

    $setupForm.append('<p>Enter values for the following:</p>');
    $setupForm.append('<label for="human-name">Human Player Name</label>');
    $setupForm.append('<input id="human-name" type="text" value="Jack" />');
    $setupForm.append('<label for="computer-name">Computer Player Name</label>');
    $setupForm.append('<input id="computer-name" type="text" value="Hector" />');
    $setupForm.append('<label for="num-ships">Number of Ships</label>');
    $setupForm.append('<input id="num-ships" type="text" value="20" />');
    $setupForm.append('<input class="submit-button" type="submit" value="Submit" />');

    const self = this;

    $setupForm.submit((event) => {
      event.preventDefault();
      self.game.setHumanName($("#human-name")[0].value);
      self.game.setComputerName($("#computer-name")[0].value);
      self.game.setNumShips(parseInt($("#num-ships")[0].value));
      self.removeForm();
      self.setupBoard();
      self.setupEvents();
    });
  }

  removeForm() {
    $('.setup-form').remove();
  }

  setupBoard() {
    this.setupLegend();
    this.setupPeriodicTable(this.game.getHumanName());
    this.$el.append('<section class="messages"></section>');
    this.setupPeriodicTable(this.game.getComputerName());
    this.generateComputerShips();
  }

  setupLegend() {
    this.$el.append('<section class="legend"></section>');
    $('.legend').append('<label for="legend-icons">Legend:</label>');
    $('.legend').append('<ul id="legend-icons"></ul>');
    $('#legend-icons').append('<li class="hit-icon">Hit</li>');
    $('#legend-icons').append('<li class="miss-icon">Miss</li>');
  }

  setupPeriodicTable(name) {
    this.$el.append(`<h2 class="periodic-table-header">${name}'s Fleet</h2>`);
    const dashedName = name.split(" ").join("-");
    this.$el.append(`<div id="periodic-table-${dashedName}" class="periodic-table"></div>`);
    const $periodicTable = this.$el.find(`#periodic-table-${dashedName}`);

    for (let i = 0; i <= 17; i++) {
      $periodicTable.append(`<div class="column-${i}"></div>`);
    }

    PERIODIC_TABLE_ELEMENTS.forEach( (el, idx) => {
      const $column = $periodicTable.find(`.column-${idx % 18}`);
      let $element = $(`<div>${el}</div>`);
      $element.data('sym', el);

      if (el === "-") {
        $element.addClass('non-element-square');
      } else {
        $element.addClass('element-square');
      }

      $column.append($element);
    });

    this.$el.append(`<section class="select-messages-${dashedName}"></section>`);
    $(`.select-messages-${dashedName}`).append(`<p class="errors-${dashedName}"></p>`);
    $(`.select-messages-${dashedName}`).append(`<p class="selected-element-info-${dashedName}"></p>`);
    this.$el.append(`<section class="ship-location-${dashedName}"></section>`);
  }

  generateComputerShips() {
    const computerName = this.game.getComputerName();
    const dashedComputerName = computerName.split(" ").join("-");

    const $periodicTable = $(`#periodic-table-${dashedComputerName}`);
    const $elements = $periodicTable.find('.element-square');

    while (this.game.computerShipCount() < this.game.numShips) {
      const $randomElement = $elements.random();
      if (!$randomElement.hasClass('ship')) {
        $randomElement.addClass('ship');
        this.game.computerShipLocations.push($randomElement.data('sym'));
      }
    }
  }

  setupEvents() {
    const humanName = this.game.getHumanName();
    const dashedHumanName = humanName.split(" ").join("-");

    const $periodicTable = $(`#periodic-table-${dashedHumanName}`);
    const $elements = $periodicTable.find('.element-square');
    const $errors = $(`.errors-${dashedHumanName}`);
    const $selectedElementInfo = $(`.selected-element-info-${dashedHumanName}`);

    const game = this.game;

    $elements.on('click', (event) => {
      if (game.humanShipCount < game.numShips) {
        const $element = $(event.currentTarget);
        const elementSymbol = $element.data('sym');

        if ($element.hasClass('ship')) {
          $selectedElementInfo.empty();
          $errors.html(`<section class="ship-placement-error">You must place a ship on an element that has no ship!</section>`);
        } else {
          $errors.empty();
          $element.addClass('ship');
          $element.attr('style', 'background: black');
          game.humanShipCount += 1;
          $selectedElementInfo.empty();
          $selectedElementInfo.html(`<section class="action">${humanName} placed a ship on ${elementSymbol}.</section> ${ElementInfo[elementSymbol]}`);
        }
      } else {
        $selectedElementInfo.empty();
        $elements.off('click');
        this.hideShips();
        $('.messages').html('<p>Let the battle for control of the elements begin! Fire the first missile!</p>');
        this.targetComputerTableElement();
      }
    });
  }

  hideShips() {
    const $elements = $('.element-square');

    $elements.each( (index, element) => {
      $(element).attr('style', 'background: blue');
    });
  }

  targetComputerTableElement() {
    const humanName = this.game.getHumanName();
    const computerName = this.game.getComputerName();
    const dashedComputerName = computerName.split(" ").join("-");

    const $periodicTable = $(`#periodic-table-${dashedComputerName}`);
    const $elements = $periodicTable.find('.element-square');
    const $errors = $(`.errors-${dashedComputerName}`);
    const $selectedElementInfo = $(`.selected-element-info-${dashedComputerName}`);

    const game = this.game;
    const renderHint = this.renderHint.bind(this);
    const battle = this.battle.bind(this);

    $elements.on('click', (event) => {
      const $element = $(event.currentTarget);
      const elementSymbol = $element.data('sym');
      const wasTargetted = ($element.attr('style') === 'background: green') || ($element.attr('style') === 'background: red');

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
        $(`.ship-location-${dashedComputerName}`).empty();
        $selectedElementInfo.html(`<section class="action">${humanName} launched a missile at ${elementSymbol}.</section> ${ElementInfo[elementSymbol]}`);

        if (game.humanCIGuessCount() > 2) {
          renderHint(dashedComputerName);
        }

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

    const $periodicTable = $(`#periodic-table-${dashedHumanName}`);
    const $elements = $periodicTable.find('.element-square');
    const $selectedElementInfo = $(`.selected-element-info-${dashedHumanName}`);

    let legalTargetFound = false;

    while (!legalTargetFound) {
      const $randomElement = $elements.random();

      if (!$randomElement.hasClass('targetted')) {
        const randomElementSymbol = $randomElement.data('sym');

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
        $selectedElementInfo.html(`<section class="action">${computerName} launched a missile at ${randomElementSymbol}.</section> ${ElementInfo[randomElementSymbol]}`);
        legalTargetFound = true;
      }
    }

    this.game.currentPlayer = "human";
    this.battle();
  }

  battle() {
    if (this.game.humanShipCount > 0 && this.game.computerShipCount() > 0) {
      if (this.game.currentPlayer === "human") {
        this.targetComputerTableElement();
      } else if (this.game.currentPlayer === "computer") {
        this.targetHumanTableElement();
      }
    } else if (this.game.humanShipCount === 0) {
      $('.messages').html(`<p>${this.game.getComputerName()} wins!</p>`);
    } else if (this.game.computerShipCount() === 0) {
      $('.messages').html(`<p>${this.game.getHumanName()} wins!</p>`);
    }
  }

  hintMessage(elementInfo) {
    const words = elementInfo.split(" ");
    const capitalizedElementName = words[0];
    const elementName = capitalizedElementName.toLowerCase();

    const hintMessageWords = [];

    for (let i = 0; i < words.length; i++) {
      let word = words[i];

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

  createHint(elements) {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    const elementInfo = ElementInfo[randomElement];

    return this.hintMessage(elementInfo);
  }

  renderHint(dashedComputerName) {
    const $hintSection = $(`.ship-location-${dashedComputerName}`);

    $hintSection.html(
      `<p>You've missed ${this.game.humanCIGuessCount()} times in a row so far! Here's a hint! One of ${this.game.getComputerName()}'s ships is located at the following element:</p>
      <p>${this.createHint(this.game.computerShipLocations)}</p>`
    );
  }

}

module.exports = BattleshipView;
