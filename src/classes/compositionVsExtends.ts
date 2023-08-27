export class UserExtends {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Users extends Array<UserExtends> {
  searchByName(name: string) {
    return this.find((user) => user.name === name);
  }

  override toString(): string {
    // наследование
    return this.map((user) => user.name).join(', ');
  }
}

const users = new Users();
users.push(new UserExtends('Max'));
users.push(new UserExtends('Anna'));
console.log(users.toString()); // Max, Anna

//----------------------------------//

class UserList {
  // композиция
  users: UserExtends[] = [];

  push(user: UserExtends) {
    this.users.push(user);
  }
}

//-------------------------------//

class Payment {
  date: Date;
}

class UserWithPayment extends Payment {
  name: string;
}

class UserWithPayment2 {
  user: UserExtends;
  payment: Payment;

  constructor(user: UserExtends, payment: Payment) {
    this.user = user;
    this.payment = payment;
  }
}
