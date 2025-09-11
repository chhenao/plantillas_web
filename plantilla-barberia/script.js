// Efecto de bienvenida
window.addEventListener('load', () => {
  console.log("Bienvenido a Barbería Carlos 💈");
});

/* Aceptar cookies */
 function aceptarCookies() {
      document.getElementById('cookie-banner').style.display = 'none';
      localStorage.setItem('cookiesAceptadas', 'true');
    }

    window.onload = function () {
      if (localStorage.getItem('cookiesAceptadas') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
      }
    };

 /* calculadora de datos */
  function animateValue(id, start, end, duration) {
      const obj = document.getElementById(id);
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    window.onload = function () {
      animateValue("peinados", 0, 350, 1500);
      animateValue("afeitados", 0, 150, 1500);
      animateValue("estilización", 0, 65, 1500);
      animateValue("barberia", 0, 400, 1500);
    };
  
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });



    function toggleMenu() {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }
 
    //menu navegacion
    
 
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const closeBtn = document.getElementById('closeBtn');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    closeBtn.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    closeBtn.classList.remove('active');
  });
 
 

