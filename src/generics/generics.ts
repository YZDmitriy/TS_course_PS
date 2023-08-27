// 1 Пример встроенного generic

export const aGeneric: Array<number> = [1, 2, 3];

const testGeneric = async () => {
  const prom = await new Promise<number>((res, rej) => {
    res(1);
  });
};

const recordGeneric: Record<string, boolean> = {
  drive: true,
  kpp: false,
};

// 2 Пишем функцию с generic

function logMiddleware<T>(data: T): T {
  console.log(data);

  return data;
}

const resGen = logMiddleware<number>(10);

//-----------------------------------------------------//

function splitHalf<T>(array: T[]): T[] {
  const len = array.length / 2;

  return array.slice(0, len);
}

splitHalf<number>([1, 2, 3, 4, 5, 6]);

// 3 Использование в типах

const split: <T>(array: T[]) => T[] = splitHalf;

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};

type ILogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLineWithType: ILogLine<{ a: string }> = {
  timeStamp: new Date(),
  data: {
    a: 'Moscow',
  },
};

// 4 Ограничение generic

class Vehicle {
  run: number;
}

function kmToMiles<T extends Vehicle>(km: T): T {
  km.run = km.run * 0.62;

  return km;
}

class LSV extends Vehicle {
  model: string;
}

const vehicle = kmToMiles(new Vehicle());
const lsv = kmToMiles(new LSV());
// kmToMiles({ a: 1 }); // ! error
kmToMiles({ run: 10 });

// --------------------------------------- //

function logId<T extends string | number, Y>(
  id: T,
  addData: Y
): { id: T; data: Y } {
  console.log(id);
  console.log(addData);

  return { id, data: addData };
}

// 5 Generic классы

class ResGen<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    this.data = data;
    this.error = error;
  }
}

const res = new ResGen<string, number>('data', 0);
res.error = 1;

//--------------------------------------//

class HttpResponse<F> extends ResGen<string, number> {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

const https = new HttpResponse('qwerty', 10);
https.error = 3;
https.setCode(200);