// ========================================================
// MENÚ HAMBURGUESA - ESTILO TRELLO
// ========================================================

document.addEventListener('DOMContentLoaded', function() {
  
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const actions = document.getElementById('actions');
  const overlay = document.getElementById('overlay');

  // Verificar que todos los elementos existen
  if (!hamburger || !nav || !actions || !overlay) {
    console.error('Error: No se encontraron todos los elementos del menú');
    return;
  }

  // Función para abrir/cerrar el menú
  function toggleMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    actions.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  }

  // Abrir/Cerrar menú con el botón hamburguesa
  hamburger.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer click en el overlay
  overlay.addEventListener('click', toggleMenu);

  // Manejar navegación cuando se hace click en los links
  document.addEventListener('click', function(e) {
    // Buscar si el elemento clickeado o algún padre es un link de navegación
    let element = e.target;
    while (element && element !== document) {
      if (element.classList && element.classList.contains('header__nav-link')) {
        const href = element.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          e.stopPropagation();
          
          const menuIsOpen = nav.classList.contains('active');
          
          // Cerrar menú si está abierto
          if (menuIsOpen) {
            toggleMenu();
          }
          
          // Hacer scroll a la sección después de cerrar el menú
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