// ========================================================
// MENÚ HAMBURGUESA
// ========================================================

document.addEventListener('DOMContentLoaded', function() {
  
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const actions = document.getElementById('actions');
  const overlay = document.getElementById('overlay');

      // if (!hamburger || !nav || !actions || !overlay) {
     // console.error('Error');
    //  return;
   // }

  function toggleMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    actions.classList.toggle('active');
    overlay.classList.toggle('active');
    
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);


  document.addEventListener('click', function(e) {
    let element = e.target;
    while (element && element !== document) {
      if (element.classList && element.classList.contains('header__nav-link')) {
        const href = element.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          e.stopPropagation();
          
          const menuIsOpen = nav.classList.contains('active');
          
          if (menuIsOpen) {
            toggleMenu();
          }
          
          const delay = menuIsOpen ? 350 : 0;
          
          setTimeout(function() {
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, delay);
          
          break;
        }
      }
      element = element.parentElement;
    }
  });
  
});