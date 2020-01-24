export class Board {
  constructor(){
    this._board = ['', '', '', '', '', '', '', '', ''];
  }

  get board (){
    return this._board;
  }

  setBoardTile(index, value) {
    if (this._board[index] == ''){
      this._board[index] = value;
    }
  }

  resetBoard (){
    return this._board = ['', '', '', '', '', '', '', '', ''];
  }
}
