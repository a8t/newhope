document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav')
  const main = document.querySelector('main')

  
  
  const navbarStick = () => {
    if (navbar.getBoundingClientRect().top <=0) {
      navbar.classList.add("nav-scrolled");
      main.classList.add('main-scrolled')
    }
    if (navbar.getBoundingClientRect().top <= 0 && main.getBoundingClientRect().top > 0) {
      navbar.classList.remove("nav-scrolled"); 
      main.classList.remove('main-scrolled');
    }
  }

  window.onscroll = navbarStick

})