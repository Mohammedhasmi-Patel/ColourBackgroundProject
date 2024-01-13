/* its all about controlflow */

// const isUserLoggedIn = true;
// const temperature = 41;
// if (temperature > 35) {
//   console.log("I am in inside of if");
// }
// console.log("Okay I am last point");
/* less than (<) ,greater than (>) ,greater than or equal to (>=) ,less than or equal to(<=)*/

/* if we have to check two values are equal then we will write like this 
  if we will use === then it will check both values with its data type as well 

*/

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`UserPower is ${power}`);
// }

const balance = 500;

// if (balance > 1000) {
//   console.log("Value is less than 1000");
// } else if (balance > 750) {
//   console.log("Balance is less than 750");
// } else if (balance == 500) {
//   console.log("Value is 500");
// } else {
//   console.log("Thank You for Respons");
// }

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = true;
// const loggedInFromEmail = true;

// if (userLoggedIn === true && debitCard === true) {
//   console.log("Allow to buy course");
// } else if (loggedInFromEmail || loggedInFromGoogle) {
//   console.log("Okay verified no worry");
// }

switch (5) {
  case 1:
    console.log("I am in case 1");
    break;
  case 2:
    console.log("I am in case 2");
    break;
  case 3:
    console.log("I am in case 3");
    break;
  default:
    console.log("Invalid Value");
}
