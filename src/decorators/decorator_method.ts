// Method Decorator

export interface IPhone {
  name: string;
  getPhoneInDB(): number;
}

class PhoneService implements IPhone {
  name: string = 'Phone';

  @Log()
  getPhoneInDB(): number {
    throw new Error('Ошибка');
  }
}

function Log() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    console.log('target -->', target);
    console.log('propertyKey -->', propertyKey);
    console.log('descriptor -->', descriptor);

    descriptor.value = () => {
      console.log('no error');
    };
  };
}

console.log(new PhoneService().getPhoneInDB());

//-------------------------------------//