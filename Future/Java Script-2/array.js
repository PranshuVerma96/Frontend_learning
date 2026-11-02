// const myArry = ["ram" , "sita","hanuman","jammanth", "pranshu"];

// console.log(myArry[0]);
// console.log();
// myArry[0]='papa';
// // console.log(myArry);


// // for (const item of myArry) {
// //   console.log(item);
  
// // }// 

// for (let i = 0; i < myArry.length; i++) {
//   // const element = myArry[i];
//   // console.log(myArry[i]);
// }

// //for in loop always give you index
// // for (const i in myArry) {
// //   console.log(i);
// // }

// const mydata = myArry.forEach((curElement,index, arr)=>{
// return(`${curElement} ${index} `);
// // console.log(arr);


// })
// //console.log(mydata); // it give a undefined value



// const myData = myArry.map((curElement ,index ,arr)=>{
//   return(` my favriate person is ${curElement}  `);

// })
// console.log(myData); // it ret
// console.log(myArry);






// console.log(myArry);


// for (const i of myArry){
//   console.log(i);
  
// }
// console.log(myArry[-1]);

// const newArry = new Array('pranshu','sandesh' ,'alok');

// console.log(newArry);

const mArry = ["ram" , "sita","hanuman","jammanth", "pranshu"];


const data = mArry.filter((curElement)=>{
return curElement ==="ram";
})
console.log(data);

const num = [1,2,3,4,5,6,7,8,9,9];
const data2 = num.filter((curElement)=>{
  return curElement < 4;
})
console.log(data2);



// mArry.push('rabina');
// console.log(mArry);
// mArry.pop();
// console.log(mArry);

// mArry.unshift('nana')
// console.log(mArry);
// mArry.shift()
// console.log(mArry);


const students = [
  { id: 1, name: "Rahul", age: 20, course: "BCA", marks: 75 },
  { id: 2, name: "Anjali", age: 22, course: "BSc", marks: 45 },
  { id: 3, name: "Amit", age: 21, course: "BCA", marks: 60 },
  { id: 4, name: "Neha", age: 23, course: "BCom", marks: 30 },
  { id: 5, name: "Priya", age: 20, course: "BCA", marks: 85 }
];
 
// for age 
const filterdata = students.filter((curElement)=>{
  return curElement.age > 20
})
console.log(filterdata);

// for marks 

const marks = students.filter((curElement)=>{
  return curElement.marks ===75
})

console.log(marks);

// for course 
const Course = students.filter((curElement)=>{
  return curElement .course=== "BCA";
});

console.log(Course);






