// =========================
// MENÚ HAMBURGUESA
// =========================

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");
  menu.classList.toggle("active");

});

// =========================
// CERRAR MENÚ AL HACER CLICK
// =========================

document.querySelectorAll(".menu a").forEach(link => {

  link.addEventListener("click", () => {

    hamburger.classList.remove("active");
    menu.classList.remove("active");

  });

});

// =========================
// CONTADORES
// =========================

const counters = document.querySelectorAll(".resumen div div");

counters.forEach(counter => {

  let start = 0;
  const end = +counter.innerText;
  const speed = 30;

  const updateCounter = () => {

    start++;
    counter.innerText = start;

    if(start < end){
      setTimeout(updateCounter, speed);
    }

  };

  updateCounter();

});

// =========================
// COOKIES
// =========================

function aceptarCookies() {

  document.getElementById("cookie-banner").style.display = "none";

  localStorage.setItem("cookiesAccepted", "true");

}

window.onload = () => {

  if(localStorage.getItem("cookiesAccepted")){

    document.getElementById("cookie-banner").style.display = "none";

  }

};