
let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role:[number, string];

name= 'Usama';
age= "23";
isStudent=true;
hobbies= ['Programming', 'Blockchain'];
role=[5, 'Administrator'];

type Person = {
  firstName: string;
  lastName: string;
  age?: unknown; 
}

// '?' makes the type optional

type Guy = Person & {
  isStudent?: boolean;
  hobbies: string[];
  role: [number, string];
}

let person: Person = {
  firstName: 'John',
  lastName: 'Doe',
}

// type can also be extended using '&'
// interface helps in extending the two objects easier

interface x {
  a: string;
  b: number;
}

interface y extends x {
  c: boolean;
  d: string;
}
