function toggleSidebar() {
	document.getElementById("sideBar").classList.toggle("active");
	document.getElementById("burger").classList.toggle("active");
	document.getElementById("coverDiv").classList.toggle("active");
	if (document.getElementById("subPieces").classList == "active") {
		document.getElementById("subPieces").classList.toggle("active");
	}
}

function togglePieces() {
	document.getElementById("subPieces").classList.toggle("active");
}

function relocate(destination) {
	var elem = document.createElement('meta');
	elem.setAttribute('http-equiv', 'refresh');
	elem.setAttribute('content', '0; url=https://lachlanmurphy.github.io/SophiaLuem/' + destination + '/');
	document.getElementsByTagName('head')[0].appendChild(elem);
}

var x = setInterval( function() {
	document.getElementById("background2").classList.toggle('active');
}, 15 * 1000);

let stateCheck = setInterval(() => {
  if (document.contains(document.getElementById("background2"))) {
    clearInterval(stateCheck);

	document.getElementById("background2").style.animation = "background_animTwo 150s linear infinite";
	document.getElementById('background1').style.animation = "background_anim 150s linear infinite";
	document.getElementById("background2").style.backgroundRepeat = "repeat";
	document.getElementById('background1').style.backgroundRepeat = "repeat";

	document.getElementById('loadingScreen').style.display = "none";
  } else if (window.getComputedStyle( document.body ,null).getPropertyValue('background-color') !== "rgba(0, 0, 0, 0)") {
  	clearInterval(stateCheck);

  	document.getElementById('loadingScreen').style.display = "none";
  }
});