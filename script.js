function greets(name){
console.log("my name is " + name);
}
greets("shadil");


function pari(a,b){
    return a+b;
}
let result= pari(5,2);
console.log(result);


const met = (who) => "hi, did u meet " + who + "yesterday?";
console.log(met("shadil"));

let data= "njan alle";
function happy(solllu){
    happy="ntho";
    console.log(data);
    console.log(happy);
}
happy();



const obj = {
  name: "Shadu",
  greet: function() {
    console.log(this.name);
  }
};

obj.greet(); // Shadu


// 1. Regular function with default parameter
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Shadu"));

// 2. Arrow function with implicit return
const square = n => n * n;
console.log(square(4));

// 3. Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log(add(5, 7));

// 4. Regular function returning a boolean
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(7));

// 5. Callback example
function doTwice(fn, value) {
  fn(value);
  fn(value);
}

const printValue = val => console.log("Value:", val);
doTwice(printValue, 10);

// 6. Closure example
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// 7. Higher-order function example
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));
console.log(triple(5));

// 8. Object with methods
const person = {
  name: "Shadu",
  age: 21,
  greet: function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age}`);
  },
  incrementAge: function() {
    this.age++;
  }
};
person.greet();
person.incrementAge();
person.greet();

// 9. Arrow function inside object (no this binding)
const person2 = {
  name: "Shadu",
  greet: () => console.log("Hi! My name is unknown (arrow function)"),
};
person2.greet();

// 10. Array of numbers
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(n => console.log("forEach:", n));

// map
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// find
const firstEven = numbers.find(n => n % 2 === 0);
console.log("First even:", firstEven);

// some & every
console.log("Some > 3:", numbers.some(n => n > 3));
console.log("Every > 0:", numbers.every(n => n > 0));

// 11. Destructuring
const [a, b, ...rest] = numbers;
console.log("a:", a, "b:", b, "rest:", rest);

const {name, age} = person;
console.log("Name:", name, "Age:", age);

// 12. Spread operator
const moreNumbers = [...numbers, 6, 7, 8];
console.log("More numbers:", moreNumbers);

// 13. Rest operator
function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("Sum all:", sumAll(1, 2, 3, 4, 5));

// 14. Template literals in multi-line string
const info = `Person Info:
Name: ${person.name}
Age: ${person.age}
`;
console.log(info);

// 15. setTimeout & setInterval
setTimeout(() => console.log("This prints after 1 second"), 1000);

let intervalCount = 0;
const intervalId = setInterval(() => {
  console.log("Interval count:", intervalCount);
  intervalCount++;
  if (intervalCount > 2) clearInterval(intervalId);
}, 500);

// 16. Try/Catch
try {
  throw new Error("This is an error!");
} catch (err) {
  console.log("Caught error:", err.message);
}

// 17. Array of objects
const people = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 20},
  {name: "Charlie", age: 30}
];

// filter and map together
const namesOver20 = people.filter(p => p.age > 20).map(p => p.name);
console.log("Names over 20:", namesOver20);

// 18. Nested objects & optional chaining
const company = {
  name: "TechCorp",
  address: {
    city: "Chennai",
    pin: 641103
  }
};
console.log("Company city:", company.address?.city);
console.log("Zip code:", company.address?.zip ?? "No zip provided");

// 19. Function inside function
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}
const addFive = outerFunction(5);
console.log(addFive(10)); // 15

// 20. Combining all concepts in one
const students = [
  {name: "John", scores: [80, 90, 70]},
  {name: "Jane", scores: [90, 95, 100]},
  {name: "Jake", scores: [60, 70, 80]}
];

const averageScores = students.map(student => {
  const total = student.scores.reduce((acc, s) => acc + s, 0);
  const avg = total / student.scores.length;
  return {...student, average: avg};
});

averageScores.forEach(s => console.log(`${s.name} - Average: ${s.average}`));
