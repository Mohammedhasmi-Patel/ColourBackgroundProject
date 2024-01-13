// const name = "Hasmi";
// const repoCount = 50;

// console.log(name + repoCount + "value");

// let length = foodName.length;
// console.log(length);
// console.log(foodName.toLocaleLowerCase());

// string method

// last value not include okay
// const newString = foodName.substring(0, 3);
// console.log("Newstring Is " + newString);

/* Slice is most important method for us */

// for (let i = 1; i <= 5; i++) {
//   console.log(i + " ");
// }

//**************************************** String Method *****************************//

/* toLowerCase : It is convert all the caracter in lower case
   toUpperCase : it is convert all character in upper case 
   includes(a) it is use to find any word in string if present then give ans true otherwise false
   startsWith : it is check our start group of character which is same then return true otherwise
   return false;

   endsWith: it is totally revrese function for startsWith that is endWith say that our 
   last character is end is same if same then return true otherwise false

    search: Search function is same as includes butit is not return the value in
    boolean it is return the value in index if tha match word not found then it is return -1

    replace:it is replace a particular word in string such that we have pass two parameter 
    first one is which actually present in string another one which is new word 


*/

let str = "Mo HasmiM";
// let a = str.length;
//console.log(str.toLowerCase());
//console.log(str.toUpperCase());
let a = str.replace("Mo", "Patel");
console.log(a);
