function one() {
  const userName = "Hasmi";
  function two() {
    const webSite = "YouTube";
    /* According to me we will dafinately got 
      my expected output because userName as a galobal variable
      and thats why we will dafinately use it */
    console.log(userName);
  }
  two();
}
one();

// if (true) {
//const userName = " Hasmi";
//if (userName === "Hasmi") {
//  const WebSite = " Instagram";
//console.log(WebSite + userName);
//}
// here we will got our first error
//} // dafinately here also get error because there is no username in global

// console.log(addOne(5)); //here we will not get any error because it is simply functions
// function addOne(num) {
// return num + 1;
