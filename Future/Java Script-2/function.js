// function detail 

// function defination 
function sayName(){
  console.log('hello my name ');
  
}

// sayName  this is only reference of function 
// sayName()  this is the exeuction of the function 

// sayName();

// function AddTwoNum(num1, num2){ // when you define the defination of function then pass element called parameter
//   console.log(num1 + num2);
//   // return num1 + num2;
// }

function AddTwoNum(num1, num2){ // when you define the defination of function then pass element called parameter
  // console.log(num1 + num2);
  return num1 + num2;
  // console.log(he);
  
}
const result = AddTwoNum(2,3); // when you excute the function then pass the element are called argument.

// console.log( "result" , result);


function loginUserMessage(username ='pran'){
  if(!username){
    console.log('plesae enter a username');
    return ;
    
  }
  return `${username} logged just in`;
}

const data = loginUserMessage('pranshu');
console.log(data);

console.log(loginUserMessage()); // give undefined




