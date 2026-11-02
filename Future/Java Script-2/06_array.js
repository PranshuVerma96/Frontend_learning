const coding = ['js','java','python','c','c++'];

// for each loop kush return nahi karta he 
const values = coding.forEach( (item)=>{

 // console.log(item);
  return item;
  
})
//console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];
// const neNums  = myNums.filter((item)=> item >5 );

// const nums = myNums.filter( (nums)=>{

//    return nums > 4;
// })

// console.log(nums);

const  newNums = []
myNums.forEach( (item)=>{
  if(item > 4){
    newNums.push(item)
  }
})
//console.log(newNums);
// console.log(neNums);


const users = [
  { name: "Pranshu", age: 22 },
  { name: "Aman", age: 17 },
  { name: "Ravi", age: 30 },
  { name: "Neha", age: 16 },
];


 const data = users.filter( (item) => (item.age  >= 18 && item.name === 'Ravi'))
 const data2 = users.filter( (item) => (item.name === 'Pranshu'))

// console.log(data);
// console.log(data2);




// Task 1: age 18 ya usse zyada
// Task 2: age 25 se kam


const myMuners = [1,2,3,4,5,6,7,8,9];


const New = myMuners.map( (item)=> (item + 1));
// console.log(New);

const number = []
  myMuners.forEach( (item)=> {
 
  item = item +4;
  number.push(item);
});

// console.log(number);

const newNumss = myMuners
            .map( (num)=> num*10 )
            .map((num)=> num + 1)
            .filter((num)=>num > 50);
            // console.log(newNumss);



const value1 = [1,2,3]   
         

// const mytotal = value1.reduce(function(acc,curvalue){
//   console.log(`Acc is ${acc} and curvalue is ${curvalue}`);
  
//   return acc + curvalue;
// },0)

// console.log(mytotal);

// const mytotal = value1.reduce( (acc, curvaluue)=> (acc + curvaluue),0)
// console.log(mytotal);

const shoopingCart = [
  {itemname : 'js',
    price : 200
  },
  {itemname : 'Python',
    price : 1400
  },
  {itemname : 'java',
    price : 900
  },
  {itemname : 'mobileDevelopment',
    price : 1000
  }

]

const total = shoopingCart.reduce ((acc , curvalue )=>{
  console.log(`sub first price is ${curvalue.itemname} and price is ${curvalue.price} `)
  return (curvalue.price + acc)},0)


console.log(total);

const nums = [5, 10, 15, 20, 25];

// 1️⃣ map use karo → sab values double karo
// 2️⃣ filter use karo → sirf > 20
// 3️⃣ reduce use karo → total sum

const answer = nums.
map( (item) => (item * 2)).


filter( (item) => ( item >20) ).
reduce( ( curvalue ,item) =>(curvalue+ item),0);

console.log(answer);

// const finalAnswer = nums.reduce( (curvalue,acc) => (curvalue + acc),0)

// console.log(finalAnswer);


