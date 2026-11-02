class User {
  constructor(email, passward){
    this.email = email;
    this.passward = passward
  }

  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
    this._email = value
  }
  get passward(){
    //return this._passward.toUpperCase();
    return `${this._passward}hitesh`
  }
  set passward(value){
    this._passward = value;
  }
}

const hitesh = new User('hites@.ai',"9303abc")
console.log(hitesh.passward);
console.log(hitesh.email);

