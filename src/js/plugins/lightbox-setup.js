import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery';

export default function setLightbox() {
  window.addEventListener('load', () => {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      alwaysShowNavOnTouchDevices: true,
      disableScrolling: true,
    });
  });
}
