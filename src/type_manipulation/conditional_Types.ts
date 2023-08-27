export const a: number = Math.random() > 0.5 ? 1 : 2;

interface HttpRes<T extends 'success' | 'error'> {
  code: number;
  data: T extends 'success' ? string : Error;
  addData: string | number;
}

const err: HttpRes<'error'> = {
  code: 404,
  data: new Error('not found'),
  addData: 2,
};

const res: HttpRes<'success'> = {
  code: 200,
  data: 'done',
  addData: 1,
};

//-------------------------------------------------//

class User {
  id: number;
  name: string;
}

class Product extends User {
  dbId: string;
}

function getUserOrProduct(id: number): User;
function getUserOrProduct(dbId: string): Product;
function getUserOrProduct(dbIdOrOd: string | number): User | Product {
  if (typeof dbIdOrOd === 'number') {
    return new User();
  } else {
    return new Product();
  }
}

type UserOfProduct<T extends string | number> = T extends number
  ? User
  : Product;

function getUserOrProduct2<T extends string | number>(
  id: T
): UserOfProduct<T> {
  if (typeof id === 'number') {
    return new User() as UserOfProduct<T>;
  } else {
    return new Product() as UserOfProduct<T>;
  }
}

const resCond = getUserOrProduct2(1);
const resCond2 = getUserOrProduct2('qwerty');
