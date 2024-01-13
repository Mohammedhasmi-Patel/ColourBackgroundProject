/* 
Immediately Invoked Function Expression (IIFE)

sometime we got lots of pollution because of global scope so 
we will use Immediately Invoked Function Expression 

javascript is a single thread 

*/

(function chai() {
  console.log(`DB CONNECTED`);
})(); // IN THIS LINE IMMEDIATELY CALLED THE FUNCTION

(function aurCode(name) {
  console.log(`${name}is  A Genius`);
})("Hasmi");

/* Global execution context 
   creation phase 
   whenever we are write our own functions variable and another thing at 
   that time memory will be allocated in global execution

   but how this programme actually run 

    global execution (this variable also point )




    memory Phase.
    whenever we are creating val1 and val2 at that time direct value will be undefined 

    now we have result1=> undefined
    now we have result2=> undefined


    Execution Phase
    now we have value assing val1=10
    now value will be assign in val2=5

    now add number 


*/
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

console.log(addNum(val1, val2));
console.log(addNum(5, 7));

// function execution context
