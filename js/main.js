const BattleshipGame = require('./game.js');
const BattleshipView = require('./battleship_view.js');

$( () => {
  const rootEl = $('.ptbattleship');
  const game = new BattleshipGame();
  new BattleshipView(game, rootEl);
});
