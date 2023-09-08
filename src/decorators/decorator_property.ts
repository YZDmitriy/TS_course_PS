// Property Decorator

export interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  @Max(100)
  users: number = 1000;

  getUsersInDatabase(): number {
    throw new Error('Ошибка');
  }
}

function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number;

    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`нельзя положить больше ${max}`);
      }
      value = newValue;
    };

    const getter = function () {
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

const userService = new UserService();
console.log(userService.users);
userService.users = 200;
