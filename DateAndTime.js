let myDate = new Date();

/* Remember that month start in  javascript always start with zero 
 whenevr we are write our date in yy-mm-dd format at that time our month start with 1
 
*/
let myCreatedDate = new Date(2023, 0, 23);

console.log(myCreatedDate.toDateString());

/* toISOString as well as tojson also give same output  which is give not redable output 
   toDateString give good result something like thursday November 09(date) and year also
   toTimeString also not give too much readable output also

   .toLocaleDateString is give complete output like we will write out date 

*/

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString("default", {
  month: now,
});
