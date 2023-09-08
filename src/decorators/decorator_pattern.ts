//Decorator pattern

export interface IUserService {
  user: number;
  getUserIdDatabase(): number;
}

class UserService implements IUserService {
  user: number = 1000;

  getUserIdDatabase(): number {
    return this.user;
  }
}

// функция декоратор
function nullUser(obj: IUserService) {
  obj.user = 0;
  return obj;
}

function logUser(obj: IUserService) {
  console.log('User:' + obj.user);
  return obj;
}

console.log(new UserService().getUserIdDatabase()); // 1000
// обернули в декоратор
console.log(nullUser(new UserService()).getUserIdDatabase()); // 0
// обернули в два декоратора
console.log(logUser(nullUser(new UserService())).getUserIdDatabase()); // 0
