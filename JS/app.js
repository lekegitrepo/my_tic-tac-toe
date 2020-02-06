import { Player } from "./player.js";
import { Board } from './board.js';
import { GameManager } from './game.js';
import { UI } from './UI.js';


let board = new Board();
let ui = new UI();
let playerX = new Player('playerX', 'X');
let PlayerO = new Player('playerO', 'O');
let gm = new GameManager(playerX, PlayerO);


const startMenu = document.getElementById('start-menu');
const boardTiles = document.getElementById('game');
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', initializePlay);

function handleGame() {
  console.log('activate new buttons');
}

function initializePlay() {
  ui.displayElementBlock(boardTiles);
  boardTiles.addEventListener('click', (e) => {
    //e.stopPropagation()
    if(!board.checkWinPattern()){
      ui.tileMarker(e.target, gm.getCurrentPlayer().token)
      board.setBoardTile(parseInt(e.target.getAttribute('data-position')), gm.currentPlayer.token)
      if(board.checkWinPattern()){
        console.log('game won!')
        boardTiles.removeEventListener('click', handleGame)
        console.log('listener removed')
      }else if (board.checkWinPattern() == false){
        boardTiles.removeEventListener('click', handleGame)
        console.log('listener removed')
        console.log('the game is draw')
      }
    }
  });
  ui.hideElement(startMenu);
}
