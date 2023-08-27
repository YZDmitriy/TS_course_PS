class UserClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const userClass = new UserClass('John');
console.log(userClass);
userClass.name = 'Pete';
console.log(userClass);

//--------------------------------------------------//

class AdminClass {
  role: string; // "strictPropertyInitialization": false, ts.config
}

const adminClass = new AdminClass();
adminClass.role = 'admin';
