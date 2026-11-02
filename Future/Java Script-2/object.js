// singleton when we create object using conststructor

// object literals 

// Object.create

const mySym = Symbol("key1");
const jsUser = {  
  name : "Pranshu",
  [mySym] : "mykey1",
  age : 19,
  location : "jaipur",
  email : "abc@gmail.com",
  isLoggedIn : false,
  LastLogDays : ["Monday" , "saturday"],
  "Full name" : 'hitesh '
}

// console.log(jsUser.name);
// // console.log(jsUser["email"]);

// // console.log(jsUser["Full name"]);
// // // console.log(jsUser["Full name"]);
// console.log(jsUser["Full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof(mySym));


jsUser.email = 'pranshu@google.com';
// Object.freeze(jsUser);
jsUser.email = 'pranshu@chatgpt.com';

jsUser.name = "sanshesh";
// console.log(jsUser.email);


console.log(jsUser);

jsUser.greeting = function(){
  console.log('hello welcome to every one');
  
}

jsUser.greetingTwo = function(){
  console.log(`hello welcome to every one ${this.name}`);
  
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

console.log(jsUser);