// Actualiza el año automáticamente
document.addEventListener("DOMContentLoaded", () => {
  const footerBottom = document.querySelector(".footer-bottom");
  const year = new Date().getFullYear();
  footerBottom.innerHTML = `&copy; ${year} Bufete Legal & Asociados. Todos los derechos reservados.`;
});