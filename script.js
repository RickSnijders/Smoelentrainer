document.getElementById('start').onclick = function(){
	window.location.href="play.html";
}

document.getElementById('settings').onclick = function(){
	window.location.href="settings.html";
}

document.getElementById('blindspot').onclick = function(){
	window.location.href="blindspot.html";
}
var theme;

if(localStorage.getItem("Theme") == null){
	// gamePeople = localStorage.getItem("GamePeople");
	theme = "standard";
	localStorage.setItem("Theme",theme);
}

