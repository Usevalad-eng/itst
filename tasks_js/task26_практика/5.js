function fillArray(a, n){

    const min = 1, max = 100;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

function _Array(a){

    let str = "";

    for(let i = 0; i < a.length; i++){
        str =  str + a[i] + ", ";
    }

    return str;
}

let b = [];
b = fillArray(b, 10);
console.log(b);
let str = _Array(b);
console.log(str);

