export interface RoleIndex {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface UserIndex {
  name: string;
  role: RoleIndex[];
  permissions: Permission;
}

const user: UserIndex = {
  name: 'Ivan',
  role: [{ name: 'admin' }],
  permissions: {
    endDate: new Date(),
  },
};

const nameUser = user['name'];
const roleName = 'role';

//------------------------------------------------//

type roleType = UserIndex['role'];

// type toleType2 = UserIndex[roleName] // error
type roleType2 = UserIndex[typeof roleName];

//-------------------------------------------------//

type rType = UserIndex['role'][number];
type dataType = UserIndex['permissions']['endDate'];

const role = ['admin', 'guest', 'user'] as const;

type rType2 = (typeof role)[number];
