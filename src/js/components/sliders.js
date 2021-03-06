import Swiper, { Navigation, Pagination, Thumbs, FreeMode} from "swiper"; 
Swiper.use([Navigation, Pagination, Thumbs, FreeMode]); 

const gallerySlider = document.querySelector('.gallery__images-slider');

if (gallerySlider) {
  const workSlider = new Swiper('.gallery__images-thumbs', {
    slidesPerView: 5.5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 7,
      },
      576: {
        slidesPerView: 5.5,
      }
    }
  });
  const gallerySliderThumbs = new Swiper(gallerySlider, {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".gallery__images-switch--next",
      prevEl: ".gallery__images-switch--prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}

const lettersSlider = new Swiper(".letters__slider", { 
  speed: 600,
  slidesPerView: 1.5, 
  loop: true,
  navigation: { 
    nextEl: ".letters__switch--next", 
    prevEl: ".letters__switch--prev", 
  },
  breakpoints: {
    1100: {
      slidesPerView: 3,
    },
    725: {
      slidesPerView: 2.5,
    },
    414: {
      slidesPerView: 1.5,
    },
  }
});

const cardSlider = new Swiper(".card-product__slider", { 
  speed: 600,
  slidesPerView: 1, 
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  }
});



const mobSlider = document.querySelector('.news__body, .about-blog__body, .vacancy__sidebar, .post__sidebar');

let myMobSwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && mobSlider.dataset.mobile == 'false') {
		myMobSwiper = new Swiper(mobSlider, {
			slidesPerView: 1.2,
      freeMode: true,
			slideClass: 'news-articles__item, .about-blog__item, .vacancy__sidebar-item, .post__sidebar-item'
		});

		mobSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600) {
		mobSlider.dataset.mobile = 'false';
		if (mobSlider.classList.contains('swiper-initialized')) {
			myMobSwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});