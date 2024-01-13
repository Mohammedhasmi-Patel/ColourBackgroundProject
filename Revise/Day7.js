/* stack and heap memory in javascript  */
/* Whenevr we use premitieve data type at that time use stack */

let myYoutubeName = "hiteshChaudhary.com";

let anotherName = myYoutubeName;
//console.log(anotherName);
anotherName = "MohammedHasmi";
// console.log(myYoutubeName);
// console.log(anotherName);
let userOne = {
  email: "user@gmail.com",
  upi: "User@gmail.com",
  userName: "Rmagghola",
};
let userTwo = userOne;
userTwo.upi = "okok@upi.com";
console.log(userOne.upi);
console.log(userTwo.upi);
