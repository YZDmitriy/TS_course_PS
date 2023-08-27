function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  // return '' // ! error
  while (true) {}
}

function rec(): never {
  return rec();
}

// const a: never = 1; // !error

//-----------------------------//

type paymentStatus = 'paid' | 'unpaid' | 'failed';

function processPayment(status: paymentStatus) {
  switch (status) {
    case 'paid':
      ///...
      break;
    case 'unpaid':
      ///...
      break;
    // case 'failed':
    //   ///...
    //   break;
    default:
      //   const _: never = status; // ! error тк не обработали failed
      throw new Error('Неверный статус');
  }
}

//-----------------------------//

function setTypeToBoolean(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }
  generateError('Неверный тип');
}
