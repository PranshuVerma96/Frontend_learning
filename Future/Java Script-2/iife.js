// Immediately Invloked Function Expression (IIFE)

(function chai(){
  console.log('DB connected');
  
})();
// this is named iife



// this is simple iife
((name)=>{
  console.log(`welcome to my website ${name}`);
  
})('ram')
// global scope ke poulution se problem hoti he usse bachne ke liye
// chai();