// Decorator factory

export interface IUserService {
  user: number;
  getUserIdDatabase(): number;
}

// @setUser(33) //!  вызываем фабрику декораторов
@factoryUserAdvanced(55) //!  вызываем фабрику декораторов
class UserService implements IUserService {
  user: number;

  getUserIdDatabase(): number {
    return this.user;
  }
}

// ! фабрики декораторов
function setUser(user: number) {
  return (target: Function) => {
    target.prototype.user = user;
  };
}

function factoryUserAdvanced(user: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      user = user;
    };
  };
}

// console.log(new UserService().getUserIdDatabase()); //! 33
console.log(new UserService().getUserIdDatabase()); //! 55
