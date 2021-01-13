// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

// import Swiper JS
import Swiper,  { Autoplay, Lazy } from 'swiper';
Swiper.use([Autoplay, Lazy]);

document.addEventListener('DOMContentLoaded', () => {
	const infoToogle = document.querySelector('.info-toogle');
	const headerContacts = document.querySelector('.header-contacts');
	const navToogle = document.querySelector('.nav-toogle');
	const mainNav = document.querySelector('.main-nav');

	infoToogle.addEventListener('click', handleInfoToogle);

	navToogle.addEventListener('click', handleNavToogle)

	function handleInfoToogle() {
		headerContacts.classList.toggle('open');
		infoToogle.classList.toggle('open');

		navToogle.classList.remove('open');
		mainNav.classList.remove('open');
	}

	function handleNavToogle() {
		navToogle.classList.toggle('open');
		mainNav.classList.toggle('open');

		headerContacts.classList.remove('open');
		infoToogle.classList.remove('open');
	}

	const mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		autoplay: {
			delay: 15000,
		},
		direction: 'horizontal',
		preloadImages: true,
		lazy: {
			loadPrevNext: true,
		},
		loop: true,
		speed: 600,
	})
})
