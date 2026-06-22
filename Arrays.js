let a = [
    13,
    42, 
    3, 
    14, 
    5
];
const b = a.toSorted((a, b) => a - b); // original array is not changed. This will sort the array in ascending order, 
const c = a.sort((a, b) => a - b); // original array is changed. This will sort the array in ascending order, 
// but it changes the original array.
console.log(a);// Output: [13, 42, 3, 14, 5]
console.log(b);// Output: [3, 5, 13, 14, 42]
console.log(c);// Output: [3, 5, 13, 14, 42]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newFruits1 = fruits.map(x => ({name: x, length: x.length, price:25})); // This will return a new array with the elements transformed by the function,
console.log(newFruits1); // Output: [{name: "Banana", length: 6, price: 25}, {name: "Orange", length: 6, price: 25}, {name: "Apple", length: 5, price: 25}, {name: "Mango", length: 5, price: 25}]  

const  numbers = [3, 1, 4, 1, 5, 9];

const newNumbers1 = numbers.flatMap(x => [x, x * 2]); // This will return a new array with the elements transformed by the function,
console.log(newNumbers1); // Output: [3, 6, 1, 2, 4, 8, 1, 2, 5, 10, 9, 18]

const newNumbers2 = numbers.filter(x => x > 3); // This will return a new array with the elements that satisfy the condition,
console.log(newNumbers2); // Output: [4, 5, 9]

const newNumbers3 = numbers.reduce((acc, curr) => acc + curr, 0); // This will return a single value that is the result of applying the function to the elements of the array,
console.log(newNumbers3); // Output: 23

const newNumbers4 = numbers.reduceRight((acc, curr) => acc + curr, 0); // This will return a single value that is the result of applying the function to the elements of the array from right to left,
console.log(newNumbers4); // Output: 23

const newNumbers5 = numbers.some(x => x > 3); // This will return true if at least one element in the array satisfies the condition, otherwise it will return false.
console.log(newNumbers5); // Output: true


const newArray = fruits.with(2, "Grapes"); // safe way to replace an element in an array without changing the original array.
// This will return a new array with the element at index 2 replaced with "Grapes",
console.log(newArray); // Output: ["Banana", "Orange", "Grapes", "Mango"] 

const combinedArray = [...fruits, ...numbers]; // This will combine the two arrays into a new array,
console.log(combinedArray); // Output: ["Banana", "Orange", "Apple", "Mango", 3, 1, 4, 1, 5, 9]