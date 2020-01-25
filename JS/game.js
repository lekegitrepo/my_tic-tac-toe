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
        this.player1.countScore();
        console.log(`player1 has won ${this.player1.name} score: ${this.player1.playerScore}`);
      }else if (winToken == this.player2.token){
        this.player2.countScore();
        console.log(`player2 has won ${this.player2.name} score: ${this.player2.playerScore}`);
      }
    }
  }

  roundSelector(player){
    return player == this.player1 ? this.player2 : this.player1;
  }
}