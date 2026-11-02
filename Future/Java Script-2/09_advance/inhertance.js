class User {
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`Username is ${this.username}`);
    
  }
}

class Teacher extends User{
  constructor(username,email, passward){
    super(username)
    this.email = email;
    this.passward = passward;
  }
  addCourse(){
    console.log(`A new course was added by ${this.username}`);
    
  }
}

const chai = new Teacher('chai','Chai2gmail.com',8889)

chai.addCourse()
chai.logMe()

const tea = new User('Pranshu')
tea.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);