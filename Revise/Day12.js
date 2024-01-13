/* we will learn everything avout objects  */

/* This is object */
const mySym = Symbol("key1");

const jsUser = {
  [mySym]: "Mykey1",
  name: "MohammedHasmi",
  Profession: "Software Engineer",
  Education: "Master Of Computer Application",
  isLoggedIn: "False",
};

// console.log(jsUser.Education);
// console.log(jsUser["Education"]);
// console.log(jsUser.Symbol);
// console.log(jsUser[mySym]);

/* we will access any value from objects by using . operator as well */
/* also we will acess any variable using [] as well */
// Object.freeze(jsUser);
jsUser.name = "Champion Coder";
// console.log(jsUser.name);

jsUser.Profession = "BCA";
// console.log(jsUser.Profession);
// console.log(jsUser);

jsUser.greeting = function () {
  console.log(`Hello Champions ${this.Education}`);
};
console.log(jsUser.greeting());
