//бинарный поиск без сортировки

function fillArray(a, n){

    const min = 1, max = 100;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

//cортировка по возрастанию 
//b.sort(function(a, b){return b = a - b});





function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}

let b = [];
b = fillArray(b, 10);
console.log(b);


//let points = [];
//b = points;//cортировка по возрастанию 
//console.log(points);
//points = b;

let position = binarySearch(72,b);
console.log(position);