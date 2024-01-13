//  We Already know that then we will not go dive deep into this

console.log(2 > 3);
console.log(2 >= 3);
console.log(2 <= 3);
console.log(2 != 3);

console.log("2" > 1);
/* Here is we will got our result true becuase 2 is greater than 1 */

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* Note 
      The reason is that an equality check == and > ,< ,>= all are check diffrently 
      whenver >= at that time javascript convert null value into zero.
*/

console.log(undefined == 0);

// === check value strictly
console.log(2 === "2");

const heroes = ["Shaktiman", "Topper"];
console.log(heroes);

let myFunction = function () {
  console.log("Hello World");
};

console.log(myFunction);
