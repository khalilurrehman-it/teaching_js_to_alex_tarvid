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

// colors.forEach(function (color) {
//   console.log(color);
// });

// let fruits = ["Apple", "Banana", "Grapes", "Orange", "Kiwi"];
// fruits.shift();
// console.log(fruits);

// printing each element of the array using for loop

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Print the last element of the array using .length.
// let fruits = ["Apple", "Banana", "Grapes", "Orange", "Kiwi", "Mango"];

// console.log(fruits.length - 1);
// console.log(fruits[fruits.length - 1]);

// let num = [2, 4, 5, 7];
// let double = num.map(function (num) {
//   return num * 3;
// });
// console.log(double);

// let words = ["apple", "banana", "grape", "kiwi", "watermelon"];
// let characters = words.filter((words) => words.length > 5);
// console.log(characters);

// let scores = [80, 92, 75, 68, 99, 55];
// let result = scores.filter((scores) => scores >= 75);
// console.log(result);

// let scores = [80, 92, 75, 68, 99, 55];
// let result = scores.filter((scores) => scores >= 75);
// let pass = result.map((result) => result + " Passed!");
// for (let i = 0; i < pass.length; i++) console.log(pass[i]);

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  if (secondLargest === -Infinity) {
    return "No second largest number";
  }

  return secondLargest;
}

// console.log(findSecondLargest([10, 20, 5, 8])); // ➝ 10
// console.log(findSecondLargest([5, 5, 5])); // ➝ No second largest number
// console.log(findSecondLargest([100, 200, 150])); // ➝ 150

// function uniqueValues(array) {
//   let unique = [];

//   for (let i = 0; i < array.length; i++) {
//     if (!unique.includes(array[i])) {
//       unique.push(array[i]);
//     }
//   }

//   return unique;
// }
// console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // ➝ [1, 2, 3, 4, 5]
// // console.log(uniqueValues(['apple', 'banana', 'apple', 'orange'])); // ➝ ['apple', 'banana', 'orange']

// nested arrays

// const classroom = [
//     ["John", "Mary", "David"],
//     ["Alice", "Bob"],
//     ["Tom", "Jerry", "Mike"],
//     ["Sarah", "Kate"]
// ];

// console.log(classroom[2][3]);
