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

console.log("hey");
	var x = setInterval( function() {
		console.log("hey inside");
		document.getElementByTagName("body")[0].classList.toggle("active");
	}, 5 * 1000);