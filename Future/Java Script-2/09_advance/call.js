function setUserName(username){
  // complex db call
  this.username = username
  console.log('called')
}

function createUser(username, email, passward){

  // setUserName.call(this,username)

this.username = username
  this.email = email
  this.passward = passward
}

const chai = new createUser('pranshu','chain@gole.com',123)
console.log(chai);
