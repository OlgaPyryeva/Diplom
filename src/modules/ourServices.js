import Swiper, { Autoplay, Navigation } from "swiper";

const ourServices = () => {
  const swiperServices = new Swiper(".swiper-services", {
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
    },
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation],

    navigation: {
      nextEl: ".services__arrow--left",
      prevEl: ".services__arrow--right",
    },
  });
};

export default ourServices;
