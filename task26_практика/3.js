function fillArray(a, n){

    const min = 1, max = 100;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

function maxFromMassive(a){

let n = a.length;
let max = a[0];
for (let i = 1; i < n; i++){
    
    if (a[i] > max) {
    max = a[i];
    }

}
return max;
}


let b = [];
b = fillArray(b, 10);
console.log(b);

let max = maxFromMassive(b);
console.log(max);
