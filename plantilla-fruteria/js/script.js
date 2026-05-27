// Este evento espera a que todo el HTML esté listo en la pantalla
document.addEventListener('DOMContentLoaded', () => {

    // 1. CÓDIGO DEL MENÚ MÓVIL
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. CÓDIGO DEL ACORDEÓN DE PREGUNTAS (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // 3. CÓDIGO DEL BANNER DE COOKIES
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    // Verificamos que los elementos existan en la página actual
    if (cookieBanner && acceptCookiesBtn) {
        // Si no se han aceptado antes, se muestra el banner tras 1 segundo
        if (!localStorage.getItem('cookiesAceptadas')) {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1000);
        }

        // Al hacer clic, guardamos en el navegador y ocultamos
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAceptadas', 'true');
            cookieBanner.classList.remove('show');
        });
    }

}); // Aquí termina el escudo protector