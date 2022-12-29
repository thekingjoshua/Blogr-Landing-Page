'use strict';
const hamburger = document.querySelector('.hambuger'),
	closeMenu = document.querySelector('.close__menu'),
	modal = document.querySelector('.modal'),
	links = document.querySelectorAll('.modal div'),
	connectLink = document.querySelector('.connect__link'),
	connectLinkMobile = document.querySelector('.connect__link__mobile'),
	connectModal = document.querySelector('.connect__modal'),
	connectModalMobile = document.querySelector('.connect__modal__mobile'),
	html = document.querySelector('html'),
	desktop = document.querySelectorAll('.desktop'),
	firstImg = document.querySelector('.first__img'),
	thirdImg = document.querySelector('.third__img');

// changing some images to suitable images for destop view
(function () {
	if (window.innerWidth > 768) {
		firstImg.src = `illustration-editor-desktop.svg`;
		thirdImg.src = `illustration-laptop-desktop.svg`;
	}
})();
hamburger.addEventListener('click', e => {
	hamburger.style.display = 'none';
	closeMenu.style.display = 'block';
	modal.classList.toggle('hidden');
	html.classList.toggle('no-scroll');
});
closeMenu.addEventListener('click', e => {
	hamburger.style.display = 'block';
	closeMenu.style.display = 'none';
	modal.classList.toggle('hidden');
	html.classList.toggle('no-scroll');
});

connectLink.addEventListener('click', e => {
	const arrow = e.target;
	arrow.classList.toggle('fa-chevron-down');
	arrow.classList.toggle('fa-chevron-up');
	connectModal.classList.toggle('hidden');
});
connectLinkMobile.addEventListener('click', e => {
	const arrow = e.target.children[0];
	arrow.classList.toggle('fa-chevron-down');
	arrow.classList.toggle('fa-chevron-up');
	connectModalMobile.classList.toggle('hidden');
	console.log(connectModal);
});

// connectLinks.forEach(link => {
// link.addEventListener('click', (e) => {
// });
// });

// connectLink.addEventListener('click', e => {

// 	console.log('okay');
// });
