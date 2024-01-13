/* its all about hoisting */

function one() {
  const userName = "Hasmi";
  function Two() {
    const webSites = "Youtube";
    console.log(webSites);
  }
  // Two();
  console.log(userName);
}

one();

if (true) {
  const UserName = "Hasmi";
  if (UserName === "Hasmi") {
    console.log("Nested If ");
  }
}

const result = function addOne(value) {
  return value + 1;
};

two();
function two() {
  console.log("Tomorrow");
}
