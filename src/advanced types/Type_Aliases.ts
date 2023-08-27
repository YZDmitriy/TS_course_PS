// Type Aliases

type httpMethod = 'post' | 'get';

function getWithOut(url: string, method: httpMethod) {
  return 1;
}

getWithOut('test', 'get');

//---------------------//

type User = {
  firstName: string;
  lastName: string;
  skills?: string[];
};

type Role = {
  id: string;
};

type UserOccupation = {
  type: string;
};

type UserWithRole = User & Role;
const user: UserWithRole = {
  firstName: 'John',
  lastName: 'Doe',
  skills: ['JS', 'TS'],
  id: '1', // обязательно
};

type UserWithOccupation = User | UserOccupation;
const user2: UserWithOccupation = {
  firstName: 'John',
  lastName: 'Doe',
  skills: ['JS', 'TS'],
  type: 'admin', // необязательно
};
