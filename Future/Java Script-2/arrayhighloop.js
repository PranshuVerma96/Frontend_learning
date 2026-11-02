//  for of loop

["" ,"" , ""];
[{}, {},{}]

const arr = [1,2,3,4,5];
for (const element of arr) {
  console.log(element);
  
  
}

const str = 'pranshu';
for (const element of str) {
  console.log(element);
  
  
}

// maps apke unique value stor karte he or jis order me apne store kiya he us order me value rakte he

const map = new Map();
map.set('IN' , "INDIA");
map.set("USA" ,"America")
map.set("fr" , "france");
map.set('IN' , "INDIA");
// console.log(map);

for (const [key , value] of map) {
  console.log(key , ':' , value);
  
  
}

// for of loop se object ko itrate nahi kare sakte 

// const user ={
//   username : 'hitesh',
//   price : 900,
//   age :18
// }
// for (const [key,value] of user) {
//    console.log(key , ':' , value);
// }
