//оставляет только уникальные значения

let a = [1,3,6,4,3,3,5,6];



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



let b = [];
b = uniqueArray(a);
console.log(b);