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
const btn = document.querySelectorAll('.input__btn');
const error = document.querySelectorAll('.input__error');
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

const input1 = document.querySelectorAll('.input1');
const name1 = document.getElementById('name1');
const phone1 = document.getElementById('phone1');
const btn1 = document.querySelector('.input__btn1');
const error1 = document.querySelector('.input__error1');
input1.forEach(el => {
  el.addEventListener('input', (e)=>{
    if(name1.value.length != 0 && phone1.value.length != 0){
      btn1.removeAttribute('disabled');
      error1.classList.remove('active')
    }else{
      btn1.setAttribute('disabled', '');
      error1.classList.add('active')
    }
  })
});

const input2 = document.querySelectorAll('.input2');
const name2 = document.getElementById('name2');
const phone2 = document.getElementById('phone2');
const btn2 = document.querySelector('.input__btn2');
input2.forEach(el => {
  el.addEventListener('input', (e)=>{
    if(name2.value.length != 0 && phone2.value.length != 0){
      btn2.removeAttribute('disabled');
    }else{
      btn2.setAttribute('disabled', '');
    }
  })
});
const input3 = document.querySelectorAll('.input3');
const name3 = document.getElementById('name3');
const phone3 = document.getElementById('phone3');
const btn3 = document.querySelector('.input__btn3');
input3.forEach(el => {
  el.addEventListener('input', (e)=>{
    if(name3.value.length != 0 && phone3.value.length != 0){
      btn3.removeAttribute('disabled');
    }else{
      btn3.setAttribute('disabled', '');
    }
  })
});
const input4 = document.querySelectorAll('.input4');
const name4 = document.getElementById('name4');
const phone4 = document.getElementById('phone4');
const btn4 = document.querySelector('.input__btn4');
input4.forEach(el => {
  el.addEventListener('input', (e)=>{
    if(name4.value.length != 0 && phone4.value.length != 0){
      btn4.removeAttribute('disabled');
    }else{
      btn4.setAttribute('disabled', '');
    }
  })
});
const input5 = document.querySelectorAll('.input5');
const name5 = document.getElementById('name5');
const phone5 = document.getElementById('phone5');
const btn5 = document.querySelector('.input__btn5');
input5.forEach(el => {
  el.addEventListener('input', (e)=>{
    if(name5.value.length != 0 && phone5.value.length != 0){
      btn5.removeAttribute('disabled');
    }else{
      btn5.setAttribute('disabled', '');
    }
  })
});
const input6 = document.querySelectorAll('.input6');
const name6 = document.getElementById('name6');
const phone6 = document.getElementById('phone6');
const btn6 = document.querySelector('.input__btn6');
input6.forEach(el => {
  el.addEventListener('input', (e)=>{
    if(name6.value.length != 0 && phone6.value.length != 0){
      btn6.removeAttribute('disabled');
    }else{
      btn6.setAttribute('disabled', '');
    }
  })
});


document.querySelectorAll('.popup-open').forEach(btn=>{
  btn.addEventListener('click', e => {
    const target = btn.getAttribute('data-target');
    const popup = document.querySelector(target);
    popup.classList.add('active');
    document.body.style.overflowY = "hidden";
  })
})

const close = document.querySelectorAll('.popup-close');
close.forEach(close => {
  close.addEventListener('click', (el)=>{
    close.closest('.popup').classList.remove('active');
    document.body.style.overflowY = "auto";
  })
});