// Non-primitive data types are stored in the heap memory, and they are accessed by reference.

const a = { name: "John", age: 30, city: "New York" };
const b = a;
b.name = "Jane";
console.log(a.name); // Output: Jane, 
// because a and b are non-primitive data types, so they are stored in the same memory location. 
// When we assign a to b, we are copying the reference of a to b, so they are pointing to the same object in memory. 
// Therefore, when we change the properties of b, it also changes the properties of a.   

const a = { name: "John", age: 30, city: "New York" };
const b = { ...a }; // This is called the spread operator, 
// it creates a new object with the same properties as a, but it is stored in a different memory location.
b.name = "Jane";
console.log(a.name); // Output: John,
//  because a and b are non-primitive data types, but they are stored in different memory locations.
//  When we assign a to b using the spread operator, we are creating a new object with the same properties as a, 
// but it is stored in a different memory location. Therefore, when we change the properties of b, it does not affect a.   

const a = { name: "John", age: 30, city: "New York" };
const b = Object.assign({}, a); // This is another way to create a new object with the same properties as a,
// but it is stored in a different memory location.
b.name = "Jane";    
console.log(a.name); // Output: John,
// because a and b are non-primitive data types, but they are stored in different memory locations. 
// When we assign a to b using Object.assign(), we are creating a new object with the same properties as a, 
// but it is stored in a different memory location. Therefore, when we change the properties of b, it does not affect a.

const a = { name: "John", age: 30, city: "New York" };
const b = JSON.parse(JSON.stringify(a)); 
// This is another way to create a new object with the same properties as a, but it is stored in a different memory location.
b.name = "Jane";
console.log(a.name); // Output: John, 
// because a and b are non-primitive data types, but they are stored in different memory locations. 
// When we assign a to b using JSON.parse(JSON.stringify()), we are creating a new object with the same properties as a, 
// but it is stored in a different memory location. Therefore, when we change the properties of b, it does not affect a.