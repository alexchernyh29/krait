import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import { active } from 'browser-sync';

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

	const slide = new Swiper(".Swiper", {
		spaceBetween: 30,
		pagination: {
		  el: ".swiper-pagination",
		},
	  });

	  const swiperproducts = new Swiper(".productsSwiper", {
		spaceBetween: 30,
		navigation: {
		  nextEl: ".sale__button__next",
		  prevEl: ".sale__button__prev",
		},
		});

	
	$(function() {
		$(".sale__wrapper-content").not(":first").hide()
		$(".sale__list-item").on("click", function() {
			$(".sale__list-item").removeClass("active").eq($(this).index()).addClass("active")

		})
	});
});
