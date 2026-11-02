//  let var and const

// let a = 10;
//  const b = 20;
//  var c = 30;

//var c = 300;

 {} // this is called scope
 

 let a = 300
 if(true){
  let a = 10;
 const b = 20;
//  var c = 30;
 }
 console.log(a);
//  console.log(b);
//  console.log(c); 
// let name = "Pranshu"; // global variable

// function showName() {
//   name = 'ravi'
//   console.log(name); // accessible here
// }

// showName();
// console.log(name); // accessible here also

 
// console.log(name);

function one(){
  const usernme = 'pranshu'

  function two(){
   const website = 'youtube';
    console.log(usernme);
    
  }

  // console.log(website);
  // two();
}
one();

if(true){
  const username = 'sandesh';
  if(username === 'sandesh'){
    const website = 'youtube';
   // console.log(username + website);
    
  }
  // console.log(website);
  
}
// console.log(username);


// /+++++++++++++++++++++ interesting example +++++++

console.log(addone(5));
function addone(num){
  return num + 1;
}
// addone(5);


console.log(addtwo(9));
const addtwo = function (num){  // caled function expresseion 
  return num +2;

}
// console.log(addtwo(9));

  arrfuncton
 