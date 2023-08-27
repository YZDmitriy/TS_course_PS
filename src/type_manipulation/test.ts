// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возвращает
// сгруппированный объект.
// Пример:
//
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];
//

// При группировке по 'group' ---->

//
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }
//

interface Students {
  group: number;
  name: string;
}

const groupStudents = (
  students: Students[],
  key: keyof Students
): Record<string, Students[]> => {
  return students.reduce((acc: Record<string, Students[]>, student) => {
    if (!acc[student[key]]) {
      acc[student[key]] = [];
    }
    acc[student[key]].push(student);

    return acc;
  }, {});
};

const arrStd: Students[] = [
  { group: 1, name: 'John' },
  { group: 1, name: 'Karen' },
  { group: 2, name: 'Mike' },
];

console.log(groupStudents(arrStd, 'group'));

//---------------------------------------------------//

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(arr: T[], key: keyof T): IGroup<T> {
  return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];

    let curEl = map[itemKey];

    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }
    map[itemKey] = curEl;
    return map;
  }, {});
}

//---------------------------------------------------//

// MapTypes

// Необходимо сделать тип для результата валидации
// формы, основываясь на типе формы

interface IForm {
  name: string;
  password: string;
  // age: number;
}
const form: IForm = {
  name: 'Вася',
  password: '123',
  // age: 12,
};

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Должен быть длиннее 5 символов' },
};

type Validation<T> = {
  [K in keyof T]:
    | {
        isValid: true;
      }
    | {
        isValid: false;
        errorMessage: string;
      };
};
