## Periodic Table Battleship

### Background

Periodic Table Battleship is a classic Battleship game with an educational twist: in place of a normal 10x10 grid, the Periodic Table is used.

In classic Battleship, there are two players and four grids. Each player has two grids, one to arrange their own ships and one to record their own shots. Before the game begins, each player arranges their ships on their first grid in secret. Ships cannot overlap one another. The ships each have a width of 1, but come in various lengths:

Carrier: 5
Battleship: 4
Cruiser: 3
Submarine: 3
Destroyer: 2

Once the ships have all been set, players alternate, announcing an attack on a square in the opponent's grid. The opponent announces whether part of a ship is located on that square. If it is, then the player marks the corresponding position on his/her second grid with a red marker indicating a hit; if not, then he/she marks it with a white marker indicating a miss. If the player gets a hit, he/she gets to continue attacking until he/she gets a miss. When all of the squares of a ship have been hit, its owner must declare that his ship has sunk. Then game is over when all of a player's ships have been sunk.

### Functionality and MVP

In Periodic Table Battleship, players will be able to:

- [ ] Select areas on the grid to place their ships in the initial state
- [ ] Declare a new square to attack each turn
- [ ] See which of the attacked squares on the opponent's grid have hit a ship and which have not
- [ ] Continue attacking after hitting one of the opponent's ships, up until he/she misses

In addition, this project will include:

- [ ] An about modal describing the rules of the game
- [ ] A production README

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jQuery` for overall structure and game logic
- `HTML5 Canvas` for DOM manipulation and rendering
- Webpack to bundle up the scripts

The scripts involved in this project include the following:

`battleshipGame.js`, which will handle the logic for creating and updating a game of Battleship

`board.js`, which will handle the logic for the Periodic Table grid and its rendering in the DOM when it updates. Each square on the grid will either represent a ship, open water, or a space that has been attacked.

`ships.js`, which will house the constructor and update functions for the `Ship` objects. Each ship will have a `type` (carrier, battleship, cruiser, submarine, or destroyer) and will have parts. Each part will have an `attackedState` (`true` or `false`).

`player.js`, which will house the constructor and update functions for the `Player` objects. Both `humanPlayer.js` and `computerPlayer.js` (if I get to it) will inherit from it.

### Wireframes

This app will consist of a single screen. In addition, it will have links to its Github repo, the About modal, and my LinkedIn. Each player will be given a grid and asked to arrange their ships on it when the game begins. Once both players have arranged their ships, two grids will be rendered, one for each player. These represent the original grids that the players placed their ships on, except that the ships are hidden. Squares on the grid will be updated, changing color as the spaces are attacked. The color is dependent on whether or not a ship part is located at that position.

Ship Set-Up
![wireframes](battleship-setup.png)

In-Game Board
![wireframes](battleship-ingame.png)

### Implementation Timeline

**Day 1**: Set up all the necessary Node modules, including getting webpack up and running. Create `webpack.config.js` as well as `package.json`. Write a basic entry file and create a skeleton for each required script. Work on `board.js`, making sure it renders at least the Periodic Table. Goals for the day:

- Get webpack running
- Create skeletons for each script
- Render the Periodic Table through `board.js`

**Day 2**: Finish working on `board.js` and begin working on `ships.js`. Create the ships and allow for their placement on the grid. Test that the `attackedState` of each part of each ship is togglable. Goals for the day:

- Complete the `board.js` module
- Create ship objects using the Ship constructor in `ships.js`
- Be able to place ships on the grid
- Be able to toggle the `attackedState` of each part of each ship

**Day 3** Finish working on `ships.js` and start working on `humanPlayer.js` and `battleshipGame.js`. Make sure that players can select a ship and place it on the grid, and select squares to attack, and that a new instance of Battleship can be started and updated.

- Complete the `ships.js` module
- Update `humanPlayer.js` so that players can select a ship and place it on the grid and select squares to attack
- Update `battleShip.js` to allow an instance of the game to be created and updated

**Day 4** Finish working on `battleshipGame.js` and install the controls for the user to interact with the game. Style the frontend to make it professional. Goals for the day:

- Create controls for ship positioning and square selecting
- Have a styled `Canvas`, with well-designed ships and grids

### Bonus features

Future updates will include:

- [ ] Add a computer player class
- [ ] Allow a player to start with more or fewer ships
