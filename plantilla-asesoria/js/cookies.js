document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookieBanner');
    const btnAccept = document.getElementById('btnAcceptCookies');
    const btnDeny = document.getElementById('btnDenyCookies');

    // Comprobar la decisión en el almacenamiento local del navegador
    const cookieDecision = localStorage.getItem('aureum-cookies');

    if (!cookieDecision) {
        // Mostramos el banner quitando la clase 'hidden' tras 1.5 segundos
        setTimeout(() => {
            if (cookieBanner) {
                cookieBanner.classList.remove('hidden');
            }
        }, 1500);
    }

    // Acción al pulsar "Aceptar"
    if (btnAccept) {
        btnAccept.addEventListener('click', () => {
            localStorage.setItem('aureum-cookies', 'accepted');
            cookieBanner.classList.add('hidden');
        });
    }

    // Acción al pulsar "Rechazar"
    if (btnDeny) {
        btnDeny.addEventListener('click', () => {
            localStorage.setItem('aureum-cookies', 'denied');
            cookieBanner.classList.add('hidden');
        });
    }
});