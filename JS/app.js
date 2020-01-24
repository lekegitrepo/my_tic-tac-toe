import { Player } from "./player.js";
import { Board } from './board.js';
import { GameManager } from './game.js';
import { UI } from './UI.js';

let board = new Board();
board.setBoardTile(3, 'X');
board.setBoardTile(0, 'X');

console.log(board.board);

console.log(board.resetBoard());

let playerX = new Player("playerX", "X");

console.log(playerX.name);

console.log(playerX.token);

let playerO = new Player("playerO", "O");

console.log(playerO.name);

console.log(playerO.token);

let gameManager = new GameManager(playerO, playerX);
console.log(gameManager.checkWinToken('X'));
gameManager.winner('O');
gameManager.winner('X');
