// javaScript and classes

const { use } = require("react");

// OOP 

// object - collection of properties and methods

// why use oops

// parts of oops
// Object literal{}

// constructor function 
// prototyes
//class
// Instances (new, this )

const user = {
  username : 'hites',
  loginCount : 9,
  singnedIn : true,
  getuserDetails : function(){
    // console.log(`got user datial form data ${this.username}`)
    console.log(this);
  }
}
// console.log(user.getuserDetails())

// console.log(this);


// const promiseOne = new Promise()

function User (username, loginCount, isLoggedIn){

  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn
  this.greeting = function(){
    console.log(`welcome ${this. username}`)
  }

  return this
}

const userOne = new User('hitesh','12', true);
const userTwo = new User('chai', 20, false);
console.log(userOne.constructor)
console.log(userTwo)

// new keybord ke badd empty object create hota he 
// constructor function new keyword se bandta he
