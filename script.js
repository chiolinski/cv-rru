document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const headerText = document.querySelector('.header-text');
    const profilePhotoContainer = document.querySelector('.profile-photo-container');
    const mainTitle = document.querySelector('.main-title');
    const subtitle = document.querySelector('.subtitle');

    const scrollThreshold = 100; // Cuántos píxeles de scroll para activar el cambio

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
            headerText.classList.add('scrolled');
            profilePhotoContainer.classList.add('scrolled');
            mainTitle.classList.add('scrolled');
            subtitle.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            headerText.classList.remove('scrolled');
            profilePhotoContainer.classList.remove('scrolled');
            mainTitle.classList.remove('scrolled');
            subtitle.classList.remove('scrolled');
        }
    });
});