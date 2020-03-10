//Event emmiter, costume events
const events = require('events');

const mojEmiter = new events.EventEmitter();

mojEmiter.on('zdarzenie', (data)=> console.log (data));

//musi byc po on bo nie zadziala (jakby symulacja zajscia zdarzenia, np jakby symulacja klikniecia)
mojEmiter.emit('zdarzenie', {
	wiadomosc : 'zaszlo zdarzenie',
});//wyemituj zdarzenie o nazwie zdarzenie i zwroc dane jako obiekt


//dziedziczenie eventu dzieki modulowi util
const util = require('util');

//tworze konstruktor klasy Persona ktora odziedziczy zdolnosc eventEmitter
const Persona = function(name){
	this.name = name;
}

//polecenia dodania dziedziczenia do klasy Persona
util.inherits(Persona, events.EventEmitter);//(jaki element ma dziedziczyc cos, co ma dziedziczyc)

const janek = new Persona('Janek');
const zosia = new Persona('Zosia');
const kasia = new Persona('Kasia');

//dodamy tablice zawierajaca te elementy aby w petli nadac im zdarzenie na jakie maja reagowac
const persony = [janek, zosia, kasia];

persony.forEach( function(person){
	person.on('powiedz', function (argument){ //dodanie even listenera do obiektow persony
		console.log(`${person.name} powiedzial: ${argument}`);
	});
});

//teraz mozemy na tych elementach wywolywac zdarzenia
zosia.emit('powiedz','co sie gapisz?');
janek.emit('powiedz', 'nic ci do tego');