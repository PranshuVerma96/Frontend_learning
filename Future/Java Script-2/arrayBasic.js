// array

const myArr = [0,1,2,3,4,5,6];
const myHeroes = ["shaktiman", "nagraj"];
const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr[0]);

// array methods

myArr.push(6)
console.log(myArr);

myArr.pop();
// console.log(myArr); // delete last element 


// myArr.unshift(8);
// myArr.shift();
console.log(myArr);

// console.log(myArr.includes(3));

// console.log(myArr.indexOf(6));

const newArry = myArr.join();
// console.log(myArr)
// console.log(newArry);

// console.log(typeof(newArry));


// slice and splice 
console.log("A" ,myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B" ,myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C" ,myArr);






