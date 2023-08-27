class UserConstructor {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(ageOfName?: string | number, age?: number) {
    if (typeof ageOfName === 'string') {
      this.name = ageOfName;
    } else if (typeof ageOfName === 'number') {
      this.age = ageOfName;
    }
    if(typeof age === 'number') {
      this.age = age;
    }
  }
}

const userConst = new UserConstructor('Max');
const userConst2 = new UserConstructor();
const userConst3 = new UserConstructor(42);
const userConst4 = new UserConstructor('Max', 42);
