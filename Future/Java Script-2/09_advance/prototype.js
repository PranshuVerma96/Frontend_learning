// let myName = "hitesh     "

// console.log(myName.trueLength);


let myHero = ["thor" , "spiderman"];

let heroPower = {
  thor :  "hamer",
  spiderman : "sling",

  getSpiderPower : function(){
    console.log(`spider power is ${this.spiderman}`);
  }
}

Object.prototype.hitesh = function(){
  console.log('hitesh is present in all objects');
}
// heroPower.hitesh();

myHero.hitesh();


Array.prototype.heyHitesh = function(){
  console.log('hiesh says hellow')
}

// heroPower.heyHitesh();

// myHero.heyHitesh()


// inheritance 

const user = {
  name : 'chai',
  email : 'chai@google.com'
}

const Teacher = {
   makeVideo : true
}

const TeachingSupport = {
  isAvailable : false
}

const taSupport = {
   makeAssignemnt : 'js assignment',
   fullTime :true,
   __proto__ : TeachingSupport
}

Teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername = "chaiAurCode    "

String.prototype.trueLength = function(){
  // console.log(`${this.name}`)
  // console.log(`${this.name}`)
  console.log(`True lenght is : ${this.trim().length} `)
}

anotherUsername.trueLength();

"hitesh   ".trueLength();
"iceTea".trueLength();