/*  Comparison of datatypes in javascript  */

/*
 in javascript is compare value not datatype with but 
if we have to compare strict comparison like number and number or 
string to string like that at that time we have to use "===" so that 
it will compare strictly as well   
*/
//console.log(2 == "2");

//console.log("2" > 1);

// console.log(null > 0);
// console.log(null == 0);
/* here is whenver we are writing null>=0 at that time 
null will be converted automatically zero thats why it 
will give you result true 

*/
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);
/* === check values with datatype also  */

//console.log(2 == "2"); // here is ans true because js think both value is same
//console.log(2 === "2"); // here value is false because check string also

/*********************      datatype of javascript            ******************************************/

/*

primitive datatype : String ,Number,Boolean,null,undefined ,Symbol,BigInt 

Reference data type : Array call by refernce 
                    : Objects ,Functions 



*/
/* here we dont define which type of value we store in score 
we have just return const and assign the value so simply we will say that 
javascript is dynamically language as we wil; not specify the ty[pe of value 
which will we store in any variable

*/
// const score = 33;
// const isLoggedIn = true;
// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId);
// const bigNumber = 23456765431n;
// console.log(bigNumber);

const Heroes = ["Shaktiman", "Thor", "Superman"];
let myObj = {
  name: "Hasmi",
  age: 10,
};

/* Here Is how we create a function in javascript */
const myFunction = function () {
  console.log("Looking Like A wow");
};
console.log(typeof typeof 1);
