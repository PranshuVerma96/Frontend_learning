//  loops other name iteration 

// for (let i = 0; i <= 10; i++) {
//   if(i == 5){
//     console.log('five is best');
    
//   }
//   console.log(i);
  
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop ${i}`);
  
//   // for (let j = 1; j <= 10; j++) {
//   //   console.log(i + ' * ' + j + '= ' + i*j);
    
   
//    // console.log(`Inner loop value ${j}  and inner loop ${i}`);
    
    
//   }
  
// }

let myArr = ["flash" , "batman", "superman"]

for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  // console.log(element);
  
  
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//   if(i == 5){
//     console.log('this is best number 5');
//     break;
    
//   }
//  console.log(`value of i is ${i}`);
 
  
// }

// continue skip current interation 
for (let i = 1; i <= 20; i++) {
  if(i == 5){
  //  console.log('this is best number 5');
    continue;
    
  }
 //console.log(`value of i is ${i}`);
 
  
}

// while loop

// let i =0;
// while (i<=10) {
//   console.log(i);
//   i = i + 3;
  
// }

// let myArray = ['rlash', 'batman' , 'superman'];
// let index = 0;
// while (index <myArray.length) {
//   console.log(`value is ${myArray[index]}`);
//   index ++;
  
  
// }

// do while

let score = 1;
do{
  console.log(`score is ${score}`);
  score ++;

}while(score <=10);