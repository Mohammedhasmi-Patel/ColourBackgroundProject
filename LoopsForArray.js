/* For Of Loop :
   for of loop same as for each loop in java 
   here little bit syntax different thats all 






*/
const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  // console.log(val);
}
const greetings = "Hello Duniya";
for (const Value of greetings) {
  // console.log(Value);
}

// maps in javascript it is also known as for unique values
// map is iteratable but object itself we will not iterate

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State Of America");
map.set("Chn", "China");

for (const [key, value] of map) {
  // console.log(key + "->" + value);
}

const myObjects = {
  Game1: "Cricket",
  Game2: "Topper",
};

for (const [key, value] of myObjects) {
  console.log(key + "->" + value);
}
