let variable = 42;
let bul: string = variable.toString();
// let eve: string = new String(variable); // !error
let eve2: string = new String(variable).valueOf();
let eve3: boolean = new Boolean(variable).valueOf();

let cur = 'qwerty';
let dil: number = parseInt(cur);

//-------------------------//

export interface UserType {
  name: string;
  email: string;
  login: string;
}

const userT: UserType = {
  name: 'Sasha',
  email: 'sasha@ya.ru',
  login: 'sasha',
};

const userA = {
  name: 'Sasha',
  email: 'sasha@ya.ru',
  login: 'sasha',
} as UserType;

//-------------------------//

interface Admin {
  name: string;
  role: number;
}

const admin: Admin = {
  ...userT, // не рекомендуется тк передается еще и email и login
  role: 123,
};

//-------------------------//

function userToAdmin(user: UserType): Admin {
  return {
    name: user.name,
    role: 123,
  };
}
