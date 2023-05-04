//비쥬얼메인
let swiper = new Swiper(".myswiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
    renderBullet: function (index, className) {
      return '<span class=""' + className + '>' +
        (index + 1) + '</span>'
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let pagingSwiper = new Swiper(".myswiper", {
  loop: true,
  pagination: {
    loop: true,
    el: ".swiper-pagination2",
    type: "progressbar",

  },
});
swiper.controller.control = pagingSwiper;

//랭킹
let rankSwiper = new Swiper(".rankSwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerGroup: 1,
  slidesPerView: 3,
  slideToClickedSlide: true,
  speed:1000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  on: {
    slideChange: function () {
      $('.rank_order .rank_bottom ul li').removeClass('active');
      $('.rank_order .rank_bottom ul li').eq(this.realIndex).addClass('active');
    }
    /* activeIndexChange: function () {
      $('.rank_order .rank_bottom ul li').removeClass('active');
      $('.rank_order .rank_bottom ul li').eq(this.realIndex).addClass('active');
    } */
  },

});

$('.rank_order .rank_bottom ul li').click(function (e) {
  e.preventDefault();
  let index = $(this).index();
  rankSwiper.slideToLoop(index);
});


//NEW ARRIVAL
const newSwiper = new Swiper(".newSwiper", {
  loop: true,
  init: true,
  loopAdditionalSlides: 1,
  centeredSlides: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  slidesPerView: "auto",
  observer: true,
  initialSlide: 0,
  observeParents: true,
  roundLengths: true,
  speed:1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});