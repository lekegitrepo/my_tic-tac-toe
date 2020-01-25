import { Player } from "./player.js";
import { Board } from './board.js';
import { GameManager } from './game.js';
import { UI } from './UI.js';


// console.log(boardTiles.length)
// for(let i = 0; i < boardTiles.length; i++){
//     boardTiles[i].addEventListener('click', (e) => {
//         boardTiles[i].textContent = 'X and O';
//     });
// }

let board = new Board();
let ui = new UI();
let playerX = new Player('playerX', 'X');
let PlayerO = new Player('playerO', 'O');
let gm = new GameManager(playerX, PlayerO);

let boardTiles = document.getElementsByClassName('board-tile');
[...boardTiles].forEach(element => {
  element.addEventListener('click', (e) => {
    ui.tileMarker(element, gm.getCurrentPlayer().token)
    board.setBoardTile(parseInt(element.getAttribute('data-position')), gm.currentPlayer.token)
    gm.winner(board.checkWinPattern())
  })
});
