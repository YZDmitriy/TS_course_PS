type Modifier = 'read' | 'write' | 'create';

type UserRoles = {
  customer?: Modifier;
  projectManager: Modifier;
  Admin?: Modifier;
};

type ModifierToAccess<Type> = {
  +readonly [Property in keyof Type as Exclude<
    `canAccess${string & Property}`,
    'canAccessAdmin'
  >]-?: boolean;
};

type UserAccessTwo = ModifierToAccess<UserRoles>;

type UserAccess = {
  customer?: boolean;
  projectManager?: boolean;
  Admin?: boolean;
};
