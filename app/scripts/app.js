import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();

	const swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		pagination: {
		  el: ".swiper-pagination",
		},
	  });
});
