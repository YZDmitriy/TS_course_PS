//Types или Interfaces

export {};

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: 'Max',
  age: 30,
};

//-------------------------------------//

type Id = string | number;