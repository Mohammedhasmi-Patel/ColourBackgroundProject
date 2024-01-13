const myObject = {
  js: "Javascript",
  cpp: "c++",
  rb: "Ruby",
  swift: "Swift by apple",
};

for (const key in myObject) {
  console.log(`Short cut for ${key} value is ${myObject[key]}`);
}

/* can for loop we wil use in  array lets see
for in looop return keys vlue that is whenever we use for in loop in array
so that it will give index

for of loop return the value direct but whenever we are talking about for in loop
at that time it will return key value 








*/
let arr = ["Taiyab", "Noorjaha", "Hasmi", "Aaisha"];
for (const key in arr) {
  console.log(arr[key]);
}
