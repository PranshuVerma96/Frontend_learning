const btnTheme = document.querySelector("#theme");

btnTheme.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".sectionInfo")

menuToggle.addEventListener('click',()=>{
  menu.classList.toggle('active');
});