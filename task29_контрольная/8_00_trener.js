//оставляет только уникальные значения



function fillArray(a, n){

    const min = 1, max = 100;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}


function searchElementInArray(a,x){

    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
            return true;
        }
    }   
    
    return false;
}


function uniqueArray(a){

    let b = [], j = 0;

    for(let i = 0; i < a.length; i++){
        if(searchElementInArray(b, a[i]) == false){
            b[j] = a[i];
            j++;
        }
    }  

    return b;
}


let a = [];
a = fillArray(a, 10);
console.log(a);


b = uniqueArray(a);
console.log(b);