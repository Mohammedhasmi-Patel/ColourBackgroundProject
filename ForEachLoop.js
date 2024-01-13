const coding = ["js", "ruby", "java", "python", "cpp", "Mojo"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item) => {});

const myCoding = [
  {
    languageName: "Javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "c++",
    languageFile: "cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
