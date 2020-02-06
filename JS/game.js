export class GameManager {
  constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
  }

  checkWinToken(token){
    return token == 'X' ? 'X' : 'O';
  }

  getCurrentPlayer(){
    this.currentPlayer = (this.currentPlayer === this.player1) ? this.player2 : this.player1;
    return this.currentPlayer;
  }

  winner(winToken){
    if(winToken){
      if (winToken == this.player1.token){
        console.log(`player1 has won ${this.player1.name} score: ${this.player1.playerScore}`);
        return this.player1.countScore();
      }else if (winToken == this.player2.token){
        console.log(`player2 has won ${this.player2.name} score: ${this.player2.playerScore}`);
        return this.player2.countScore();
      }
    }
  }

  roundSelector(player){
    return player == this.player1 ? this.player2 : this.player1;
  }
}