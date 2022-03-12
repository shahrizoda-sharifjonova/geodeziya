import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".intro__swiper", {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 15,
    navigation: {
      nextEl: ".intro__button-next",
      prevEl: ".intro__button-prev",
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });