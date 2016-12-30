# Periodic Table Battleship

[Periodic Table Battleship live][gh-pages]

[gh-pages]: https://kchen21.github.io/PeriodicTableBattleShip/

Periodic Table Battleship is a basic Battleship game with an educational twist; it utilizes the Periodic Table as a grid and provides the user with fun facts about an element when it is clicked! Built using JavaScript and jQuery to manipulate the DOM, it gives the user a simple and intuitive graphical interface.

## How To Play

Periodic Table Battleship is a Human VS Computer game. When the pages loads, the user will be asked to provides names for themselves and the computer. Once both are supplied, the user will be asked to place 17 ships on their Periodic Table. When the user clicks on an element, fun facts about that element show up underneath the Periodic Table.

When all 17 ships have been placed, the user can click on an element of their Periodic Table to begin battling. During each round of the battle, the user is to target an element on the computer's Periodic Table, taking random guesses as to where each of their ships might be. The computer will, likewise, target an element on the user's Periodic Table. Whenever an element is targeted, fun facts about that element will show up underneath its Periodic Table regardless of whether it is a hit or a miss. Whomever sinks all of their opponent's ships first wins!

## Features & Implementation

### Game

The `Game` class holds data on the user and the computer, including their respective names and ship counts throughout the game. It is also responsible for remembering who the current player is as the game switches between the user's turn and the computer's.

The `Game` class has four methods, two for setting and getting the user's name, and two for setting and getting the computer's.

### BattleshipView

The `BattleshipView` class handles the game's logic. Periodic Tables are built for both the user and the computer using a `#setupPeriodicTable` method, which receives a name as an argument. JavaScript and jQuery are used to manipulate the DOM to create an HTML element with a unique ID for each table so that it can be manipulated later without affecting the other.

```javascript
setupPeriodicTable(name) {
  this.$el.append(`<h2 class="periodic-table-header">${name}'s Fleet<h2>`);
  const dashedName = name.split(" ").join("-");
  this.$el.append(`<div id="periodic-table-${dashedName}" class="periodic-table"></div>`);
}
```

To have fun facts about an element show up under its Periodic Table when it is clicked, I added data to each HTML element representing a Periodic Table element using jQuery's `#data` method and, using that data, retrieved the facts as needed from an object containing facts on all elements I stored in a separate file `element_info.js`.

```javascript
$element.data('sym', el);
```

Besides `#setupPeriodicTable`, the `BattleshipView` class also contains the following methods:

`#generateComputerShips`: generates 17 ships at random locations on the computer's Periodic Table

`setupEvents`: handles the logic for placing ships on the user's Periodic Table before the battle begins

`#hideShips`: hides all the ships after the ship placement phase is complete

`#battle`: determines what actions the game will take based on what each respective player's ship count is and/or who the current player is

`#targetComputerTableElement`: handles the logic for targeting an element on the computer's Periodic Table

`#targetHumanTableElement`: handles the computer logic for targeting an element on the user's Periodic Table

## To Be Implemented

### Ships of Length > 1

Each ship, as of now, takes up one square of space. In the future, I hope to create five different ships of various lengths:

Carrier: 5
Battleship: 4
Cruiser: 3
Submarine: 3
Destroyer: 2
