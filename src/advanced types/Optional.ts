// Optional

export interface User {
  login: string;
  password?: string;
  age: number | undefined; //  не эквивалентно знаку ?
}

const user: User = {
  login: 'login',
  age: undefined, // должно быть
};

//-------------------------------//

function multiply(first: number, second?: number): number {
  //   return first * second; // ! error

  return second ? first * second : first;
}

function multiplyTwo(first: number, second: number = 42): number {
  return first + second;
}

//-------------------------------//

interface UserPro {
  login: string;
  password?: {
    type: 'private' | 'public';
  };
}

function logUser(user: UserPro) {
  console.log(user.password?.type);
  console.log(user.password!.type); // восклицательный знак означает, что мы говорим что type всегда есть
}

//-------------------------------//

function text(text?: string) {
  const result = text ?? multiply(42);
}
