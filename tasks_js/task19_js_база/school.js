var storonaKvadrata = 5;
var Perimeter = storonaKvadrata * 4;
console.log(Perimeter);

var radiusOkruzhnosti = 10;
var ploshchadKruga = Math.PI * (radiusOkruzhnosti ** 2);
console.log(ploshchadKruga);

var aKatet = 2;
var bKatet = 2;
var cGipotenuza = ((aKatet ** 2) + (bKatet ** 2)) / ((aKatet ** 2) + (bKatet ** 2));
console.log(cGipotenuza);

var permennayaA = 1;
var permennayaB = 2;
var permennayaC = permennayaA;
permennayaA = permennayaB;
permennayaB = permennayaC;
console.log(permennayaA);
console.log(permennayaB);

var permennayaG = 1;
var permennayaH = 2;
permennayaG *= permennayaH;
permennayaH /= permennayaG;
permennayaG /= permennayaH;
console.log(permennayaG);
console.log(permennayaH);

var peremC = 123;
var peremD = peremC % 10;//3
var peremE = peremC - peremD;//120 - b разделить на 10
peremE = peremE / 10; //12
var peremH = peremE % 10;//2
var peremJ = peremE - peremH;//10
peremJ = peremJ / 10; //1
console.log(peremD + peremH + peremJ);

var peremT = peremD * 100 + peremH * 10 + peremJ;
console.log(peremT);

let credit = 1_000, percent = 10, year = 3;
let diff = credit * (1+percent/100)**year - credit;
console.log(diff);

let min = 1, max = 10;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);






