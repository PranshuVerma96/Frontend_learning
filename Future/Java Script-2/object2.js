// // const tinederUser = new Object()
// // console.log(tinederUser);

// const tinederUser = {}
// console.log(tinederUser);

// tinederUser.id = '123abc';
// tinederUser.name = "pranhu";
// tinederUser.isLoggedIn = false
// // console.log(tinederUser);


// const regularUSer = {
//   email : 'some@gmail.com',
//   fullname :{
//     userfullname :{
//       firstname : 'hitesh',
//       lastname : 'verma'
//     }
//   }
// }
// console.log(regularUSer.fullname.userfullname.firstname);


// // const obj1 = {
// //   1 : 'a',
// //   2 : 'b'
// // }
// // const obj2 = {
// //   3 : 'ab',
// //   4 : 'bc'
// // }
// // const obj4 = {
// //   5 : 'abd',
// //   6 : 'bce'
// // }
// // const obj3 = Object.assign({},obj1 , obj2,obj4);
// // console.log(obj3);

// // this is object freeze method
// // const obj3 = {...obj1,...obj2,...obj4};
// // // console.log(obj3);


// const users = [
//   {
//     id :1,
//     email :'g@gmail.com'
//   },
  
//   { 

//   },
//   {

//   },
//   {
//   },
// ]

// users[1].email
// console.log(tinederUser);

// console.log(Object.keys(tinederUser));
// console.log(Object.values(tinederUser));
// console.log(Object.entries(tinederUser));


// console.log(tinederUser.hasOwnProperty('isLoggedIn'));




// object destructureing

const course = {
  coursename : 'js inhindi',
  price : 100,
  courseTeacher : 'hitesh'
}


const {courseTeacher : instructure} = course;
const {price:p} = course;
console.log(instructure);
console.log(p);




// const navbar = ({companey})=>{

// }

// navbar(companey = "hitesh");


// {
//   "name" :'hitesh',
//   "coursename" : 'js in hindi',
//   "price" : "free"
// }

[
  {},
  {},
  {}
]