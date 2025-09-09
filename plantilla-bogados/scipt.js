
    function aceptarCookies() {
      document.getElementById('cookie-banner').style.display = 'none';
      localStorage.setItem('cookiesAceptadas', 'true');
    }

    window.onload = function () {
      if (localStorage.getItem('cookiesAceptadas') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
      }
    };
  
    // calculadora de datos
 
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
      animateValue("herencias", 0, 350, 1500);
      animateValue("testamentos", 0, 150, 1500);
      animateValue("impugnacion", 0, 65, 1500);
      animateValue("liquidacion", 0, 400, 1500);
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
 