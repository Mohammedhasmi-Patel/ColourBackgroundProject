/* WE will understand about for of loop as well as for each loop also */

// const arr = [1, 2, 3, 4, 5];

// for (const val of arr) {
// console.log(val);
//}

// const greetings = "Hello World";
// for (const val of greetings) {
//   if (val == " ") continue;
//   console.log(val);
// }

// const map = new Map();

// map.set("IN", "India");
// map.set("FR", "France");
// map.set("JP", "Japan");
// console.log(map);

//for (const [key, val] of map) {
//   console.log(val, ":-", val);
// }

// const gameNames = {
//   game1: "SuperMario",
//   game2: "WWE",
// };

// let i = 0;
/*  object is not iterable okay  */
// for (const val in gameNames) {
//   console.log(`Game Name is ${val} for ${gameNames[val]}`);
// }

/* for in loop always return key value where for of loop return value as well */

const myArray = ["Javascript", "html", "css", "ruby"];
// myArray.forEach(function (val) {
//   console.log(val);
// });

// myArray.forEach((item, index, myArray) => {
//   console.log(item, index, myArray);
// });

const myCoding = [
  {
    language: "javascript",
    languageFileName: "js",
  },
  {
    language: "Python",
    languageFileName: ".py",
  },
];

myCoding.forEach((item) => {
  console.log(item.language);
});
