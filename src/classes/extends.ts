type PayStatus = 'new' | 'old';

class PayExtends {
  id: number;
  status: PayStatus = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'old';
  }
}

class Persister extends PayExtends {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    //save to database
  }

  override pay(date?: Date) {
    // super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}

//--------------------------------------------------------//

export class UserClass {
  name: string = 'User';

  constructor() {
    console.log(this.name); // User
  }
}

class Admin extends UserClass {
  name: string = 'Admin';

  constructor() {
    super();
    console.log(this.name); // Admin
  }
}

new Admin(); //  console.log -> User -> Admin

//--------------------------------------------------------//

class HttpError extends Error {
  code: number;

  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}
