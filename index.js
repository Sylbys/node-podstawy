//funkcje tworzenie


//normalna deklaracja funkcji - normal statement
function mojaFunkcja(){
	console.log('to jest mojaFunkcja');
};


//wyrazenie funkcyjne - function expression
var przywitaj = function(){
	console.log('Witaj ziom!');
};

//call function

function powiadom(func){
	func();
	console.log('co tam robisz?');
}

powiadom(mojaFunkcja);

powiadom(przywitaj);