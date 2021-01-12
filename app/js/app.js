// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

// import Swiper JS
import Swiper,  { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

document.addEventListener('DOMContentLoaded', () => {
	const infoToogle = document.querySelector('.info-toogle');
	const headerContacts = document.querySelector('.header-contacts');

	const navToogle = document.querySelector('.nav-toogle');
	

	infoToogle.addEventListener('click', handleInfoToogle);
	navToogle.addEventListener('click', function(e) {
		console.log('evt', e);
	});

	function handleInfoToogle() {
		if(headerContacts.classList.contains('open')) {
			headerContacts.classList.remove('open');
		} else {
			headerContacts.classList.add('open');
			// window.addEventListener('click', () => handleWindowClick(evt));
		}
	}

	function handleWindowClick(evt) {
		if (evt.target != headerContacts) {
			headerContacts.classList.remove('open');
		}
			
	}

	const mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		autoplay: {
			delay: 5000,
		},
		direction: 'horizontal',
		loop: true,
		lazy: true,
	})
})
