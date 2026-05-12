function filterMenu(category) {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    if (category === 'all') {
      item.classList.remove('hide');
    } else {
      item.classList.contains(category)
        ? item.classList.remove('hide')
        : item.classList.add('hide');
    }
  });
}

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// abrir / cerrar menú
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// cerrar al hacer click en un enlace (MUY IMPORTANTE)
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

// cerrar al hacer click fuera del menú
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }
});