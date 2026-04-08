// Cookies
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookieModal").style.display = "none";
}

function declineCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookieModal").style.display = "none";
}

// Un solo window.onload
window.onload = function () {
  const accepted = localStorage.getItem("cookiesAccepted");
  if (!accepted) {
    document.getElementById("cookieModal").style.display = "flex";
  }
};

// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
  });
}

if (menuClose) {
  menuClose.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
}