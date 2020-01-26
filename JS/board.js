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

  checkRows = () => {
    if (this._board[0] === this._board[1] && this._board[0] === this._board[2]) {
      return this._board[0];
    } else if (this._board[3] === this._board[4] && this._board[3] === this._board[5]) {
      return this._board[3];
    } else if (this._board[6] === this._board[7] && this._board[6] === this._board[8]) {
      return this._board[6];
    }
    return;
  }

  checkColumns = () => {
    if (this._board[0] === this._board[3] && this._board[0] === this._board[6]) {
      return this._board[0];
    } else if (this._board[1] === this._board[4] && this._board[1] === this._board[7]) {
      return this._board[1];
    } else if (this._board[2] === this._board[5] && this._board[2] === this._board[8]) {
      return this._board[2];
    }
    return;
  }

  checkDiagonals = () => {
    if (this._board[0] === this._board[4] && this._board[0] === this._board[8]) {
      return this._board[0];
    } else if (this._board[2] === this._board[4] && this._board[2] === this._board[6]) {
      return this._board[2];
    }
    return;
  }

  checkWinPattern(){
    if(this.checkColumns()){
      return this.checkColumns();
    }else if(this.checkRows()){
      return this.checkRows();
    }else if(this.checkDiagonals()){
      return this.checkDiagonals()
    }
  }

  resetBoard (){
    return this._board = ['', '', '', '', '', '', '', '', ''];
  }
}
