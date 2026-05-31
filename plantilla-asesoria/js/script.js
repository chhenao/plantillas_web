document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const form = document.getElementById('premiumForm');

    // 1. Navbar dinámico según el Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.style.padding = '1rem 8%';
            navbar.style.background = 'rgba(13, 14, 16, 0.95)';
            navbar.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
        } else {
            navbar.style.padding = '2rem 8%';
            navbar.style.background = 'rgba(13, 14, 16, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Envío de Formulario con Feedback Elegante
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.innerText;
            
            // Simulación de envío (Proceso de alta gama)
            submitBtn.innerText = 'Procesando solicitud de confidencialidad...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerText = 'Solicitud Recibida con Éxito';
                submitBtn.style.backgroundColor = 'var(--accent)';
                submitBtn.style.color = 'var(--bg-dark)';
                
                // Limpiar formulario de forma limpia
                form.reset();
                
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.style.backgroundColor = 'transparent';
                    submitBtn.style.color = 'var(--accent)';
                    submitBtn.style.opacity = '1';
                    submitBtn.disabled = false;
                }, 3000);
                
            }, 2000);
        });
    }

    // Ocultar/Mostrar botón de WhatsApp de forma elegante
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
    // Estado inicial oculto mediante JS para respetar accesibilidad
    whatsappBtn.style.opacity = '0';
    whatsappBtn.style.transform = 'translateY(20px)';
    whatsappBtn.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.transform = 'translateY(0)';
        } else {
            whatsappBtn.style.opacity = '0';
            whatsappBtn.style.transform = 'translateY(20px)';
        }
    });
}

});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Alternar menú al hacer clic en la hamburguesa
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace (para ir a la sección)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});