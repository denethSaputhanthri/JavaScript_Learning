let A = "Hello World,whr are you..!";
const B = A.toString(); 
var a = ["Denem", "Deneme2", "Deneme3"];
a.splice(0,1 , B); // This will replace the first element of the array with the value of B, 
// which is "Hello World,whr are you..!".
console.log(a);
a.push("Deneme4"); // This will add "Deneme4" to the end of the array.
console.log(a);
a.unshift("Deneme0"); // This will add "Deneme0" to the beginning of the array.
console.log(a);
a.pop(); // This will remove the last element of the array, which is "Deneme4".
console.log(a);
a.shift(); // This will remove the first element of the array, which is "Deneme0".
console.log(a); 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const vegetables = ["Carrot", "Potato", "Tomato"];
const all = fruits.concat(vegetables); // This will concatenate the two arrays and return a new array.
console.log(all); // Output: ["Banana", "Orange", "Apple", "Mango", "Carrot", "Potato", "Tomato"]
fruits.slice(0, 2); // This will remove the first two elements of the fruits array, which are "Banana" and "Orange".
console.log(fruits); // Output: ["Apple", "Mango"]
vegetables.slice(1);//
console.log(vegetables); // Output: ["Carrot", "Tomato"]
fruits.splice(0, 1); // This will remove the first element of the fruits array, which is "Apple".
console.log(fruits); // Output: ["Mango"]
vegetables.splice(1); // This will remove the second element of the vegetables array, which is "Tomato".  
console.log(vegetables); // Output: ["Carrot"]


const a = [[1, 2],[2, 3], [4, 5]];
const b = a.flat(); // This will flatten the array and return a new array.
console.log(b); // Output: [1, 2, 2, 3, 4, 5]

const fruits = ["Banana", "Orange", "Apple", "Mango","orange"];
const index = fruits.indexOf("Orange"); 
// This will return the index of the first occurrence of "Orange" in the fruits array, which is 1.
console.log(index); // Output: 1
const lastIndex = fruits.lastIndexOf("orange"); 
// This will return the index of the last occurrence of "orange" in the fruits array, which is 4.
console.log(lastIndex); // Output: 4
const includes = fruits.includes("Apple"); 
// This will return true if "Apple" is found in the fruits array, otherwise it will return false.
console.log(includes); // Output: true  
const find = fruits.find(fruit => fruit === "Mango"); 
// This will return the first element in the fruits array that satisfies the condition, which is "Mango".
console.log(find); // Output: "Mango"   
const findIndex = fruits.findIndex(fruit => fruit === "Banana"); 
// This will return the index of the first element in the fruits array that satisfies the condition, which is 0.
console.log(findIndex); // Output: 0    
const findLastIndex = fruits.findLastIndex(fruit => fruit === "orange"); 
// This will return the index of the last element in the fruits array that satisfies the condition, which is 4.
console.log(findLastIndex); // Output: 4    

sort and toSorted VS reverse and toReversed


const numbers = [3, 1, 4, 1, 5, 9];
const newNumber1= numbers.sort(); //number array change.
const newNumber2= numbers.toSorted(); // This will return a new array with the elements sorted in ascending order, 
// but it does not change the original array.
console.log(newNumber1); // Output: [1, 1, 3, 4, 5, 9]
console.log(newNumber2); // Output: [1, 1, 3, 4, 5, 9]

const newNumber3= numbers.reverse(); // This will reverse the order of the elements in the original array.
const newNumber4= numbers.toReversed(); // This will return a new array with the elements in reverse order, 
// but it does not change the original array.
console.log(newNumber3); // Output: [9, 5, 4, 3, 1, 1]
console.log(newNumber4); // Output: [1, 1, 3, 4, 5, 9]