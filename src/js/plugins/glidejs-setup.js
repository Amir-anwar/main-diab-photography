import Glide from '@glidejs/glide';

export default function setGilde() {
  window.addEventListener('load', () => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      autoplay: 4000,
      hoverpause: false,
      gap: 0,
    });

    glide.mount();
  });
}
