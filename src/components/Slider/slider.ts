import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const slider = () => {
  Swiper.use([Autoplay, EffectFade]);
  const slider = document.querySelector<HTMLElement>('.swiper');
  const slides = document.querySelectorAll<HTMLElement>('.swiper-slide');
  const loop = slides.length > 1;
  const autoplayOption =
    slides.length > 1
      ? {
          delay: 1000,
          disableOnInteraction: false,
        }
      : false;

  slider &&
    new Swiper(slider, {
      loop: loop,
      slidesPerView: 1,
      autoplay: autoplayOption,
      speed: 1000,
      effect: 'fade',
      allowTouchMove: false,
    });
};

export default slider;
