//let storonaKvadrata: number = 5;
//let Perimeter: (storonaKvadrata:number) => number;
//Perimeter = storonaKvadrata * 4;
//console.log(Perimeter);
/*
function per (storonaKvadrata: number): number {
    return storonaKvadrata * 4;

    };

function print_per (storonaKvadrata: number): void {
    console.log(storonaKvadrata * 4);
    };
    */
//1
var b = Math.pow(1000, 0.5);
var a = b;
//let b: number = a * 4;
console.log(a * 4);
//2
var sideA = 4;
var sideB = 4;
var sideC = 5;
if (sideA == sideB && sideB == sideC) {
    console.log("равносторнний");
}
else if (sideA != sideB && sideB != sideC && sideC != sideA) {
    console.log("разносторонний");
}
else if (sideA == sideB || sideB == sideC || sideC == sideA) {
    console.log("равнобедренный");
}
else {
    console.log("не знаю");
}
//3
var sideAA = 4;
var sideBB = 4;
var sideCC = 5;
if (sideAA + sideBB > sideCC && sideAA + sideCC > sideBB && sideBB + sideCC > sideAA) {
    console.log("треугольник существует");
}
else {
    console.log("треугольник не существует");
}
//4 
var vozrast = 10;
if (vozrast < 17) {
    console.log("молодой");
}
else if (vozrast >= 17 && vozrast <= 69) {
    console.log("взрослый");
}
else {
    console.log("древний");
}
//5
for (var i = 10; i < 21; i++) {
    console.log(i * i);
}
//6
var nChislo = 1, mSumma = 0;
while (nChislo <= 20) {
    if (nChislo % 5 == 0) {
        mSumma += nChislo;
        nChislo++;
    }
    else {
        nChislo++;
    }
}
console.log(mSumma);
//7
function fib(n) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(3);
//8
function NOD(A) {
    var n = A.length, x = Math.abs(A[0]);
    for (var i = 1; i < n; i++) {
        var y = Math.abs(A[i]);
        while (x && y) {
            x > y ? x %= y : y %= x;
        }
        x += y;
    }
    return x;
}
console.log(NOD([5, 0, 45]));
