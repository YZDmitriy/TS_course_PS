class UserBuilder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  role: string[];
}

const resThis = new UserBuilder().setName('Max');

let userThisTs: UserBuilder | AdminBuilder = new UserBuilder();

if(userThisTs.isAdmin()) {
  userThisTs.role = ['admin'];
}else {
  userThisTs.name = 'Max';
}
