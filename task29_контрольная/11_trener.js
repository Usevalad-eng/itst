//если делится на два умножаем на два 

function fillArray(a, n){

    const min = 1, max = 10;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

function changeArray(a){
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            a[i] *= 2;
        }
    }

    return a;
}

mas = [];
s = fillArray(mas, 20);
console.log(s);
m = changeArray(s);
console.log(m);