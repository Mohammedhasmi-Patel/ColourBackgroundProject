const score = 8;
/* Here we will define number by our self */
const balance = new Number(100);
/* console.log(balance);  */

/* to string is use to convert number into string */
// console.log(balance.toString());
/* to fixed used most of in e commerce application */
//console.log(balance.toFixed());

const otherNumber = 23.765;
/* WE Need to precise number like if i will pass here 2 then it is convert into
   round off  automatically and give ans 24.


   now if i will pass the number like 123.87 then if my precsense value is  3 then my answer is
   124 because it is round off from 3 digits and give proper answer for that
*/
/* console.log(otherNumber.toPrecision(2));   */

const hundreds = 1000000;
/* whenver we have lots of zeroes in our number at that time we will use
tolocslString('in-EN) so that we will got our number in indian like   */
// console.log(hundreds.toLocaleString("en-IN"));

//********************** Mathematics in js */

/* Absolute is used to convert nagative value into positive */
console.log(Math);
console.log(Math.abs(-100));
/*   round is used to delete decimsl after the number like 4.3 convert into 4       */
console.log(Math.round(4.3));

/* Math.floor is used to get minnimum value from 4.9 which is equal to 4 */

console.log(Math.min(3, 4, 5, 1));

/* We will use math.random every time chnage the value and 
we will use dice game using dice game 
 
*/

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
