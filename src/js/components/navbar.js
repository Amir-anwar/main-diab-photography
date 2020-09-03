export default function navbarComponent() {
  window.addEventListener('DOMContentLoaded', () => {
    const addScrolledClass = () => {
      const navbar = document.querySelector('.navbar-web');
      const navbarStatus = window.getComputedStyle(navbar).getPropertyValue('display');

      if (navbarStatus !== 'none') {
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 2) {
            navbar.classList.add('navbar-web--scrolled');
          } else {
            navbar.classList.remove('navbar-web--scrolled');
          }
        });
      } else {
        const navbar = document.querySelector('.navbar-mobile');
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 2) {
            navbar.classList.add('navbar-mobile--scrolled');
          } else {
            navbar.classList.remove('navbar-mobile--scrolled');
          }
        });
      }
    };

    const menuOverlaySlide = () => {
      const burger = document.querySelector('.navbar-mobile__burger');
      const overlayMenu = document.querySelector('.navbar-mobile__overlay-menu');
      const overlayMenuItems = document.querySelectorAll('.navbar-mobile__item');
      const navbar = document.querySelector('.navbar-mobile');

      function toggleclasses() {
        burger.classList.toggle('navbar-mobile__burger--close');
        overlayMenu.classList.toggle('navbar-mobile__overlay-menu--open');
        navbar.classList.toggle('navbar-mobile--overlay');
      }

      burger.addEventListener('click', () => {
        toggleclasses();

        // animate links
        overlayMenuItems.forEach((item, index) => {
          if (item.style.animation) {
            item.style.animation = '';
          } else {
            item.style.animation = `navlinkFade .5s ease forwards ${index / 7 + 0.3}s`;
          }
        });
      });
    };

    const app = () => {
      addScrolledClass();
      menuOverlaySlide();
    };

    app();
  });
}
