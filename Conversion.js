/*  but why we need to find which type of variable is this so
 whenver we are doing our work in backend at that time we dont know which 
 type of value is this so solve this problem we will use type conversion 

*/

let score = undefined;
console.log("Score type is ", typeof score);

let valueInNumber = Number(score);

/* Here the we will convert score into number which is "NaN" which is stand for "Not a Number" */
console.log(valueInNumber);

/* => Whenver we will convert null into number at that time value will be 0 
   but this is problem whenver we will find temparature at that time 0 
   is also temprature 

   => Whenver we will convert undefined into number then dafinatley we will got 
   NaN that is Not a Number 

   => also string that is our name also convert into Not a Number

   => true is convert into 1
   => False is convert into 0


*/
let isLoggedIn = "Hasmi";
let bool = Boolean(isLoggedIn);
console.log("boolean is ", bool);
