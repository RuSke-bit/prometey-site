$(document).ready(function(){
    $('.results__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
  });

  $(document).ready(function(){
    $('.testimonials__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 500,
        arrows: true,
        dots: true,
		responsive: [
			{
				breakpoint: 1380,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
    });
  });

let orangeBtn = document.querySelectorAll('.btn-orange');
let arrow = document.querySelectorAll('.icon');

for( let i = 0; i < orangeBtn.length; i++) {
	orangeBtn[i].addEventListener('mouseover', () => {
		arrow[i].classList.add('imgBg');

	orangeBtn[i].addEventListener('mouseout', () =>  {
		arrow[i].classList.remove('imgBg');
	});
	});
}

let testimonialsItem = document.querySelectorAll('.testimonials__item');
let testimonialsImg = document.querySelectorAll('.testimonials__img');

for( let i = 0; i < testimonialsItem.length; i++) {
	testimonialsItem[i].addEventListener('mouseover', () => {
		testimonialsImg[i].classList.add('showTg');

		testimonialsItem[i].addEventListener('mouseout', () =>  {
		testimonialsImg[i].classList.remove('showTg');
	});
	});
}

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const buttonToTop = document.querySelector('.buttonTop');
const headerHeight = header.offsetHeight;
const mainHeight = main.offsetHeight;


window.addEventListener('scroll', () => {
	let scrollPos = window.scrollY;

	if (scrollPos >= mainHeight + headerHeight) {
		header.classList.add('header--fixed');
		main.style.marginTop = `${headerHeight}px`;
		buttonToTop.classList.add('show');
	} else {
		header.classList.remove('header--fixed');
		buttonToTop.classList.remove('show');
	}
})

buttonToTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
})

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
if(popup) {
	setTimeout(() => {
		popup.classList.add('showPopup');
}, 5000);

popupClose.addEventListener('click', () => {
	popup.classList.remove('showPopup');
});
}


const iconMenu = document.querySelector('.menu__icon');
if(iconMenu) {
	const navMenu = document.querySelector('.header__nav');
	iconMenu.addEventListener("click", function(e) {
		iconMenu.classList.toggle('active');
		navMenu.classList.toggle('active');
	})
}

const navBtns = document.querySelector('.nav__btns');
const headerBtns = document.querySelector('.header__btns');
const body = document.querySelector('body');

if(body.offsetWidth < 986) {
	headerBtns.classList.add('hide');
	navBtns.classList.remove('hide')
}


