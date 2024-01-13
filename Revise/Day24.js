const coding = ["html", "css", "javscript", "sql", "react"];
/*forEach value never return anything  */
// const values = coding.forEach((item) => {
//   console.log(item);
// });

// console.log("Value is :", values);

// const language = ["c", "cpp", "java", "python", "django"];
// const myValues = language.forEach((value) => {
//   console.log(value);
// });

// console.log(myValues);

// const myNums = [1, 2, 3, 4];
// const val = myNums.filter((value) => {
//   return value % 2 == 0;
// });
// console.log(val);

const books = [{ titlez: "BookOne", genre: "history" }];

const userBooks = books.filter((val) => val.titlez === "BookOne");
console.log(userBooks);
