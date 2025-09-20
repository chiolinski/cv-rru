document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const scrollThreshold = 100;

  const onScroll = () => {
    const shouldShrink = window.scrollY > scrollThreshold;

    // Alternamos la clase en el header (para estilos específicos)
    header.classList.toggle('scrolled', shouldShrink);

    // Y también en el body, para actualizar la variable --header-h (solo afecta en >=601px por CSS)
    document.body.classList.toggle('scrolled', shouldShrink);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial (por si entras ya scrolleado)
});
