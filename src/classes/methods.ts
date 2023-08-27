const enum PaymentStatus {
  Holding,
  Processing,
  Reserved,
}

class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.Holding;
  createdAt: Date = new Date();
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
  }

  getPAymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unfoldPayment(): void {
    if (this.status === PaymentStatus.Processing) {
      throw new Error('Payment is success');
    }
    this.status = PaymentStatus.Reserved;
    this.updatedAt = new Date();
  }
}

const payment = new Payment(1);
payment.unfoldPayment();
console.log(payment.status);
const time = payment.getPAymentLifeTime();
console.log(time);
