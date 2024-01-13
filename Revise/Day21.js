/*  false,0,"",0n,null,undefined ,NaN

and any other values are true 

surprise values 
"0",'false',," ",[],{},function(){}


*/

const userEmail = "HH@gmail.com";
// if (userEmail.length === 0) {
//   console.log("Okay Got it email");
// } else {
//   console.log("Not Found any mail");
// }

// const emptyObj = { name: "Hasmi" };
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Empty Object Found");
// } else {
//   console.log("not empty object");
// }

/// ******** Nullish Collish Operator

let val1;
// val1 = 5 ?? 10;

val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 155 ?? 12;
console.log(val1);

// ternary opearator

condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 150
  ? console.log("Not Expensive") //(True )
  : console.log("Okay Fine its price 100"); // (False)

const value1 = 20;
value1 % 2 == 0 ? console.log("Even Number") : console.log("Odd Number");
const myObj = {};

if (Object.keys(myObj).length === 0) {
  console.log("Obbject Is Empty");
} else {
  console.log("Object Is Not Empty");
}
