class UserGetSet {
  _login: string;
  password: string;
  createdAt: Date;

  set login(l: string | number) {
    this._login = 'user' + l;
    this.createdAt = new Date();
  }

  get login() {
    return this._login;
  }
  async setLogin(l: string | number) {
    this._login = 'user' + l;
  }
}

const userGetSet = new UserGetSet();
userGetSet.login = 'myLogin';
