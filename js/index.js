const menuToggle = document.getElementById('menu')
const right = document.querySelector('.right')
const navbarTop = document.querySelector('.navbar_top')

menuToggle.addEventListener('click', ()=>{
    right.classList.toggle('active')
    navbarTop.classList.toggle('active')
})