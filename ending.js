var score = localStorage.getItem("Score");
var tries = localStorage.getItem("Tries");
var date = localStorage.getItem("Date");
var maxScore = localStorage.getItem("Maxscore");
document.getElementById("scoreText").innerHTML = score;
document.getElementById("triesText").innerHTML = tries;

// Puts in the saved history (from games played before) in the history array
var history = [];
for (var i = 0 ; i <= 9; i++) {
		history[i] = localStorage.getItem("History"+(i+1));
	}

// Places the history in the html
for (var i = 1 ; i <= 10; i++) {
		document.getElementById("history-"+i).innerHTML = history[(i-1)];
	}

console.log(history);

function checkHistory(){
	console.log(localStorage.getItem("HistorySet"));
	if(localStorage.getItem("HistorySet") == "true"){
		setHistory();
		localStorage.setItem("HistorySet", false);
	}
}
var test = 0;
// Fills in the last 10 history
function setHistory(){
	var saveHistory = "Score= "+score+"/"+maxScore+", Tries= "+tries+", Date= "+date
	for (var i = 0 ; i <= 9; i++) {
		if(document.getElementById("history-"+(i+1)).innerHTML == ""){
			localStorage.setItem("History"+(i+1),saveHistory);
			history[i] = localStorage.getItem("History"+(i+1));
			document.getElementById("history-"+(i+1)).innerHTML = history[i];
			alert("if "+i);
			return;
		}else{
			test++;
		}
	}
	// if history is full
	if(test==10){
		// moves history one place down
			for(var i = 9 ; i >= 0; i--){
				var temp = localStorage.getItem("History"+i);
				localStorage.setItem("History"+(i+1),temp);
				history[i] = temp;
				document.getElementById("history-"+(i+1)).innerHTML = history[i];
				console.log(temp);
			}
			localStorage.setItem("History"+1,saveHistory);
			history[0] = localStorage.getItem("History"+1);
			document.getElementById("history-"+1).innerHTML = history[0];
			alert("else activated");
	}
}

function resetHistory(){
	for (var i = 1 ; i <= 10; i++) {
		localStorage.setItem("History"+i, "");
		history[(i-1)] = "";
		console.log(localStorage.setItem("History"+i, ""));
		
		console.log(i);
	}
}

document.getElementById("endingBtn").onclick = function(){
	window.location.href="index.html";
}