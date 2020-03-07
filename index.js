const user = require('./user');
const dzialania = require('./wieleFunkcji');
const prosciej = require('./prosciej.js')
const obiekt = require('./obiekt.js');

//user.js pojedyncza funkcja
user('Tomek');
//wieleFunkcji.js jako wlasciwosci obiektu osobno
dzialania.dodaj(3,4);
dzialania.odejmij(3,4);
dzialania.pomnoz(3,4);
dzialania.podziel(3,4);
//prosciej.js jako bezposrednie oksporty osobno
prosciej.dodaj(15,7);
prosciej.odejmij(19,8);
//obiekt.js modul jako caly pojedynczy obiekt 
obiekt.dodaj(255,2);