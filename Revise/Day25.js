const myNumbers = [1, 2, 3, 4, 5];
const newNumber = myNumbers;
/* we will use .map for different operation on array */
//   .map((value) => value * 10)
//   .map((value) => value + 1)
//   .filter((num) => num >= 35);
// console.log(newNumber);

/* const resultValue = myNumbers.reduce(function (accumilinator, current) {
  console.log(
    `Value of acumilitor is ${accumilinator} and current value is ${current}`
  );
  return accumilinator + current;
}, 5);

const result = myNumbers.reduce(
  (accumilinator, current) => accumilinator + current,
  0
);

console.log(`resultValye is ${resultValue}`);
console.log(`result is ${result}`);
*/

const shoppingCart = [
  {
    itemName: "Javascript",
    price: 999,
  },
  {
    itemName: "Python",
    price: 2999,
  },
  {
    itemName: "DATA Sc",
    price: 10000,
  },
];

const value = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(value);
