export class Player {
  constructor(name, token) {
    this._name = name;
    this._token = token;
    this._playerScore = 0;
  }

  get name() {
    return this._name;
  }

  set name(nam){
    return this._name = nam;
  }

  get token() {
    return this._token;
  }

  set token(token){
    return this._token = token;
  }

  countScore(){
    return this._playerScore++;
  }

  get playerScore(){
    return this._playerScore;
  }
}

