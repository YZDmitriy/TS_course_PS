type A = Awaited<Promise<number>>; // number

type B = Awaited<Promise<string>>; // string

type C = Awaited<Promise<Promise<boolean>>>; // boolean

interface IMenu {
  name: string;
  price: number;
}

async function getMenu(): Promise<IMenu[]> {
  return [{ name: 'Аналитика', price: 100 }];
}

type R = Awaited<ReturnType<typeof getMenu>>;

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
  return [await x];
}
