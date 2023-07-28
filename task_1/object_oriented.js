// Define a class using constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the class
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
  
  // Create objects using the class
  var person1 = new Person("Alice", 25);
  var person2 = new Person("Bob", 30);
  
  // Call the method on the objects
  person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.