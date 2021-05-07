// Burger Menu
const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
    document.body.classList.toggle('_lock')
}

menu.addEventListener('click', mobileMenu);












