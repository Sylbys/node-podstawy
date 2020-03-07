//obiekt global - cos jak window w przegladarce, udostepnia funkcje do uzycia w node
let licznik=0;
console.log('witaj ')
setTimeout( () => {
	console.log( 'minęła 1 sek, teraz co dwie sekundy wyswietle licznik') ;
	const timer = setInterval( () => {
		console.log(`minęło ${licznik+=2} sekund`);
		if (licznik>10){
			clearInterval(timer);
		}
	},2000);
}, 1000);
console.log('Obecnie znajdujesz sie w folderze'+__dirname);
console.log('plik '+__filename);

// const http = require('http');

// const server = http.cerateServer((req,res) => {
// 	const ip = res.socke
// }).listen(3000);
