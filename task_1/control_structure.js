// 1.Conditional Statement
// if, else if, else
let num = 0;
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  default:
    console.log("Today is neither Monday nor Tuesday.");
}

// 2.Looping statement
// for statement
for (let i = 0; i < 5; i++) {
    console.log("For loop:",i);
  }

  // while statement
  let i = 0;
while (i < 5) {
  console.log("While loop:", i);
  i++;
}

// for...in statement
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log("For In:", key + ": " + person[key]);
}

// for...of statement
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("For Of", color);
}

// 3. Jump Statements
// break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }
    console.log("Break statement:", i);
  }

  // continue statement
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log("Continue statement:",i);
  }

  // return statement
  function multiply(a, b) {
    return a * b;
  }
  let result = multiply(3, 4);
  console.log("Return statement:", result);  // Output: 12


