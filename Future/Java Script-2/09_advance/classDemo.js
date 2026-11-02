// ES6

// class User{
//   constructor(username, email,passward){
//     this.username = username;
//     this.email = email;
//     this.passward = passward
//   }
//   encryptPassword(){
//     return `${this.passward}abc`
//   }
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const prans = new User("para","chai@gmail.com", '2342')
// console.log(prans.encryptPassword());
// console.log(prans.changeUsername());

// behind the sense

// function User(username,email,passward){
//   this.username = username;
//     this.email = email;
//     this.passward = passward
  
// }

// User.prototype.encryptPassword = function(){
//    return `${this.passward}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const pranshu = new User("pranshu","tea@gmail.com", '234209')
// console.log(pranshu.encryptPassword());

// console.log(pranshu.changeUsername());


// inhertance

// class User {
//   constructor(username){
//     this.username = username
//   }
//   logMe(){
//     console.log(`Username is ${this.username}`);
    
//   }
// }

// class Teacher extends User{
//   constructor(username , email , passward){
//     super(username)
//     // this.username = username
//     this.email = email;
//     this.passward = passward
//   }
//   addCourse(){
//     console.log(`new courser was added by ${this.username}`);
    
//   }
// }

// const Tea = new Teacher("chai", "chai@r.com",22222)
// Tea.addCourse();
// // const masalaChai = new User('pranshu')

// // masalaChai.logMe()


// Tea.logMe()

// static keyword

class User{
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`username ${this.username}`);
    
  }
   static createID(){
    return `12ddd3`
  }
}
const hitesh = new User('hitesh')
console.log(User.createID());

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email = email
  }
}

const pranshu = new Teacher('pranshu',"pranhsu@.com")
// console.log(pranshu.createID());
pranshu.logMe();
