
const autoGenerateId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${randomString}`;
}

const mixedArray: (string | number)[] = ["apple", 42, "banana", 3.14, "cherry"];
console.log(mixedArray.length); // Output: 5

const customersArray: Iuser[] = [];

interface Iuser{
  id: number;
  name: string;
  city?: string;
  phone?: string;
  address?: string;
}

const customer: Iuser = {
  id: 0,
  name: "",
  city: "",
  phone: "",
  address: "",
}
customersArray.push(customer);
customer.id = 1;
customer.name = " Doe";
customer.city = " York";
customer.phone = "123-456-7890";
customer.address = "123 Main St, New York, NY 10001";



customersArray.forEach((customer) => {
  console.log(`Customer ID: ${customer.id}, Name: ${customer.name}, City: ${customer.city}, Phone: ${customer.phone}`);
}); // Output: Customer ID: 1, Name: John Doe, City: New York, Phone: 123-456-7890


enum gender {
  male,
  female
}

const UserGender: gender = gender.male;
const UserAge: number = 25;

if (UserGender === gender.male && UserAge >= 16) {
  console.log("Available for Men");
}else (UserAge >= 18) {
  console.log("Available for Women");
} 

if (UserGender === gender.male) {
  if (UserAge >= 16) {
    console.log("Available for Men");
  }else {
    console.log("Not Available for Men");
  }
}else{
  if (UserAge >= 18) {
    console.log("Available for Women");
  }else {
    console.log("Not Available for Women");
  }
}


if (UserGender === gender.male && UserAge >= 16) {
  console.log("Available for Men");
}else if (UserGender === gender.male) {
  console.log("Not Available for Men");
}else if (UserGender === gender.female && UserAge >= 18) {
  console.log("Available for Men");
}else if (UserGender === gender.female) {
  console.log("Not Available for Women");
}


const array: (string | number)[] = ["apple", 42, "banana", 3.14, "cherry",3,6,53,34];

const newArray= array.map(item => {`hi ${item}`}).join(', ');
console.log(newArray);// Output: hi apple, hi 42, hi banana, hi 3.14, hi cherry, hi 3, hi 6, hi 53, hi 34 


// Discriminated Union Example

type Circle = {
  type: 'circle';
  radius: number;
  color: string;
};

type Square = {
  type: 'square';
  sideLength: number;
  color: string;
};

type Shape = Circle | Square;

function getShapeArea(shape: Shape){
  if (shape.type === 'circle') {
    shape.radius = 5;
    shape.type = 'circle';
  }else if (shape.type === 'square') {
    shape.sideLength = 10;
    shape.type = 'square';
  }
} 



// Generic Type Example
type MyObj <T> = {
  name: string;
  age: number;
  data?: T;
};

let person1: MyObj<string> = {
  name: "John",
  age: 30,
  data: "Some string data"
};

let person2: MyObj<number> = {
  name: "Jane",
  age: 25,
  data: 42
};  

let person3: MyObj<boolean> = {
  name: "Alice",
  age: 28,
  data: true
};

type point = {
  x: number;
  y: number;
};

let point4: MyObj<point> = {
  name: "Bob",
  age: 35,
  data: { x: 10, y: 20 }
};


function getData<T>(data: T): T {
  return data;
}

const data = <T>(item: T): T =>{
  return item;
};

function returnArray<T>(arr: T[]): T[] {
  return arr;
}