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

for (var p = 0; p <= 4; p++) {
	for (var i = 0; i < blindspotArray[p].correctplayers.length; i++) {
		// console.log(blindspotArray[p].correctplayers.length);
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
			/*console.log(players.indexOf(test));*/
			// console.log(players.indexOf(blindspotArray[p].correctplayers[i].name));
		}
	}  

}

console.log(players);

