// ReturnType

class UserReturn {
  constructor(public id: number, public name: string) {}
}
function getName(id: number): UserReturn {
  return new UserReturn(id, 'John');
}

type RT = ReturnType<typeof getName>; // UserReturn
type RT2 = ReturnType<() => void>; // void
type RT3 = ReturnType<<T>() => T>; // unknown
type RT4 = ReturnType<<T extends string>() => T>; // string

// Parameters

type PT = Parameters<typeof getName>; // [id: number]

type first = PT[0]; // number

// ConstructorParameters

type CP = ConstructorParameters<typeof UserReturn>; // [id: number, name: string]
