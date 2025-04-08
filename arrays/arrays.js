// const person1 = "John";
// const person2 = "Mary";
// const person3 = "David";

// const people = ["John", "Mary", "David"];
// console.log(people[1]);

// let fruits = new Array("apple", "banana", "orange");
// console.log(fruits[1]);

// let fruits = ["apple", "banana", "orange", "mango"];
// fruits[0] = "grape";
// // console.log(fruits);

// fruits[2] = "mango";
// console.log(fruits);

// find the length of the array
// console.log(fruits.length);

// let fruits = ["apple", "banana", "orange", "mango"];
// add an element to the end of the array
// console.log(fruits.length);
// fruits.push("grape");
// console.log(fruits);
// console.log(fruits.length);
// remove the last element from the array
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// let fruits = ["apple", "banana", "orange", "mango"];
// // add an element to the beginning of the array
// fruits.unshift("grape");
// console.log(fruits);

// map method

// let numbers = [1, 2, 3, 4, 5];

// let numbersDoubled = numbers.map(function (num) {
//   console.log(num);
//   return num * 2;
// });

// console.log(numbersDoubled);

// // loop for the array

// filter method
// let ages = [23, 30, 15, 45, 10, 90, 20];
// let agesGreaterThan20 = ages.filter(function (age) {
//   return age >= 20;
// });

// console.log(agesGreaterThan20);

// reduce method
// let prices = [80, 100, 120, 150];

// let reducedPrices = prices.reduce(function (total, currentValue) {
//   console.log("Total : ", total);
//   console.log("Current Value : ", currentValue);
//   return total + currentValue;
// });

// console.log("The final sum of all the pricess is ", reducedPrices);

// for loop in array

// let colors = ["red", "green", "blue", "yellow", "purple", "orange"];

// for (let i = 0; i < colors.length; i++) {
//   console.log("element at index ", i, "=", colors[i]);
// }

colors.forEach(function (color) {
  console.log(color);
});
