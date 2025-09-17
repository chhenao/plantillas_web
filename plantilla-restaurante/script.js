 
  // Mostrar el modal al cargar la página
    window.onload = function() {
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

    /* menu navegacion */
    const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

  
 