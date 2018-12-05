/**
 * 01 - ЕФЕКТ ДРУКУ ТЕКСТУ
 * 02 - ПРЕЛОАДЕР
 * 03 - СЛАЙДЕР
 */

var globalPreloadEnd = 0;

var webshum = (function() {

	// 01 - ЕФЕКТ ДРУКУ ТЕКСТУ
	function EfectPrintText(obj) {
		var elem = document.querySelector(obj.elem);

		if (elem != null) {
			var	text = elem.innerHTML,
				count = 0;

			elem.innerHTML = '';

			setTimeout(function() {
				var interval = setInterval(function() {
					elem.innerHTML += text[count];
					count++;
					if (count >= text.length) clearInterval(interval);
				}, obj.speed);
			}, obj.paused);
		}		
	}

	new EfectPrintText({
		elem: '.loader',
		speed: 100,
		paused: 0
	});	

	// 02 - ПРЕЛОАДЕР
	document.body.onload = function() {
		setTimeout(function() {
			var preloader = document.getElementById('page-preloader');

			if (preloader != null) {
				if (!preloader.classList.contains('done')) {
					preloader.classList.add('done');
					document.querySelector('.logo').classList.add('active-anim');
				}
			}			
		}, 5000);
	}

	// 02 - СЛАЙДЕР
	function Slider(settings) {
		var slider = document.querySelector(settings.elem);

		if (slider != null) {
			var slides = slider.querySelectorAll('.slide-item')
				play = slider.querySelectorAll('.play');

			for (var i = 0; i < slides.length; i++) {
				slides[i].setAttribute('data-index', i);
			}

			// click to the button play
			for (var i = 0; i < play.length; i++) {
				play[i].addEventListener('click', function(e) {
					var	data = this.closest('.slide-item').getAttribute('data-index');

					for (var i = 0; i < slides.length; i++) {
						slides[i].classList.remove('active');
					}			

					if (Number(data) == slides.length - 1) {
						slides[0].classList.add('active');
					} else {
						var current = this.closest('.slide-item');
						current.nextElementSibling.classList.add('active');		
					}								
				});
			}			
		}
	}

	var slider = new Slider({
		elem: '.slider-portfolio'
	});
})();