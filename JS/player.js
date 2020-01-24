export class Player {
  constructor(name, token) {
    this._name = name;
    this._token = token;
    this._gender = 'male';
  }

  get name() {
    return this._name;
  }

  set name(nam){
    return this._name = nam;
  }

  set gender(mf){
    return this._gender = mf;
  }

  get token() {
    return this._token;
  }

  set token(token){
    return this._token = token;
  }
}

