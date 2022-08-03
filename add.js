// ------------LOADER------------

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}


// ------------SCROLL------------

$(".header__logo").click(function(){
  $("html").animate({
     scrollTop: 0
  }, 600) //delay
})
// Обо мне
const $button = document.querySelector('.about--3');
const $form = document.querySelector('.about--me');     
$button.addEventListener('click', e => {
  document.querySelector('.about--me').scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});
document.querySelector('.about--2').addEventListener('click', e => {
  $(".menu__container").slideUp();
  $form.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});
document.querySelector('.about--1').addEventListener('click', e => {
  $(".menu__container").slideUp();
  $form.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});
// Достижения
const $button4 = document.querySelector('.achievements--1');
const $form4 = document.querySelector('.section__sertificate');     
$button4.addEventListener('click', e => {
  document.querySelector('.section__sertificate').scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});
document.querySelector('.achievements--2').addEventListener('click', e => {
  $(".menu__container").slideUp();
  $form4.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});
// Портфолио
const $button2 = document.querySelector('.portfolio--1');
const $form2 = document.querySelector('.section__portfolio');     
$button2.addEventListener('click', e => {
  document.querySelector('.section__portfolio').scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});
document.querySelector('.portfolio--2').addEventListener('click', e => {
  $(".menu__container").slideUp();
  $form2.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});
// Footer
const $button3 = document.querySelector('.contact--1');
const $form3 = document.querySelector('footer');     
$button3.addEventListener('click', e => {
  document.querySelector('footer').scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});
document.querySelector('.contact--2').addEventListener('click', e => {
  $(".footer").slideUp();
  $form3.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});


// ------------MENU------------

$(".menu__container").hide();

$(".menu__open").click(function(){
  $(".menu__container").slideDown();
})
$(".menu__close").click(function(){
  $(".menu__container").slideUp();
})


// ------------ABOUT ME------------

$('.about__card').tilt({
  glare: true,
  maxGlare: .5
})


// ------------PORTFOLIO CAROUSEL------------

var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$(".modal__sertificate1").hide()
$(".modal__sertificate2").hide()

$(".sertificate1").click(function(){
  $(".modal__sertificate1").fadeIn();
})
$(".sertificate2").click(function(){
  $(".modal__sertificate2").fadeIn();
})

$(".modal__sertificate--close").click(function(){
  $(".modal__sertificate1").fadeOut();
  $(".modal__sertificate2").fadeOut();
})