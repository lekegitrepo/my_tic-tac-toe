export class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
  }

  get name() {
    return this.name;
  }

  get token() {
    return this.token;
  }
}
