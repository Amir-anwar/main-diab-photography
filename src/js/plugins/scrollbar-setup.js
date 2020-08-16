import OverlayScrollbars from 'overlayscrollbars';

export default function setScrollBar() {
  document.addEventListener('DOMContentLoaded', () => {
    const getInTouch = document.querySelector('#getInTouch');

    if (window.innerWidth > 992) {
      const instance = OverlayScrollbars(document.querySelectorAll('body'), {
        scrollbars: {
          autoHide: 's',
        },
      });

      getInTouch.style.cursor = 'pointer';

      getInTouch.addEventListener('click', () => {
        instance.scroll(document.getElementById('form-container'), 500);
      });
    } else {
      getInTouch.href = '#form-container';
    }
  });
}
