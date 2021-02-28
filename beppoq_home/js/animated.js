window.onload = function(){
	var fots = document.getElementsByClassName("fad");
	window.addEventListener("scroll", function(){
		var scrolltop = document.getElementsByTagName("body")[0].scrollTop;
			for (var i = 0; i < fots.length; i++) {
				var f = fots[i].offsetTop;
				if ((scrolltop + 700) > f) {
				fots[i].classList.add("animated");
				fots[i].classList.add("fadeInUp");
				}
			}
	}, false);
}