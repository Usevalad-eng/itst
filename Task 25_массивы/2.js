
let min = 1, max = 100, n = 10, a = [];
function getMassive(a,n){
    
    
    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    return a;
}
//function get(a)
b = [];
b = getMassive(b,10);
console.log(b);



function get(a){
    let sum = 0;
    for (i = 0; i < n; i++) {
    if (a[i] % 2 == 0) {
    a[i] = a[i] * 2;
    sum = a;
}
    }
    return sum;
}
let sum = get(b);
console.log(sum);


