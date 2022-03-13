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

const objectInput = document.querySelectorAll('.object__input');
const objectName = document.getElementById('objectName');
const objectPhone = document.getElementById('objectPhone');
const objectBtn = document.querySelector('.object__btn');
const error = document.querySelector('.object__error');
objectInput.forEach(el => {
  el.addEventListener('input', (e)=>{
    if(objectName.value.length != 0 && objectPhone.value.length != 0){
      objectBtn.removeAttribute('disabled');
      error.classList.remove('active')
    }else{
      objectBtn.setAttribute('disabled', '');
      error.classList.add('active')
    }
  })
});

