function getFullName(userEntity: user): string {
  return `${userEntity.firstName} ${userEntity.lastName}`;
}
type user = {
  firstName: string;
  lastName: string;
  city: string;
  age: number;
  skills?: {};
};

console.log(
  getFullName({
    firstName: 'Dmitri',
    lastName: 'Yu',
    city: 'Moscow',
    age: 25,
    // skills: {
    //   typescript: true,
    //   javascript: true,
    // },
  })
);

//--------------------------------------------//

const foo: info = {
  officeId: 42,
  isOpen: true,
  contacts: {
    phone: '+7 (999) 999-99-99',
    email: '1@1.com',
    address: {
      city: 'Moscow',
    },
  },
};

type info = {
  officeId: number;
  isOpen: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
};

//--------------------------------------------//

const skills: (string | number)[] = ['html', 'css', 'javascript', 1];

for (const skill of skills) {
  if (typeof skill === 'string') {
    console.log(skill.toUpperCase());
  } else {
    console.log(skill + 1);
  }
}

console.log(skills.filter((el) => typeof el !== 'number'));

//--------------------------------------------//

const tuples: [number, string] = [1, 'JavaScript'];

const id = tuples[0];
const typeName = tuples[1];

const [idDesc, typeNameDesc] = tuples;

const tuplesArr: [number, string, ...boolean[]] = [1, 'JavaScript', true];

//--------------------------------------------//

const arrCity: readonly [number, string] = [1, 'Moscow'];
// arrCity.push('London'); //! error

const country: readonly string[] = ['Russia', 'USA', 'UK'];
// country[0] = 'Poland'; // ! error

const planets: ReadonlyArray<string> = ['Earth', 'Mars', 'Jupiter'];

//--------------------------------------------//

// при добавлении const к enum он не компилируется
// в js, а значит не засоряет банд лишней типизацией
// https://ultimatecourses.com/blog/const-enums-typescript
const enum statusCode {
  SUCCESS = 200,
  IS_PROGRESS = 300,
  FAILED = 404,
}

const res = {
  status: statusCode.SUCCESS,
  statusText: 'OK',
};

if (res.status === statusCode.SUCCESS) {
  console.log('success');
}

function compute() {
  return 3;
}

enum Roles {
  ADMIN = 1,
  USER = compute(),
}

//--------------------------------------------//

// TEST

/* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
/* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]

async function getFaqs(req: Req): Promise<Res[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data: Res[] = await res.json();
  return data;
}

const enum QuestionStatus {
  PUBLISHED = 'published',
  DELETED = 'deleted',
  DRAFT = 'draft',
}

type Req = {
  topicId: number;
  status?: QuestionStatus;
};

type Res = {
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status?: QuestionStatus;
};
