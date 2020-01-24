export class GameManager {
  constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
  }

  checkWinToken(token){
    return token == 'X' ? 'X' : 'O';
  }



  winner(player1, player2, winToken){
    if(winToken){
      if (winToken == player1.token){
        player1.playerScore();
        console.log(`player1 has won ${player1.name} score: ${player1.playerScore()}`);
      }else if (winToken == player2.token){
        player2.playerScore();
        console.log(`player1 has won ${player2.name} score: ${player2.playerScore()}`);
      }
    }
  }

  roundSelector(player){
    return player == this.player1 ? this.player2 : this.player1;
  }
}