/*  this video is  all about date and time in javascript as well  */

let myDate = new Date();
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);
// let myCreateDate = new Date(2023, 12, 2002);
// console.log(myCreateDate.getTime());
// let myTimeStemp = Date.now();
// console.log(myTimeStemp);

//  console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
newDate.toLocaleString("default", {
  weekday: "short",
  // year: 2002,
});

/********************* Array  ******************/

// const cars = ["Nano", "Mercedes", "Toyota", "Thar"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);

//////////******* Method */

const Array = [1, 2, 3, 4, 5];
// console.log(Array);
Array.push(12);
// console.log(Array);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join;
// console.log(typeof fruits);
// console.log(typeof text);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
