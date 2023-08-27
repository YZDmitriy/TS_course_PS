// Необходимо написать функцию toString, которая принимает любой тип
// и возвращает его строковое представление. Если не может, то
// возвращает undefined.

function toStringGen<T>(data: T): string | undefined {
  if (data) {
    return data.toString();
  }
  return undefined;
}

// console.log(toStringGen<number>(1));
// console.log(toStringGen<string>('qwerty'));
// console.log(toStringGen<boolean>(true));
// console.log(toStringGen<object>({ a: 1, b: 2 }));

// ---------------------------------------------------//

function toStringTwo<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString();
  }
  switch (typeof data) {
    case 'string':
      return data;
    case 'number':
    case 'boolean':
    case 'symbol':
    case 'bigint':
    case 'function':
      return data.toString();

    case 'object':
      return JSON.stringify(data);

    default:
      return undefined;
  }
}



// Необходимо написать функцию сортировки любых
// объектов, которые имеют і по убыванию и по возрастанию

const data = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Надя' },
];

export interface IUser {
  id: number;
  name: string;
}

function sort<T extends IUser>(data: T[], param: 'up' | 'down' = 'up'): T[] {
  if (param === 'up') {
    return data.sort((a, b) => a.id - b.id);
  }
  if (param === 'down') {
    return data.sort((a, b) => b.id - a.id);
  }
  return data;
}

console.log(sort(data));