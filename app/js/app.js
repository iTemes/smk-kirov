import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

// OnScreen
import OnScreen from 'onscreen';

// import Swiper JS
import Swiper,  { Autoplay, Lazy } from 'swiper';
Swiper.use([Autoplay, Lazy]);

document.addEventListener('DOMContentLoaded', () => {
	const infoToogle = document.querySelector('.info-toogle');
	const headerContacts = document.querySelector('.header-contacts');
	const navToogle = document.querySelector('.nav-toogle');
	const mainNav = document.querySelector('.main-nav');
	const relativeLinks = document.querySelectorAll('.main-nav__link');

	infoToogle.addEventListener('click', handleInfoToogle);
	navToogle.addEventListener('click', handleNavToogle);

	relativeLinks.forEach(function(it) {
		it.addEventListener('click', () => {
			it.classList.toggle('active');
		})
	})

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
			delay: 5000,
		},
		direction: 'horizontal',
		preloadImages: true,
		lazy: {
			loadPrevNext: true,
		},
		loop: true,
		speed: 600,
	});

	const os = new OnScreen({
		tolerance: 50,
		debounce: 50,
		container: window
	});

	os.on('enter', '.about__item', (element, event) => {
		// makes's the element's text red
		element.classList.add('ShowIn')
	
	});
	console.log('OnScreen', os)
})
