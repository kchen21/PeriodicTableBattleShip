const BattleshipGame = require('./game.js');
const BattleshipView = require('./battleship_view.js');

$( () => {
  const rootEl = $('.pt-battleship');
  const game = new BattleshipGame();
  new BattleshipView(game, rootEl);
});
