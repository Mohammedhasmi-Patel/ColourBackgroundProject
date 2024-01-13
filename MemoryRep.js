let num1, num2, num3;

/* Stack Memory And Heap Memory 

1) stack memory used for premitive data types (copy value )
2) heap Memory use for reference data types




*/

let myName = "MohammedHasmi";
let anotherName = myName;
// console.log(anotherName);
anotherName = "Aaisha";

console.log(myName);
console.log(anotherName);

/* Here user is called object */
let userOne = {
  email: "Hasmipatel06@gmail.com",
  upi: "userYpl",
};

let userTwo = userOne;

userTwo.email = "Hh@gmail.com";
console.log(userOne.email);
