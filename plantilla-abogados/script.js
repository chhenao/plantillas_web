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
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  const closeMenuIcon = document.querySelector('.close-menu');

  navLinks.classList.add('active');
  hamburger.style.display = 'none';
  closeMenuIcon.style.display = 'block';
}

function closeMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  const closeMenuIcon = document.querySelector('.close-menu');

  navLinks.classList.remove('active');
  hamburger.style.display = 'block';
  closeMenuIcon.style.display = 'none';
}

// Cerrar menú al pulsar un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});