// Function declaration

// function greet() {
//   console.log("Hello, world!");
// }

// greet();
// greet();
// greet();
// greet();
// greet();

// const functionName = function() {
//     // Code to be executed
// };

// const greet = function () {
//   // Code to be executed
//   console.log("Hello, world!");
// };

// greet();

// parameter
// function greet(name , age) {
//   console.log("Hello", name);
//   console.log("My age is " , age);
// }

//argument
// greet("Alex" , 40);
// greet(40, "Alex");

// Difference the between arguments and parameters
// arguments --> greet("Alex");
// parameters --> function greet(name)

// Addition function example

// function addition(a, b) {
//   return a + b;
// }

// let result = addition(2, 3);
// console.log(result);

// console.log(addition(2, 3));

// let greet = (name) => {
//   console.log("Hello", name);
// };

// greet("Khalil");

// IIFE --> Immediately invoked function expression
(function greet(name, age) {
  console.log("Hello ", name);
  console.log("My age is  ", age);
})("Khalil", 22);
