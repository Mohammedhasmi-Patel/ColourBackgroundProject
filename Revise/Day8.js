/* we will learn about string */
const name = "MohammedHasmi";
const repoCount = 50;
// console.log("My Name Is " + name);
/* This Syatax is more readable
which is called string interpolation 
*/
// console.log(`My Name Is ${name} and Repocount is ${repoCount}`);

const gameName = new String("Pubg Most Great");
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf("P"));

// const newString = gameName.substring(0, 3);
// console.log(newString);

const anotherString = gameName.slice(-10, 4);
// console.log(anotherString);

const newStringOne = "       Hasmi     ";
// console.log(newStringOne.trim());
const Brand = "Toyota_Great";
// console.log(Brand.split("_"));

/************************************************* String methods  ***************/

let myName = "MohammedHasmiPatel";
/*  length is return total no of character includes spaces also */
console.log(myName.length);

/* if we are doing only slice then whole string will be printed 
  if we are give starts and end points then end point will be not includes 
  that is we will got strings from index 0 to last-1

  also after applying slice method original string will not affected anyway 

*/
const newString = myName.slice(-7, -5);
console.log(newString);

console.log(myName);
