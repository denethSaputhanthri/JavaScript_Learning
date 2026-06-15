console.log("js Loaded..!");


 let a = function f(){
    return "Hello World";
 }
 //console.log(a());

const a = { name: "John", age: 30, city: "New York" };
a.name = "Jane"; // Non-primitive data types are mutable, so we can change the properties of the object even if it is declared with const.
console.log(a.name); // Output: Jane

let a = 4;
let b = a;
b = 5;
console.log(a); // Output: 4, because a and b are primitive data types, so they are stored in different memory locations. When we assign a to b, we are copying the value of a to b, so they are independent of each other.
console.log(b); // Output: 5, because we changed the value of b, but it does not affect a.

const a = { name: "John", age: 30, city: "New York" };
const b = a;
b.name = "Jane";
console.log(a.name); // Output: Jane, because a and b are non-primitive data types, so they are stored in the same memory location. When we assign a to b, we are copying the reference of a to b, so they are pointing to the same object in memory. Therefore, when we change the properties of b, it also changes the properties of a.   

