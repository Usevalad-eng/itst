/*let a = [], b = [];
let value = 1;
let n = 5;
let i = 0;
let item = 0;
a.forEach(function(item,index,array) {
    while(a[i] < n){
    b.push(item + value);
    i++;
    }
});

console.log(b);*/

/*let b = [];
console.log(b.fill(5, 0));

let array1 = [];
console.log(array1.fill(5, 1));
Array(3).fill(4);
console.log(Array);

const arr = Array.from(Array(50).keys(0));
console.log(arr);*/
//let arr = [];
//let array1 = arr.fill(1, 10, 10);
//console.log(arr);
let a = [], n = 3, value = 3;
a.length = n;
let b = a.fill(value, 0, n);
console.log(b);
