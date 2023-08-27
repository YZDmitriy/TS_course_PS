// Union

function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else if (typeof id === 'number') {
    console.log(id * 2);
  } else {
    console.log(id);
  }
}

logId(1);
logId('Log');
logId(true);

function logError(error: string | string[]) {
  if (Array.isArray(error)) {
    console.log(error[0]);
  } else {
    console.log(error);
  }
}

function logObject(obj: { a: number } | { b: string }) {
  if ('a' in obj) {
    console.log(obj.a + 1);
  } else if ('b' in obj) {
    console.log(obj.b.toUpperCase());
  }
}

function logMultipleId(a: string | number, b: string | boolean) {
  if (a === typeof b) {
    a.toLowerCase();
  }else {
    console.log(a);
  }
}