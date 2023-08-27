export type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `${Uppercase<ReadOrWrite>} access`; //  "READ access" | "WRITE access"
type Access2 = `${Capitalize<ReadOrWrite>} access`; //  "Read access" | "Write access"
type Access3 = `${ReadOrWrite} ${Bulk} access`; //  "read  access" | "read bulk access" | "write  access" | "write bulk access"

type ReadOrWriteBulk<T> = T extends `${infer R}` ? R : never;

type T = ReadOrWriteBulk<Access>; // "read  access" | "read bulk access" | "write  access" | "write bulk access"

type ErrorOrSuccess = 'error' | 'success';

interface Res {
  status: `http://localhost/${Capitalize<ErrorOrSuccess>}`;

}

const resLit: Res = {
  status: 'http://localhost/Success',
};
