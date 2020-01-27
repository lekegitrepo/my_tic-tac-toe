const gameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const setBoardTile = (index, value) => {
    if (board[index] == ''){
      board[index] = value;
    }
  }

  const checkRows = () => {
    if (board[0] === board[1] && board[0] === board[2]) {
      return board[0];
    } else if (board[3] === board[4] && board[3] === board[5]) {
      return board[3];
    } else if (board[6] === board[7] && board[6] === board[8]) {
      return board[6];
    }
    return;
  }

  const checkColumns = () => {
    if (board[0] === board[3] && board[0] === board[6]) {
      return board[0];
    } else if (board[1] === board[4] && board[1] === board[7]) {
      return board[1];
    } else if (board[2] === board[5] && board[2] === board[8]) {
      return board[2];
    }
    return;
  }

  const checkDiagonals = () => {
    if (board[0] === board[4] && board[0] === board[8]) {
      return board[0];
    } else if (board[2] === board[4] && board[2] === board[6]) {
      return board[2];
    }
    return;
  }

  const checkWinPattern = () => {
    if(checkColumns()){
      return checkColumns();
    }else if(checkRows()){
      return checkRows();
    }else if(checkDiagonals()){
      return checkDiagonals()
    }
  }

  const resetBoard = () => {
    return board = ['', '', '', '', '', '', '', '', ''];
  }

  return {resetBoard, checkDiagonals, checkColumns, checkRows, checkWinPattern, setBoardTile};
})();

const player = (name, token) => {
    const score = 0;
    return {name, token, score};
};

const gameManager = (player1, player2) => {
    let currentPlayer = player1;

    const roundSelector = () => {
      currentPlayer = (currentPlayer === player1) ? player2 : player1;
      return currentPlayer;
    }

    const getCurrentPlayer = () => currentPlayer;

    const winner = (winToken) => {
      if(winToken){
        if (winToken == player1.token){
          console.log(`player1 has won ${player1.name} score: ${player1.playerScore}`);
          return player1.countScore();
        }else if (winToken == player2.token){
          console.log(`player2 has won ${player2.name} score: ${player2.playerScore}`);
          return player2.countScore();
        }
      }
    }
    return {getCurrentPlayer, winner, roundSelector};
};

const ui = (() => {
  const tileMarker = (tile, token) => {
    if(tile.textContent == ''){
      tile.textContent = token;
    }
  }
  return {tileMarker};
})();

let player1 = document.getElementById('playerX').value;
let player2 = document.getElementById('playerO').value;
if(player1 == '' && player2 == ''){
  player1 = 'playerX';
  player2 = 'playerO';
}else if(player1 == ''){
  player1 = 'playerX';
}else if(player2 == ''){
  player1 = 'playerO';
}

let menu = document.getElementById('game-menu');

let startBtn = document.getElementById('start');
startBtn.addEventListener('click', initializePlay);

let playerX = player(player1, 'X');
let playerO = player(player2, 'O');
let gm = gameManager(playerO, playerX);

console.log(playerX.token);
console.log(gm.getCurrentPlayer().token);

function handleGame() {
  //event.removeEventListener("click", 'method here');
  console.log('activate new buttons');
}

function initializePlay() {
    let boardTiles = document.getElementById('board-game');
    boardTiles.style.display = 'block';
    boardTiles.addEventListener('click', (e) => {
      //e.stopPropagation()
      if(gameBoard.checkWinPattern() == 'X' || gameBoard.checkWinPattern() == 'O'){
        boardTiles.removeEventListener('click', handleGame)
        console.log(gameBoard.checkWinPattern())
        console.log('listener removed')
        //ui.tileMarker(e.target, gm.getCurrentPlayer().token)
        //gameBoard.setBoardTile(parseInt(e.target.getAttribute('data-position')), gm.currentPlayer.token)
      }else{
        // boardTiles.removeEventListener('click', handleGame)
        // console.log('listener removed')
        ui.tileMarker(e.target, gm.getCurrentPlayer().token)
        console.log(gm.getCurrentPlayer().name)
        console.log(gm.getCurrentPlayer().token)
        gameBoard.setBoardTile(parseInt(e.target.getAttribute('data-position')), gm.getCurrentPlayer().token)
        gm.roundSelector()
      }
    });
    menu.style.display = 'none';
  }