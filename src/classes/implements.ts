interface ILogger {
  log(...arg: any[]): void;
  error(...arg: any[]): void;
}

class Logger implements ILogger {
  log(...arg: any[]): void {
    console.log(...arg);
  }
  async error(...arg: any[]): Promise<void> {
    console.log(...arg);
  }
}

//-------------------------------------//

interface Payable {
  pay(paymentId: number): void;
  price?: number;
}

interface IDelete {
  delete(): void;
}

class UserPay implements Payable, IDelete {
  pay(paymentId: number): void {
    // ...
  }
  price?: number | undefined;

  delete(): void {
    // ...
  }
}

new UserPay();
