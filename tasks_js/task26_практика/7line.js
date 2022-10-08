//линейный поиск

function fillArray(a, n){

    const min = 1, max = 100;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}



function linearSearch(value, list) {
    let found = false;
    let position = -1;
    let index = 0;
 
    while(found === false && index < list.length) {
        if(list[index] == value) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }
    return position;
}

let b = [];
b = fillArray(b, 10);
console.log(b);
//b = [2,72,11,22,22,22,4,0];
let position = linearSearch(72,b);
console.log(position);