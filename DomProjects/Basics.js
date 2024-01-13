/* dom learning 
 4 pillars of Domes 
 1) selection of an element
 2) changing html
 3) changing css
 4) EventListener

*/

/* select h1 */

var a = document.querySelector("button");
a.addEventListener("click", function () {
  document.querySelector(".bulb").style.backgroundColor = "yellow";
});
