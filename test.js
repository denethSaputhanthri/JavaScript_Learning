const numbers = [1, 2, 3, 4, 5];
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
     newNumbers.push(numbers[i] * 10);
}
console.log(newNumbers); // Output: [10, 20, 30, 40, 50]

const add = numbers.map(x=> x*20);
console.log(add); // Output: [20, 40, 60, 80, 100]