function Uni(name: string): any {
  console.log('инициализация ' + name);

  return function () {
    console.log('вызов ' + name);
  };
}

@Uni('Class') // 7
class MyClass {
  @Uni('свойство') // отрабатывает 1
  props?: any;

  @Uni('Свойство static') // 4
  static staticProp?: any;

  @Uni('Метод static') // 5
  static staticMethod(@Uni('параметр метода static') param: any) {} // 6

  @Uni('метод') //2
  method(@Uni('параметр метода') param: any) {} // 3

  constructor(@Uni('Параметр конструктора') param: any) {} // 8
}
