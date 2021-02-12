
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

