var webshum = (function() {

	// ЕФЕКТ ДРУКУ ТЕКСТУ
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
		elem: '.slogan',
		speed: 100,
		paused: 1000
	});
})();