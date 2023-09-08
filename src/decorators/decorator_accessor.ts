// Декоратор accessor

export interface IPhone {
  name: string;
  getPhoneInDB(): number;
}

class PhoneService implements IPhone {
  private _name: string = 'Phone';

  @Log()
  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  getPhoneInDB(): number {
    throw new Error('Ошибка');
  }
}

function Log() {
  return (
    target: Object,
    _: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const set = descriptor.set;
    descriptor.set = (...args: any) => {
      console.log(args);
      set?.apply(target, args);
    }
  };
}

const phone = new PhoneService();
console.log(phone.getPhoneInDB());
phone.name = 'Samsung';
