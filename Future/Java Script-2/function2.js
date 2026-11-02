function calculateCarPrice(...num1){  // rest operator ,spread operator
return num1;
}
console.log(calculateCarPrice(2,3,4,5,900,800));

const user = {
  username : 'hitesh',
  price : 900
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
handleObject(user);
handleObject({
  username : 'pranshu',
  price : 300
})

const myNewArr = [1,2,3,4,5];
function retrunSecondValue(getArray){
return getArray[3]; 
}
console.log(retrunSecondValue(myNewArr))
console.log(retrunSecondValue([1,22,332,43,5,6]));

