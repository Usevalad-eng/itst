




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
   let b: number = 1000 ** 0.5; 
   let a: number = b;
   //let b: number = a * 4;
   console.log(a * 4);

   //2
let sideA: number = 4;
let sideB: number = 4;
let sideC: number = 5;
if (sideA == sideB && sideB == sideC) {
    console.log("равносторнний");
} else if (sideA != sideB && sideB != sideC && sideC != sideA) {
    console.log("разносторонний");
    
} else if (sideA == sideB || sideB == sideC || sideC ==sideA) {
    console.log("равнобедренный");
} else {
    console.log("не знаю");
}

//3
let sideAA: number = 4;
let sideBB: number = 4;
let sideCC: number = 5;
if (sideAA + sideBB > sideCC && sideAA + sideCC > sideBB && sideBB + sideCC > sideAA) {
    console.log("треугольник существует");
} else {
    console.log("треугольник не существует");
}

//4 
let vozrast: number = 10;
if (vozrast < 17) {
    console.log("молодой");
} else if (vozrast >= 17 && vozrast <= 69) {
    console.log("взрослый");
    
}  else {
    console.log("древний");
} 

//5
for (let i: number = 10; i < 21; i++) { 
    console.log(i * i);
  }

  //6
let nChislo: number = 1, mSumma: number = 0;
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
function fib(n: number) {
    let a: number = 1;
    let b: number = 1;
    for (let i: number = 3; i <= n; i++) {
      let c: number = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log(3);

  //8
  

/*
function NOK(A)
{   
    var  n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
     { var b = Math.abs(A[ i ]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = Math.abs(c*A[ i ])/(a+b);
     }
    return a;
}
// A - массив целых чисел (например, [-50,25,-45,-18,90,447])
*/
function NOD(A)
{   
    let n: number = A.length, x: number = Math.abs(A[0]);
    for (let i: number = 1; i < n; i++)
     { let y: number = Math.abs(A[ i ]);
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
     }
    return x;
}
console.log(NOD([5,0,45]));