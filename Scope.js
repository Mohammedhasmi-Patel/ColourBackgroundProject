/* scope is very long topic but we will understand basic then 
   we will move adavnce 
*/

/* remember please dont use var because it is dangerous because after 
scope the valu will be same that is big disadvantage */

/* {}  scope we will write everything i this curly braces it is called scope 
    and after and before this curly braces we will write everything is called 
    global scope.

    dafinately we will use any global scope variable in scope but wise versa 
    never true yeah there is one problem with var thats why we will not use var
*/

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

/*  but here value of c is still possible which is dafinetely not good 
    thats why we will not use var thats it 
*/

console.log(a);
