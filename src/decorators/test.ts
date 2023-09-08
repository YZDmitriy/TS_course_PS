/*
     добавить Декоратор который добавляет свойство
    createdAt в класс фиксируя дату создания 
*/

interface ICarService {
  car: number;
  getCarInDB(): number;
}

function adCreateAtCar<T extends { new (...args: any[]): {} }>(
  constructor: T
): T {
  return class extends constructor {
    createdAt: Date = new Date();
  };
}

@adCreateAtCar
class CarService implements ICarService {
  car: number = 1;
  getCarInDB(): number {
    return this.car;
  }
}

type adCreateAtCarType = {
  createdAt: Date;
};

console.log((new CarService() as ICarService & adCreateAtCarType).createdAt);
