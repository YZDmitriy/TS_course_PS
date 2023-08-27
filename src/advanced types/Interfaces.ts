// Interfaces

interface IUser {
  name: string;
  age: number;
  city: string;

  log?: (id: number) => string;
}

interface IUserProg {
  skills?: {};
}
interface UserWithFamily extends IUser, IUserProg {
  family: string[];
}

const userInt: UserWithFamily = {
  name: 'Mark',
  age: 33,
  city: 'New York',
  family: ['Mom', 'Dad', 'Brother'],
  skills: {
    programming: true,
  },

  log(id: number) {
    return id.toString();
  },
};

//---------------------//-----------------//

interface UserDic {
  [key: number]: IUser;
}
// type Record замена интерфейса выше
type userRecord = Record<number, IUser>;

const userDic: UserDic = {
  1: {
    name: 'Mark',
    age: 33,
    city: 'Moscow',

    log(id: number) {
      return id.toString();
    },
  },
};

interface Person {
  [index: string]: UserWithFamily;
}
type personRecord = Record<string, UserWithFamily>;

const Person: personRecord = {
  first: {
    name: 'Mark',
    age: 33,
    city: 'New York',
    family: ['Mom', 'Dad', 'Brother'],
  },
};
