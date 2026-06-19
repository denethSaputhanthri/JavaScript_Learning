const person = {
    name: "deneth",
    getNameRegular: function () {
        console.log(this);
    },
    getNameArrow: () => {
        console.log(this);
    }
}

console.log(person.name); // Output: deneth
person.getNameRegular(); // Output: deneth
console.log(person.getNameArrow()); // Output: undefined
 
console.log(person.getNameRegular()); // Output: deneth
console.log(person.getNameArrow());  
// window obejct will be printed because arrow functions do not have their own 'this' context.
// this will return undefined because arrow functions do not have their own 'this' context.
//  Instead, they inherit 'this' from the surrounding lexical scope, which in this case is the global scope (or module scope in Node.js). 
// Therefore, when you call person.getNameArrow(), 'this' does not refer to the person object, and it will log undefined.


const user = {
  name: 'Alex',
  logNormal: function() { console.log(this.name); },
  logArrow: () => { console.log(this.name); }
};

user.logNormal(); // Outputs: "Alex" (this refers to user object)
user.logArrow();  // Outputs: undefined (this refers to global/window scope)


function test() {
    console.log(this); // In a regular function, 'this' refers to the global object (window in browsers)
}

function testArrow() {
    const arrowFunc = () => {
        console.log(this); // In an arrow function, 'this' refers to the surrounding lexical context, which is the global object in this case
    };
    arrowFunc(); // Outputs: undefined (this refers to global/window scope)
}


////////////////

function test() {
    console.log(arguments); // 'arguments' is available in a regular function, it will log the arguments passed to the function
}
test("Hello", "World"); // Outputs: ["Hello", "World"]

const test = () => {
    console.log(arguments); // 'arguments' is not available in an arrow function, it will throw a ReferenceError
}
test("Hello", "World"); // Throws ReferenceError: arguments is not defined

const test = (...args) => { 
    console.log(args); // Using rest parameters to capture arguments in an arrow function
    const [arg1, arg2] = args; // 'arguments' is not defined in arrow functions, but we can use rest parameters to achieve similar functionality
    console.log(arg1, arg2); // Outputs: "Hello" "World"
}
test("Hello", "World"); 