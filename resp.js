burger = document.querySelector('.burger')
navbar = document.querySelector('nav')
logo = document.querySelector('.logo')
list = document.querySelector('ul')
clone = document.querySelector('.clone-logo')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('p-nav');
    logo.classList.toggle('display');
    list.classList.toggle('display');
    clone.classList.toggle('display');
})