/**
 * 01 - ЕФЕКТ ДРУКУ ТЕКСТУ
 * 02 - ПРЕЛОАДЕР
 */

var globalPreloadEnd = 0;

var webshum = (function() {

	// 01 - ЕФЕКТ ДРУКУ ТЕКСТУ
	function EfectPrintText(obj) {
		var elem = document.querySelector(obj.elem),
			text = elem.innerHTML,
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

	var logoTextSlogan = new EfectPrintText({
		elem: '.loader',
		speed: 100,
		paused: 0
	});

	// 02 - ПРЕЛОАДЕР
	document.body.onload = function() {
		setTimeout(function() {
			var preloader = document.getElementById('page-preloader');

			if (!preloader.classList.contains('done')) {
				preloader.classList.add('done');
				document.querySelector('.logo').classList.add('active-anim');
			}
		}, 5000);
	}
})();