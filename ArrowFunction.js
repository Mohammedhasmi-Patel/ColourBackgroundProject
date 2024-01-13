/* this keyword referse to current content here my current content is 
    Hasmi but in future my user Change at that time we will not welcome Hasmi
    so that time we will simply say welcome this.username so it is refrese tu current
    user thats it.


    in browser global object is window   
*/
const user = {
  userName: "Hasmi",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome To Our Website `);
    console.log(this);
  },
};

// initially this variable is pointing to null
function chai() {
  let userName = "Hasmi";
  console.log(this.userName);
}
// chai();

/* 
    this is our normal function that function(){} but if we are transform 
    into arrow function at that time we will remove function nme and join this arrow
*/
const addTwo = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwo(3, 4));

/* There is one more concept about implicit return where our function understand
   automatically what we need to return here is the example of implicit return as well
*/

const heavyMaths = (num1, num2, num3) => num1 + num2 + num3;
// console.log(heavyMaths(100, 200, 300));

const st = () => ({
  Name: "Hasmi",
  Age: 18,
});

console.log(st());

/* So we know one thing for sure whenver we need to return object 
  at that time we will use curly brackers which it not possible to return 
  in implicit dunction so simmply we will add round bracket so that we will easyli 
  get our object value as well 

*/
