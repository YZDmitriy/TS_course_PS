function logId(id: string | number): void {
  console.log(id);
}

const a = logId(1); // type a -> void

function f(f: number, s?: number): number | void {
  if (!s) {
    return f * f;
  }
}

type voidFunction = () => void;

const b: voidFunction = () => {};

const c: voidFunction = () => {
  return true;
};

const d = c(); // d -> void


//---------------------------------------------//

const arr = ['JS', 'Typescript', 'Node'];

const userVoid = {
    arr: ['React', 'Vue']
}

arr.forEach((item) => {
    userVoid.arr.push(item);
})