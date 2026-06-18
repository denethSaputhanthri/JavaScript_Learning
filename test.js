const b ={
    name: "John",
    age: 30,
    bark : () => console.log('hellow'),
    new: {
        newbark : () => console.log('hellowwwer')
    }
}

console.log(b.name); // Output: John
console.log(b.age); // Output: 30
b.bark(); // Output: hellow

console.log(b["name"]); // Output: John
console.log(b["age"]); // Output: 30
b["bark"](); // Output: hellow

const accessor = "name";
console.log(b[accessor]); // Output: John

Object.seal(b); 
// This will seal the object, 
// which means that we can change the properties of the object, 
// but we cannot add or delete properties.
b.name = "Jane";// This will change the name property of the object to Jane.

Object.freeze(b);
// This will freeze the object, 
// which means that we cannot change the properties of the object, 
// and we cannot add or delete properties.
b.name = "Jane";// This will not change the name property of the object to Jane.    

console.log(Object.keys(b));// Output: ["name", "age", "bark", "new"]
// This will return an array of the keys of the object. 
console.log(Object.values(b));// Output: ["John", 30, [Function: bark], { newbark: [Function: newbark] }]
// This will return an array of the values of the object. 
console.log(Object.entries(b));// Output: [["name", "John"], ["age", 30], ["bark", [Function: bark]], ["new", { newbark: [Function: newbark] }]]        
// This will return an array of the key-value pairs of the object.

function Person(name, age, greet){
    this.name = name;
    this.age = age;
    this.greet = greet;
}
const person1 = new Person("John", 30,() => console.log('hellow'));
console.log(person1); // Output: Person { name: 'John', age: 30, greet: [Function (anonymous)] }
console.log(person1.greet()); // Output: hellow
