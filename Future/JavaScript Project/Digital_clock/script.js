function digitalClock(){
  const date =  new Date()

  const clock = document.querySelector('.clock')
  const time = date.toLocaleTimeString();

  clock.innerHTML = `${time}`;


}
setInterval(digitalClock, 1000);
digitalClock();