// conversion and operations

let score = "8";
/*  we are easyli convert string into numbers but whenver we are 
talking about some string that is 

12abc then definately it is convert into number but wehnever we print 
that value then we will got NaN that is "Not a Number"


*/
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

/* 

 whenever we are convrting null into number then it is
 converted into 0


*/
let random = null;
let convertInt = Number(null);
// console.log(convertInt);
/*      whenver we are using conversion then undfined convert into 
        number but whenevr we are print that value at that time 
        we will find Not a Number  
*/
let Und = undefined;
let a = Number(Und);
// console.log(a);

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
