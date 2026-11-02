// generate a random color
const randomColor = function(){
  const hex ="1234567890ABCDEF";
  let color = "#";
  for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}

// that is start button story
 let intervalId ;
const startChangingColor = function(){
  if(intervalId == null){
   intervalId = setInterval(changeBgcolor,1000);
  }
function changeBgcolor(){
     document.body.style.backgroundColor = randomColor();
  }
  
 
};
document.querySelector('#start').addEventListener('click',startChangingColor);


const stopChangingColor = function(){
clearInterval(intervalId);
intervalId = null;
};
document.querySelector('#stop').addEventListener('click',stopChangingColor);
