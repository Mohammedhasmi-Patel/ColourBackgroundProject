const tinderUser = new Object();
// console.log(tinderUser);
tinderUser.email = "HHpatel@gmil.com";
// console.log(tinderUser);
tinderUser.phone = "9929371138464";
// console.log(tinderUser);

const championCoder = {
  Skills: "Javscript",
  Name: {
    Full_Name: "MohammedHasmi",
    Middle_Name: "ChampionTopper",
    toperName: {
      topper: "OkayBro",
    },
  },
};
// console.log(championCoder.Skills);
// console.log(championCoder.Name.Full_Name);
// console.log(championCoder.Name.toperName.topper);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };
//  = { ...obj1, ...obj2 };

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "HHHH@gmail.com",
  },
];

// console.log(users[0].email);
// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty("email"));

//******* Destructor of Array as well  */

const course = {
  courseName: "ChampionDsa",
  courseInstructor: "Hitesh Sir",
  coursePrice: "999",
};
// console.log(course[courseName]);
const { courseInstructor: sir } = course;
console.log(sir);

// menu card is a document of API as well

// json is same as object but it has no name so it is called json also

// {
//     "name":"Taiyab",
//     "courseName":"React In English",
//     "price":"Free"
// }
