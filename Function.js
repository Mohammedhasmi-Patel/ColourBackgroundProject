/* this is a syntax  of function 
 Function Functione_name ()
{

}

*/

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

/* Here the value we will pass is called arguments 
here 3 and 33 is arguement 

*/
const result = addTwoNumbers(3, 33);
// console.log(result);

function loginUserMessage(userName = "Sam") {
  if (userName === undefined) {
    console.log("Please Enter UserName As Soon As Possible");
    return;
  }
  return `${userName} just logged in`;
}

/* If We Will not pass any arguements then it gives us undefined */
let h = loginUserMessage("Vali Tichu");
// console.log(h);

/* Whenver we are make shopping cart at that time we dont know how many times
   user add cart so that time we dont have ant idea abiut how many parameter
   we will pass  so at that time what we will do  
*/

/* Here triple ... is called rest operator */
function calculateCartPrice(val1, ...num1) {
  return num1;
}
/* Here the value of 2 which is assign into val1 and then num1 will store 200 and 500 */

// console.log(calculateCartPrice(2, 200, 500));

const user = {
  userName: "Hitesh",
  price: 199,
};

function handleObjects(anyobject) {
  console.log(
    `username is ${anyobject.userName} and price is ${anyobject.price}`
  );
}

handleObjects(user);

const myNewArray = [200, 400, 100, 600];
function returnSecondValue() {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
