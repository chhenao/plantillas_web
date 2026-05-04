// Navbar scroll
window.addEventListener("scroll",()=>{
  document.getElementById("nav")
  .classList.toggle("scrolled",window.scrollY>50);
});

// Animaciones
const fades=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
  fades.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-100){
      el.classList.add("show");
    }
  });
});

/* banner cookies */
// Mostrar banner solo si no hay consentimiento
window.addEventListener("load", () => {
  const banner = document.getElementById("cookieBanner");

  if (localStorage.getItem("cookiesAccepted")) {
    banner.style.display = "none";
  }
});

// Aceptar cookies
document.getElementById("acceptCookies").addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookieBanner").style.display = "none";
});

// Rechazar cookies
document.getElementById("rejectCookies").addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookieBanner").style.display = "none";
});