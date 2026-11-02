// ES6 ke baad 

// class User{
//   constructor(username, email, passward){
//     this.username = username;
//     this.email = email;
//     this.passward = passward
//   }
//   encryptPassword(){
//     return `${this.passward}abc`;
//   }
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai = new User('pranshu','chai@gmail.com',123)

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// console.log(chai);

// behind the scene

function User(username, email, passward){
   this.username = username;
    this.email = email;
    this.passward = passward
}

User.prototype.encryptPassword = function(){
   return `${this.passward}abc`;
}

User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}
const tea = new User("tea","tea@gmail.com",124);

console.log(tea.changeUsername());
console.log(tea.encryptPassword());


