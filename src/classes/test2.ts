// Необходимо сделать корзину (Cart) на сайте,
// которая имеет список продуктов (Product), добавленных в корзину
// и параметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)


class Product {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Delivery {
  type: string;
  date: Date;
  address: string;

  constructor(type: string, date: Date, address: string) {
    this.type = type;
    this.date = date;
    this.address = address;
  }
}

class Cart {
  products: Product[];
  delivery: Delivery;

  constructor(products: Product[], delivery: Delivery) {
    this.products = products;
    this.delivery = delivery;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  calculateTotalPrice() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  setDelivery(delivery: Delivery) {
    this.delivery = delivery;
  }

  checkout() {
    if (this.products.length > 0 && this.delivery) {
      return 'Все ок';
    } else {
      return 'Что-то пошло не так';
    }
  }
}

const product1 = new Product(1, 'potato', 100);
const product2 = new Product(2, 'tomato', 200);

const delivery1 = new Delivery('pickup', new Date(), 'Moscow');
const delivery2 = new Delivery('delivery', new Date(), 'Moscow');

const cart = new Cart([product1, product2], delivery1);

const cart2 = new Cart([product1, product2], delivery2);
cart2.removeProduct(1);

console.log(cart);
console.log(cart2);


//-------------------------------------//

class ProductCourse {
  constructor(public id: number, public title: string, public price: number) {}
}

class DeliveryCourse {
  constructor(public date: Date) {}
}

class HomeDelivery extends DeliveryCourse {
  constructor(date: Date, public address: string) {
    super(new Date());
  }
}

class ShopDelivery extends DeliveryCourse {
  constructor(shopId: number) {
    super(new Date());
  }
}

type DeliveryType = HomeDelivery | ShopDelivery;

class CartCourse {
  private products: ProductCourse[] = [];
  private delivery: DeliveryType;

  public addProduct(product: ProductCourse): void {
    this.products.push(product);
  }

  public removeProduct(id: number): void {
    this.products = this.products.filter(
      (product: ProductCourse) => product.id !== id
    );
  }

  public getSum(): number {
    return this.products
      .map((product: ProductCourse) => product.price)
      .reduce((sum: number, price: number) => sum + price, 0);
  }

  public setDelivery(delivery: DeliveryType): void {
    this.delivery = delivery;
  }

  public checkout(): { success: boolean } {
    if (this.products.length === 0) {
      throw new Error('Корзина пуста');
    }
    if (!this.delivery) {
      throw new Error('Не выбран способ доставки');
    }
    return { success: true };
  }
}

const cartCourse = new CartCourse();
cartCourse.addProduct(new ProductCourse(1, 'potato', 100));
cartCourse.addProduct(new ProductCourse(2, 'banana', 200));
cartCourse.removeProduct(1);
cartCourse.setDelivery(new HomeDelivery(new Date(), 'Moscow'));
