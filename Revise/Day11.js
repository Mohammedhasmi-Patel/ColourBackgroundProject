/* Indepth javascript Array as well  */

const Marvel_Heroes = ["Thor", "IronMan", "spiderMan"];
const dc_Heroes = ["SuperMan", "flash"];
//console.log(Marvel_Heroes);
//console.log(dc_Heroes);
// Marvel_Heroes.push(dc_Heroes);
//console.log(Marvel_Heroes);
// console.log(Marvel_Heroes[3][0]);

console.log(Marvel_Heroes.concat(dc_Heroes));

/* WE have glass of kach and it will become a spread so we will use*/

const all_Heroes = [...Marvel_Heroes, ...dc_Heroes];
console.log(all_Heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_Another_Array = anotherArray.flat(Infinity);
// console.log(real_Another_Array);

// console.log(Array.from("Hasmi"));
// console.log(Array.isArray());

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
