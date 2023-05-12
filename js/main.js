"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector('#js-output');
output.innerHTML = WELCOME_MESSAGE;


// const user = {
//   user: "Marcin",
//   score: 0
// };
//
// const addPoints = (user, value) => {
//   const userCopy = {...user};
//   userCopy.score = value;
//   return userCopy;
// }
//
// console.log(addPoints(user, 5));
// console.log(user);



// .map

// const planets = ["Ziemia", "Mars", "Wenus", "Jowisz"];
//
// const planetsWithNumbers = planets.map((planet, index) => `${index + 1}: ${planet}`);
// console.log(planetsWithNumbers);
// console.log(planets);


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
//
// const newArr = students.map(({ name, score }) => `${name} - ${score}`);
//
// console.log(newArr);




// .flatMap

// const students = [
//   { name: "Mango", courses: ["matematyka", "fizyka"] },
//   { name: "Poly", courses: ["informatyka", "matematyka"] },
//   { name: "Kiwi", courses: ["fizyka", "biologia"] },
// ];
//
// const byMap = students.map(student => student.courses);
// console.log(byMap);
// const byFlatMap = students.flatMap(student => student.courses);
// console.log(byFlatMap);


// .filter

// const values = [51, -3, 27, 21, -68, 42, -37];
//
// const myResult = values.filter(value => value % 2 === 0);
// console.log(myResult);

// const students = [
//   { name: "Mango", courses: ["matematyka", "fizyka"] },
//   { name: "Poly", courses: ["informatyka", "matematyka"] },
//   { name: "Kiwi", courses: ["fizyka", "biologia"] },
// ];

// const byFlatMap = students.flatMap(student => student.courses);
//
// const unique = byFlatMap.filter((course, index, array) => array.indexOf(course) === index)
//
// console.log(unique);


// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
//
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
//
// const best = students.filter(student => student.score >= HIGH_SCORE);
//
// console.log(best);

// .find

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
//
// const red = colorPickerOptions.find(color => color.label === "red");
// const gold = colorPickerOptions.find(color => color.label === "gold");
//
// console.log(red);
// console.log(gold);



// .findIndex

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
//
// const red = colorPickerOptions.findIndex(color => color.label === "red");
// console.log(red);


// .every

// const positive = [1, 2, 3, 4, 5].every(value => value >= 0);
// console.log(positive);
//
// const second = [1, -2, 3, 4, 5].every(value => value >= 0);
// console.log(second);

// .some

// const positive = [-1, -2, 3, -4, -5].some(value => value >= 0);
// console.log(positive);

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];
//
// const allAvailable = fruits.every(fruit => fruit.amount > 0);
// console.log(allAvailable);
//
// const anyAvailable = fruits.some(fruits => fruits.amount > 0);
// console.log(anyAvailable);


// .reduce


// tablica.reduce((previousValue, element, index, array) => {
//   // Ciało funkcji wywołania zwrotnego
// }, initialValue);

// const numbers = [2, 2, 6];
//
// const sum = numbers.reduce((sum, number) => {
//   return sum + number;
// }, 0);
//
// console.log(sum);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
//
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
//
// const avarange = totalScore / students.length;
//
// console.log(avarange);

// .sort


// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores);


// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores);

// const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];
// students.sort();
// console.log(students);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();
// console.log(scores);
// console.log(ascendingScores);

// tablica.sort((a, b) => {
//   // Ciało funkcji wywołania zwrotnego
// });

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores);

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores);


// const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];

// const alpha = [...students].sort((a, b) => a.localeCompare(b));
// console.log(alpha);

// const reversed = [...students].sort((a, b) => b.localeCompare(a));
// console.log(reversed);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];
//
// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
//
// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
//
// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
//
// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);














