document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const btnAccept = document.getElementById("btnAcceptCookies");
    const btnDeny = document.getElementById("btnDenyCookies");

    // Verificar si el usuario ya tomó una decisión previa
    if (!localStorage.getItem("cookieConsent")) {
        // Si no existe el registro, mostramos el banner quitando la clase 'hidden'
        setTimeout(() => {
            cookieBanner.classList.remove("hidden");
        }, 1000); // Pequeño retraso de 1 segundo para una entrada más elegante
    }

    // Acción al Hacer Clic en Aceptar
    btnAccept.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.classList.add("hidden");
        // Aquí puedes inicializar tus scripts de Google Analytics, píxeles, etc.
    });

    // Acción al Hacer Clic en Rechazar
    btnDeny.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "denied");
        cookieBanner.classList.add("hidden");
    });
});