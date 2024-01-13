/* if statement 
we will use some operatoes to check the condition that is

<(less than),>(greater than),<= (less than or equal to),>=(Gretaer Than Or Eqaul to)
== (check both values are equal or not ),===(Implicit check)

*/

const isUsserLoggedIn = true;
if (2 === "2") {
  console.log(" User Logged in ");
}

const score = 200;
if (score > 100) {
  const power = "fly";
  // console.log(power);
}

const balance = 1000;
/* Very Bad code No one can write like this */
// if (balance > 500) console.log("Thousand"), console.log("Vali Gatha");

/* Suppose we have made one account at one website */

const userLoggeIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggeIn && debitCard && 0 == 1) {
  console.log("Allow To Buy My Course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("Okay No Problem Welcome");
}
