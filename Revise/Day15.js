function sayMyName() {
  console.log("RM AGHOLA");
}

function addTwoNumbers(num1, num2) {
  return num1 + num2;
  console.log("Hitesh/hshshdhdddh");
}

const result = addTwoNumbers(8, 12);
// console.log(typeof result);
// console.log("Result Is " + result);

function withoutReturn() {
  console.log("i am a function which is return nothing");
}
// let result1 = withoutReturn();
/* here we got the answer is undefined because our function doesnt return anything as well */
// console.log(result1);

// function loginUserMessage(userName = "Champion Coder") {
//   if (userName) {
//     return `${userName} thanks for logged in`;
//   } else {
//     console.log("Enter Valid Name ");
//   }
// }
// const okay = loginUserMessage("Patel Hasmi");
// console.log(okay);
// const b = loginUserMessage();
// console.log(b);

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(122, 233, 765, 123, 75546, 12211));

const user = {
  userName: "MohammedHasmi",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `UserName Is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

handleObject(user);

const myNewArr = [200, 123, 100, 600];

function returnSecond(arr) {
  console.log(arr[1]);
}

returnSecond(myNewArr);



