interface UserKey {
  name: string;
  age: number;
}

type KeysOfUser = keyof UserKey;

const key: KeysOfUser = 'name'; // only name and age
// const key: KeysOfUser = 'count'; // error

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const userKeyof: UserKey = {
  name: 'John',
  age: 30,
  // count: 1  ! error
};

getValue(userKeyof, 'name');
