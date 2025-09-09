 
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
  
 