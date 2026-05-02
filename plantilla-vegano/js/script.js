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