let buttonOpen = document.querySelector('.footer__open');
let buttonClose = document.querySelector('.footer__close');
let swiper = document.querySelector('.swiper-wrapper');

buttonOpen.addEventListener('click', function() {
    swiper.classList.remove('swiper-wrapper--height');
    buttonOpen.classList.add('hide');
    buttonClose.classList.remove('hide');
})

buttonClose.addEventListener('click', function() {
    swiper.classList.add('swiper-wrapper--height');
    buttonOpen.classList.remove('hide');
    buttonClose.classList.add('hide');
})

// свайпер

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
  });