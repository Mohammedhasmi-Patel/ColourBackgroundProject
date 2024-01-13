const coding = ["javascript", "RUBY", "Python", "html"];
const values = coding.forEach((item) => {
  console.log(item);
});

// console.log(values);

/* forEach loop never return value it is always return unfefined 
so whenever we need any value in return st thar time we ill use filter 
so that it will give you return vvalue as well */

/* const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4);
console.log(newNums);
const newNum = myNums.filter((num) => {
  num > 4;
});
*/

// console.log(newNum);
/* here print the vslue is [] empty array because whenver we use scope at that it is 
compulsory to use return keyword otherwise it will not return snything */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNums.forEach((item) => {
  if (item > 4) {
    myNums.push(item);
  }
});
// console.log(myNums);

const books = [
  {
    title: "Book One",
    genre: "Science",
    publish: 1999,
  },
  {
    title: "Book Two",
    genre: "Social science ",
    publish: 2015,
  },
  {
    title: "Book Three",
    genre: "English",
    publish: 1992,
  },
  {
    title: "Book Four",
    genre: "Atomic Habit ",
    publish: 2007,
  },
];
// const Values = books.filter(
//   (item) => item.genre === "Science" || item.publish === 2015
// );
// console.log(Values);

/* now user tell us they need those book which is publish after 2000  */

const userDemand = books.filter((item) => item.publish > 2000);
// console.log(userDemand);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasmi = myNumbers.map((item) => item + 10);
// console.log(hasmi);

// chaining

const newNums = myNumbers
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item % 3 === 0);
console.log(newNums);
