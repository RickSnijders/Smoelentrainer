var players = [
{
	name: "Blind",
	image: "src/blind.jpg"
},
{
	name: "De Jong",
	image: "src/dejong.jpg"
},
{
	name: "De Ligt",
	image: "src/deligt.jpg"
},
{
	name: "Neres",
	image: "src/neres.jpg"
},
{
	name: "Onana",
	image: "src/onana.jpg"
},
{
	name: "Schone",
	image: "src/schone.jpg"
},
{
	name: "Tadic",
	image: "src/tadic.jpg"
},
{
	name: "Tagliafico",
	image: "src/tagliafico.jpg"
},
{
	name: "Van De Beek",
	image: "src/vandebeek.jpg"
},
{
	name: "Veltman",
	image: "src/veltman.jpg"
},
{
	name: "Ziyech",
	image: "src/ziyech.jpg"
}

];
// Timer
var interval = 1000;
var timerTime = 60;
var width = 100;
var barAmount = Number(width/timerTime);
var timer = setTimeout(countDown, interval);
document.getElementById("timer").innerHTML = "Timer: "+timerTime+"s";

function countDown() {
	timerTime--;
    document.getElementById("timer").innerHTML = "Timer: "+timerTime+"s";
    width = width-barAmount;
    console.log(width);
    document.getElementById("timerBar").style.width = width + "%"; 
    // document.getElementById("timerBar").style.transition = "1s linear"; 
    timer = setTimeout(countDown, interval);


    if(timerTime== 0){
    	clearTimeout(timer);
    	document.getElementById("progress").classList.remove("d-inline-block");
		document.getElementById("invisible").classList.remove("d-none");
    }
}



const buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach(element => {
	console.log(element.id);
	element.onclick = function() { selectIMG(element.id); };
});

const buttons2 = document.querySelectorAll('.button-2');
console.log(buttons2);
buttons2.forEach(element => {
	console.log(element.id);
	element.onclick = function() { selectNAME(element.id); };
});

// Creates random numbers without repeating and places the images on the site
var numbers = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var numbersName = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
for (var i = 0; i < players.length; i++) {
	var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
	var numberIndex = numbers.indexOf(randomNumber);
	numbers.splice(numberIndex,1);
	var randomNumberName = numbersName[Math.floor(Math.random() * numbersName.length)];
	var numberIndexName = numbersName.indexOf(randomNumberName);
	numbersName.splice(numberIndexName,1);

	document.getElementById("img-"+i).src = players[randomNumber].image;
	document.getElementById("btn-"+i).innerHTML = players[randomNumberName].name;
};

var selectedIMG;
var selectedIMGid;

// Select the clicked image
function selectIMG(id){
	// check if there is already a img selected and add/remove border

	if(selectedIMGid == undefined) {

		document.getElementById(id).classList.add("borderActive");
		selectedIMGid = id;
		selectedIMG = document.getElementById(id).src;
	} else{
		// document.getElementById(selectedIMGid).style.outlineStyle = "none";
		document.getElementById(selectedIMGid).classList.remove("borderActive");
		document.getElementById(id).classList.add("borderActive");
		selectedIMGid = id;
		selectedIMG = document.getElementById(id).src;
	}

	//cuts off src path from image
	selectedIMG = selectedIMG.substring(selectedIMG.indexOf("src"));
	checkMatch();
}

var selectedNAME;
var selectedNAMEid;

// Select the clicked name
function selectNAME(id){
	if(selectedNAMEid == undefined) {
		document.getElementById(id).classList.add("borderActive");
		selectedNAMEid = id;
		selectedNAME = document.getElementById(id).innerHTML;
	}
	else{
		document.getElementById(selectedNAMEid).classList.remove("borderActive");
		document.getElementById(id).classList.add("borderActive");

		selectedNAMEid = id;
		selectedNAME = document.getElementById(id).innerHTML;
	}
	checkMatch();
}

var score = 0;
var tries = 0;

// check if the selected image/name is a match
function checkMatch(){
	var selectedNoMatch;
	
	if(selectedNAME != undefined && selectedIMG != undefined){
		tries++;
		document.getElementById("triesCounter").innerHTML = tries;
		resetAnimation();

		for (var i = 0; i < players.length; i++) {
			selectedNoMatch = false;
			console.log(players[i].name);
			if(players[i].name == selectedNAME && players[i].image == selectedIMG){
				// alert("Een set!");
				document.getElementById(selectedNAMEid).style.opacity = "0";
				document.getElementById(selectedNAMEid).style.transition = "1s";
				document.getElementById(selectedNAMEid).onclick = null;

				document.getElementById(selectedIMGid).style.opacity = "0";
				document.getElementById(selectedIMGid).style.transition = "1s";
				document.getElementById(selectedIMGid).onclick = null;
				selectedNAME = undefined;
				selectedIMG = undefined;
				score++;
				document.getElementById("scoreCounter").innerHTML = score;
				if(score == players.length){
					alert("Alles goed!");
				}
				return;
			} else if(players[i].name != selectedNAME || players[i].image != selectedIMG){
				selectedNoMatch = true;
			}
		
		}
		if(selectedNoMatch == true){
			// alert("No match");

			// makes border red
			// document.getElementById(selectedNAMEid).style.outlineColor = "#ff0015";
			// document.getElementById(selectedIMGid).style.outlineColor = "#ff0015";

			document.getElementById(selectedNAMEid).classList.add("shakeAnimation");
			document.getElementById(selectedIMGid).classList.add("shakeAnimation");
	
			selectedNAME = undefined;
			selectedIMG = undefined;
			document.getElementById(selectedNAMEid).classList.remove("borderActive");
			document.getElementById(selectedIMGid).classList.remove("borderActive");
		
		}	
	} else {
		// alert("Niet beide geselecteerd");
	}
	// console.log(selectedNAME);
	// console.log(selectedIMG);
	
}

//reset the animation
function resetAnimation(){
	document.getElementById(selectedIMGid).classList.remove("shakeAnimation");
		document.getElementById(selectedNAMEid).classList.remove("shakeAnimation");
		void document.getElementById(selectedNAMEid).offsetWidth;
		void document.getElementById(selectedIMGid).offsetWidth;
}

