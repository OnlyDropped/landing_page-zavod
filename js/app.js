$('.company-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  speed: 1500,
  arrows: true,
  easing: 'easeOutElastic',
  cssEase: 'ease-in-out',
  dots: true,  
  infinite: false,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/company/next.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/company/next.svg" alt=""></button>',
    responsive: [
    {
      breakpoint: 821,
      settings: {
        arrows: false,
      }
    },
  ]    
})

// const btn = document.querySelector('.header-nav__button');
// btn.addEventListener('click', function (e) {
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.currentTarget);
// })

const btn = document.querySelector('.company__call-back');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.classList.add('overlay__active');
})

close.addEventListener('click', () => {
  overlay.classList.remove('overlay__active');
})


const button = document.querySelector('.header-nav__btn');
button.addEventListener('click', () => {
  button.classList.toggle('header-nav__btn--active')
})

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map ('myMap', {
        center: [56.369443297651316, 44.04006440994252],
        zoom: 15,
        controls: ["zoomControl", "fullscreenControl"]
    });

    
}


