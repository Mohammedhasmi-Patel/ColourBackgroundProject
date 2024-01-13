/* this is called selection of an element 
whenver we need to select html element using javascript at that time we
will use document.querySelector and select a particular element as well 


var a = document.querySelector("h1");




*/

/* now changed value of html
so whenever we need to use change html at that time
we will use querySelector.innehHtMl and assigned new value so that it will changed in our ui 

  document.querySelector("h1").innerHTML = "Mohammedhasmi";

*/

// var a = document.querySelector(".bulb");
// var btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   bulb.style.backgroundColor = "red";
// });

// var a = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// var flag = 0;
// btn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "Yellow";
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = "white";
//     flag = 0;
//   }
// });

var h = document.querySelectorAll("h1");
h.forEach(function (item) {
  console.log(item);
});
