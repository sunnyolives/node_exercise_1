
  // init ----------------------------

	greetingsArray = [];
	greetingsArray[0] = "God morgen";
	greetingsArray[1] = "Vær hilset, fremmede";
	greetingsArray[2] = "Velkommen til galaksen";

	tilfeldigTall = Math.floor(Math.random()*3);

	console.log(greetingsArray[tilfeldigTall]);

/*
lol, første feil "undefined": array går fra 0 til 2, ikke 1 til 3
andre feil: math.random: det heter Math.round, ikke round. og floor, om man vil ned til 0.


forstå:
* Math.random bruk  https://www.freecodecamp.org/challenges/generate-random-whole-numbers-with-javascript
* floor
* round

lær litt bedre:
* array

*/
