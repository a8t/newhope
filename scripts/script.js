document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav')
  const main = document.querySelector('main')
  const header = document.querySelector('header')
  const linksToAnchors = document.querySelectorAll('a[href^="#"]')
  
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)

  function navbarStick() {
    if (distanceToTop(navbar) <= 0) {
      navbar.classList.add("nav-scrolled");
      main.classList.add('main-scrolled')
    }
    if (distanceToTop(main) >= 0) {
      navbar.classList.remove("nav-scrolled"); 
      main.classList.remove('main-scrolled');
    }
  }

  window.onscroll = navbarStick

  function anchorLinkHandler(e) {
    e.preventDefault()
    const targetID     = this.href.slice(this.href.indexOf("#"))
    const targetAnchor = document.querySelector(targetID)
    const originalTop  = distanceToTop(targetAnchor)
    
    window.scrollBy({
      top: originalTop,
      left: 0,
      behavior: 'smooth'
    })

    const checkIfDone = setInterval(function() {
      if (distanceToTop(targetAnchor) === 0) {
        targetAnchor.tabIndex = "-1";
        targetAnchor.focus()
        clearInterval(checkIfDone)
      }
    }, 100);
  }
  
  linksToAnchors.forEach(each => each.onclick = anchorLinkHandler)

})