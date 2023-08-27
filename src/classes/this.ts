class Pay {
  private date: Date = new Date();

  getDate(this: Pay) {
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  };
}

const pay = new Pay();
console.log(pay.getDate()); // 2022-01-01T00:00:00.000Z

const userThis = {
  id: 1,
  // payDate: pay.getDate, // undefined
  payDate: pay.getDate.bind(pay), // 2022-01-01T00:00:00.000Z,
  payDateArrow: pay.getDateArrow, // 2022-01-01T00:00:00.000Z
};

console.log(userThis.payDate());
console.log(userThis.payDateArrow());

//-------------------------------------//

class PayPerson extends Pay {
  save() {
    return super.getDate();
    // return super.getDateArrow(); // ! error getDateArrow not function
    // return this.getDateArrow(); 
  }
}

console.log(new PayPerson().save()); // 2022-01-01T00:00:00.000Z
