import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

let reviewsSwiper = null;

const initReviewsSwiper = () => {
  if (window.innerWidth >= 1440 || reviewsSwiper) {
    return;
  }

  reviewsSwiper = new Swiper('.reviews-swiper', {
    modules: [Autoplay],

    slidesPerView: 1.3,
    spaceBetween: 16,

    loop: true,
    speed: 700,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
};

const destroyReviewsSwiper = () => {
  if (!reviewsSwiper) {
    return;
  }

  reviewsSwiper.destroy(true, true);
  reviewsSwiper = null;
};

const handleReviewsSwiper = () => {
  if (window.innerWidth < 1440) {
    initReviewsSwiper();
  } else {
    destroyReviewsSwiper();
  }
};

handleReviewsSwiper();

window.addEventListener('resize', handleReviewsSwiper);