// fetch('https').then().catch().finally()

const { use } = require("react");

const promiseOne = new Promise(function(resolve, reject){
 // do an asyn task
 // db Calls cryptograpy
 setTimeout(function(){
  console.log('syn task is complete');
  resolve()
  
 },1000)
});

promiseOne.then(function(){
  console.log('promise consuned');
  
})

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('asyn task 2');
    resolve()
    
  },1000)
}).then(function(){
  console.log('asyn 2 resoved');
  
});

const promiseThree = new Promise(function(resolve,reject){
  setTimeout( function(){
 resolve({username : 'chai',email :'pranshuverma68@gmail.com'})
  },1000)
});
promiseThree.then(function(user){
console.log(user);

})

const PRomiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
   let error =true
   if(!error){
    resolve({username :" pranshu ",password:'123'})
   }else{
    reject('Error , something went worng')
   }
    
  },1000)
})

const username = PRomiseFour.then((user)=>{
 console.log(user);

 return user.usernamme
 
}).then((username)=>{
console.log(username);

})