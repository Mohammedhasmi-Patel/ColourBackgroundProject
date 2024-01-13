const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["Superman", "Flash", "batman"];

/*  Here we are push deHeroes into marvel at that  time javascript think that
    whenever i got any element i just store as a one variable 
    so in reality the array actually not merged but array in array concept come here
*/

/* let a = marvelHeroes.concat(dcHeroes);
console.log(a);
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes);

*/

let arr = [1, 2, 3, [(4, 5)], 6, [1, 2, [4, 5]], 56];
let myNewArray = arr.flat(Infinity);
console.log(myNewArray);

console.log(Array.isArray("Hasmi"));
