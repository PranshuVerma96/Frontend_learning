function multipleBy5(num){

  return num*5;
}

//  console.log(multipleBy5(4));

 multipleBy5.power = 4;
//  console.log(multipleBy5.power);
//  console.log(multipleBy5.prototype);
 
 function createUSer(username , score){
  this.username = username;
  this.score = score
 }

 createUSer.prototype.increment = function(){
  this.score++
 }
 createUSer.prototype.printMe = function(){
 console.log(`score is ${this.score}`);
 }

 const chai = new createUSer("chai",39)
 const tea = new createUSer("tea", 90)

// chai.printMe();
 

// prototype in javascript

let myName = 'hitesh    ';
// console.log(myName.length);

// console.log(myName.trueLength);


let myHeroes = ["thor","spiderman"]
let heroPower = {
  thor : "hammer",
  spiderman : "sling",
  getSpiderPower : function(){
console.log(`spidy power is ${this.spiderman}`);

  }
}

Object.prototype.hitesh = function(){
  console.log('hiesh is present in all object');
  
}

// myHeroes.hitesh()
heroPower.hitesh();

Array.prototype.heyHitesh = function(){
  console.log('say hellow');
  
}
// myHeroes.heyHitesh()

// heroPower.heyHitesh() acces nahi milta he 


// inheritance 

const User = {
  name : 'Pranshu',
  email: 'chai@gggole.com'
}

const Teacher = {
  makeVideo : true
}

const TeachingSupport  = {
  isAvailable : false
}

const TASupport  = {
  makeAssignment : 'js Assignment',
  fullTime : true,
  __proto__ : TeachingSupport
}

Teacher.__proto__ = User // prototype inerhitance

// console.log(Teacher.name);


//modern syntex

Object.setPrototypeOf(TeachingSupport , Teacher)


let anotherUername = "pranshu   ";
String.prototype.trueLength = function(){
  console.log(`${this}`);
  
  
  console.log(`True Length is ${this.trim().length}`);
  
  
}
anotherUername.trueLength()

"hitesh  ".trueLength();