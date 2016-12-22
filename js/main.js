const BattleshipGame = require('./game.js');
const BattleshipView = require('./battleship_view.js');

$( document ).ready( () => {
  console.log("I'm running!");
  const rootEl = $('.pt-battleship');
  const game = new BattleshipGame();
  new BattleshipView(game, rootEl);
});
