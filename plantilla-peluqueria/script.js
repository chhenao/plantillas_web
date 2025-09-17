
// Mostrar el modal al cargar la página
window.onload = function () {
  const accepted = localStorage.getItem("cookiesAccepted");
  if (!accepted) {
    document.getElementById("cookieModal").style.display = "flex";
  }
};

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookieModal").style.display = "none";
}

function declineCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookieModal").style.display = "none";
}

//menu navegacion
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
});

menuClose.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

