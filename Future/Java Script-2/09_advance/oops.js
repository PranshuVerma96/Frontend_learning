const { use } = require("react");

// const user = {
//   username : "hitesh",
//   loginCount : 0,
//   signedIn : true,

//   getUserDetails  : function(){
//     //console.log('Got user details from databases');
//     //console.log(`Username : ${this.username}`);
//     console.log(this);
    
    
//   }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); //{}


// constructor functions 


function User(username, age, loginCount , isLogedIn){
  this.username = username;
  this.age = age;
  this.loginCount = loginCount;
  this.isLogedIn = isLogedIn;
  this.greeting = function(){
    console.log(`welcome ${this.username}`);
    
  }
  // return this

 
}

const user1 = new User('hitesh',30, true,false);
const user2 = new User('pranshu',39,true,false)
console.log(user1.constructor); // reference of itself
// console.log(user2);

console.log(user1 instanceof User);




