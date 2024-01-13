const top = [1, 2, 3];

// const myTotal = top.reduce(function (acc, curr) {
//   console.log(`Value Of acc is ${acc},curre is ${curr}`);
//   return acc + curr;
// });

const shoppingCart = [
  {
    itemName: "js Course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "Mobile Development Course",
    price: 5999,
  },
  {
    itemName: " Data Science Full Stack Course",
    price: 12999,
  },
];

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(PriceToPay);
