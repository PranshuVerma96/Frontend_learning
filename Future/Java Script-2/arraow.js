const { use } = require("react");

const user = {
  username : 'hitesh',
  prince :999,
  welcomeMessage : function(){
    console.log(`${this.username} welcome to wesite`);
    // console.log(this);
    
    
  }

}

// user.welcomeMessage();
// user.username = 'sam';
// user.welcomeMessage();

// console.log(this); // and node environment me {} global object he 

// browser ke ander jo global object he vo window oject he 


// function chai(){
//   let username = 'hitesh';
//   console.log(this.username);
  
// }
// chai()  // probide undefined

const chai = function(){
  let username = 'hitesh';
  console.log(this);
  
 console.log(this.username);
}
// chai()  // probide undefined


// const chai = ()=>{
//   let username = 'hitesh';
//      console.log(this);
//   console.log(this.username); // probide undefined
//    // provide {} object
  
// }
// chai();


// const addtwo = (num1, num2)=>{
//   return num1 + num2;
// }
// console.log(addtwo(2,3));


// emplicit return
// const addtwo = (num1, num2)=> num1 + num2;

// const addtwo = (num1, num2)=> (num1 + num2);

// in arraw function me object ko without {} return nahi kar sakte
const addtwo = (num1, num2)=> ({username : 'hitesh'});

console.log(addtwo());

const myArr = [2,3,4,5];
myArr.forEach(function () {})
