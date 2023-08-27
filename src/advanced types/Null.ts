const nullType: null = null;

// const undefinedType: null = undefined; // ! error

// const nullNumber: null = number; // ! error

// const nullString: null = string; // ! error

// const nullBoolean: null = boolean; // ! error

// const nullUndefined: null = undefined; // ! error

// ts.config  "strictNullChecks": true, проверка на null

interface UserNull {
  firstName: string;
  lastName: string;
}

function getUserNull() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      firstName: 'Val',
    } as UserNull;
  }
}

const userNull = getUserNull();
if (userNull) {
  console.log(userNull.firstName);
}
