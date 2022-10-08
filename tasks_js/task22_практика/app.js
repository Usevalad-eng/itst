let sum = 0;
for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
      sum += i;  
      
    }
    
  }
  console.log( sum );

  
 /* let i = 2;
  while (i <= 100) && (i % 2 ==0) {
    sum += i;
    i++;
}
console.log( sum );*/

let n = 1000000, m = 0;


while (n != 1) {
    if (n % 2 == 0) {
        n = n / 2;

    }
    else {
        n = (n * 3 + 1) / 2;
    }
    m++;
}
console.log(m);


let i = 0, p = 0;
while (p != 51) {
    if (i % 7 == 0 && i % 5 != 0) {
        
        p++;
    }
    
    i++;
}
console.log(i - 1);

let q = 0, w = 0;
while (w <= 10) {
    if (q % 21 == 0 || q % 14 !=0) {
        w++;
        console.log(q);
    }
    q++;
}


let qq = "--------------------------------------------------------------------------------------"
console.log(qq);


//1
let sOfSquare = 4;
let pOfSquare = (sOfSquare ** 0.5) * 4;
console.log(pOfSquare);


//2
let sideA = 4;
let sideB = 4;
let sideC = 5;
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
let sideAA = 4;
let sideBB = 4;
let sideCC = 5;
if (sideAA + sideBB > sideCC && sideAA + sideCC > sideBB && sideBB + sideCC > sideAA) {
    console.log("треугольник существует");
} else {
    console.log("треугольник не существует");
}

//5
let number1 = 2;
let number2 = 3;
if ((number1 + number2) % 2 ==0) {
    console.log(number1 * number2);
} else {
    console.log(number1 / number2);
}

//6 
let vozrast = 10;
if (vozrast < 17) {
    console.log("молодой");
} else if (vozrast >= 17 && vozrast <= 69) {
    console.log("взрослый");
    
}  else {
    console.log("древний");
} 

//12
let nChislo = 1, mSumma = 0;
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


//13
for (let i = 10; i < 21; i++) { 
    console.log(i * i);
  }

//15
let pChislo = 10, mProizv = 1;
while (pChislo >= 10 && pChislo <=20 && pChislo != 0) {
    if (pChislo % 13 == 0) {
        mProizv *= pChislo;
        pChislo++;
    }
    else {
        pChislo++;
    }
    
}
console.log(mProizv); 

//14
let N = 12;//сенокосилки
let I = 0;//cчетчик
let mm = 0;//количество минут
while (I < N) {
    I++;
    mm += 10;
}

console.log((mm * N) / 60);//выводим в часах

//7 - окружность в круг
d = 10;//диагональ
r = 4;//радиус
if ((2 * r) < d) {
    console.log("mozhno")
} else {
    console.log("nelzia")
}
//круг в окружность
if ((2 * r) ** 2 <= (d * d + d * d)) {
    console.log("mozhno");
}
else {
    console.log("nelzia");
}
//18
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log(3);

