 
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.onclick = () => modal.style.display = "block";
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };

  /* coockies banner */
  // Mostrar banner si no hay preferencias guardadas
window.onload = function () {
  const prefs = localStorage.getItem('cookiePreferences');
  if (!prefs) {
    document.getElementById('cookie-banner').style.display = 'block';
  }
};

// Aceptar todas
function acceptAllCookies() {
  const preferences = {
    analytics: true,
    marketing: true,
    acceptedAt: new Date().toISOString()
  };
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  document.getElementById('cookie-banner').style.display = 'none';
}

// Abrir configuración
function openCookieSettings() {
  document.getElementById('cookie-settings').style.display = 'block';
}

// Cerrar configuración
function closeCookieSettings() {
  document.getElementById('cookie-settings').style.display = 'none';
}

// Guardar preferencias
function saveCookiePreferences() {
  const analytics = document.getElementById('analytics-cookies').checked;
  const marketing = document.getElementById('marketing-cookies').checked;

  const preferences = {
    analytics: analytics,
    marketing: marketing,
    acceptedAt: new Date().toISOString()
  };

  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  document.getElementById('cookie-settings').style.display = 'none';
  document.getElementById('cookie-banner').style.display = 'none';
}
 /* buscador de plantillas */
 function filtrar() {
      const input = document.getElementById("buscador").value.toLowerCase();
      const lista = document.getElementById("lista");
      const items = lista.querySelectorAll("li");

      let hayCoincidencias = false;

      items.forEach(item => {
        const texto = item.textContent.toLowerCase();
        const coincide = texto.includes(input);
        item.style.display = coincide ? "block" : "none";
        if (coincide) hayCoincidencias = true;
      });

      lista.style.display = input && hayCoincidencias ? "block" : "none";
    }