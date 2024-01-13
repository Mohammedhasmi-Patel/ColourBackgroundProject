// singleton

//Object literals

/* In Interview They are ask about define one object and use in objects 
   remember we will use Symbol in square bracess always 
*/
const myObj = Symbol("key1");

const jsUser = {
  name: "Hasmi",
  myTopper: "RRR",
  age: 18,
  Location: "Surat",
  email: "hasmi@gmail.com",
  isLoggedIn: false,
};

// console.log(jsUser);
// console.log(jsUser["name"]);

//************************ Object2  ************************ */

const tinderUser = new Object(); // here this is singleton object
tinderUser.id = "123abc";
tinderUser.name = "Vali Gatha";
tinderUser.IsLoggedIn = false;
// const tinderUser={};// here it is empty object
// console.log(tinderUser);
const regularUser = {
  email: "hhpatel@gmail.com",
  name: "Mohammedhasmi@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Hasmi",
      lastName: "Patel",
    },
  },
};

// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "D" };
/*   we will merge our objects like this 
     const obj3={obj1,obj2} but here its merged but two different array
     so this is not good 

     2nd method whenver we will merge Object so simply we will 
     write .assign value in another object and in that object all the values will
     be copy 
     Syntax : obj3=Object.assign(obj1,obj2)

     3rd)method is same as second but first we will use curly braces so that 
     we will merge two objects easyli

     4th method is used to spread method then we dont need any extra space 
      const obj3 = Object.assign({}, obj1, obj2);
     
       

*/

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

console.log(tinderUser);
/*    we will use Object.key(tinderUser) to find all the key value of object also
      also if we neef all the objects of vslue then dafinately we will write like 
      this Object.values(tinderUser) so we will got all the values of object as well 


*/

// console.log(typeof Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

/*     hasOwnProperty is used to check there is key value exist in object or not 
       

           this is the last video of objects 
      
*/

const course = {
  courseName: "Javascript",
  price: "999",
  courseInstructor: "Hitesh",
};

// const { courseName } = course;
// console.log(courseName);

// const { courseInstructor, price: p } = course;
// console.log(p);

/* Destructure in javascript
   I have change the value of courseInstructor
   to c it means that now if i will write log(c)
   then dafinately i will got my instructor name as well




*/

// const { courseInstructor: c } = course;
// console.log(c);

/* Kabhi apna kaam kisi or pr daal de usko API kehte hai 
   menucard s something like api menu 

   because whenever we are saying bhaiyya aaloo ke samose do at that 
   time we will not think sbout backend what actually they do we only need
   samosa and thats it 
  
   this curly braces is called json
   {
      name:"Hitesh",
      courseName:"JsInHindi",
      price:Free
   }


        API is same as object but we have to mention that
        both key and value both are string as well
*/
