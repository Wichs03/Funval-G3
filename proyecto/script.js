document.querySelectorAll('.skills > div').forEach(skillLine => {
  const card = skillLine.querySelector('.card');
  const imagen = skillLine.querySelector('.imagen');
  const largeCard = skillLine.querySelector('.large-card');

  card.addEventListener('mouseenter', () => {
    imagen.style.opacity = '1';
    imagen.style.visibility = 'visible';
    largeCard.style.opacity = '1';
    largeCard.style.visibility = 'visible';
  });

  card.addEventListener('mouseleave', () => {
    imagen.style.opacity = '0';
    imagen.style.visibility = 'hidden';
    largeCard.style.opacity = '0';
    largeCard.style.visibility = 'hidden';
  });
});


  function toggleDarkMode() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  }
