//Decorator class

export interface IUserService {
  user: number;
  getUserIdDatabase(): number;
}

// @nullUser // новый вариант оборачивания в декоратор
@fortyTwoUserAdvanced //! новый вариант оборачивания в декоратор
class UserService implements IUserService {
  user: number;

  getUserIdDatabase(): number {
    return this.user;
  }
}

// если задано значение по умолчанию return this.user = 1000;
//то этот декоратор не сможет его перезатереть
// и вернется 1000 из UserService
function nullUser(target: Function) {
  target.prototype.user = 0;
}

// ! этот декоратор перезатирает значение по умолчанию
// и вернется 42
function fortyTwoUserAdvanced<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    user = 42;
  };
}

console.log(new UserService().getUserIdDatabase()); //! 42
