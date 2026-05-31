/**
 * Lógica de interacción frontend para la plantilla inmobiliaria
 */
document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('nav');
    
    // Control dinámico de la opacidad y sombra de la barra de navegación al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-scrolled', 'bg-white/95');
            navbar.classList.remove('bg-white/80');
        } else {
            navbar.classList.remove('nav-scrolled', 'bg-white/95');
            navbar.classList.add('bg-white/80');
        }
    });

    // Control de los enlaces de las páginas legales del footer
    const legalLinks = document.querySelectorAll('footer a[href="#"]');
    legalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Simulación: Enlace legal a "${event.target.textContent}" activado correctamente.`);
        });
    });

    // --- LÓGICA DEL BANNER DE COOKIES (¡Ahora dentro del DOMContentLoaded!) ---
    const cookieBanner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('btn-accept-cookies');
    const btnDeny = document.getElementById('btn-deny-cookies');

    // Comprobar si ya existe una decisión guardada en el navegador
    const cookieDecision = localStorage.getItem('cookies-aceptadas');

    if (!cookieDecision) {
        // Si no hay decisión, mostramos el banner tras un pequeño delay (1.5 segundos)
        setTimeout(() => {
            cookieBanner.classList.add('cookie-visible');
        }, 1500);
    }

    // Acción al pulsar "Aceptar"
    btnAccept.addEventListener('click', () => {
        localStorage.setItem('cookies-aceptadas', 'true');
        cookieBanner.classList.remove('cookie-visible');
        console.log('Cookies aceptadas por el usuario.');
    });

    // Acción al pulsar "Rechazar"
    btnDeny.addEventListener('click', () => {
        localStorage.setItem('cookies-aceptadas', 'false');
        cookieBanner.classList.remove('cookie-visible');
        console.log('Cookies rechazadas por el usuario.');
    });

}); // <-- Esta es la llave que faltaba para cerrar todo correctamente