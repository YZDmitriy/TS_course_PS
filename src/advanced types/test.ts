// Упражнение - Типизируем ответ сервера

// Запрос в виде платежа
const req: ReqProps = {
  sum: 10000,
  from: 2,
  to: 4,
};
// Ответ
const resTest: resTestProps[] = [
  {
    status: 'success',
    data: {
      databaseId: 567,
      sum: 10000,
      from: 2,
      to: 4,
    },
  },
  {
    status: 'failed',
    data: {
      errorMessage: 'Недостаточно средств',
      errorCode: 4,
    },
  },
];

//-------------------------------// my tests
interface ReqProps {
  [key: string]: number;
}

interface dataPropsGood {
  databaseId: number;
  sum: number;
  from: number;
  to: number;
}

interface dataPropsBad {
  errorMessage: string;
  errorCode: number;
}

interface resTestProps {
  status: 'success' | 'failed';
  data: dataPropsBad | dataPropsGood;
}

//-------------------------------// not my tests

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface IPaymentRequest extends IPayment {}

const enum PaymentStatus {
  success = 'success',
  failed = 'failed',
}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IPaymentResponseSuccess {
  status: PaymentStatus.success;
  data: IDataSuccess;
}

interface IPaymentResponseFailed {
  status: PaymentStatus.failed;
  data: IDataFailed;
}
