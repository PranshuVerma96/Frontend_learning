function multipleBy5(num){
  return num * 5
}

// multipleBy5(3);

multipleBy5.power = 2

console.log(multipleBy5(3))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)


function createUser(username, score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
this.score++
}

createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`);
}

const chai = new createUser('chai',23);
const tea = new createUser('tea',250)

chai.printMe()

/*
here is what happens behind the scenes whten the new keyword is used :

A new object is created : the new keyword initiates the creation of a new JavaScript object.

A prototype is linked : the newly created objected gets linked to the prototype property of the constructor function. This means that it has access to properties and methods definded on the constructor's prototype

The constructor is called. the constructor functions is called with the specified arguments and this is bound to the newly created object. If o explicit returen value is specified form the constructor . javaScript assumes  this.
the newly created object, to be the intended return value.
*/

