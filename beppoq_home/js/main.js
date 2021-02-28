
	console.log("sdjf");
	var str_l = document.getElementById("str_l"),
	left = 0,
	dott = document.getElementsByClassName("dot"),
	polosa = document.getElementById("polosa");
	str_l.addEventListener("click", function(){
		left -= 822;
		for (var i = 0; i < dott.length; i++) {
			dott[i].classList.remove("dot_active");
		}
		if (left < -3288) {
			left = 0;
			polosa.style.marginLeft = left + "px";
			dott[0].classList.add("dot_active");
		}
		else if (left == 0) {
			for (var i = 0; i < dott.length; i++) {
				dott[i].classList.remove("dot_active");
			}
			dott[0].classList.add("dot_active");
			polosa.style.marginLeft = left + "px";
		}
		else if (left == -822) {
			for (var i = 0; i < dott.length; i++) {
				dott[i].classList.remove("dot_active");
			}
			dott[1].classList.add("dot_active");
			polosa.style.marginLeft = left + "px";
		}
		else if (left == -1644) {
			for (var i = 0; i < dott.length; i++) {
				dott[i].classList.remove("dot_active");
			}
			dott[2].classList.add("dot_active");
			polosa.style.marginLeft = left + "px";
		}
		else if (left == -2466) {
			for (var i = 0; i < dott.length; i++) {
				dott[i].classList.remove("dot_active");
			}
			dott[3].classList.add("dot_active");
			polosa.style.marginLeft = left + "px";
		}
		else if (left == -3288) {
			for (var i = 0; i < dott.length; i++) {
				dott[i].classList.remove("dot_active");
			}
			dott[4].classList.add("dot_active");
			polosa.style.marginLeft = left + "px";
		}
	}, false);
	
	dott[0].addEventListener('click', function(){
		polosa.style.marginLeft = 0;
		for (var i = 0; i < dott.length; i++) {
			dott[i].classList.remove("dot_active");
		}
		dott[0].classList.add("dot_active");
	}, false);
	dott[1].addEventListener('click', function(){
		polosa.style.marginLeft = -822 + "px";
		left = -822;
		for (var i = 0; i < dott.length; i++) {
			dott[i].classList.remove("dot_active");
		}
		dott[1].classList.add("dot_active");
	}, false);
	dott[2].addEventListener('click', function(){
		polosa.style.marginLeft = -1644 + "px";
		left = -1644;
		for (var i = 0; i < dott.length; i++) {
			dott[i].classList.remove("dot_active");
		}
		dott[2].classList.add("dot_active");
	}, false);
	dott[3].addEventListener('click', function(){
		polosa.style.marginLeft = -2466 + "px";
		left = -2466;
		for (var i = 0; i < dott.length; i++) {
			dott[i].classList.remove("dot_active");
		}
		dott[3].classList.add("dot_active");
	}, false);
	dott[4].addEventListener('click', function(){
		polosa.style.marginLeft = -3288 + "px";
		left = -3288;
		for (var i = 0; i < dott.length; i++) {
			dott[i].classList.remove("dot_active");
		}
		dott[4].classList.add("dot_active");
	}, false);




	var menu = document.getElementsByClassName("podmenu")[0];
	var li = menu.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++ ) {
		li[i].addEventListener('mouseover', function(){
			for ( var e = 0; e < li.length; e++) {
				li[e].children[0].style.display = 'none';
			};
			this.children[0].style.display = "block";

		}, false);
	}






	
