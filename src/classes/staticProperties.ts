class UserService {
  static db: any;
  private static password: number;

  static getPassword(id: number) {
    return (UserService.password = id);
  }

  createPassword(id: number) {
    UserService.db;
  }

  static {
    UserService.password = 123;
  }
}

UserService.db;
// UserService.password // ! error

UserService.getPassword(42);
const inst = new UserService();
inst.createPassword(42);
