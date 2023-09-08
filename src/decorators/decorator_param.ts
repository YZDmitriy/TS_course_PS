// Decorator parameters

export interface IUserService {
  user: number;
  getUserIdDatabase(): number;
}

class UserService implements IUserService {
  user: number = 1000;

  getUserIdDatabase(): number {
    return this.user;
  }

  setUserIdDatabase(@Positive() num: number): void {
    this.user = num;
  }
}

function Positive() {
  return (target: Object, key: string | symbol, index: number) => {
    console.log(target, key, index);
  };
}
