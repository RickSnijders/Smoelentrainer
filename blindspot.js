blindspotArray = JSON.parse(localStorage.getItem("BlindspotArray"));
console.log(blindspotArray);
var players = [
{
	name: "Blind",
	image: "src/blind.jpg",
	wrongcount: 0
},
{
	name: "De Jong",
	image: "src/dejong.jpg",
	wrongcount: 0
},
{
	name: "De Ligt",
	image: "src/deligt.jpg",
	wrongcount: 0
},
{
	name: "Neres",
	image: "src/neres.jpg",
	wrongcount: 0
},
{
	name: "Onana",
	image: "src/onana.jpg",
	wrongcount: 0
},
{
	name: "Schone",
	image: "src/schone.jpg",
	wrongcount: 0
},
{
	name: "Tadic",
	image: "src/tadic.jpg",
	wrongcount: 0
},
{
	name: "Tagliafico",
	image: "src/tagliafico.jpg",
	wrongcount: 0
},
{
	name: "Van De Beek",
	image: "src/vandebeek.jpg",
	wrongcount: 0
},
{
	name: "Veltman",
	image: "src/veltman.jpg",
	wrongcount: 0
},
{
	name: "Ziyech",
	image: "src/ziyech.jpg",
	wrongcount: 0
}

];

// console.log(blindspotArray[0].correctplayers);
// console.log(blindspotArray[1].correctplayers);
// console.log(blindspotArray[2].correctplayers);
// console.log(blindspotArray[3].correctplayers);
// console.log(blindspotArray[4].correctplayers);
// console.log(blindspotArray[0].correctplayers.length);

document.getElementById("endingBtn").onclick = function(){
	window.location.href="index.html";
}


// A for loop for the last 5 histories
for (var p = 0; p <= 4; p++) {
	// A for loop the lenght of the players that were in that game of the specific history
	for (var i = 0; i < blindspotArray[p].correctplayers.length; i++) {
		// If the players is correct the wrongcount of the player gets +1
		if(blindspotArray[p].correctplayers[i].correct == false){
			// console.log("p = "+p);
			// console.log("i = "+i);
			// console.log(blindspotArray[p].correctplayers[i].name+", correct: "+ blindspotArray[p].correctplayers[i].correct)
			// console.log(blindspotArray[p].correctplayers[i].name);

			function findPlayer(player) {
    			return player.name === blindspotArray[p].correctplayers[i].name;
			}

			var playerinfo = players.find(findPlayer);
			console.log(playerinfo);

			var playerindex = players.indexOf(playerinfo);
			console.log("index "+playerindex);
			console.log(players[playerindex].wrongcount);
			players[playerindex].wrongcount++;
			console.log(players[playerindex].wrongcount);
			//console.log(players.indexOf(test));//
			// console.log(players.indexOf(blindspotArray[p].correctplayers[i].name));
		}
	}  

}

// Sorts the array with the wrongcount, highest count is first in the array
var players2 = players;
function SortBlindspot(){
	players2.sort((a, b) => b.wrongcount.toString().localeCompare(a.wrongcount.toString()));
	console.log(players2);
}

SortBlindspot();

// gets the first 3 players in the array and puts them on the page
function GetBlindSpotPlayers(){
	for (var i = 0; i <= 2; i++) {
		playerIMG = players2[i].image;
		playerNAME = players2[i].name;
		playerWRONG = players2[i].wrongcount;
		document.getElementById("img-"+(i+1)).src = playerIMG;
		document.getElementById("name-"+(i+1)).innerHTML = playerNAME;
		document.getElementById("wrong-"+(i+1)).innerHTML = playerWRONG;
		
	}
}
GetBlindSpotPlayers();
console.log(players);

