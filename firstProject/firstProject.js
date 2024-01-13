/* This is my first project with hitesh sir  */

let firstButton = document.querySelector("#first");
console.log(firstButton);

firstButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

let secondButton = document.getElementById("second");

secondButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "aquamarine";
});

let thirdButton = document.querySelector("#third");
thirdButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "brown";
});

let fourthButton = document.querySelector("#fourth");

fourthButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "#00f";
});
