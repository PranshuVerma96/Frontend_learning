// // fetch('https://something.com').then().catch().finally();

// const promiseOne = new Promise(function(resolve, reject){
//   // do an asyn task
//   // DB calls, crytpgraphy , network 
  
//   setTimeout(function(){
// console.log('Asyn task is complete');
// resolve();
  
//   },1000)
// })

// promiseOne.then(function(){
//   console.log("Promise consumed");
// })


// new Promise(function(resolve, reject){
//   setTimeout(function(){
//       console.log("Asyn task 2 ")
//       resolve();
//   },1000);
// }).then(function(){
//   console.log('Async 2 resolved');
// })


// // third promise 

// const promiseThree = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve({username : "Pranhu", email : "pranshu@gmail.com"

//     })
//   },1000);
// });

// promiseThree.then(function(user){
//   console.log(user);
// })


// // fourth promise

// const promiseFour = new Promise(function(resolve,reject){
//   setTimeout(function(){
//      let error = true;
//      if(!error){
//       resolve({username : 'hiesth',passward : '123'})
//      }
//      else{
//       reject('ERROR : something went worng')
//      }
//   },1000)
// })

// // const username = promiseFour.then((user)=>{
// //   console.log(user)
// //   return user.username
// // })

// // console.log(username);

//  promiseFour
//  .then((user)=>{
//   console.log(user)
//   return user.username
// })
// .then((username)=>{
//    console.log(username);
// })
// .catch(function(error){
//   console.log(error);
// })
// .finally(()=>{console.log('The Promise is either resloved either rejected .')})


// const promiseFive = new Promise(function(resolve,reject){
//   setTimeout(function(){
//      let error = true;
//      if(!error){
//       resolve({username : 'javascript',passward : '123'})
//      }
//      else{
//       reject('ERROR :  js went something went worng')
//      }
//   },1000)
// })


// async function consumePromiseFive() {
//   try{
//   const response = await promiseFive
//   console.log(response)
// }catch(error){
//   console.log(error);
// }
// }

// consumePromiseFive();


async function getAlluser(){
  try{
   const response =  await fetch('https://api.github.com/users/PranshuVerma96')

  const data =  await response.json();
  // console.log(response);
  console.log(data)
}catch(error){
  console.log("error" , error);
}
}

getAlluser();


//  fetch("https://api.github.com/users/PranshuVerma96")
//  .then((response)=>{
//   return response.json()
//  })
//  .then((data)=>{
//   console.log(data);
//  })
//  .catch((error)=>{console.log(error)})