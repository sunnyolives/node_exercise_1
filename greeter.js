// KVA GJER EG: Plukker ut en tilfeldig hilsen
// init ----------------------------
	'use strict'

	var	greetingsArray = ["Ohayou gozaimasu!"];
	greetingsArray.push("Vær hilset, fremmede!", "Velkommen til galaksen!", "God morgen!");

	var tilfeldigIndeks = Math.floor(Math.random()*greetingsArray.length);

	console.log(greetingsArray[tilfeldigIndeks]);

