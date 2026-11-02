const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);


// console.log(Math.PI);
// Math.PI = 9;
// console.log(Math.PI);

// const muNewObj = Object.create()

const chai = {
  name : 'ginger chai',
  prince : 30,
  isAvailable : true,
  orderChai : function(){
    console.log('chai nahi bani ');
    
  }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
 // writable : false,
   enumerable:true,
   configurable : true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of Object.entries(chai)) {
  if(typeof value !== 'function') {
  console.log(`${key} : ${value}`);
  
}
}