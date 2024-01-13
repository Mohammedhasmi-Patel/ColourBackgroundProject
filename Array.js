/*
   in javascript we will resize the array as well
   also will insert int float string value in single array as well 
   shallow copy means same refrence 
*/

const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);

// console.log(myArr[0]);

const myHeroes = ["Mohammed", "RmAgola", "Topper"];
// console.log(myHeroes);

/************************ Array Method ************************ */
/* unshift is used to insert value at 0th index 
   whenever we opeertae shift operator at  that time first element 
   of array will be removed 



   there is one more methods which is used to checj wheteher our
   element present in the array or not


   whenver we are operating join operation in array at that time
   we will convert our array into string 



   important method slice and splice 
   Whenver we are using slice at that time we will got value from and our original 
   array will not change as well

   whenever we are using splice at that time we will got our all 
   splice value but also delete that value into original array as well 

*/
/* myHeroes.unshift(120);
myHeroes.push(100);
myHeroes.pop();
console.log(myHeroes.includes(121));
let myArrNew = myHeroes.join();
console.log(typeof myArrNew);

*/

let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0, 3);
// console.log(newArr);
// console.log("Slice Original", arr);

let newArr1 = arr.splice(0, 3);
console.log(newArr1);
console.log("Splice Original", arr);
