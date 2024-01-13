var select = document.querySelector(".bulb");
var btn = document.querySelector(".btn");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    select.style.backgroundColor = "yellow";
    flag = 1;

    btn.innerHTML = "ON";
  } else {
    select.style.backgroundColor = "white";
    flag = 0;
    btn.innerHTML = "OFF";
  }
});
