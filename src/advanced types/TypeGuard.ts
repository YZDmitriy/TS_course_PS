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

interface Admin {
  name: string;
  role: number;
}

function loginId(id: string | number): void {
  if (isString(id)) {
    // typeof id === 'string'
    console.log(id.toUpperCase());
  } else if (typeof id === 'number') {
    console.log(id);
  }
  console.log(id); // string | number
}

function isString(z: string | number): z is string {
  return typeof z === 'string';
}

//-----------------------------------------------------//

function isAdmin(user: UserType | Admin): user is Admin {
  return 'role' in user;
}

function isAdminAlternative(user: UserType | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRole(user: UserType | Admin): void {
  if (isAdmin(user)) {
    user.role = 123;
  } else {
    throw new Error('Нет прав');
  }
}
