document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav')
  const main = document.querySelector('main')
  const header = document.querySelector('header')
  const linksToAnchors = document.querySelectorAll('a[href^="#"]')
  
  
  const navbarStick = () => {
    if (navbar.getBoundingClientRect().top <= 0) {
      navbar.classList.add("nav-scrolled");
      main.classList.add('main-scrolled')
    }
    if (navbar.getBoundingClientRect().top <= 90 && main.getBoundingClientRect().top > 0) {
      navbar.classList.remove("nav-scrolled"); 
      main.classList.remove('main-scrolled');
    }
  }

  window.onscroll = navbarStick

  function anchorLinkHandler(e) {
    e.preventDefault()
    const targetID = this.href.slice(this.href.indexOf("#"))
    const element = document.querySelector(targetID)
    const originalTop = element.getBoundingClientRect().top
    
    window.scrollBy({
      top: originalTop, // amount to scroll by. could be negative
      left: 0,
      behavior: 'smooth'
    })

    const checkIfDone = setInterval(function() {
      if (element.getBoundingClientRect().top === 0) {
        element.tabIndex = "-1";
        element.focus()
        clearInterval(checkIfDone)
      }
    }, 100);
  }
  
  linksToAnchors.forEach(each => each.onclick = anchorLinkHandler)

})