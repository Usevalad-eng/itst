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

var peremE = peremC - peremD;//12 b разделить на 10

var peremH = peremE % 10;//2

var peremJ = peremE - peremH;//1

console.log(peremD + peremH + peremJ);






