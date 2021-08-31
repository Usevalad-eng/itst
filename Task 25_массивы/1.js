

/*let min = 1, max = 100, n = 10, a = [];
let k = 1;
for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min; 
}*/

/*
let c = [0,1,2,3,4,5,8,9,10,11];
let sum = 0;
n = 10;
for (let i = 1; i < n; i++){
    sum = (c[i] + sum) / n;

}
console.log(sum);*/

let min = 1, max = 100, n = 10, a = [];
function getMassive(a,n){
    
    
    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    return a;
}




d = a.length;

function getSumArray(a){
    let sum = 0;
   for (let i = 0; i < d; i++){
    sum = a[i] + sum;
} 
return sum;
}

b = [];
b = getMassive(b,10);
console.log(b);

let sum = getSumArray(b);
console.log(sum);



 

