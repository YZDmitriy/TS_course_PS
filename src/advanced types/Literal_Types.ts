// Literal Types

// const enum RequestMethod {
//     GET = 'GET',
//     POST = 'POST',
//     PUT = 'PUT',
//     DELETE = 'DELETE',
// }

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
  // return 3 // error
  return 1;
}

fetchWithAuth('url', 'post');
// fetchWithAuth('url', 'put') // ! error

let method = 'post';
const method2 = 'get';
// fetchWithAuth('url', method) // ! error
fetchWithAuth('url', method as 'post');
fetchWithAuth('url', method2);
