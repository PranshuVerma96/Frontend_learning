const User = {
  _email : 'ChaiAnd@gmail.com',
  _Password : "and",

  get email(){
    return this._email.toUpperCase();
  },
  set email(value){
    this._email = value

  }
}

const tea = Object.create(User);
console.log(tea.email);
