// =========================
// MENÚ HAMBURGUESA
// =========================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {

  navLinks.classList.toggle('active');

  // convierte hamburguesa en X
  hamburger.classList.toggle('active');

});


// =========================
// CERRAR MENÚ AL HACER CLICK
// =========================

document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('active');
    hamburger.classList.remove('active');

  });

});


// =========================
// COOKIES
// =========================

const cookieBanner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptCookies");
const rejectBtn = document.getElementById("rejectCookies");

if (!localStorage.getItem("cookiesChoice")) {
  cookieBanner.style.display = "block";
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesChoice", "accepted");
  cookieBanner.style.display = "none";
});

rejectBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesChoice", "rejected");
  cookieBanner.style.display = "none";
});