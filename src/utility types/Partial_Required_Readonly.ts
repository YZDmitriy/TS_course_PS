//  Partial

interface UserPar {
  name: string;
  age?: number;
  email: string;
}

type partial = Partial<UserPar>; // все поля не обязательны

// Required

type required = Required<UserPar>; // все поля обязательные

// Readonly

type readonly = Readonly<UserPar>; // все поля readonly

type requiredAndReadonly = Required<Readonly<UserPar>>; // все поля readonly и обязательные
