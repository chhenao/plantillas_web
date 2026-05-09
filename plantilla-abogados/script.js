// Cookies
function aceptarCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('cookiesAceptadas', 'true');
}

// Animación contadores
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

// Un solo window.onload
window.onload = function () {
  // Cookies
  if (localStorage.getItem('cookiesAceptadas') === 'true') {
    document.getElementById('cookie-banner').style.display = 'none';
  }

  // Contadores
  animateValue("herencias", 0, 350, 1500);
  animateValue("testamentos", 0, 150, 1500);
  animateValue("impugnacion", 0, 65, 1500);
  animateValue("liquidacion", 0, 400, 1500);
};

// FAQ acordeón
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cerrar menú al pulsar un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});