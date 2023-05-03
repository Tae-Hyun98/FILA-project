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
  loopAdditionalSlides: 1,
  centeredSlides: true,
  slidesPerGroup: 1,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  on: {
    activeIndexChange: function () {
      $('.rank_order .rank_bottom ul li').removeClass('active');
      $('.rank_order .rank_bottom ul li').eq(this.realIndex).addClass('active');
    }
  },

});
$(function () {
  $('.rank_order .rank_bottom ul li').click(function (e) {
    e.preventDefault();
    let index = $(this).index();
    rankSwiper.slideToLoop(index);
  });
});

//NEW ARRIVAL
let newSwiper = new Swiper(".newSwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  slidesPerView: "auto",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});