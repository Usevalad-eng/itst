/* let a = [0,1,2,3,4,5,8,9,10,10];
console.log(a[4]);
let b = Array(0,1,2,3,4,5);
console.log(b[4]);
b[6] = 6;
let c = [];
c[78] = "sdf";
c[79] = 34;
c[80] = false;
c[44] = [];
console.log(a.length, b.length, c.length, c[0]);
x = c[7] + a[0];


const min = 1, max = 100, n = 10;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let str = "";
for(let i = 0; i < n; i++){
    str =  str + a[i] + ", ";
}
console.log(str); */



/*console.log("_____________");
let bb = [0,1,2,3,4,5,8,9,10,11];
let minn = 1, maxx = 10, n = 10;
let count = 0;
for(let i = 0; i < n; i++){
    bb[i] = Math.floor(Math.random() * (maxx - minn + 1)) + minn;
    if (bb[i] % 2 == 0) {
    count++;
    }
    
}
console.log(count);*/


//1 максимальный элемент массива 
let b = [0,1,2,3,4,5,8,9,10,11];
let n = 10;
let i = 1;
max = b[i];
for (let i = 1; i < n; i++){
    
    if (b[i] > max) {
    max = b[i]
    }

}


//2 - сумма элементов массива 
console.log("_____________");
//2
let c = [0,1,2,3,4,5,8,9,10,11];
let sum = 0;
n = 10;
for (let i = 1; i < n; i++){
    sum = (c[i] + sum) / n;

}
console.log(sum);

//3 - реверс
let d = [0,1,2,3,4,5,8,9,10,11];
let nn = 0;
for (let ii = 10; ii >= nn; ii--)
console.log(d[ii]);