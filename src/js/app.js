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

  new Swiper(".members__swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".members__button-next",
      prevEl: ".members__button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 3,
      },
      576:{
        slidesPerView: 2,
        spaceBetween: 20,
      }
    },
  });
  new Swiper(".risk__swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 26,
    navigation: {
      nextEl: ".risk__button-next",
      prevEl: ".risk__button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      767:{
        slidesPerView: 2,
      }
    },
  });
  new Swiper(".clients__swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 26,
    navigation: {
      nextEl: ".clients__button-next",
      prevEl: ".clients__button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      767:{
        slidesPerView: 2,
      }
    },
  });

const input = document.querySelectorAll('.input');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const btn = document.querySelector('.input__btn');
const error = document.querySelector('.input__error');
input.forEach(el => {
  el.addEventListener('input', (e)=>{
    if(name.value.length != 0 && phone.value.length != 0){
      btn.removeAttribute('disabled');
      error.classList.remove('active')
    }else{
      btn.setAttribute('disabled', '');
      error.classList.add('active')
    }
  })
});

