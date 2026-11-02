class User{
  constructor(username){
this.username = username;
  }
  logMe(){
    console.log(`user name is ${this.username}`);
    
  }
  static createId(){
    return `123`
  }
}

const papa = new User('papa');
console.log(papa.createId());

const tea = new User('hitesh');
// console.log(tea.createId())

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email = email
  }
}
const chai = new Teacher('pranshu','p@gmail.com');
chai.logMe();
// console.log(chai.createId());
