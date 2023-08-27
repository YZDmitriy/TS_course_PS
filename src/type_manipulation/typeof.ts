let stringOrNumber: string | number = 42;

if(Math.random() > 0.5) {
    stringOrNumber = 'hello'; // string | number
} else {
    stringOrNumber = 40; // string | number
}

if(typeof stringOrNumber === 'string') {
    console.log(stringOrNumber.toUpperCase()); // string
} else if (typeof stringOrNumber === 'number') {
    console.log(stringOrNumber * 2); // number
}

//--------------------------------------------------//

let strOrNumTwo: typeof stringOrNumber; // string | number

//--------------------------------------------------//

const userType = {
    name: 'Ivan',
};

type keyOfUser = keyof typeof userType; // 'name'

//--------------------------------------------------//

const enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

type PersonType = keyof typeof Direction;  // 'Up' | 'Down' | 'Left' | 'Right'