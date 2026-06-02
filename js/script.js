// ==========================================
// 1. INICIALIZACIÓN DEL DOM (Modales, Cookies y Carga)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Modal de Condiciones de Compra
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  if (openBtn && modal && closeBtn) {
    openBtn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
  }

  // CONTROL DEL BANNER DE COOKIES (Evita que reaparezca al recargar)
  const cookieBanner = document.getElementById('cookie-banner');
  const prefs = localStorage.getItem('cookiePreferences');

  if (cookieBanner) {
    if (!prefs) {
      // Si no hay preferencias guardadas, se muestra el banner
      cookieBanner.style.display = 'block';
    } else {
      // Si ya existen preferencias, nos aseguramos de que permanezca oculto
      cookieBanner.style.display = 'none';
    }
  }
});

// ==========================================
// 2. LOGICA Y FUNCIONES DE COOKIES
// ==========================================

// Acción: Aceptar todas las cookies
function acceptAllCookies() {
  const preferences = {
    analytics: true,
    marketing: true,
    acceptedAt: new Date().toISOString()
  };
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner) cookieBanner.style.display = 'none';
}

// Acción: Abrir el panel de configuración secundaria
function openCookieSettings() {
  const settings = document.getElementById('cookie-settings');
  if (settings) settings.style.display = 'block';
}

// Acción: Cerrar el panel de configuración secundaria
function closeCookieSettings() {
  const settings = document.getElementById('cookie-settings');
  if (settings) settings.style.display = 'none';
}

// Acción: Guardar preferencias personalizadas (Checkboxes)
function saveCookiePreferences() {
  const analyticsCheck = document.getElementById('analytics-cookies');
  const marketingCheck = document.getElementById('marketing-cookies');

  const analytics = analyticsCheck ? analyticsCheck.checked : false;
  const marketing = marketingCheck ? marketingCheck.checked : false;

  const preferences = {
    analytics: analytics,
    marketing: marketing,
    acceptedAt: new Date().toISOString()
  };

  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  
  const cookieSettings = document.getElementById('cookie-settings');
  const cookieBanner = document.getElementById('cookie-banner');
  
  if (cookieSettings) cookieSettings.style.display = 'none';
  if (cookieBanner) cookieBanner.style.display = 'none';
}

// ==========================================
// 3. BUSCADOR DE PLANTILLAS
// ==========================================
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

  // Muestra la lista solo si estás escribiendo algo y hay resultados
  lista.style.display = input && hayCoincidencias ? "block" : "none";
}

// ==========================================
// 4. MENÚ HAMBURGUESA RESPONSIVE
// ==========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Cerrar el menú desplegable automáticamente al hacer clic en un enlace de navegación
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });
}