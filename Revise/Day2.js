const accountId = 144553;
/*  */
let accountEmail = "hhpatel@gmail.com";
/*  whenever we are just declare the variable and not assign anu value in it
 then by default the value is undefined 
 
*/
let accountState;
console.log(accountState);
/* we will not use var now because in initial days javascript 
doesnt know anyhting about scope so whenever we are creating any 
"var"  variable then it is available for entire globally 



*/
var accountPassword = "12345";
accountCity = "Jaipur";

/* whenver we use constant at that time we will surely say that the
  value of const will never change */
console.log(accountId);
accountEmail = "asg@gmail.com";
accountPassword = "54321";
accountCity = "Bharuch";

console.table([accountEmail, accountEmail, accountPassword, accountCity]);
