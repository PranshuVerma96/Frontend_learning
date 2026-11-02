function setUserName(username){
  //complex DB calls 
  this.username = username
  console.log('called');
  
}

function createUSer(username,email,passward){
  setUserName.call(this,username)
  this.email = email;
  this.passward = passward
}

const chai = new createUSer('pranshu','chai@google.com','3030')
console.log(chai);
