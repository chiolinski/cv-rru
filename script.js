document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const scrollThreshold = 100;

  const onScroll = () => {
    const shouldShrink = window.scrollY > scrollThreshold;


    header.classList.toggle('scrolled', shouldShrink);

   
    document.body.classList.toggle('scrolled', shouldShrink);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); 
});
