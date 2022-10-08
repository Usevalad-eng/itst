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
