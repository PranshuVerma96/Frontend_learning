const myObj = {
  js : 'javaScript',
  cpp: 'c++',
  java : 'java'
}

// for (const key in myObj) {
//   console.log(` ${key} short is for ${myObj[key]}`);
  
  
// }

// const programming = ['js' ,'cpp','py','c'];
// for (const key in programming) {
  
//   console.log(programming[key]);
  
  
  
// }

const map = new Map();
map.set('IN' , "INDIA");
map.set("USA" ,"America")
map.set("fr" , "france");
map.set('IN' , "INDIA");

for (const key in map) {
  console.log(key);
  
}

const coding = ['js','java','python','c','c++'];

coding.forEach( function(item) {
  //console.log(item);
  
})

// coding.forEach( (item)=>{
//   console.log(item);
  
// })

// function printMe(item){
//   console.log(item);
  
// }
// coding.forEach(printMe);


coding.forEach( (item,index ,arr)=>{
  console.log( item ,index ,arr);
  
})

const myCoding = [
  {
    languname : 'jsript',
    file : '.js'
  },

    {
    languname : 'python',
    file : '.py'
  },

    {
    languname : 'c++',
    file : 'cpp'
  }
]

myCoding.forEach( (item )=>{
  // console.log(item.languname);
  
})