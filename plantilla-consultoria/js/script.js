localStorage.clear(); // <-- Añade esto arriba del todo para resetear la memoria de pruebas

document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const btnAcceptCookies = document.getElementById("btnAcceptCookies");

    // Verificar si el usuario ya aceptó las cookies previamente
    if (!localStorage.getItem("cookiesAceptadas")) {
        // Si no existe el registro, mostramos el banner quitando la clase que lo oculta
        cookieBanner.classList.remove("cookie-hidden");
    }

    // Evento de aceptación al hacer clic
    btnAcceptCookies.addEventListener("click", function () {
        localStorage.setItem("cookiesAceptadas", "true");
        cookieBanner.classList.add("cookie-hidden");
    });
});