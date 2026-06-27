console.log("Hello World");

const arrayNumbers = [];

const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

arrayNumbers.push(myObject);

console.log(arrayNumbers.entries().next().value); // Output: [0, { name: "John", age: 30, city: "New York" }]

