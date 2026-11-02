function User(email ,passward){
  this._email = email;
  this._password = passward;

  Object.defineProperty(this,'email',{

    get : function(){
      return this._email.toUpperCase();
    },
    set : function(value){
      this.email = value
    }
  })

    Object.defineProperty(this,'passward',{

    get : function(){
      return this._password.toUpperCase();
    },
    set : function(value){
      this.passward = value
    }
  })

  
}

const chai = new User('chai@chi.com','pranhu');
console.log(chai.email);
console.log(chai.passward);

