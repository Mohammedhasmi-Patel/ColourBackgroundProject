/* for loop whenver we will execute one thing again and again at that time 
we will use for loop */

/* for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer Loop: {i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner Loop Value: ${i} and ${j}`);
    console.log(i + "*" + j + " = " + i * j);
  }
}
*/

let myFriends = ["Shubham", "sara", "Fujel", "Madni"];
for (let i = 0; i < myFriends.length; i++) {
  // console.log(myFriends[i]);
}

/* Break and continue 
whenever we have to break any control flows at that time we will use 
break

whenever we have to skip some iteration at that time we will use continue 
so that iteration will automatically skip 




*/
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(`value of i is ${i}`);
// }
// let i = 0;
// while (i <= 10) {
//   console.log(`Value Of i Is ${i}`);
//   i++;
// }

// let myArray = ["Hasmi", "SoftwareDeveloper", "Teacher", "Youtuber"];
// let index = 0;
// while (index < myArray.length) {
//   console.log(myArray[index]);
//   index = index + 1;
// }

/* It doesnt mean we will use for loop as well as for loop because at the end of 
  the day we eed only one thing and that is our final output */
// let score = 11;

// do {
//   console.log(`Score is ${score}`);
//   score = score + 1;
// } while (score <= 10);
