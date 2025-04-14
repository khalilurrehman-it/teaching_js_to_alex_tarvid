// const fruits = ["Apple", 25, ["Grapes", "Orange", "Kiwi", "Mango"]];
// console.log(fruits[1]);
// []

// const fruits = {
//   name: "Apple",
//   quantity: 25,
// };

// name and quantiy are keys
// apple and 25 are values of that keys
// { key: value }

// const person = {
//   name: "Alex",
//   age: 35,
//   hasCar: true,
// };

// const house = {
//   address: "123 Main St",
//   city: "New York",
//   state: "NY",
// };

// const car = new Object();
// car.brand = "Toyota";
// car.year = 2022;

// const person = {
//   name: "Alex",
//   age: 35,
//   hasCar: true,
// };

// dot notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.hasCar);

// Bracket Notation
// console.log(person["name"]);

// const movie = {
//     name: "The Dark Knight",
//     "release year" : 2008,
// }

// console.log(movie.name);
// console.log(movie["release year"]);

// const person = {
//     name: "David",
// }

// person.age = 30;
// person.city = "New York";
// person.hasGraduated = true;

// person.name = "John";

// console.log(person);

// const person = {
//   name: "David",
//   age: 30,
//   city: "New York",
// };

// delete person.city;

// console.log(person);

// const person = {
//   name: "David",
//   age: 30,
//   city: "New York",
// };

// for in loop

// for (let key in person) {
// //   console.log(key, person[key]);
//   console.log(person[key]);
// }

// const grades = {
//   grade1: 80,
//   grade2: 90,
//   grade3: 70,
//   "grade 4": 85,
// };

// console.log(grades.grade1);

// for (let key in grades) {
//   console.log(grades[key]);
// }

// const user = {
//   name: "Sara",
//   greet: function () {
//     console.log("Hi, my name is " + this.name);
//   },
// };

// user.greet(); // Output: Hi, my name is Sara

// const remote = {
//   brand: "Sony",
//   isOn: false,
//   pressPower: function () {
//     this.isOn = !this.isOn;
//     console.log("TV is now " + (this.isOn ? "ON" : "OFF"));
//   },
// };

// remote.pressPower(); // TV is now ON
// remote.pressPower(); // TV is now OFF

const dog = {
  name: "Bruno",
  speak: function () {
    console.log(this.name + " says woof!");
  },
};

dog.speak(); // Bruno says woof!
