//Data types in JS
// 1.Number
let price = 9;
let quantity = 3;
let total = price * quantity;
console.log(total);

// 2.String
let message = "Hello, world!";
console.log(message)

//3. Boolean
let isLogged = true;
let isAdmin = false;
console.log(isLogged); // Output: true
console.log(isAdmin); // Output: false

// 4. Null and Undefinded
let nullValue = null;
let undefinedValue;
console.log(nullValue); // Output: null
console.log(undefinedValue); // Output: undefined

// 5. Object
let person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  console.log(person.name); // Output: John
  console.log(person.age); // Output: 30
  console.log(person.city); // Output: New York

// 6. Array
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange  

// 7. Symbol
const key = Symbol();
let obj = {
  [key]: "value"
};
console.log(obj[key]); // Output: value

// 8. Big Int
let largeNumber = BigInt("9007199254740991");
console.log(largeNumber); // Output: 9007199254740991n