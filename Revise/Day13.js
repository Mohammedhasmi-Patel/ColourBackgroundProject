const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Hasmi";
tinderUser.isloggedin = "false";

// console.log(tinderUser);

const regularUser = {
  email: "hasmi@gmail.com",
  fullName: {
    first_Name: "arbaz",
    last_Name: "Patel",
  },
};

// console.log(regularUser.fullName.first_Name);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = { ...obj1, ...obj2 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const userOfMeta = [
  {
    userName: "Software Developer",
  },
];

// userOfMeta[0].freeze(userOfMeta[0]);
// userOfMeta[0].userName = "Champion Coders ";
// console.log(userOfMeta[0].userName);

// console.log(tinderUser.hasOwnProperty("name"));
const course = {
  courseName: "Champion Coder",
  price: "999",
  courseInstructor: "Champion Coders",
};

// console.log(course.courseInstructor);
const { courseInstructor, price } = course;
