let input: unknown;

input = 42;
input = 'JavaScript';
input = [1, 2, 3];

// let result: string = input // ! error

//-------------------------------------//

function run(i: unknown) {
  if (typeof i === 'string') {
    console.log(i.toUpperCase());
  } else if (typeof i === 'number') {
    console.log(i * 2);
  } else {
    console.log(i); // unknown
  }
}

run(input);

//-------------------------------------//

async function getData() {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts/1');
  } catch (error) {
    if (error instanceof Error) {
      // проверка тк без нее error это unknown
      console.log(error.message);
    }
  }
}
async function getDataForce() {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts/1');
  } catch (error) {
    const e = error as Error; // еще возможно сделать так
    console.log(e.message);
  }
}

//-------------------------------------//

type union = unknown | null; //  unknown

type union2 = unknown & string; // string
