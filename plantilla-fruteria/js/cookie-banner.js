// Lógica del Banner de Cookies
        const cookieBanner = document.getElementById('cookieBanner');
        const acceptCookiesBtn = document.getElementById('acceptCookies');

        // Comprueba si el usuario ya aceptó las cookies anteriormente
        if (!localStorage.getItem('cookiesAceptadas')) {
            // Si no las ha aceptado, muestra el banner tras 1 segundo de carga
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1000);
        }

        // Al hacer clic en el botón de aceptar
        acceptCookiesBtn.addEventListener('click', () => {
            // Guarda la decisión en el navegador del usuario
            localStorage.setItem('cookiesAceptadas', 'true');
            // Oculta el banner bajándolo de nuevo
            cookieBanner.classList.remove('show');
        });