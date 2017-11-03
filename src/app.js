require('smoothscroll-polyfill').polyfill();

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav')
  const main = document.querySelector('main')
  const header = document.querySelector('header')
  const logo = document.querySelector('#logo')
  const linksToAnchors = document.querySelectorAll('a[href^="#"]')
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)
  
  window.onscroll = navbarStick
  linksToAnchors.forEach(each => each.onclick = anchorLinkHandler)
  
  

  function navbarStick() {
    if (distanceToTop(navbar) <= 320) {
      logo.classList.add('logo-scrolled')
    }
    if (distanceToTop(main) > 320) {
      logo.classList.remove('logo-scrolled')
    }

    if (distanceToTop(navbar) <= 0) {
      navbar.classList.add("nav-scrolled");
      main.classList.add('main-scrolled')
    }
    if (distanceToTop(main) > 0) {
      navbar.classList.remove("nav-scrolled"); 
      main.classList.remove('main-scrolled');
    }
  }


  function anchorLinkHandler(e) {
    e.preventDefault()
    const targetID     = this.getAttribute("href")
    const targetAnchor = document.querySelector(targetID)
    if (!targetAnchor) return
    
    targetAnchor.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" })
    
      const checkIfDone = setInterval(function() {
        const atBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
          targetAnchor.tabIndex = "-1";
          targetAnchor.focus()
          window.history.pushState("", "", targetID)
          clearInterval(checkIfDone)
        }
      }, 100);
  }
  

})