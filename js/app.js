// const getElement = (selector) => {
//     const element = document.querySelector(selector)
  
//     if (element) return element
//     throw Error(
//       `Please double check your class names, there is no ${selector} class`
//     )
//   }
  
//   const links = getElement('.nav-links')
//   const navBtnDOM = getElement('.nav-btn')
  
//   navBtnDOM.addEventListener('click', () => {
//     links.classList.toggle('show-links')
//   })
  
//   const date = getElement('#date')
//   const currentYear = new Date().getFullYear()
//   date.textContent = currentYear
var navbutton = document.getElementById("navbtn");
var navlinks = document.getElementById("navlink");
navbutton.addEventListener("click",function()
{
navlinks.classList.toggle("show-links");
})

var date = document.getElementById("date");
var currentYear = new Date().getFullYear();
date.textContent = currentYear; 
